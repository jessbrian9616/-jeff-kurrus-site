import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="page-shell">
      <section className="container py-24 sm:py-32">
        <div className="soft-card mx-auto max-w-2xl p-10 text-center sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B8860B]">404</p>
          <h1 className="mt-4 text-4xl font-semibold text-[#1B2A4A] sm:text-5xl">This page wandered off.</h1>
          <p className="mt-6 text-lg leading-8 text-[#445065]">
            The page you're looking for isn't here. Try the homepage, the books, or send Jeff a note.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/" className="inline-flex rounded-full bg-[#1B2A4A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#16233D]">
              Back to home
            </Link>
            <Link href="/books" className="inline-flex rounded-full border border-[color:rgba(27,42,74,0.18)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#1B2A4A] transition hover:border-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white">
              See the books
            </Link>
            <Link href="/contact" className="inline-flex rounded-full border border-[color:rgba(27,42,74,0.18)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#1B2A4A] transition hover:border-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white">
              Send a note
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
