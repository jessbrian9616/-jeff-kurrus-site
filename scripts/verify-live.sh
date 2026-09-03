#!/usr/bin/env bash
# =============================================================================
# verify-live.sh - proves jeffkurrus.com is actually working, from the outside.
#
# WHY THIS EXISTS
# On 2026-09-01 the site began rendering a blank white page on phones. Nothing
# errored, nothing spun, and no alarm went off. It was found two days later by
# family members trying to open it. This script is the alarm.
#
# It checks the one thing that actually broke - whether the HTML shell points
# at app files that really exist and really return JavaScript - plus guards
# against the exact cache header that made the failure permanent.
#
# HOW TO RUN IT BY HAND
#   bash scripts/verify-live.sh
#
# It also runs automatically: after every push, and every six hours, via
# .github/workflows/site-verify.yml. A failure emails the repo owner.
#
# Exit code 0 = healthy. Exit code 1 = something is broken, details above.
# =============================================================================

set -uo pipefail

SITE="${SITE_URL:-https://www.jeffkurrus.com}"
UA_MOBILE="Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36"
FAILURES=0
CHECKS=0
FAILLOG="$(mktemp)"

pass() { CHECKS=$((CHECKS + 1)); printf '  PASS  %s\n' "$1"; }
fail() {
  CHECKS=$((CHECKS + 1)); FAILURES=$((FAILURES + 1))
  printf '  FAIL  %s\n' "$1"
  printf '%s\n' "$1" >> "$FAILLOG"
}
head2() { printf '\n%s\n' "$1"; }

fetch() { curl -sS --max-time 30 -A "$UA_MOBILE" "$@"; }

printf '=====================================================\n'
printf 'Live site verification: %s\n' "$SITE"
printf 'Run at: %s\n' "$(date -u '+%Y-%m-%d %H:%M:%S UTC')"
printf '=====================================================\n'

# --- 1. The HTML shell loads -------------------------------------------------
head2 "1. The homepage itself"

HOME_HTML="$(fetch "$SITE/")"
HOME_CODE="$(fetch -o /dev/null -w '%{http_code}' "$SITE/")"

if [ "$HOME_CODE" = "200" ]; then
  pass "homepage returns 200"
else
  fail "homepage returned $HOME_CODE, expected 200"
fi

if [ ${#HOME_HTML} -gt 1000 ]; then
  pass "homepage HTML is ${#HOME_HTML} bytes (not an empty or error page)"
else
  fail "homepage HTML is only ${#HOME_HTML} bytes - too small to be the real page"
fi

if printf '%s' "$HOME_HTML" | grep -q '<div id="root">'; then
  pass "the app mount point is present"
else
  fail "the app mount point (<div id=\"root\">) is missing from the HTML"
fi

if printf '%s' "$HOME_HTML" | grep -q 'id="boot-fallback"'; then
  pass "the boot safety net is deployed (visitors never see a blank page)"
else
  fail "the boot safety net is MISSING - a load failure would show a blank white page"
fi

# --- 2. Unreplaced build placeholders ---------------------------------------
head2 "2. No broken build placeholders in the HTML"

if printf '%s' "$HOME_HTML" | grep -q '%VITE_'; then
  fail "an unreplaced %VITE_...% placeholder is live in the HTML"
else
  pass "no unreplaced build placeholders"
fi

# --- 3. THE BIG ONE: every app file the HTML asks for must be real -----------
# This is the check that would have caught the September 2026 white screen.
head2 "3. Every app file the page loads returns real code (not HTML)"

ASSETS="$(printf '%s' "$HOME_HTML" \
  | grep -oE '(src|href)="/assets/[^"]+"' \
  | sed -E 's/^(src|href)="//; s/"$//' \
  | sort -u)"

if [ -z "$ASSETS" ]; then
  fail "the HTML references no /assets/ files at all - the build output is wrong"
else
  while IFS= read -r path; do
    [ -z "$path" ] && continue
    code="$(fetch -o /dev/null -w '%{http_code}' "$SITE$path")"
    ctype="$(fetch -o /dev/null -w '%{content_type}' "$SITE$path")"

    case "$path" in
      *.js)
        if [ "$code" = "200" ] && printf '%s' "$ctype" | grep -qi 'javascript'; then
          pass "$path serves JavaScript"
        else
          fail "$path returned $code as '$ctype' - the browser cannot run this. THIS IS THE WHITE-SCREEN BUG."
        fi
        ;;
      *.css)
        if [ "$code" = "200" ] && printf '%s' "$ctype" | grep -qi 'css'; then
          pass "$path serves CSS"
        else
          fail "$path returned $code as '$ctype' - the page will load unstyled."
        fi
        ;;
      *)
        if [ "$code" = "200" ]; then pass "$path returns 200"; else fail "$path returned $code"; fi
        ;;
    esac
  done <<<"$ASSETS"
fi

# --- 4. Regression guard: no permanent caching on code files ----------------
head2 "4. No app file is cached in a way that could freeze a broken copy"

while IFS= read -r path; do
  [ -z "$path" ] && continue
  CC="$(fetch -o /dev/null -D- "$SITE$path" | grep -i '^cache-control:' | tr -d '\r')"
  if printf '%s' "$CC" | grep -qi 'immutable'; then
    fail "$path is served 'immutable' - a bad copy would stick for up to a year and survive reloads"
  else
    pass "$path is revalidatable ($(printf '%s' "$CC" | cut -c1-60))"
  fi
done <<<"$ASSETS"

# --- 5. Regression guard: a missing code file must not be cached long -------
head2 "5. A missing app file cannot poison the cache"

