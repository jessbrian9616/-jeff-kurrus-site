/*
Design philosophy for this file: Storybook Editorial should make the School Visits page feel welcoming, informative, and easy for educators to scan.
Use stronger hierarchy, warmer cards, and balanced sections that remove dead space while increasing readability.
*/
import PageHero from "@/components/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";
import { schoolVisitPricing, visualAssets } from "@/lib/siteContent";

const visitHighlights = [
  "K-8 classrooms, 45 minutes, signed books at the table afterward",
  "Five program tracks: Writer's Workshop K-2 and 3-5, Photography Workshop 6-8, Author Q&A K-8, Zoom Q&A K-8",
  "Common Core ELA connections: reading engagement, narrative structure, author's craft",
  "Works as a classroom visit, a librarian event, or a school-wide assembly",
];

export default function SchoolVisits() {
  usePageMeta("School Visits & Author Presentations", "Book a 45-minute K-8 author visit with Jeff Kurrus. Writing workshops, photography sessions, and author Q&As for Nebraska schools. Pricing from $500/day.");
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="School visits"
        title="A 45-minute author visit built for K-8 classrooms across Nebraska."
        description="Jeff brings an engaging, practical author visit that helps students connect writing, reading, and curiosity with the real world around them."
        image={visualAssets.uploaded.schoolVisit2}
      />

      <section className="container py-16 sm:py-20">
        <div className="soft-card overflow-hidden">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="section-label">What to expect</p>
              <p className="text-lg leading-8 text-[#445065]">
                Jeff opens with a passage from one of his books. The room goes quiet. A hand goes up.
              </p>
              <p className="mt-4 text-lg leading-8 text-[#445065]">
                The next 45 minutes cover where stories come from, the seven question words Jeff teaches every classroom, and how a kid who couldn't hit, throw, or catch ended up the hero of a chapter book. Students draw, talk, write, and try the technique themselves. The reluctant writers find a way in.
              </p>
              <p className="mt-4 text-lg leading-8 text-[#445065]">
                Teachers stay in the room. The presentation is built to work alongside what you're already teaching, not to replace it. By the end, students have signed copies of the books and a reason to keep writing.
              </p>
              <p className="mt-4 text-lg leading-8 text-[#445065]">
                Jeff has been doing this for ten years across schools in Nebraska. He's edited a state magazine for thirteen. The work he asks students to do is the work he does every day.
              </p>
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
              <a
                href="/downloads/Jeff_Kurrus_Author_Visit_Packet.pdf"
                download
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1B2A4A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_20px_rgba(27,42,74,0.2)] transition hover:bg-[#2A3E5E]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Author Visit Info (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <p className="section-label">Programs</p>
        <p className="mt-2 max-w-2xl text-base leading-7 text-[#5D6475]">All five programs are offered K-8 — choose by grade band.</p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border-l-4 border-[#4A7C59] bg-[#F2F7F0] p-7 shadow-[0_16px_32px_rgba(74,124,89,0.08)]">
            <div className="mb-3 inline-flex rounded-full bg-[#4A7C59]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#4A7C59]">Writing</div>
            <h3 className="text-xl font-semibold text-[#22304F]">Writer's Workshop <span className="ml-2 text-base font-normal text-[#5F7752]">Grades K-2</span></h3>
            <p className="mt-4 text-lg leading-8 text-[#445065]">Jeff reads the Golden Sower-nominated 'Have You Seen Mary?', then introduces his 7 Question Words: Who, What, When, Where, How, Why, and Can. Students start building stories within minutes.</p>
          </div>
          <div className="rounded-[1.75rem] border-l-4 border-[#1B2A4A] bg-[#EEF1F6] p-7 shadow-[0_16px_32px_rgba(27,42,74,0.08)]">
            <div className="mb-3 inline-flex rounded-full bg-[#1B2A4A]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1B2A4A]">Writing</div>
            <h3 className="text-xl font-semibold text-[#22304F]">Writer's Workshop <span className="ml-2 text-base font-normal text-[#445065]">Grades 3-5</span></h3>
            <p className="mt-4 text-lg leading-8 text-[#445065]">Starting with an excerpt from 'The Legend of Donnie Bats,' Jeff walks students through his 7 Question Words, then layers in drawing, storyboarding, and a technique called 'Once Upon a Time' to tackle writing's hardest challenge: getting started.</p>
          </div>
          <div className="rounded-[1.75rem] border-l-4 border-[#B8860B] bg-[#FBF6EC] p-7 shadow-[0_16px_32px_rgba(184,134,11,0.08)] lg:col-span-2">
            <div className="mb-3 inline-flex rounded-full bg-[#B8860B]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Photography</div>
            <h3 className="text-xl font-semibold text-[#22304F]">Photography Workshop <span className="ml-2 text-base font-normal text-[#8A7A50]">Grades 6-8</span></h3>
            <p className="mt-4 text-lg leading-8 text-[#445065]">Jeff shares 20 years of experience as a professional outdoor photographer for the award-winning Nebraskaland Magazine. Students learn the basics of composition, aperture, and shutter speed, plus photography's most important tool: an alarm clock.</p>
          </div>
          <div className="rounded-[1.75rem] border-l-4 border-[#7A6B5A] bg-[#F7F4EE] p-7 shadow-[0_16px_32px_rgba(122,107,90,0.08)]">
            <div className="mb-3 inline-flex rounded-full bg-[#7A6B5A]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7A6B5A]">Interactive</div>
            <h3 className="text-xl font-semibold text-[#22304F]">Author Q&amp;A <span className="ml-2 text-base font-normal text-[#7A6B5A]">Grades K-8</span></h3>
            <p className="mt-4 text-lg leading-8 text-[#445065]">Jeff draws on 20 years of working with student writers to give an authentic, story-driven look at the life of an author.</p>
          </div>
          <div className="rounded-[1.75rem] border-l-4 border-[#5C6782] bg-[#F0F2F7] p-7 shadow-[0_16px_32px_rgba(92,103,130,0.08)]">
            <div className="mb-3 inline-flex rounded-full bg-[#5C6782]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#5C6782]">Virtual</div>
            <h3 className="text-xl font-semibold text-[#22304F]">Zoom Q&amp;A <span className="ml-2 text-base font-normal text-[#5C6782]">Grades K-8</span></h3>
            <p className="mt-4 text-lg leading-8 text-[#445065]">Jeff connects with students virtually, answering questions about the writing life and how he tackles the complicated (but thrilling) writing process. Works especially well with reluctant writers.</p>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="soft-card overflow-hidden p-8 sm:p-10 lg:p-12" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #2A3E5E 100%)" }}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Public pricing</p>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {schoolVisitPricing.map((item, i) => (
              <article key={item.label} className={`rounded-[1.6rem] p-6 ${i === 0 ? "bg-white/15 ring-2 ring-[#B8860B]/40" : "bg-white/10"}`}>
                <h2 className="text-2xl font-semibold text-white sm:text-[1.75rem]">{item.label}</h2>
                <p className="mt-4 text-xl font-semibold text-[#B8860B]">{item.value}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-lg leading-8 text-white/70">All pricing is negotiable. Reach out and let's talk about how we can help your young writers.</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Book orders</p>
              <p className="mt-3 text-base leading-7 text-white/80">Books can be ordered in advance at bulk pricing. Students can also purchase at the signing table after the presentation.</p>
              <a href="/contact" className="mt-4 inline-flex rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/20">
                Order Books
              </a>
            </div>
            <div className="rounded-[1.5rem] bg-white/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">What Jeff needs</p>
              <p className="mt-3 text-base leading-7 text-white/80">Not much. A projector or screen and a room where students can sit comfortably. For assemblies, a microphone and gym or auditorium seating. Jeff brings everything else.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - full width, balanced grid. Jeanna White appears twice (both attributions are real per L3) -
          her literacy-expert testimonial leads, her in-classroom observation runs as a smaller secondary quote below. */}
      <section className="container pb-12 sm:pb-16">
        <p className="section-label">What educators and parents are saying</p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <blockquote className="rounded-[1.8rem] border-l-4 border-[#B8860B] bg-[#FBF6EC] p-7 shadow-[0_18px_36px_rgba(96,87,62,0.1)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Literacy expert</p>
            <p className="mt-4 text-lg leading-8 text-[#31405C]">
              There is something uniquely powerful about students and educators learning from a real, local author. Jeff brings credibility, authenticity, and a sense of possibility that cannot be replicated. Jeff's session was one of the highest-rated at the symposium, even among an outstanding lineup of nationally recognized literacy experts.
            </p>
            <footer className="mt-5 text-sm font-semibold text-[#5B6D53]">
              Jeanna White, Archdiocese of Omaha
            </footer>
          </blockquote>
          <blockquote className="rounded-[1.8rem] border-l-4 border-[#5F7752] bg-[#F7ECD0] p-7 shadow-[0_18px_36px_rgba(96,87,62,0.1)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5F7752]">15-year partner school</p>
            <p className="mt-4 text-lg leading-8 text-[#31405C]">
              I have had the privilege of watching Jeff work with 4th graders for 15 years. Every year, whether we have 40 kids or 90, Jeff captivates the students with his hands-on, straight forward, yet always entertaining, methods. All students, even the reluctant writers, become celebrated authors after spending time with Jeff. Our students love 'Kurrus Day!'
            </p>
            <footer className="mt-5 text-sm font-semibold text-[#5B6D53]">
              Katie Mott, 4th Grade Teacher, Prairie Queen Elementary, Papillion, Nebraska
            </footer>
          </blockquote>
          <blockquote className="rounded-[1.8rem] border-l-4 border-[#4A7C59] bg-[#EDF3EA] p-7 shadow-[0_18px_36px_rgba(96,87,62,0.1)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4A7C59]">From educators</p>
            <p className="mt-4 text-lg leading-8 text-[#31405C]">
              He truly pours his heart into each lesson and students feel that. He's supportive and honest; thoughtful and silly. He works hard to make learning come alive so that every child feels like an author. 'Jeff Kurrus Days' are a core memory for every student who has had the chance to experience them.
            </p>
            <footer className="mt-5 text-sm font-semibold text-[#5B6D53]">
              Mrs. Lisa Giles, 4th grade teacher, Ashbury Elementary
            </footer>
          </blockquote>
          {/* Smaller secondary Jeanna White quote — her in-classroom observation. Lighter visual weight to avoid duplicate-attribution feel. */}
          <blockquote className="rounded-[1.5rem] border border-[color:rgba(196,136,58,0.25)] bg-[#FFF8ED] p-6 shadow-[0_10px_20px_rgba(96,87,62,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C4883A]">In the classroom</p>
            <p className="mt-3 text-base leading-7 text-[#31405C]">
              One moment, the room is roaring with laughter. The next, it is filled with focused silence as students craft their stories with purpose and confidence.
            </p>
            <footer className="mt-4 text-xs font-semibold text-[#5B6D53]">
              Jeanna White, Facilitator of Curriculum and Instruction
            </footer>
          </blockquote>
          <div className="rounded-[1.8rem] border-l-4 border-[#1B2A4A] bg-[#EEF1F6] p-7 shadow-[0_18px_36px_rgba(96,87,62,0.1)] lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1B2A4A]">What parents are saying</p>
            <div className="mt-4 flex justify-center">
              <img
                src={visualAssets.uploaded.readerCouch}
                alt="Boy reading a Jeff Kurrus book on the couch"
                className="h-[220px] w-full rounded-[1.2rem] object-cover object-[center_65%] sm:h-[280px]"
              />
            </div>
            <p className="mt-5 text-lg leading-8 text-[#31405C]">
              My son started your book on our drive home from school yesterday, read for 3 solid hours, woke up and finished the book by 7am this morning! He'd like to know when book 2 will be done.
            </p>
            <footer className="mt-5 text-sm font-semibold text-[#5B6D53]">
              -- Parent
            </footer>
          </div>
        </div>
      </section>

      {/* School visit photos — full-width, larger, no crop. (SV-2, L8) */}
      <section className="container pb-12 sm:pb-16">
        <div className="soft-card overflow-hidden" style={{ backgroundColor: "#FFF8ED" }}>
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="section-label">School visit photos</p>
            <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <img
                src={visualAssets.uploaded.schoolVisit1}
                alt="Donnie Bats poster created by students during Jeff Kurrus school visit"
                className="h-[460px] w-full rounded-[1.5rem] bg-[#f5f3ee] object-contain shadow-[0_18px_32px_rgba(96,87,62,0.1)] sm:h-[560px]"
              />
              <img
                src={visualAssets.uploaded.schoolVisitTurtle}
                alt="Students with turtle during outdoor portion of Jeff Kurrus school visit"
                className="h-[460px] w-full rounded-[1.5rem] bg-[#f5f3ee] object-contain shadow-[0_18px_32px_rgba(96,87,62,0.1)] sm:h-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking inquiry form — own section so the photos above can breathe at full width. */}
      <section className="container pb-16 sm:pb-20">
        <div className="soft-card overflow-hidden" style={{ backgroundColor: "#FFF8ED" }}>
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5F7752]">Booking inquiry form</p>
            <p className="mt-2 max-w-2xl text-base leading-7 text-[#5D6475]">Send the details and Jeff will reply with available dates and pricing for your situation.</p>
              <form action="https://formspree.io/jeffreyekurrus@gmail.com" method="POST" className="mt-6 space-y-4">
                <input type="hidden" name="_subject" value="School Visit Booking Inquiry -- jeffkurrus.com" />
                <input type="hidden" name="inquiry_type" value="School Visit" />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                <input type="text" name="name" placeholder="Name *" required className="w-full rounded-2xl border border-[color:rgba(96,87,62,0.16)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#5F7752]" />
                <input type="text" name="school" placeholder="School / Organization *" required className="w-full rounded-2xl border border-[color:rgba(96,87,62,0.16)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#5F7752]" />
                <select name="role" required className="w-full rounded-2xl border border-[color:rgba(96,87,62,0.16)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#5F7752]">
                  <option value="" disabled selected>Role *</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Librarian">Librarian</option>
                  <option value="Principal">Principal</option>
                  <option value="PTO">PTO</option>
                  <option value="Other">Other</option>
                </select>
                <input type="email" name="email" placeholder="Email *" required className="w-full rounded-2xl border border-[color:rgba(96,87,62,0.16)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#5F7752]" />
                <input type="tel" name="phone" placeholder="Phone *" required className="w-full rounded-2xl border border-[color:rgba(96,87,62,0.16)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#5F7752]" />
                <input type="text" name="grade_levels" placeholder="Grade Levels" className="w-full rounded-2xl border border-[color:rgba(96,87,62,0.16)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#5F7752]" />
                <input type="text" name="preferred_date" placeholder="Preferred Dates" className="w-full rounded-2xl border border-[color:rgba(96,87,62,0.16)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#5F7752]" />
                <textarea name="message" placeholder="Message" rows={4} className="w-full rounded-[1.5rem] border border-[color:rgba(96,87,62,0.16)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#5F7752]" />
                <button type="submit" className="w-full rounded-full bg-[#5F7752] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#4F6644]">
                  Book a Visit
                </button>
              </form>
          </div>
        </div>
      </section>
    </div>
  );
}
