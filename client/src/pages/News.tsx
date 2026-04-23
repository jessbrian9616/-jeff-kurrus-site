/*
Design philosophy for this file: the news page should feel like an editorial bulletin board.
Combine Nebraskaland Magazine credibility with upcoming events in a scannable, warm layout.
Use card-based event listings, a featured callout for the magazine, and a clear community CTA.
*/
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import { visualAssets } from "@/lib/siteContent";

const upcomingEvents = [
  {
    date: "May 2025",
    title: "Thedford School Visit",
    description:
      "Jeff brings his Writer's Workshop to Thedford, Nebraska. Students will hear from Donnie Bats, learn the 7 Question Words, and leave with signed books.",
  },
  {
    date: "End of May",
    title: "Radio Show",
    description:
      "Jeff joins the airwaves to talk about children's books, writing process, and life behind the camera at Nebraskaland Magazine.",
  },
  {
    date: "TBA",
    title: "Podcast Guest",
    description:
      "Details coming soon. Jeff will be a guest on a podcast discussing storytelling, photography, and Nebraska's outdoor culture.",
  },
  {
    date: "July",
    title: "ACI Awards for Magazine",
    description:
      "Nebraskaland Magazine competes at the ACI (Association for Communication Excellence) national awards. The magazine and staff have won more than 50 national awards under Jeff's editorship.",
  },
  {
    date: "Fall 2025",
    title: "Return of Donnie Bats Excerpts",
    description:
      "Early excerpts from The Return of Donnie Bats will begin appearing. The sequel to the beloved baseball chapter book arrives December 2026.",
  },
];

const recentOngoing = [
  {
    title: "Author in Residence Re-up in Papillion",
    description:
      "Jeff continues his Author in Residence role in Papillion, working directly with student writers across multiple grade levels throughout the school year.",
  },
  {
    title: "Nebraskaland Magazine Durham Exhibit",
    description:
      "A selection of Jeff's photography and editorial work from Nebraskaland Magazine is featured in the Durham Museum exhibit highlighting Nebraska's outdoor heritage.",
  },
  {
    title: "New Issue of Nebraskaland",
    description:
      "The latest issue of Nebraskaland Magazine is on newsstands now. An award-winning outdoor publication that has been part of readers' lives since 1926.",
  },
];

export default function News() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="News"
        title="What's happening with Jeff's books, school visits, and Nebraskaland Magazine."
        description="Upcoming events, magazine awards, and community presentations across Nebraska."
        image={visualAssets.jkPhotography.heroPrairieGrass}
        imagePosition="center 60%"
      />

      {/* Nebraskaland Magazine featured callout */}
      <section className="container py-16 sm:py-20">
        <div
          className="rounded-[1.75rem] border border-[color:rgba(96,87,62,0.16)] p-8 shadow-[0_24px_55px_rgba(76,59,37,0.10)] sm:p-10 lg:p-12"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(251,244,230,0.95), rgba(247,236,208,0.88)), url(${visualAssets.jkPhotography.foggyDockMahoney})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="section-label">Nebraskaland Magazine</p>
          <h2 className="max-w-3xl text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">
            50+ national awards and counting.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#445065]">
            The magazine and its staff, during my tenure as editor since 2013, has won more than 50 national awards. Nebraskaland Magazine has been part of readers' lives since 1926, covering Nebraska's outdoor heritage, wildlife, and landscapes with photography and storytelling that holds up against anything in the country.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container pb-16 sm:pb-20">
        <p className="section-label">Upcoming events</p>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {upcomingEvents.map((event) => (
            <article
              key={event.title}
              className="soft-card p-7"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">
                {event.date}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[#1B2A4A]">
                {event.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[#445065]">
                {event.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Recent / Ongoing */}
      <section className="container pb-16 sm:pb-20">
        <p className="section-label">Recent and ongoing</p>
        <div className="grid gap-5 lg:grid-cols-3">
          {recentOngoing.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-[color:rgba(27,42,74,0.08)] bg-[#FBFAF6] p-7 shadow-[0_18px_35px_rgba(27,42,74,0.05)]"
            >
              <h3 className="text-xl font-semibold text-[#1B2A4A]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[#445065]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Community Presentations */}
      <section className="container pb-16 sm:pb-20">
        <div className="soft-card overflow-hidden lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <div
            className="min-h-[300px] lg:min-h-full"
            style={{
              backgroundImage: `url(${visualAssets.jkPhotography.doubleRainbowDirtRoad})`,
              backgroundSize: "cover",
              backgroundPosition: "center 55%",
            }}
          />
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="section-label">Community presentations</p>
            <h2 className="text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">
              Book clubs, civic groups, and specialty organizations.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#445065]">
              Jeff speaks to book clubs, civic organizations, and specialty groups across Nebraska. He shares stories from his writing and photography career in a presentation tailored to your group's interests. No speaking fee required.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#4A7C59] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3C6648]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