GHOST="/assets/verify-probe-does-not-exist-$(date +%s).js"
GHOST_CC="$(fetch -o /dev/null -D- "$SITE$GHOST" | grep -i '^cache-control:' | tr -d '\r')"

if printf '%s' "$GHOST_CC" | grep -qiE 'immutable|max-age=[0-9]{4,}'; then
  fail "a missing .js path is cached long-term ($GHOST_CC) - this is the exact cache-poisoning bug"
else
  pass "a missing .js path is not cached long-term ($(printf '%s' "$GHOST_CC" | cut -c1-60))"
fi

# --- 6. Every page of the site answers --------------------------------------
head2 "6. Every page of the site responds"

for route in / /books /school-visits /about /photography /news /contact /activity-pack; do
  code="$(fetch -o /dev/null -w '%{http_code}' "$SITE$route")"
  if [ "$code" = "200" ]; then pass "$route returns 200"; else fail "$route returned $code"; fi
done

# --- 7. The plain domain still forwards to www ------------------------------
head2 "7. jeffkurrus.com forwards to www.jeffkurrus.com"

APEX="$(fetch -o /dev/null -w '%{http_code}' https://jeffkurrus.com/)"
if [ "$APEX" = "301" ] || [ "$APEX" = "308" ]; then
  pass "jeffkurrus.com redirects ($APEX)"
else
  fail "jeffkurrus.com returned $APEX, expected a redirect"
fi

# --- 8. Security headers still in place -------------------------------------
head2 "8. Security headers still in place"

HEADERS="$(fetch -o /dev/null -D- "$SITE/")"
for h in "content-security-policy" "x-content-type-options" "x-frame-options"; do
  if printf '%s' "$HEADERS" | grep -qi "^$h:"; then pass "$h present"; else fail "$h MISSING"; fi
done

# --- Plain-language summary -------------------------------------------------
# Added 2026-09-04. When this runs inside GitHub Actions, GITHUB_STEP_SUMMARY
# points at a file whose contents render as the run's summary page - the page
# the "View workflow run" button in the failure email lands on.
#
# WHY: GitHub's failure email says only "Some jobs were not successful." Jess
# received two on 2026-09-03 and could not tell from the email whether anything
# was actually wrong. An alarm that cannot be read without investigating is
# half an alarm. This turns the landing page into plain English.
#
# Testable locally: GITHUB_STEP_SUMMARY=/tmp/s.md bash scripts/verify-live.sh

# Translate a technical failure line into something readable at 10pm.
plain() {
  case "$1" in
    *"WHITE-SCREEN BUG"*)   echo "**The site is serving a broken app file. Visitors will see a blank page.** This is the September 2026 bug. Most likely a caching rule was changed back." ;;
    *"immutable"*)          echo "**A caching rule was re-added that caused the September 2026 outage.** A broken copy could get stuck in phones for up to a year. Check the \`_headers\` file and the Cloudflare Browser Cache TTL setting." ;;
    *"cache-poisoning"*)    echo "**Cloudflare is caching missing files long-term again.** Check Caching -> Configuration -> Browser Cache TTL is still on \"Respect Existing Headers\"." ;;
    *"safety net"*)         echo "**The blank-page safety net is gone.** A failed load would show a white screen with no message and no way to reach Jeff." ;;
    *"placeholder"*)        echo "**An unfinished piece of code is live on the site.**" ;;
    *"unstyled"*)           echo "**The site's styling file is broken.** Pages will load looking wrong." ;;
    *"returned"*)           echo "**A page of the site is not responding properly:** \`$1\`" ;;
    *"redirect"*)           echo "**jeffkurrus.com is no longer forwarding to www.jeffkurrus.com.**" ;;
    *"MISSING"*)            echo "**A security header is missing:** \`$1\`" ;;
    *)                      echo "$1" ;;
  esac
}

if [ -n "${GITHUB_STEP_SUMMARY:-}" ]; then
  {
    if [ "$FAILURES" -eq 0 ]; then
      echo "# The website is working"
      echo
      echo "All $CHECKS checks passed. **Nothing to do.**"
    else
      echo "# Something is wrong with jeffkurrus.com"
      echo
      echo "$FAILURES of $CHECKS checks failed. **In plain language:**"
      echo
      while IFS= read -r line; do
        [ -z "$line" ] && continue
        echo "- $(plain "$line")"
      done < "$FAILLOG"
      echo
      echo "## What to do"
      echo
      echo "1. Open the site on a phone and see whether it loads."
      echo "2. Paste this whole page to Claude in the Jeff-Kurrus project and say the site check failed."
      echo "3. Background and history: \`04_SYSTEMS/INCIDENT_2026-09-02_MOBILE-WHITE-SCREEN_root-cause-and-permanent-fix.md\`"
      echo
      echo "<details><summary>The exact technical failures</summary>"
      echo
      echo '```'
      cat "$FAILLOG"
      echo '```'
      echo
      echo "</details>"
    fi
    echo
    echo "---"
    echo "Checked \`$SITE\` at $(date -u '+%Y-%m-%d %H:%M UTC') as an Android phone."
  } >> "$GITHUB_STEP_SUMMARY"
fi

rm -f "$FAILLOG"

# --- Result -----------------------------------------------------------------
printf '\n=====================================================\n'
if [ "$FAILURES" -eq 0 ]; then
  printf 'RESULT: HEALTHY - %d checks, 0 failures.\n' "$CHECKS"
  printf '=====================================================\n'
  exit 0
else
  printf 'RESULT: BROKEN - %d checks, %d FAILURES (listed above).\n' "$CHECKS" "$FAILURES"
  printf '=====================================================\n'
  exit 1
fi
