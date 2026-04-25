/*
Design philosophy for this file: the books page should read like a restrained catalog from a premium independent publisher.
Give the Donnie Bats title the strongest hierarchy, keep the grid airy, and let missing covers appear as elegant placeholders.
*/
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
