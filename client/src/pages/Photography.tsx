/*
Design philosophy for this file: this page should meet the standard of a premium portrait portfolio.
Keep imagery dominant, text spare, package pricing elegant, and the booking path unmistakably clear.
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

      <section className="container py-16 sm:py-20">
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

      <section className="container pb-8">
        <div className="soft-card p-8 sm:p-10 lg:p-12">
          <p className="section-label">Packages</p>
          <div className="grid gap-6 lg:grid-cols-3">
            {photographyPackages.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-[color:rgba(27,42,74,0.08)] bg-[#FBFAF6] p-7 shadow-[0_18px_40px_rgba(27,42,74,0.06)]">
                <h2 className="text-2xl font-semibold text-[#1B2A4A]">{item.title}</h2>
                <p className="mt-4 text-4xl font-semibold text-[#B8860B]">{item.price}</p>
                <p className="mt-6 text-base leading-7 text-[#445065]">{item.details}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="rounded-[1.5rem] bg-[#1B2A4A] p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">Add-ons</p>
              <p className="mt-4 text-lg leading-8">Family portrait: +$100-$150. Travel beyond 30 miles: $0.50/mile.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[color:rgba(27,42,74,0.08)] bg-white p-6">
              <p className="text-lg leading-8 text-[#445065]">Gretna, Omaha, and surrounding areas. Travel available.</p>
              <p className="mt-4 text-lg leading-8 text-[#445065]">To check availability or schedule a session, send a message through the contact page or email jeffreyekurrus@gmail.com.</p>
              <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#4A7C59] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3C6648]">
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
