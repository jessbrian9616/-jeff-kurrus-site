/*
Design philosophy for this file: the contact page should feel direct, calm, and trustworthy.
Reduce friction, keep the form legible, and let the practical contact options sit within a clean editorial frame.
*/
import PageHero from "@/components/PageHero";
import { siteMeta, visualAssets } from "@/lib/siteContent";

export default function Contact() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Contact"
        title="I read every message."
        description="Use the form below to book a school visit, order books, ask about photography, or send a general inquiry."
        image={visualAssets.generated.contactSkyline}
        dark={false}
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
              <button type="submit" className="w-full rounded-full bg-[#1B2A4A] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#16233D]">
                Send Message
              </button>
            </form>
          </div>

          <div className="soft-card overflow-hidden">
            <div className="h-full min-h-[100%] bg-[#F7F4EC] p-8 sm:p-10 lg:p-12" style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.84), rgba(247,244,236,0.96)), url(${visualAssets.generated.contactSkyline})`, backgroundSize: "cover", backgroundPosition: "center" }}>
              <p className="section-label">Let's connect</p>
              <div className="mb-8 border-b border-[rgba(96,87,62,0.12)] pb-8">
                <p className="text-base leading-7 text-[#31405C]">Reach out. Let's discuss what your classroom or group needs. Then we'll tailor a presentation to help.</p>
                <p className="mt-4 text-base leading-7 text-[#31405C]">Writing is hard. So is photography. I can make these skills click for your group -- from young writers to adult specialty groups -- so everyone walks away with the confidence to grow as a creator.</p>
              </div>
              <p className="section-label">Direct contact</p>
              <a href="mailto:jeffreyekurrus@gmail.com" className="text-3xl font-semibold text-[#1B2A4A] transition hover:text-[#4A7C59]">jeffreyekurrus@gmail.com</a>
              <p className="mt-5 text-lg leading-8 text-[#445065]">For school visits, book orders, photography sessions, and media inquiries.</p>
              <div className="mt-10 space-y-4">
                {siteMeta.socials.map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="block rounded-full border border-[color:rgba(27,42,74,0.1)] bg-white/85 px-5 py-4 text-base font-semibold text-[#1B2A4A] transition hover:bg-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
