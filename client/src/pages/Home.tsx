/*
Design philosophy for this file: lead with restraint and authority.
The home page should feel like a premium landing sequence for adults making decisions, with strong book visuals, quiet social proof, and generous white space.
*/
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import { visualAssets } from "@/lib/siteContent";

export default function Home() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Home"
        title="Books for kids who'd rather be outside."
        description="Jeff Kurrus writes children's books shaped by natural landscapes, baseball diamonds, and years spent paying attention behind the camera."
        image={visualAssets.generated.heroPrairie}
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
                <a href="#" className="mt-8 inline-flex rounded-full bg-[#1B2A4A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#16233D]">
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
              <p className="mt-6 max-w-sm text-lg leading-8 text-[#445065]">Be the first to know.</p>
              <form className="mt-8 space-y-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-full border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base text-[#1B2A4A] outline-none transition focus:border-[#4A7C59]"
                />
                <button
                  type="button"
                  className="w-full rounded-full bg-[#4A7C59] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3C6648]"
                >
                  Be the first to know
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="soft-card p-8 sm:p-10">
            <p className="section-label">Recognition</p>
            <blockquote className="text-2xl font-semibold leading-[1.3] text-[#1B2A4A] sm:text-3xl">
              “Jeff Kurrus's words and Michael Forsberg's photographs are teamed here to bring us a remarkable story...”
            </blockquote>
            <p className="mt-6 text-base font-semibold text-[#1B2A4A]">Joel Sartore, founder of National Geographic Photo Ark</p>
            <p className="mt-1 text-base text-[#526077]">on Have You Seen Mary?</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Golden Sower Award nominee. 25,000+ books in readers' hands.</p>
          </div>
          <div className="soft-card p-8 sm:p-10">
            <p className="section-label">About Jeff</p>
            <div className="space-y-5 text-lg leading-8 text-[#445065]">
              <p>
                I spent years behind a camera. Sandhill cranes on the Platte River. Swift foxes in the short grass. I learned that a good photograph and a good story ask the same thing of you: pay attention and tell the truth about what you see.
              </p>
              <p>
                I am the editor of Nebraskaland Magazine. I live in Gretna, Nebraska. I write baseball chapter books for kids who would rather be outside than reading.
              </p>
            </div>
            <Link href="/about" className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[#4A7C59]">
              Read more
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="soft-card overflow-hidden lg:grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="section-label">Email capture</p>
            <h2 className="text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">Get the Free Donnie Bats Activity Pack.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#445065]">
              Puzzles, a word search, and discussion questions. Enter your email and I'll send it straight to your inbox.
            </p>
            <form className="mt-8 flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="min-h-[56px] flex-1 rounded-full border border-[color:rgba(27,42,74,0.12)] bg-white px-5 text-base text-[#1B2A4A] outline-none transition focus:border-[#4A7C59]"
              />
              <button
                type="button"
                className="rounded-full bg-[#1B2A4A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#16233D]"
              >
                Send It to Me
              </button>
            </form>
          </div>
          <div className="h-full border-t border-[color:rgba(27,42,74,0.08)] bg-[#F5F2EA] p-8 lg:border-l lg:border-t-0 lg:p-12" style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.88), rgba(245,242,234,0.92)), url(${visualAssets.generated.contactSkyline})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <p className="section-label">For educators</p>
            <img
              src={visualAssets.uploaded.schoolVisit1}
              alt="Students engaged during Jeff Kurrus school visit"
              className="mb-6 h-[220px] w-full rounded-[1.5rem] object-cover shadow-[0_20px_40px_rgba(27,42,74,0.12)]"
            />
            <p className="text-lg leading-8 text-[#445065]">
              Jeff brings a 45-minute writing program to K-8 classrooms across Nebraska. Students hear the story behind Donnie Bats, dig into the writing process, and leave with signed books.
            </p>
            <blockquote className="mt-5 border-l-2 border-[#4A7C59]/40 pl-4">
              <p className="text-base italic leading-7 text-[#445065]">
                "'Jeff Kurrus Days' are a core memory for every student who has had the chance to experience them."
              </p>
              <footer className="mt-2 text-sm font-semibold text-[#4A7C59]">
                — Mrs. Lisa Giles, 4th Grade, Ashbury Elementary
              </footer>
            </blockquote>
            <Link href="/school-visits" className="mt-8 inline-flex rounded-full bg-[#4A7C59] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3C6648]">
              Book an Author Visit
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <PlaceholderBlock label="Coming Soon" className="min-h-[240px] bg-[#1B2A4A]" />
          <PlaceholderBlock label="Coming Soon" className="min-h-[240px] bg-[#6C665E]" />
        </div>
      </section>

    </div>
  );
}
