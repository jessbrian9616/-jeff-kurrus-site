import { useEffect } from "react";

const CANONICAL_BASE = "https://www.jeffkurrus.com";

/**
 * Sets per-page document title, meta description, and canonical URL for SEO.
 * Falls back to site defaults when component unmounts.
 */
/**
 * noindex (2026-09-01): for the not-found page only.
 *
 * THE PROBLEM IT SOLVES. This is a single-page app, so Cloudflare serves index.html
 * with HTTP 200 for every URL, including ones that do not exist. Worse, this hook was
 * writing a SELF-REFERENCING CANONICAL on every page, so a junk URL was telling Google
 * "https://www.jeffkurrus.com/whatever-typo is the canonical version of this page."
 * The site was actively inviting nonsense URLs into the index.
 *
 * WHY noindex RATHER THAN A REAL 404 STATUS. Google Search Central, under "Avoid soft
 * 404 errors in single-page apps," gives exactly two sanctioned strategies, and this is
 * one of them: "Add a <meta name="robots" content="noindex"> to error pages using
 * JavaScript." A true 404 status is NOT required. On a Cloudflare Pages SPA, forcing a
 * real 404 means adding a top-level 404.html, which Cloudflare documents as switching
 * OFF the automatic SPA fallback, which in turn means every route must be listed by hand
 * in _redirects, including duplicate trailing-slash forms. That trades a small indexing
 * nit for a permanent maintenance trap where a forgotten route 404s for real visitors.
 * Not worth it on an eight-page site. Verified against Cloudflare's and Google's own
 * current documentation on 2026-09-01.
 */
export function usePageMeta(title: string, description?: string, options?: { noindex?: boolean }) {
  const noindex = options?.noindex === true;
  useEffect(() => {
    const defaultTitle = "Jeff Kurrus | Children's Book Author, School Visits & Senior Photography | Gretna, Nebraska";
    const defaultDesc = "Jeff Kurrus writes baseball chapter books for kids, leads K-8 writing workshops across Nebraska, and photographs seniors in Gretna and Omaha.";

    document.title = `${title} | Jeff Kurrus`;

    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
    }

    // Update canonical link to match current page.
    // On a noindex page the href is REMOVED rather than pointed anywhere. A canonical
    // claiming the junk URL is real is the bug; a canonical pointing at the homepage
    // would be a different lie (it would claim the 404 is a duplicate of the homepage).
    // A <link rel="canonical"> with no href is ignored. The element itself is kept so
    // the next page navigated to can set its href again.
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (noindex) {
        canonical.removeAttribute("href");
      } else {
        const path = window.location.pathname === "/" ? "/" : window.location.pathname;
        canonical.setAttribute("href", `${CANONICAL_BASE}${path}`);
      }
    }

    // robots noindex, added and removed with the page so it can never leak onto a real one
    let robotsTag: HTMLMetaElement | null = null;
    if (noindex) {
      robotsTag = document.querySelector('meta[name="robots"]');
      if (!robotsTag) {
        robotsTag = document.createElement("meta");
        robotsTag.setAttribute("name", "robots");
        document.head.appendChild(robotsTag);
      }
      robotsTag.setAttribute("content", "noindex");
    }

    // Update og:url to match current page
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      const path = window.location.pathname === "/" ? "/" : window.location.pathname;
      ogUrl.setAttribute("content", `${CANONICAL_BASE}${path}`);
    }

    return () => {
      document.title = defaultTitle;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", defaultDesc);
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute("href", `${CANONICAL_BASE}/`);
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", `${CANONICAL_BASE}/`);
      // Take the noindex away when leaving the 404, so navigating from it to a real
      // page cannot leave that page telling Google not to index it.
      if (robotsTag && robotsTag.parentNode) robotsTag.parentNode.removeChild(robotsTag);
    };
  }, [title, description, noindex]);
}
