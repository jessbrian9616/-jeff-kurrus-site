/*
Design philosophy for this file: the contact page should feel direct, calm, and trustworthy.
Reduce friction, keep the form legible, and let the practical contact options sit within a clean editorial frame.
*/
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";
import { siteMeta, visualAssets } from "@/lib/siteContent";

export default function Contact() {
  usePageMeta("Contact Jeff Kurrus", "Book a school visit, order books, schedule a senior photo session, or send a general inquiry. Jeff reads every message. Based in Gretna, Nebraska.");
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Contact"
        title="I read every message."
        description="Use the form below to book a school visit, order books, ask about photography, or send a general inquiry."
        image={visualAssets.jkPhotography.heroFoggyFisherman}
        imagePosition="70% center"
        gradientStrength="strong"
      />

      <section className="container py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="soft-card p-8 sm:p-10 lg:p-12">
            <p className="section-label">Contact form</p>
            <form action="https://formspree.io/jeffreyekurrus@gmail.com" method="POST" className="space-y-4">
              <input type="text" name="name" placeholder="Name *" required className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
              <input type="email" name="email" placeholder="Email *" required className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
              <input type="tel" name="phone" placeholder="Phone *" required className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
              <select name="inquiry_type" required className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]">
                <option value="" disabled selected>What can Jeff help with? *</option>
                <option value="School Visit">School Visit</option>
                <option value="Order Books">Order Books</option>
                <option value="Senior Photo Session">Senior Photo Session</option>
                <option value="Media Inquiry">Media Inquiry</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
              <textarea name="message" placeholder="Message" rows={7} required className="w-full rounded-[1.5rem] border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
              <input type="hidden" name="_subject" value="New inquiry from jeffkurrus.com" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <button type="submit" className="w-full rounded-full bg-[#1B2A4A] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#16233D]">
                Send Message
              </button>
            </form>
          </div>

          <div className="soft-card overflow-hidden">
            <div className="h-full min-h-[100%] p-8 sm:p-10 lg:p-12" style={{ backgroundImage: `linear-gradient(180deg, rgba(27,42,74,0.94), rgba(27,42,74,0.88)), url(${visualAssets.jkPhotography.heroPrairieGrass})`, backgroundSize: "cover", backgroundPosition: "center" }}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Why reach out</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Every book, school visit, and photo session started with a conversation.</h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-white/80">
                <p>If you're a teacher wondering whether your students would connect with a visiting author, the answer is yes. If you're a parent looking for senior portraits that actually look like your kid, not a stock photo, I'd love to talk.</p>
                <p>I work with schools across Nebraska, shoot portraits in the Gretna and Omaha area, and speak to book clubs and civic groups for free. Whatever you're thinking about, send a note. I'll get back to you.</p>
              </div>
              <div className="mt-8 border-t border-white/15 pt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Direct</p>
                <a href="mailto:jeffreyekurrus@gmail.com" className="mt-3 block text-2xl font-semibold text-white transition hover:text-[#B8860B]">jeffreyekurrus@gmail.com</a>
              </div>
              <div className="mt-8 space-y-3">
                {siteMeta.socials.map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="block rounded-full border border-white/15 bg-white/8 px-5 py-4 text-base font-semibold text-white transition hover:border-white/30 hover:bg-white/15">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick reasons people get in touch — gives the page substance + clear conversion paths (CONTACT-2) */}
      <section className="container pb-16 sm:pb-20">
        <p className="section-label">Why people reach out</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Link href="/school-visits" className="rounded-[1.75rem] border-l-4 border-[#5F7752] bg-[#F2F7F0] p-6 shadow-[0_16px_32px_rgba(74,124,89,0.08)] transition hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5F7752]">School visits</p>
            <p className="mt-3 text-base leading-7 text-[#22304F]">Bring Jeff to your K-8 classroom for a 45-minute author visit.</p>
            <p className="mt-4 text-sm font-semibold text-[#5F7752]">See programs and pricing →</p>
          </Link>
          <Link href="/photography" className="rounded-[1.75rem] border-l-4 border-[#B8860B] bg-[#FBF6EC] p-6 shadow-[0_16px_32px_rgba(184,134,11,0.08)] transition hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Senior photo session</p>
            <p className="mt-3 text-base leading-7 text-[#22304F]">Outdoor portraits in Gretna, Omaha, and beyond. You own every image.</p>
            <p className="mt-4 text-sm font-semibold text-[#B8860B]">See packages →</p>
          </Link>
          <Link href="/books" className="rounded-[1.75rem] border-l-4 border-[#1B2A4A] bg-[#EEF1F6] p-6 shadow-[0_16px_32px_rgba(27,42,74,0.08)] transition hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B2A4A]">Order books</p>
            <p className="mt-3 text-base leading-7 text-[#22304F]">Direct, signed, or in bulk for classrooms and gift orders.</p>
            <p className="mt-4 text-sm font-semibold text-[#1B2A4A]">See the catalog →</p>
          </Link>
          <a href={`mailto:${siteMeta.email}?subject=Media%20inquiry`} className="rounded-[1.75rem] border-l-4 border-[#7A6B5A] bg-[#F7F4EE] p-6 shadow-[0_16px_32px_rgba(122,107,90,0.08)] transition hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A6B5A]">Media or interview</p>
            <p className="mt-3 text-base leading-7 text-[#22304F]">Press, podcasts, or community presentations.</p>
            <p className="mt-4 text-sm font-semibold text-[#7A6B5A]">Email Jeff →</p>
          </a>
        </div>
      </section>
    </div>
  );
}
