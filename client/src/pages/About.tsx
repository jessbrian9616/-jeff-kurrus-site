/*
Design philosophy for this file: the about page should feel like a long-form profile.
Use measured rhythm, careful line length, and a balance between literary credibility and visual professionalism.
*/
import PageHero from "@/components/PageHero";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import { visualAssets } from "@/lib/siteContent";

export default function About() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="About"
        title="The author formation story behind the books and the camera."
        description="A full first-person narrative that connects children's publishing, wildlife photography, and years of work across Nebraska."
        image={visualAssets.generated.heroPrairie}
        dark={false}
      />

      <section className="container py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <PlaceholderBlock label="AUTHOR PHOTO: Jeff's environmental portrait, outdoor setting, golden hour. Photo not yet available." className="min-h-[520px] bg-[#1B2A4A]" />
          <div className="soft-card p-8 sm:p-10 lg:p-12">
            <p className="section-label">First person</p>
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
    </div>
  );
}
