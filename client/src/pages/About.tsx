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
              <p><strong>I write baseball chapter books for boys who would rather be outside than reading.</strong></p>
              <p><strong>I have been the editor of Nebraskaland Magazine for the Nebraska Game and Parks Commission since 2006. Named editor in 2013.</strong></p>
              <p><strong>Before Donnie Bats, I spent years behind a camera. Sandhill cranes on the Platte River. Swift foxes in the short grass. Whooping cranes along the Central Flyway. Somewhere in that work I realized the same thing that makes a good wildlife photograph makes a good story for kids: you have to be patient, you have to pay attention, and you have to tell the truth about what you see.</strong></p>
              <p><strong>Have You Seen Mary? was represented by Mansion Street Literary Management in New York. They pitched it to Penguin and Simon and Schuster. The publishers passed on the format. A photo-driven children's book was too unfamiliar. Not the quality.</strong></p>
              <p><strong>Joel Sartore, founder of National Geographic Photo Ark, endorsed Have You Seen Mary?</strong></p>
              <p><strong>Have You Seen Mary? was a Golden Sower Award nominee. The Nebraska Library Association runs the award. More than 75,000 students voted that year.</strong></p>
              <p><strong>More than 25,000 copies of my books are in readers' hands.</strong></p>
              <p><strong>I have been visiting schools across Nebraska for years. Reading to kids. Talking about writing. Signing books at the table afterward.</strong></p>
              <p><strong>I also lead author workshops and photography workshops, and I photograph seniors and families in the Gretna and Omaha area.</strong></p>
              <p><strong>I grew up in Memphis, Tennessee. BA from the University of Memphis, 1998. MA in English and Creative Nonfiction from the University of Nebraska at Omaha, 2002.</strong></p>
              <p><strong>I live in Gretna, Nebraska with my family.</strong></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
