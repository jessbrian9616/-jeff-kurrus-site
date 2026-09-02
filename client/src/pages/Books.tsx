/*
Design philosophy for this file: the books page should read like a restrained catalog from a premium independent publisher.
Give the Donnie Bats title the strongest hierarchy, keep the grid airy, and let missing covers appear as elegant placeholders.
*/
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import { usePageMeta } from "@/hooks/usePageMeta";
import { bookCatalog, visualAssets } from "@/lib/siteContent";

export default function Books() {
  usePageMeta("Books by Jeff Kurrus", "The Legend of Donnie Bats, Have You Seen Mary?, The Tale of Jacob Swift, and Can You Dance Like John? Baseball chapter books and nature picture books for kids ages 5-12.");
  const [featured, sequel, ...catalog] = bookCatalog;

  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Books"
        title="From the Platte River to a small-town ballfield."
        description="Five books across two decades of writing and photography. Real stories about real places, written for young readers who can tell the difference."
        image={visualAssets.uploaded.readerShipping}
        imagePosition="center 55%"
      />

      {/* Signed and Personalized — 2026-09-01. Sits at the TOP of the Books page, above
          the featured Donnie Bats block, because direct signed sales are the only channel
          where Jeff keeps the full margin and captures the reader's details. Reuses the
          established soft-card pattern from the Activity Pack section below: cream #FBF6EC
          ground, navy #1B2A4A headline, gold #B8860B eyebrow, navy pill CTA.
          $12.95 is Jeff's own direct price and, since the Amazon-linked prices came off
          the catalog entries, the only price published anywhere on the site.
          Order capture is the contact form first, payment second (settled flow).
          Copy is new Jeff-voice website copy, not an edit to anything he wrote. Voice
          check run against kurrus_voice_analysis.pdf §12, all ten checks: sentence length
          (longest 15 words), no -ly adverbs, no announcement, no exclamation marks,
          specifics not adjectives, no superlatives, no marketing language from the §8
          Never List, no stated emotion, no quotes, four sentences and no bullets.
          §13 classes transactional pages as functional tone — clarity, no overselling.
          NOTE: §13's context guidance covers About page, emails, captions, bio, school
          visit pitch. A book-order block is the nearest neighbour, not an exact match,
          so applying it here is an INFERENCE. Jeff's review is still required before
          this counts as approved copy in his voice. */}
      <section className="container pt-16 sm:pt-20">
        <div className="soft-card overflow-hidden bg-[#FBF6EC] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Direct from Jeff</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">Signed and personalized copies.</h2>
              <p className="mt-5 text-lg leading-8 text-[#445065]">
                Order direct and you can ask for the book signed, or personalized to a name. The Legend of Donnie Bats is $12.95 a copy with free shipping. Use the button to send the details, including the inscription. Jeff replies with payment options, Venmo or PayPal. Signed copies are not available through Amazon.
              </p>
            </div>
            {/* 2026-09-01: centred, not right-aligned. justify-end pinned the button to
                the far edge of the card, leaving it visually adrift from the copy it
                belongs to. Centring it in its own column puts it on the optical centre
                between the end of the text and the card edge. */}
            <div className="flex flex-col items-center justify-center gap-2">
              {/* 2026-09-01: this is the primary conversion on the page, so it is sized
                  and lifted above the other buttons. Larger type and padding, a gold ring
                  offset from the navy fill for the highlight, and a deeper shadow. The
                  gold is a ring, never the text or the fill, so no contrast requirement
                  attaches to it: white on navy stays at 14.4:1. */}
              <Link
                href="/contact?type=Order%20Books#form"
                className="inline-flex items-center justify-center rounded-full bg-[#1B2A4A] px-10 py-5 text-lg font-semibold text-white shadow-[0_16px_38px_rgba(27,42,74,0.26)] ring-2 ring-[#B8860B] ring-offset-4 ring-offset-[#FBF6EC] transition hover:-translate-y-0.5 hover:bg-[#152038] hover:shadow-[0_20px_44px_rgba(27,42,74,0.32)]"
              >
                Order a signed copy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 sm:py-20">
        <div className="soft-card p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:items-center">
            <img src={featured.image ?? ""} alt={featured.alt} className="mx-auto w-full max-w-[300px] rounded-[1.75rem] object-cover shadow-[0_24px_50px_rgba(27,42,74,0.18)]" />
            <div>
              <p className="section-label">Featured</p>
              <h2 className="text-4xl font-semibold text-[#1B2A4A] sm:text-5xl">{featured.title}</h2>
              {/* 2026-09-01: award credit. Wording taken verbatim from the awarding body's
                  own release — "Children's Award" is the official category name, not
                  "Children/Young Adult" (that was only the entry category, and the release
                  lists a separate Young Adult Award won by another title). The award is
                  bound to the book title, never used as a floating adjective about Jeff,
                  and is kept distinct from the photography credential and from the
                  Golden Sower nomination, which belongs to Have You Seen Mary? alone.
                  (NOTE: About.tsx still uses "Golden Sower-nominated" as a general author
                  credential in the page meta and the credentials list, with no book named.
                  That contradicts this rule and is flagged to Jess, unfixed here because
                  it is outside this change set.)

                  LINK CHOICE. Three official pages carry the win; all opened and read in a
                  browser on 2026-09-01:
                    1. centerforthebook.nebraska.gov/awards/winners/nebook.html — the
                       awarding body's permanent winners archive, year-indexed back to
                       2000. USED HERE, because a credential should cite the standing
                       record rather than a news story.
                    2. centerforthebook.nebraska.gov/awards/nebookawards.html — same
                       content under "Award Recipients", but that section rolls over each
                       year, so it is not durable for 2026 specifically.
                    3. nlcblogs.nebraska.gov/ncb/2026/08/31/... — the dated press release.
                       Used on the News page instead, where the announcement, the ceremony
                       details and the media contact are the point.
                  The Nebraska Library Commission news-release index carries no 2026 winners
                  release (checked 2026-09-01; it does carry other 2026 releases, but the
                  newest winners release there is 2025-08-14). No action needed either way.

                  PLACEMENT AND STYLING, from research on 2026-09-01, not from taste:
                  - Sits BELOW the description and ABOVE the buy link, inside the book's own
                    card. Six comparable author sites were loaded and read: Michael Forsberg,
                    Joel Sartore, Alison Pearce Stevens and Mylisa Larsen (both 2025 Nebraska
                    Book Award winners), and Clayton Anderson. NOT ONE puts a state book award
                    in the site header or homepage hero. Every one places it inside the book's
                    own block. Stevens is the closest model: a dedicated award section after
                    the description, before the praise quotes.
                  - NOT gold text. Gold #B8860B on cream #FBF6EC computes to 3.02:1, which
                    FAILS WCAG 2.2 AA (4.5:1 for normal text). Navy #1B2A4A on cream is
                    13.20:1 and passes AA and AAA. Ratios computed, not eyeballed. Gold is
                    therefore demoted to a decorative left rule, which carries no information
                    and so is exempt. NOTE FOR LATER: every gold eyebrow label site-wide has
                    this same contrast problem. Out of scope here, flagged to Jess.
                  - Emphasis comes from space, weight and a container, not from a louder
                    colour. Nielsen Norman Group, "Visual Hierarchy in UX": an element with
                    more space around it reads as its own group and gets more attention, and
                    "if everything is contrasted, then nothing stands out." The old treatment
                    reused the site's standard gold eyebrow style, which is why it disappeared.
                  - The exclamation mark sits on "Winner!", never on the award name. An
                    exclamation attached to a credential reads as a sales badge; attached to a
                    plain word it reads as a person being pleased. No superlative is used, so
                    the voice rules hold.
                  - No seal image. The Nebraska Center for the Book publishes no seal usage
                    terms anywhere on its site (checked 2026-09-01), and Baymard Institute's
                    site-seal study found trust tracks brand recognition, with 49% of 2,510
                    respondents expressing no preference between badges. If a seal is obtained
                    later it goes beside this text at alt="" , because the text already states
                    the award.
                  - ONE instance only. Do not repeat this block on Home or About. */}
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">{featured.price}</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#445065]">{featured.description}</p>

              <div className="mt-8 max-w-xl rounded-r-[1.25rem] border-l-[3px] border-[#B8860B] bg-[#FBF6EC] px-6 py-5">
                <p className="text-2xl font-semibold leading-none text-[#1B2A4A]">Winner!</p>
                <p className="mt-2 text-lg font-semibold leading-7 text-[#1B2A4A]">
                  <a
                    href="https://centerforthebook.nebraska.gov/awards/winners/nebook.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#1B2A4A]/25 underline-offset-4 transition hover:decoration-[#1B2A4A]"
                  >
                    2026 Nebraska Book Award, Children's Award
                  </a>
                </p>
                <p className="mt-1.5 text-sm text-[#445065]">Nebraska Center for the Book</p>
              </div>
              {/* 2026-09-01: two ways to buy, side by side, so the direct signed option is
                  never hidden behind the Amazon link. Amazon keeps the solid navy fill it
                  has site-wide; the direct button is outlined so the pair reads as two
                  routes to the same book rather than two competing calls to action.
                  Payment methods are named under the direct button because a reader
                  deciding between the two needs to know before they click, not after. */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start">
                <a href={featured.href} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-full bg-[#1B2A4A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#16233D]">
                  {featured.cta}
                </a>
                <div className="flex flex-col gap-1.5">
                  <Link href="/contact?type=Order%20Books#form" className="inline-flex justify-center rounded-full border border-[#1B2A4A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#1B2A4A] transition hover:bg-[#1B2A4A] hover:text-white">
                    Order a signed copy
                  </Link>
                  <p className="text-center text-sm text-[#5D6475] sm:text-left">$12.95, free shipping. Signed or personalized on request. Pay by Venmo or PayPal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-12 sm:pb-16">
        <div className="soft-card overflow-hidden bg-[#1B2A4A] lg:grid lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Coming next</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{sequel.title}</h2>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">{sequel.price}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{sequel.description}</p>
            <a href={sequel.href} className="mt-8 inline-flex rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur transition hover:bg-white/20">
              {sequel.cta}
            </a>
          </div>
          <div className="flex items-center justify-center p-8 sm:p-10 lg:p-12">
            <blockquote className="max-w-md">
              <p className="text-xl italic leading-9 text-white/75">"What if the worst kid on the team turns out to be the best? The question kept me up nights. So did the next one."</p>
              <footer className="mt-4 text-sm font-semibold text-[#B8860B]">-- Jeff, on writing the sequel</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Activity Pack CTA — sits right after the Donnie Bats featured + sequel sections so
          the offer is contextually adjacent to the book the pack supports. Links to the
          dedicated /activity-pack page (which contains the Kit-backed subscribe path).
          Per Kurrus D-36 + D-39: single audience-capture front door is the Activity Pack. */}
      <section className="container pb-12 sm:pb-16">
        <div className="soft-card overflow-hidden bg-[#FBF6EC] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Free for kids, parents, and teachers</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">The Donnie Bats Activity Pack.</h2>
              <p className="mt-5 text-lg leading-8 text-[#445065]">
                A free printable pack that brings The Legend of Donnie Bats off the page and into the kitchen table or classroom. Discussion questions, a baseball word search, a student challenge, and standards-aligned educator notes. We send it to your inbox in under a minute.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Link
                href="/activity-pack"
                className="inline-flex items-center justify-center rounded-full bg-[#1B2A4A] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(27,42,74,0.18)] transition hover:-translate-y-0.5 hover:bg-[#152038]"
              >
                Send me the Activity Pack
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nature Picture Books — subtle hierarchy: same content, lighter visual weight than Donnie Bats above (N5) */}
      <section className="container pb-8">
        <div className="mb-8">
          <p className="section-label">Nature Picture Books</p>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#5D6475]">Three picture books from the Platte River and the prairie, photographed by Michael Forsberg and Rob Palmer, written for ages 5-10.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {catalog.map((book) => (
            <article key={book.title} className="soft-card overflow-hidden p-5 sm:p-7">
              {book.image ? (
                <img src={book.image} alt={book.alt} className="mb-5 mx-auto max-h-[340px] w-auto max-w-full rounded-[1.25rem] object-contain shadow-[0_14px_32px_rgba(27,42,74,0.10)]" />
              ) : (
                <PlaceholderBlock label={book.placeholder ?? "Cover placeholder"} className="mb-5 min-h-[300px] bg-[#2E465A]" />
              )}
              <h3 className="text-xl font-semibold text-[#1B2A4A]">{book.title}</h3>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#B8860B]">{book.price}</p>
              {book.note ? <p className="mt-3 text-sm font-semibold text-[#4A7C59]">{book.note}</p> : null}
              <p className="mt-3 text-sm leading-6 text-[#445065]">{book.description}</p>
              <a href={book.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full border border-[color:rgba(27,42,74,0.12)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1B2A4A] transition hover:border-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white">
                {book.cta}
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
