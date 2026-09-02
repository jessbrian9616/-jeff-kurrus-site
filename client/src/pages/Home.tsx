/*
Design philosophy for this file: lead with restraint and authority.
The home page should feel like a premium landing sequence for adults making decisions, with strong book visuals, quiet social proof, and generous white space.
*/
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";
import { visualAssets } from "@/lib/siteContent";

export default function Home() {
  usePageMeta("Children's Book Author & Photographer in Gretna, Nebraska", "Jeff Kurrus writes baseball chapter books for kids, leads K-8 writing workshops across Nebraska, and photographs seniors in Gretna and Omaha.");
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Home"
        title="Books for kids who'd rather be outside."
        description="Jeff Kurrus writes children's books shaped by natural landscapes, baseball diamonds, and years spent paying attention behind the camera."
        image={visualAssets.jkPhotography.heroFishermanSunrise}
        imagePosition="center center"
        actions={
          <>
            <Link href="/books">
              <Button className="rounded-full bg-[#4A7C59] px-7 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#3C6648]">
                Get the Book
              </Button>
            </Link>
            <Link href="/school-visits#book">
              <Button variant="outline" className="rounded-full border-[color:rgba(255,255,255,0.35)] bg-white/10 px-7 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur hover:bg-white/18">
                Book an Author Visit
              </Button>
            </Link>
          </>
        }
      />

      <section className="container py-16 sm:py-20">
        <div className="editorial-grid">
          <div className="soft-card p-6 sm:p-8 lg:p-10">
            <p className="section-label">Featured book</p>
            <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:items-center">
              <img
                src={visualAssets.uploaded.donnieBats}
                alt="The Legend of Donnie Bats book cover by Jeff Kurrus"
                className="mx-auto w-full max-w-[260px] rounded-[1.5rem] object-cover shadow-[0_24px_40px_rgba(27,42,74,0.18)]"
              />
              <div>
                <h2 className="text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">The Legend of Donnie Bats</h2>
                {/* 2026-09-01: Amazon-linked price removed. Amazon sets its own price;
                    the only price published on the site is Jeff's own $12.95 direct
                    price in the Signed and Personalized section of the Books page. */}
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">Ages 7-12</p>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#445065]">
                  Donnie Bats loves baseball. He just can't hit, throw, or catch. A chapter book for every kid who has ever been the worst player on the team.
                </p>
                <a href="https://www.amazon.com/Legend-Donnie-Bats-Greatness-Lives/dp/0991638921/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#1B2A4A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#16233D]">
                  Buy on Amazon
                </a>
              </div>
            </div>
          </div>
          <div className="soft-card overflow-hidden">
            <div className="h-full min-h-[360px] bg-[#F3F0E7] p-6 sm:p-8" style={{ backgroundImage: `linear-gradient(180deg, rgba(255,251,244,0.76), rgba(255,250,242,0.94)), url(${visualAssets.uploaded.bookReleaseComing})`, backgroundSize: "cover", backgroundPosition: "center" }}>
              <p className="section-label">Coming next</p>
              <h2 className="max-w-sm text-3xl font-semibold text-[#1B2A4A]">The Return of Donnie Bats</h2>
              {/* 2026-09-01: date reference removed. Book 2 has no announced release date. */}
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">Coming Soon!</p>
              <p className="mt-6 max-w-sm text-lg leading-8 text-[#445065]">More heart. More humor. More ballfield trouble.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-12 sm:pb-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="soft-card p-8 sm:p-10">
            <p className="section-label">Recognition</p>
            <blockquote className="text-2xl font-semibold leading-[1.3] text-[#1B2A4A] sm:text-3xl">
              Jeff Kurrus's words and Michael Forsberg's photographs are teamed here to bring us a remarkable story.
            </blockquote>
            <p className="mt-6 text-base font-semibold text-[#1B2A4A]">Joel Sartore, founder of National Geographic Photo Ark</p>
            <p className="mt-1 text-base text-[#526077]">on Have You Seen Mary?</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Golden Sower Award nominee. 25,000+ books in readers' hands.</p>
          </div>
          <div className="soft-card p-8 sm:p-10">
            <p className="section-label">About Jeff</p>
            <div className="space-y-5 text-lg leading-8 text-[#445065]">
              <p>
                I grew up catching fish and writing stories in the woods outside Memphis. Today I edit Nebraskaland Magazine and photograph the landscapes, wildlife, and people of Nebraska.
              </p>
              <p>
                My books start with questions I can't let go of. What happens when two cranes lose each other during migration? What if the worst kid on the team turns out to be the best?
              </p>
            </div>
            <Link href="/about" className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[#4A7C59]">
              Read more
            </Link>
          </div>
        </div>
      </section>

      {/* Mitch Kampbell endorsement — character-level testimonial from a regionally
          credible voice (President of Millard United, large Omaha-metro youth sports org).
          Placed just before the educators block so the closing line ("a connector who
          builds real, lasting relationships with kids") flows directly into the school
          visits CTA. Quote text is verbatim from Mitch — line breaks in the opening
          professions stanza are preserved per his original cadence. Do not edit the words.

          Layout: full-width single column for natural left-to-right reading, contained
          to max-w-3xl (~65ch) for optimal line length per typography best practice for
          long-form prose. Tightened type sizing and paragraph spacing reduce vertical
          height vs. the prior version while keeping the quote scannable and dignified.
          Container uses a cream callout with faint gold border and subtle shadow —
          distinctive but not overstated. Attribution is prominent: bold name at body+1,
          role at body in green for hierarchy, separated from the quote by a gold rule. */}
      <section className="container pb-12 sm:pb-16">
        <figure className="rounded-[1.75rem] border border-[#C5943A]/25 bg-[#FBF6EC] px-7 py-10 shadow-[0_2px_24px_rgba(27,42,74,0.05)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C5943A]" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5943A]">Endorsement</p>
            </div>
            <div className="relative mt-6">
              <span aria-hidden="true" className="pointer-events-none absolute -left-2 -top-8 select-none font-serif text-[120px] leading-none text-[#1B2A4A]/[0.10] sm:-left-4 sm:-top-10 sm:text-[140px]">&ldquo;</span>
              <blockquote className="relative space-y-3 text-base italic leading-7 text-[#1B2A4A] sm:text-[1.0625rem] sm:leading-[1.65] sm:space-y-4">
                <p>
                  Teachers. Coaches. Writers. Advisors.<br />
                  Mentors. Counselors. Trainers. Mediators.<br />
                  Journalists. Consultants. Speakers. Facilitators. Historians. Storytellers. Lectors.
                </p>
                <p>The overlooked and often underappreciated stewards of knowledge &ndash; those who make sense of yesterday, give voice to today, and help shape what comes next.</p>
                <p>The ones who look to the next generation and understand the responsibility to show them the way.</p>
                <p>Then there are connectors.</p>
                <p>Connectors are the chameleons &ndash; able to adapt to any person, situation, or audience.</p>
                <p>Not flashy or spotlight-seeking. Not the headliner.</p>
                <p>But always present. Always ready. Generous with their time. Caring. Impactful. And never forgotten.</p>
                <p>And Jeff is exactly that &ndash; a connector who builds real, lasting relationships with kids and helps guide them in ways that truly matter.</p>
              </blockquote>
            </div>
            <figcaption className="mt-8 border-t border-[#C5943A]/30 pt-6">
              <p className="text-lg font-semibold text-[#1B2A4A]">Mitch Kampbell</p>
              <p className="mt-1 text-base text-[#5F7752]">President, Millard United</p>
            </figcaption>
          </div>
        </figure>
      </section>

      <section className="container pb-12 sm:pb-16">
        <div className="soft-card overflow-hidden">
          <div className="h-full bg-[#F5F2EA] p-8 lg:p-12" style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.88), rgba(245,242,234,0.92)), url(${visualAssets.generated.contactSkyline})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <p className="section-label">For educators</p>
            <p className="text-lg leading-8 text-[#445065]">
              Jeff brings a 45-minute writing program to K-8 classrooms across Nebraska. Students hear the story behind Donnie Bats, dig into the writing process, and leave with signed books.
            </p>
            <blockquote className="mt-5 border-l-2 border-[#4A7C59]/40 pl-4">
              <p className="text-base italic leading-7 text-[#445065]">
                'Jeff Kurrus Days' are a core memory for every student who has had the chance to experience them.
              </p>
              <footer className="mt-2 text-sm font-semibold text-[#4A7C59]">
                — Mrs. Lisa Giles, 4th Grade Teacher, Ashbury Elementary
              </footer>
            </blockquote>
            <Link href="/school-visits#book" className="mt-8 inline-flex rounded-full bg-[#4A7C59] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3C6648]">
              Book an Author Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Senior Photography (left) + Nebraskaland Magazine (right) — original 2-col layout restored.
          Reading order: Photography first, Nebraskaland after, which keeps Jeff's Nebraskaland
          editorial role as the closing card before the subscribe ask. */}
      <section className="container pb-12 sm:pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="soft-card overflow-hidden">
            <Link href="/photography#packages" className="block">
              <img
                src={visualAssets.jkPhotography.seniorSdAthlete}
                alt="USD student athlete senior portrait in white dress by Jeff Kurrus"
                className="h-[440px] w-full bg-[#f5f3ee] object-contain transition hover:scale-[1.02]"
              />
              <div className="p-6">
                <p className="section-label">Senior Photography</p>
                <p className="text-lg leading-8 text-[#445065]">Outdoor senior portraits with 20 years of Nebraska light behind the lens. Gretna, Omaha, and beyond.</p>
              </div>
            </Link>
          </div>
          <div className="soft-card overflow-hidden">
            <Link href="/news#nebraskaland" className="block">
              <img
                src={visualAssets.jkPhotography.heroFoggyGoldenLandscape}
                alt="Foggy golden sunrise landscape in Nebraska, photographed by Jeff Kurrus"
                className="h-[380px] w-full object-cover object-center transition hover:scale-[1.02]"
              />
              <div className="p-6">
                <p className="section-label">Nebraskaland Magazine</p>
                <p className="text-lg leading-8 text-[#445065]">50+ national awards under Jeff's editorship. See what's happening with the magazine, upcoming events, and community presentations.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Activity Pack CTA — closing block. Per Kurrus D-36 + D-39 (2026-05-04): single
          audience-capture front door is the free Donnie Bats Activity Pack. Newsletter
          form deferred until Jeff has broadcasts queued. Two-column layout: pitch on left,
          prominent Send-me-the-Activity-Pack button on right linking to /activity-pack
          (the branded URL the regenerated QR code will encode). The /activity-pack page
          handles the actual subscribe via the existing Kit landing page. */}
      <section id="activity-pack" className="container pb-16 sm:pb-20 scroll-mt-24">
        <div className="soft-card overflow-hidden bg-[#FBF6EC] p-6 sm:p-8 lg:p-10">
          <div className="lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Free for kids, parents, and teachers</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#1B2A4A] sm:text-3xl">The Donnie Bats Activity Pack.</h2>
              <p className="mt-3 text-base leading-7 text-[#445065]">
                A free printable pack with discussion questions, a baseball word search, a student challenge, and standards-aligned educator notes. We'll send it to your inbox in under a minute. Your email stays private. Unsubscribe anytime.
              </p>
            </div>
            <div className="mt-5 flex justify-center lg:mt-0 lg:justify-end">
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

    </div>
  );
}
