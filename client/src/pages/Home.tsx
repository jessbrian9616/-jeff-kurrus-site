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
            <Link href="/school-visits">
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
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">$12.95 | Ages 7-12</p>
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
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">Coming December 2026</p>
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
            <Link href="/school-visits" className="mt-8 inline-flex rounded-full bg-[#4A7C59] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3C6648]">
              Book an Author Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Senior Photography — Jeff's other professional work, paired image+text card */}
      <section className="container pb-12 sm:pb-16">
        <div className="soft-card overflow-hidden lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <Link href="/photography" className="block">
            <img
              src={visualAssets.jkPhotography.seniorSdAthlete}
              alt="USD student athlete senior portrait in white dress by Jeff Kurrus"
              className="h-[320px] w-full bg-[#f5f3ee] object-contain transition hover:scale-[1.02] lg:h-full"
            />
          </Link>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="section-label">Senior Photography</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#1B2A4A] sm:text-3xl">
              Outdoor senior portraits with 20 years of Nebraska light behind the lens.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#445065]">
              Gretna, Omaha, and beyond.
            </p>
            <Link
              href="/photography"
              className="mt-6 inline-flex self-start rounded-full bg-[#1B2A4A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#16233D]"
            >
              See Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Subscribe block. Anchor target for the Donnie Bats Activity Pack QR code (jeffkurrus.com/#subscribe).
          Form is a Kit Inline embed. Subscribers are tagged source:website-subscribe in Kit and do NOT receive the Activity Pack.
          See 04_SYSTEMS/KURRUS_KIT_AND_FORMS_RUNBOOK_v1.md for setup. */}
      <section id="subscribe" className="container pb-12 sm:pb-16 scroll-mt-24">
        <div className="soft-card overflow-hidden bg-[#1B2A4A] p-8 text-white sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5943A]">Stay in touch</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Stay close to Jeff's stories.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Book updates, sneak peeks, and word from the prairie. Straight to your inbox.
          </p>
          <ul className="mt-6 grid max-w-3xl gap-3 text-base leading-7 text-white/85 sm:grid-cols-3">
            <li className="rounded-2xl bg-white/8 p-4">News when a new book is launching, including The Return of Donnie Bats in December 2026.</li>
            <li className="rounded-2xl bg-white/8 p-4">Behind the scenes from Jeff's writing and his work as Editor of Nebraskaland Magazine.</li>
            <li className="rounded-2xl bg-white/8 p-4">Early looks at activity packs, school programs, and signed-book opportunities.</li>
          </ul>

          {/* PASTE KIT EMBED CODE BELOW (replace this entire div with the embed snippet from Kit > Grow > Forms > Website Subscribe > Embed) */}
          <div className="mt-8 rounded-2xl bg-white p-6 text-[#1B2A4A] shadow-[0_18px_44px_rgba(0,0,0,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C5943A]">Subscribe form pending</p>
            <p className="mt-2 text-sm text-[#445065]">
              The Kit subscribe form embed will appear here once the form is created in Kit and its embed code is pasted into this component. See KURRUS_KIT_AND_FORMS_RUNBOOK_v1.md.
            </p>
          </div>

          <p className="mt-6 text-xs leading-6 text-white/60">
            Your email stays private. Unsubscribe anytime. We never share your information.
          </p>
        </div>
      </section>

      {/* Nebraskaland Magazine — Jeff's editorial work. Final section per the v5.9 brand rule
          (Donnie Bats anchors digital channels; Nebraskaland supports). Mirrored layout from Photography
          (text left, image right) for visual rhythm. */}
      <section className="container pb-16 sm:pb-20">
        <div className="soft-card overflow-hidden lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="section-label">Nebraskaland Magazine</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#1B2A4A] sm:text-3xl">
              50+ national awards under Jeff's editorship.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#445065]">
              See what's happening with the magazine, upcoming events, and community presentations.
            </p>
            <Link
              href="/news"
              className="mt-6 inline-flex self-start rounded-full border-2 border-[#1B2A4A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#1B2A4A] transition hover:bg-[#1B2A4A] hover:text-white"
            >
              Visit the News Page
            </Link>
          </div>
          <Link href="/news" className="block">
            <img
              src={visualAssets.jkPhotography.heroFoggyGoldenLandscape}
              alt="Foggy golden sunrise landscape in Nebraska, photographed by Jeff Kurrus"
              className="h-[320px] w-full object-cover object-center transition hover:scale-[1.02] lg:h-full"
            />
          </Link>
        </div>
      </section>

    </div>
  );
}
