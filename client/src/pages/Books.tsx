/*
Design philosophy for this file: the books page should read like a restrained catalog from a premium independent publisher.
Give the Donnie Bats title the strongest hierarchy, keep the grid airy, and let missing covers appear as elegant placeholders.
*/
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import { bookCatalog, visualAssets } from "@/lib/siteContent";

export default function Books() {
  const [featured, sequel, ...catalog] = bookCatalog;

  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Books"
        title="Baseball chapter books for kids who'd rather be outside than reading."
        description="From sandhill cranes on the Platte River to a young ballplayer discovering his hidden talent, Jeff's books capture attention and tell the truth about what's there."
        image={visualAssets.uploaded.donnieBats}
        imagePosition="center center"
      />

      <section className="container py-16 sm:py-20">
        <div className="soft-card p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:items-center">
            <img src={featured.image ?? ""} alt={featured.alt} className="mx-auto w-full max-w-[300px] rounded-[1.75rem] object-cover shadow-[0_24px_50px_rgba(27,42,74,0.18)]" />
            <div>
              <p className="section-label">Featured</p>
              <h2 className="text-4xl font-semibold text-[#1B2A4A] sm:text-5xl">{featured.title}</h2>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">{featured.price}</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#445065]">{featured.description}</p>
              <a href={featured.href} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#1B2A4A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#16233D]">
                {featured.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
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
            <blockquote className="max-w-sm">
              <p className="text-xl italic leading-9 text-white/70">"It's the best insomnia I've ever had."</p>
              <footer className="mt-4 text-sm font-semibold text-[#B8860B]">-- Jeff, on writing the sequel</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="container pb-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {catalog.map((book) => (
            <article key={book.title} className="soft-card overflow-hidden p-6 sm:p-8">
              {book.image ? (
                <img src={book.image} alt={book.alt} className="mb-6 mx-auto max-h-[400px] w-auto max-w-full rounded-[1.5rem] object-contain shadow-[0_18px_40px_rgba(27,42,74,0.12)]" />
              ) : (
                <PlaceholderBlock label={book.placeholder ?? "Cover placeholder"} className="mb-6 min-h-[360px] bg-[#2E465A]" />
              )}
              <h2 className="text-2xl font-semibold text-[#1B2A4A]">{book.title}</h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">{book.price}</p>
              {book.note ? <p className="mt-4 text-sm font-semibold text-[#4A7C59]">{book.note}</p> : null}
              <p className="mt-4 text-base leading-7 text-[#445065]">{book.description}</p>
              <a href={book.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full border border-[color:rgba(27,42,74,0.12)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1B2A4A] transition hover:border-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white">
                {book.cta}
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
