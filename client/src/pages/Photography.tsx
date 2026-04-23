/*
Design philosophy for this file: this page should meet the standard of a premium portrait portfolio.
Keep imagery dominant, text spare, package pricing elegant, and the booking path unmistakably clear.
Packages appear before the gallery so educators/parents see pricing immediately.
*/
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import { photographyGallery, photographyPackages, visualAssets } from "@/lib/siteContent";

export default function Photography() {
  const heroImage = visualAssets.uploaded.senior09;

  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Senior Photography"
        title="You own every image. No usage fees. No restrictions."
        description="I've been photographing beautiful Nebraska for twenty years. The same eye that finds a stunning sunrise finds the light on a senior's face at golden hour. I specialize in getting people of all ages comfortable in front of the camera -- so the expression you see is the real one."
        image={heroImage}
        imagePosition="center center"
      />

      {/* Packages -- each with its own visual identity */}
      <section className="container py-16 sm:py-20">
        <p className="section-label">Packages</p>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* The Runway -- premium, gold accent */}
          <article className="relative overflow-hidden rounded-[1.75rem] border-l-4 border-[#B8860B] bg-[#1B2A4A] p-8 shadow-[0_24px_50px_rgba(27,42,74,0.18)]">
            <div className="absolute right-4 top-4 rounded-full bg-[#B8860B]/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#B8860B]">Most popular</div>
            <h2 className="text-2xl font-semibold text-white">{photographyPackages[0].title}</h2>
            <p className="mt-3 text-4xl font-semibold text-[#B8860B]">{photographyPackages[0].price}</p>
            <p className="mt-5 text-base leading-7 text-white/75">{photographyPackages[0].details}</p>
            <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[#B8860B] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#9A7209]">
              Book This Package
            </Link>
          </article>

          {/* The Golden Hour -- warm amber accent */}
          <article className="rounded-[1.75rem] border-l-4 border-[#C4883A] bg-[#FBF6EC] p-8 shadow-[0_20px_44px_rgba(184,134,11,0.10)]">
            <div className="mb-3 inline-flex rounded-full bg-[#C4883A]/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#C4883A]">Great value</div>
            <h2 className="text-2xl font-semibold text-[#1B2A4A]">{photographyPackages[1].title}</h2>
            <p className="mt-3 text-4xl font-semibold text-[#C4883A]">{photographyPackages[1].price}</p>
            <p className="mt-5 text-base leading-7 text-[#445065]">{photographyPackages[1].details}</p>
            <Link href="/contact" className="mt-6 inline-flex rounded-full border border-[#C4883A]/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#C4883A] transition hover:bg-[#C4883A] hover:text-white">
              Book This Package
            </Link>
          </article>

          {/* The Essential -- green accent */}
          <article className="rounded-[1.75rem] border-l-4 border-[#4A7C59] bg-[#F2F7F0] p-8 shadow-[0_20px_44px_rgba(74,124,89,0.10)]">
            <div className="mb-3 inline-flex rounded-full bg-[#4A7C59]/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#4A7C59]">Quick session</div>
            <h2 className="text-2xl font-semibold text-[#1B2A4A]">{photographyPackages[2].title}</h2>
            <p className="mt-3 text-4xl font-semibold text-[#4A7C59]">{photographyPackages[2].price}</p>
            <p className="mt-5 text-base leading-7 text-[#445065]">{photographyPackages[2].details}</p>
            <Link href="/contact" className="mt-6 inline-flex rounded-full border border-[#4A7C59]/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#4A7C59] transition hover:bg-[#4A7C59] hover:text-white">
              Book This Package
            </Link>
          </article>
        </div>

        {/* Add-ons and booking info */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.65fr_1.35fr]">
          <div className="rounded-[1.5rem] bg-[#1B2A4A] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Add-ons</p>
            <p className="mt-3 text-base leading-7 text-white/80">Family portrait: +$100-$150. Travel beyond 30 miles: $0.50/mile.</p>
          </div>
          <div className="rounded-[1.5rem] border border-[color:rgba(27,42,74,0.08)] bg-white p-6">
            <p className="text-base leading-7 text-[#445065]">Gretna, Omaha, and surrounding areas. Travel available.</p>
            <p className="mt-3 text-base leading-7 text-[#445065]">To check availability or schedule a session, send a message through the contact page or email jeffreyekurrus@gmail.com.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container pb-16 sm:pb-20">
        <p className="section-label">Portfolio</p>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {photographyGallery.filter((photo) => photo.src !== heroImage).map((photo, index) => (
            <figure key={photo.src} className={`${index === 0 ? "md:col-span-2 xl:col-span-2" : ""} overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-[0_26px_55px_rgba(27,42,74,0.12)]`}>
              <img
                src={photo.src}
                alt={photo.alt}
                style={{ objectPosition: photo.position }}
                className={`w-full rounded-[1.35rem] object-cover ${index === 0 ? "h-[540px] sm:h-[620px]" : "h-[420px] sm:h-[500px]"}`}
              />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
