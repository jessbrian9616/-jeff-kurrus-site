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
        title="Books by Jeff Kurrus"
        description="This catalog is being expanded. More book details, classroom notes, and ordering information will continue to be added here."
        image={visualAssets.generated.booksTexture}
        dark={false}
      />

      <section className="container py-16 sm:py-20">
        <div className="soft-card p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:items-center">
            <img src={featured.image ?? ""} alt={featured.alt} className="mx-auto w-full max-w-[300px] rounded-[1.75rem] object-cover shadow-[0_24px_50px_rgba(27,42,74,0.18)]" />
            <div>
              <p className="section-label">Largest display</p>
              <h2 className="text-4xl font-semibold text-[#1B2A4A] sm:text-5xl">{featured.title}</h2>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">{featured.price}</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#445065]">{featured.description}</p>
              <a href={featured.href} className="mt-8 inline-flex rounded-full bg-[#1B2A4A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#16233D]">
                {featured.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="soft-card overflow-hidden lg:grid lg:grid-cols-[0.8fr_1.2fr]">
          <img
            src={visualAssets.uploaded.bookReleaseComing}
            alt="Baseball glove resting on an infield at sunset for upcoming Donnie Bats release section"
            className="h-full min-h-[360px] w-full object-cover"
          />
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="section-label">Coming next</p>
            <h2 className="text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">{sequel.title}</h2>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">{sequel.price}</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#445065]">{sequel.description}</p>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#667084]">Sign up for release updates and be first to hear when the next Donnie Bats book is ready.</p>

            <div className="mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
              <input type="email" placeholder="Email address" className="min-h-[56px] flex-1 rounded-full border border-[color:rgba(27,42,74,0.12)] bg-white px-5 text-base text-[#1B2A4A] outline-none transition focus:border-[#4A7C59]" />
              <Button type="button" className="rounded-full bg-[#4A7C59] px-7 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#3C6648]">
                {sequel.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {catalog.map((book) => (
            <article key={book.title} className="soft-card overflow-hidden p-6 sm:p-8">
              {book.image ? (
                <img src={book.image} alt={book.alt} className="mb-6 h-[360px] w-full rounded-[1.5rem] object-cover shadow-[0_18px_40px_rgba(27,42,74,0.12)]" />
              ) : (
                <PlaceholderBlock label={book.placeholder ?? "Cover placeholder"} className="mb-6 min-h-[360px] bg-[#2E465A]" />
              )}
              <h2 className="text-2xl font-semibold text-[#1B2A4A]">{book.title}</h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">{book.price}</p>
              {book.note ? <p className="mt-4 text-sm font-semibold text-[#4A7C59]">{book.note}</p> : null}
              <p className="mt-4 text-base leading-7 text-[#445065]">{book.description}</p>
              <a href={book.href} className="mt-6 inline-flex rounded-full border border-[color:rgba(27,42,74,0.12)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1B2A4A] transition hover:border-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white">
                {book.cta}
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
