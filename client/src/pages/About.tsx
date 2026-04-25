/*
Design philosophy for this file: the about page should feel like a long-form profile.
Use measured rhythm, careful line length, and a balance between literary credibility and visual professionalism.
*/
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";
import { visualAssets } from "@/lib/siteContent";

export default function About() {
  usePageMeta("About Jeff Kurrus", "From Memphis to Nebraska, Jeff Kurrus became an award-winning children's book author, Nebraskaland Magazine editor, and professional outdoor photographer. Read his story.");
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="About"
        title="20 years of writing, photography, and showing up in classrooms."
        description="Jeff Kurrus is the editor of Nebraskaland Magazine, a Golden Sower-nominated children's book author, and a professional photographer based in Gretna, Nebraska."
        image={visualAssets.jkPhotography.heroBarnGoldenHour}
        imagePosition="center center"
      />

      <section className="container py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-5 lg:sticky lg:top-8">
            <div className="rounded-[1.75rem] bg-[#1B2A4A] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Credentials</p>
              <p className="mt-3 text-base leading-7 text-white/80">Editor, Nebraskaland Magazine (est. 1926). 20+ years professional outdoor photography. Golden Sower Award nominee. 25,000+ books in readers' hands. Endorsed by Joel Sartore, National Geographic Photo Ark.</p>
            </div>
            <img
              src={visualAssets.uploaded.senior04}
              alt="Young photographer with a 'Never Give Up' shirt in a golden field by Jeff Kurrus"
              className="h-[300px] w-full rounded-[1.75rem] object-cover object-[center_top] shadow-[0_24px_50px_rgba(27,42,74,0.14)] sm:h-[360px]"
            />
            <img
              src={visualAssets.jkPhotography.lakeDiveSunset}
              alt="Sunset lake dive scene, photographed by Jeff Kurrus"
              className="h-[300px] w-full rounded-[1.75rem] object-cover object-center shadow-[0_24px_50px_rgba(27,42,74,0.14)] sm:h-[360px]"
            />
          </div>
          <div className="soft-card p-8 sm:p-10 lg:p-12">
            <p className="section-label">In his own words</p>
            <div className="space-y-6 text-lg leading-8 text-[#445065]">
              <p>I grew up in Shelby Forest, a suburb of sorts outside of Memphis, Tennessee. There, I spent my days in the outdoors -- catching fish, hunting ducks, and ... writing.</p>
              <p>I've always loved to write, even though I wasn't an A student in English in grade school, high school, or college.</p>
              <p>But that didn't stop me. I got the publishing bug when I was studying at the University of Memphis, writing outdoor articles for Game &amp; Fish Magazine. I stared at my first assignment sheet for a month before starting, then gazed at that little $150 check after the article's publication like it was a gold bar.</p>
              <p>From there, I continued to send work to publishers even while I was teaching high school English, receiving hundreds upon hundreds of rejections and getting just enough accepted to maintain my confidence.</p>
              <p>That confidence landed me a job at Nebraskaland Magazine, where the staff had more than 150 years of experience and taught me the eccentricities of photography and the writing process. Today I serve as the magazine's editor -- an award-winning outdoor publication that has been part of readers' lives since 1926, and with any luck, will continue for another hundred years.</p>
              <p>Then I asked a simple question: What happens when two sandhill cranes who are lifelong mates become separated from each other on the Platte River during migration? Six months after this question I was staring at my first children's book: Have You Seen Mary?</p>
              <p>I followed this with The Tale of Jacob Swift and Can You Dance Like John? but couldn't help thinking about my other lifelong love: baseball.</p>
              <p>My next two years were spent working on The Legend of Donnie Bats, the most enjoyable experience of my writing career. Only to be kept up at night when I began writing The Return of Donnie Bats.</p>
              <p>It's the best insomnia I've ever had.</p>
              <p>From sandhill cranes to swift foxes to a young baseball player still uncovering his hidden talent, the subject changes -- but the goal stays the same: capture attention and tell the truth about what's there.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="soft-card overflow-hidden lg:grid lg:grid-cols-2 lg:items-center">
          <img
            src={visualAssets.jkPhotography.sunflowerLight}
            alt="Wild sunflowers with a beam of light across a Nebraska field, photographed by Jeff Kurrus"
            className="h-[300px] w-full object-cover object-center lg:h-[340px]"
          />
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="section-label">Behind the camera</p>
            <h2 className="text-3xl font-semibold text-[#1B2A4A]">The camera came first. The writing followed.</h2>
            <p className="mt-6 text-lg leading-8 text-[#445065]">
              Jeff learned to see before he learned to write. Years of fieldwork for Nebraskaland Magazine, shooting everything from Sandhills sunrises to whitetail in winter, shaped how he builds a scene on the page. Today that same discipline carries into senior portrait sessions across the Gretna and Omaha area.
            </p>
          </div>
        </div>
      </section>

      {/* Soft conversion CTAs so the About page doesn't dead-end (§7 conversion-path check) */}
      <section className="container pb-16 sm:pb-20">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/school-visits" className="soft-card flex items-center justify-between gap-4 p-6 transition hover:-translate-y-0.5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5F7752]">For educators</p>
              <p className="mt-2 text-lg leading-7 text-[#22304F]">Bring Jeff to your school.</p>
            </div>
            <span className="text-2xl text-[#4A7C59]">→</span>
          </Link>
          <Link href="/photography" className="soft-card flex items-center justify-between gap-4 p-6 transition hover:-translate-y-0.5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">For families</p>
              <p className="mt-2 text-lg leading-7 text-[#22304F]">See senior photo sessions.</p>
            </div>
            <span className="text-2xl text-[#B8860B]">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
