/*
Design philosophy for this file: Storybook Editorial should make the School Visits page feel welcoming, informative, and easy for educators to scan.
Use stronger hierarchy, warmer cards, and balanced sections that remove dead space while increasing readability.
*/
import PageHero from "@/components/PageHero";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import { schoolVisitPricing, visualAssets } from "@/lib/siteContent";

const visitHighlights = [
  "Grades K-5 with an engaging 45-minute presentation",
  "Interactive talk about writing, storytelling, and where ideas come from",
  "Q&A plus book-signing time after the presentation",
  "Ideal for librarians, classroom visits, and school-wide assemblies",
];

export default function SchoolVisits() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="School visits"
        title="A 45-minute K-5 author presentation built for real school scheduling decisions."
        description="Jeff brings an engaging, practical author visit that helps students connect writing, reading, and curiosity with the real world around them."
        image={visualAssets.uploaded.schoolVisit2}
      />

      <section className="container py-16 sm:py-20">
        <div className="soft-card overflow-hidden">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="section-label">Program description</p>
              <div className="space-y-5 text-xl leading-9 text-[#445065]">
                <p>
                  A 45-minute K-5 author presentation. Students hear the story behind Donnie Bats, learn about the writing process, and discover that the worst player on the team might have the best story to tell.
                </p>
                <p>
                  Jeff reads from the book, talks about where stories come from, and takes questions. Every student gets to meet the author and sign books at the table afterward.
                </p>
              </div>
            </div>

            <div className="border-t border-[rgba(96,87,62,0.12)] bg-[#F6EFD9] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="section-label">At a glance</p>
              <ul className="space-y-4 text-lg leading-8 text-[#31405C]">
                {visitHighlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#B8860B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-[1.5rem] border border-[rgba(96,87,62,0.12)] bg-[rgba(255,251,244,0.95)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5F7752]">Curriculum alignment</p>
                <p className="mt-4 text-lg leading-8 text-[#445065]">
                  Common Core ELA connections include reading engagement, narrative structure, author's craft, vocabulary in context, and speaking and listening standards. The presentation supports classroom reading goals and gives students a reason to pick up a book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="soft-card p-8 sm:p-10 lg:p-12">
          <p className="section-label">Public pricing</p>
          <div className="grid gap-5 lg:grid-cols-3">
            {schoolVisitPricing.map((item) => (
              <article key={item.label} className="rounded-[1.6rem] border border-[color:rgba(96,87,62,0.14)] bg-[#FFF8ED] p-6 shadow-[0_18px_35px_rgba(96,87,62,0.07)]">
                <h2 className="text-[2.2rem] font-semibold text-[#22304F] sm:text-[2.5rem]">{item.label}</h2>
                <p className="mt-4 text-2xl font-semibold text-[#B8860B]">{item.value}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-lg leading-8 text-[#445065]">All pricing is negotiable. Reach out and let's talk about what works for your school.</p>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="soft-card p-8 sm:p-10">
            <p className="section-label">School visit photos</p>
            <div className="grid gap-4 md:grid-cols-2">
              <img src={visualAssets.uploaded.schoolVisit1} alt="Students engaged during Jeff Kurrus school visit" className="h-[280px] w-full rounded-[1.5rem] object-cover shadow-[0_18px_30px_rgba(96,87,62,0.12)]" />
              <img src={visualAssets.uploaded.schoolVisit2} alt="Student work from Jeff Kurrus author visit" className="h-[280px] w-full rounded-[1.5rem] object-cover shadow-[0_18px_30px_rgba(96,87,62,0.12)]" />
            </div>
            <div className="mt-6 grid gap-4">
              <blockquote className="rounded-[1.8rem] border border-[rgba(95,119,82,0.24)] bg-[#F7ECD0] p-7 text-[#22304F] shadow-[0_18px_36px_rgba(96,87,62,0.1)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5F7752]">Teacher testimonial</p>
                <p className="mt-4 text-xl leading-9 text-[#31405C]">
                  "I have had the privilege of watching Jeff work with 4th graders for 15 years. Every year, whether we have 40 kids or 90, Jeff captivates the students with his hands-on, straight forward, yet always entertaining, methods. All students, even the reluctant writers, become celebrated authors after spending time with Jeff. Our students love 'Kurrus Day!'"
                </p>
                <footer className="mt-5 text-base font-semibold text-[#5B6D53]">
                  Katie Mott, 4th Grade Teacher, Prairie Queen Elementary, Papillion, Nebraska
                </footer>
              </blockquote>
              <blockquote className="rounded-[1.8rem] border border-[rgba(95,119,82,0.24)] bg-[#F7ECD0] p-7 text-[#22304F] shadow-[0_18px_36px_rgba(96,87,62,0.1)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5F7752]">Literacy expert testimonial</p>
                <p className="mt-4 text-xl leading-9 text-[#31405C]">
                  "There is something uniquely powerful about students and educators learning from a real, local author. Jeff brings credibility, authenticity, and a sense of possibility that cannot be replicated. He shows students that writing is not just a school task but a meaningful, real-world craft. Jeff's session was one of the highest-rated at the symposium, even among an outstanding lineup of nationally recognized literacy experts. That speaks not only to his expertise but to his ability to connect, engage, and deliver fun yet meaningful learning."
                </p>
                <footer className="mt-5 text-base font-semibold text-[#5B6D53]">
                  Jeanna, Archdiocese of Omaha
                </footer>
              </blockquote>
              <PlaceholderBlock label="Downloadable PDF: Author Visit Information Packet for librarians to forward to principals. PDF being created." className="min-h-[160px] bg-[#7A8E67]" />
              <PlaceholderBlock label="Presentation preview: 1–2 slides or a short video clip from Jeff's school presentation. Content is being prepared." className="min-h-[160px] bg-[#5C6782]" />
            </div>
          </div>
          <div className="soft-card p-8 sm:p-10">
            <p className="section-label">Requirements and ordering</p>
            <div className="space-y-6 text-xl leading-9 text-[#445065]">
              <p>
                Jeff brings everything he needs. A projector or screen and a room where students can sit comfortably is all that's required. For assemblies: a microphone and gym or auditorium seating.
              </p>
              <p>
                Books can be ordered in advance for your school at bulk pricing. Contact Jeff directly to arrange. Students can also purchase at the signing table after the presentation.
              </p>
            </div>

            <div className="mt-10 rounded-[1.65rem] border border-[color:rgba(96,87,62,0.14)] bg-[#FFF8ED] p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5F7752]">Booking inquiry form</p>
              <form className="mt-6 space-y-4">
                <input type="text" placeholder="Name" className="w-full rounded-2xl border border-[color:rgba(96,87,62,0.16)] bg-white px-5 py-4 text-lg outline-none transition focus:border-[#5F7752]" />
                <input type="text" placeholder="School" className="w-full rounded-2xl border border-[color:rgba(96,87,62,0.16)] bg-white px-5 py-4 text-lg outline-none transition focus:border-[#5F7752]" />
                <input type="email" placeholder="Email" className="w-full rounded-2xl border border-[color:rgba(96,87,62,0.16)] bg-white px-5 py-4 text-lg outline-none transition focus:border-[#5F7752]" />
                <select className="w-full rounded-2xl border border-[color:rgba(96,87,62,0.16)] bg-white px-5 py-4 text-lg outline-none transition focus:border-[#5F7752]">
                  <option value="grades">Grade Levels</option>
                  <option value="k">K</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <input type="text" placeholder="Preferred Dates" className="w-full rounded-2xl border border-[color:rgba(96,87,62,0.16)] bg-white px-5 py-4 text-lg outline-none transition focus:border-[#5F7752]" />
                <textarea placeholder="Message" rows={5} className="w-full rounded-[1.5rem] border border-[color:rgba(96,87,62,0.16)] bg-white px-5 py-4 text-lg outline-none transition focus:border-[#5F7752]" />
                <button type="button" className="w-full rounded-full bg-[#5F7752] px-6 py-4 text-base font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#4F6644]">
                  Book a Visit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
