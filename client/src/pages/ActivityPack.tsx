/*
Design philosophy for this file: the Activity Pack page is the QR-code landing destination
for printed assets (Activity Pack PDFs, school sign-up sheets) and the on-site lead-magnet
front door. Per Kurrus Decision_Log D-39 (2026-05-04), this page exists at /activity-pack
specifically so the QR on every Activity Pack PDF can encode jeffkurrus.com/activity-pack
(branded root-domain URL) and stay valid even if the underlying subscription tool changes.

Functionality today: a clear, mobile-friendly hero with one prominent CTA button that takes
visitors to the Kit landing page (jeff-kurrus-reader-community.kit.com/activity-pack), where
they actually subscribe and receive the Activity Pack PDF in their welcome email.

Future upgrade (queued): replace the CTA button with an embedded Kit Inline form so the
subscribe happens on-site without the redirect. Per D-36 plan, that work is part of the
homepage Activity Pack CTA push and uses the same Inline form embed code.

Styling matches the rest of the site: page-shell layout, PageHero, container padding,
soft-card sections, and the existing color palette (navy #1B2A4A, gold #B8860B, sage #5F7752).
*/
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";
import { visualAssets } from "@/lib/siteContent";

const KIT_LANDING_URL = "https://jeff-kurrus-reader-community.kit.com/activity-pack";

const insidePack = [
  "Donnie Bats themed coloring pages, ready to print at home or in the classroom",
  "Word search and matching puzzles tied to the story",
  "A short read-aloud reflection guide for parents and teachers",
  "Discussion questions that connect baseball, perseverance, and Donnie's journey",
];

export default function ActivityPack() {
  usePageMeta(
    "Free Donnie Bats Activity Pack",
    "A free printable Activity Pack for The Legend of Donnie Bats by Jeff Kurrus. Coloring pages, puzzles, and reflection prompts for kids, parents, and teachers."
  );

  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Free for kids, parents, and teachers"
        title="The Donnie Bats Activity Pack."
        description="A free printable pack of coloring pages, puzzles, and reflection prompts that bring The Legend of Donnie Bats off the page and into the classroom or kitchen table. Enter your email and we'll send it right to you."
        image={visualAssets.uploaded.schoolVisit1}
      />

      {/* Primary CTA — large, mobile-friendly button. Targets QR scanners landing here
          from a printed asset and on-site visitors arriving via the Books or School Visits
          page links. Outbound link to the Kit landing page that delivers the PDF.
          When the Kit Inline form embed lands (per D-36 Phase 2), replace this section
          with the embed and remove the button. */}
      <section className="container py-16 sm:py-20">
        <div className="soft-card mx-auto max-w-3xl p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">
            One step
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">
            Get the free Activity Pack
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#445065]">
            Enter your email on the next page. The Activity Pack PDF arrives in your inbox in under a minute.
          </p>
          <a
            href={KIT_LANDING_URL}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1B2A4A] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(27,42,74,0.18)] transition hover:-translate-y-0.5 hover:bg-[#152038]"
          >
            Send me the Activity Pack
          </a>
          <p className="mt-5 text-sm text-[#5F7752]">
            Your email stays private. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* What's inside — short, scannable list so visitors know exactly what they're subscribing for.
          Lead-magnet best practice (ConvertKit, MailerLite published guidance): set expectations
          before the email field appears so subscribers feel the value immediately. */}
      <section className="container pb-16 sm:pb-20">
        <div className="soft-card p-8 sm:p-10 lg:p-12">
          <p className="section-label">What's inside the pack</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">
            Built for kids, easy for grown-ups.
          </h2>
          <ul className="mt-8 space-y-4">
            {insidePack.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#B8860B]" aria-hidden="true" />
                <p className="text-lg leading-8 text-[#445065]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Soft conversion CTAs so the page does not dead-end if the visitor does not subscribe.
          Mirrors the pattern on About and SchoolVisits pages. */}
      <section className="container pb-16 sm:pb-20">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/books"
            className="soft-card flex items-center justify-between gap-4 p-6 transition hover:-translate-y-0.5"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5F7752]">
                Meet the books
              </p>
              <p className="mt-2 text-lg font-semibold text-[#1B2A4A]">
                See The Legend of Donnie Bats and the rest of Jeff's books.
              </p>
            </div>
            <span aria-hidden="true" className="text-xl text-[#1B2A4A]">→</span>
          </Link>
          <Link
            href="/school-visits"
            className="soft-card flex items-center justify-between gap-4 p-6 transition hover:-translate-y-0.5"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5F7752]">
                For educators
              </p>
              <p className="mt-2 text-lg font-semibold text-[#1B2A4A]">
                Book Jeff for a 45-minute K-8 author visit.
              </p>
            </div>
            <span aria-hidden="true" className="text-xl text-[#1B2A4A]">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
