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
        imagePosition="center 34%"
      />

      {/* Packages first -- above the gallery */}
      <section className="container py-16 sm:py-20">
        <div className="soft-card overflow-hidden" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #2A3E5E 100%)" }}>
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Packages</p>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {photographyPackages.map((item, i) => (
                <article key={item.title} className={`rounded-[1.75rem] p-7 ${i === 0 ? "bg-white/15 ring-2 ring-[#B8860B]/40" : "bg-white/10"}`}>
                  <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-3 text-3xl font-semibold text-[#B8860B]">{item.price}</p>
                  <p className="mt-4 text-base leading-7 text-white/75">{item.details}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-[0.65fr_1.35fr]">
              <div className="rounded-[1.5rem] bg-white/10 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Add-ons</p>
                <p className="mt-3 text-base leading-7 text-white/80">Family portrait: +$100-$150. Travel beyond 30 miles: $0.50/mile.</p>
              </div>
              <div className="rounded-[1.5rem] bg-white/10 p-6">
                <p className="text-base leading-7 text-white/80">Gretna, Omaha, and surrounding areas. Travel available.</p>
                <p className="mt-3 text-base leading-7 text-white/80">To check availability or schedule a session, send a message through the contact page or email jeffreyekurrus@gmail.com.</p>
                <Link href="/contact" className="mt-6 inline-flex rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur transition hover:bg-white/20">
                  Book a Session
                </Link>
              </div>
            </div>
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
