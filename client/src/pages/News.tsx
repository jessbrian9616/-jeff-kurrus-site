/*
Design philosophy for this file: News is the cross-promotion engine.
Flow per Jess 2026-04-30: hero → FROM JEFF zone (school visits, awards, community) → FROM NEBRASKALAND zone (editorial gateway, magazine context).
The "From Nebraskaland Magazine" zone is a curated set of static gateway
cards pointing at official Nebraskaland destinations (Phase 1A).
The previous weekly auto-pull workflow (kurrus-news-refresh writing into
client/src/data/news-feed.json's latestFromNebraskaland field) is being
intentionally retired in Phase 1B; Phase 1A is the code-only swap.
aroundJeff still drives Jeff's personal news cards from
client/src/data/news-feed.json. The currentIssue conditional is left
intact and dormant for an optional future hand-curated cover slot.
This page highlights Jeff's editorial connection to Nebraskaland while
directing readers to official Nebraskaland destinations.
*/
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";
import { visualAssets } from "@/lib/siteContent";
import newsFeed from "@/data/news-feed.json";

type AroundJeffItem = {
  title: string;
  // date, link, image, focalPoint, and nebraskalandSource are optional. Some entries
  // (Instagram-sourced or pre-publish stories) only have title, excerpt, image.
  // When nebraskalandSource is true AND link exists, the whole card becomes a
  // clickable link to the Nebraskaland content (no inner Learn More button).
  // focalPoint controls how the image crops in the card thumbnail (CSS object-position
  // value, e.g., "center top", "center 30%", "left center"). Defaults to "center top"
  // to preserve heads/faces in portrait-style photos. Override per-image when needed.
  date?: string;
  excerpt: string;
  link?: string;
  // pinned: true forces this item to the top of "Recent updates", above undated
  // and dated items alike. Use sparingly — one item at a time. (2026-09-01)
  pinned?: boolean;
  image?: string;
  focalPoint?: string;
  nebraskalandSource?: boolean;
};

type CurrentIssue = {
  coverImage: string;
  issueMonth: string;
  issueYear: number;
  highlightStory?: { title: string; page?: number; byline?: string };
  subscribeLink?: string;
};

// Static Nebraskaland gateway cards (Phase 1A).
// Hand-curated, verified against Nebraskaland Magazine's official public navigation.
// Replaces the previous auto-pulled "Latest from Nebraskaland" feed.
// To update a destination: edit this array and re-push via commit-and-push.sh.
const nebraskalandGateway = [
  {
    eyebrow: "Magazine",
    title: "Nebraskaland Magazine",
    description: "Nebraska's flagship outdoor magazine, featuring stories, photography, wildlife, conservation, outdoor recreation, history, and culture from across the state.",
    linkLabel: "Visit Nebraskaland →",
    url: "https://magazine.outdoornebraska.gov/",
  },
  {
    eyebrow: "Jeff",
    title: "Jeff's Nebraskaland articles",
    description: "Jeff's official Nebraskaland author archive, including stories, photography, editorials, and magazine features under his byline.",
    linkLabel: "Read Jeff's articles →",
    url: "https://magazine.outdoornebraska.gov/author/jeff-kurrus/",
  },
  {
    eyebrow: "Stories",
    title: "Feature stories",
    description: "Long-form Nebraskaland stories on wildlife, conservation, hunting, fishing, photography, travel, history, and Nebraska's outdoor culture.",
    linkLabel: "Read stories →",
    url: "https://magazine.outdoornebraska.gov/category/stories/",
  },
  {
    eyebrow: "Voices",
    title: "Voices",
    description: "Nebraskaland's editorial voices, including Barbs and Backlashes, In the Wild, Nebraska Nature, and Nebraskaland Magazine Podcasts.",
    linkLabel: "Read Voices →",
    url: "https://magazine.outdoornebraska.gov/voices/",
  },
  {
    eyebrow: "Archive",
    title: "Archives and digital issues",
    description: "Nebraskaland's archive hub, with pathways to the digital archive, recent digital issues, and photo library resources.",
    linkLabel: "Open the archive →",
    url: "https://magazine.outdoornebraska.gov/about/archive/",
  },
  {
    eyebrow: "Subscribe",
    title: "Subscribe",
    description: "Subscribe to Nebraskaland Magazine in print or digital and support Nebraska's outdoor storytelling, photography, and conservation coverage.",
    linkLabel: "Subscribe →",
    url: "https://magazine.outdoornebraska.gov/subscribe/",
  },
] as const;

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
};

export default function News() {
  usePageMeta(
    "News & Events",
    "Jeff Kurrus's news, school visits, book awards, and editorial work at Nebraskaland Magazine."
  );

  const aroundJeff = (newsFeed.aroundJeff ?? []) as AroundJeffItem[];
  const currentIssue = (newsFeed as { currentIssue?: CurrentIssue }).currentIssue;

  // Sort aroundJeff items chronologically. Convention:
  // - pinned: true items lead, above everything. (Added 2026-09-01, Jess's call.)
  // - Items without a date come next (treated as "currently happening" / ongoing).
  // - Dated items follow, sorted by date descending (newest first).
  // - Future-dated items (e.g., upcoming launches) naturally appear at the top of
  //   the dated section because they are "newest" by date.
  // This keeps the feed predictable and is the standard "what's new" presentation.
  //
  // WHY pinning was added: taking the (false) December 2026 release date off the
  // Return of Donnie Bats card left that card undated, and the undated-first rule
  // then pushed it above the Nebraska Book Award win — burying the most valuable
  // fact on the site under a placeholder. Pinning fixes that without inventing a
  // date for Book 2 and without deleting the card. Keep pinned items to one or two;
  // pinning everything pins nothing.
  const sortedAroundJeff = [...aroundJeff].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    if (!a.date && b.date) return -1;
    if (a.date && !b.date) return 1;
    if (!a.date && !b.date) return 0;
    return new Date(b.date!).getTime() - new Date(a.date!).getTime();
  });

  return (
    <div className="page-shell">
      <div className="relative">
        <PageHero
          eyebrow="News"
          title="What I've been writing, where I've been visiting, and what's new at Nebraskaland."
          description="School visits, book news, community updates, and official pathways into Jeff's work with Nebraskaland Magazine."
          image={visualAssets.jkPhotography.doubleRainbowDirtRoad}
          imagePosition="center center"
        />
        {/* Hero photo credit. Pinned inside the rounded hero box via a container-width
            overlay so the credit stays inside the rounded corner on every breakpoint
            (was right-edge of full page width pre-Phase-1A.1 and could land in the
            gutter on desktop where text-white/70 went invisible against the page
            background). The subtle dark pill ensures legibility regardless of the
            underlying photo brightness. Overlay is pointer-events-none so it never
            intercepts clicks on the hero itself. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-end">
          <div className="container">
            <span className="mr-8 mb-6 inline-flex rounded-full bg-black/35 px-3 py-1 text-[0.7rem] tracking-[0.06em] text-white/95 backdrop-blur-sm sm:mr-12 sm:mb-8 lg:mr-16 lg:mb-10">Courtesy of Nebraskaland Magazine</span>
          </div>
        </div>
      </div>

      {/* ZONE 1: FROM JEFF — school visits, books, community appearances.
          Per Jess 2026-04-30: this zone leads the page after the hero. */}
      <section className="container pt-16 sm:pt-20">
        <div className="mb-10 border-t-4 border-[#4A7C59] pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4A7C59]">From Jeff</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">School visits, books, and what's coming next.</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#5D6475]">Author events, award news, and community presentations across Nebraska.</p>
        </div>
      </section>

      {/* Recent updates */}
      <section className="container pb-12 sm:pb-16">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#1B2A4A]">Recent updates</h3>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#5D6475]">School visits, awards, community appearances, and book updates.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sortedAroundJeff.map((item) => {
            // When the entry is sourced from Nebraskaland AND has a link, the entire
            // card is a clickable link to that Nebraskaland content (no inner button).
            // Otherwise the card uses the existing inline-link pattern.
            const isClickableNebraskalandCard = !!(item.nebraskalandSource && item.link);
            const cardClassName = "overflow-hidden rounded-[1.75rem] border-l-4 border-[#1B2A4A] bg-[#EEF1F6] shadow-[0_16px_32px_rgba(27,42,74,0.06)] transition";
            const cardClickable = isClickableNebraskalandCard ? `${cardClassName} hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(27,42,74,0.12)] cursor-pointer` : cardClassName;

            const cardContent = (
              <>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[220px] w-full object-cover"
                    style={{ objectPosition: item.focalPoint || "center top" }}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                )}
                <div className="p-7">
                  {item.date && (
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B2A4A]">{formatDate(item.date)}</p>
                  )}
                  <h4 className={`${item.date ? "mt-3" : ""} text-xl font-semibold text-[#1B2A4A]`}>{item.title}</h4>
                  <p className="mt-4 text-base leading-7 text-[#445065]">{item.excerpt}</p>
                  {/* Inline Learn More button only renders when:
                      - link exists AND
                      - this is NOT a Nebraskaland-sourced clickable card */}
                  {item.link && !isClickableNebraskalandCard && (
                    item.link.startsWith("/") ? (
                      <Link href={item.link} className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-[#4A7C59] transition hover:text-[#3C6648]">
                        Learn more →
                      </Link>
                    ) : (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-[#4A7C59] transition hover:text-[#3C6648]">
                        Learn more →
                      </a>
                    )
                  )}
                </div>
              </>
            );

            // Whole-card click for Nebraskaland-sourced entries.
            if (isClickableNebraskalandCard && item.link) {
              return (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClickable}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <article key={item.title} className={cardClassName}>
                {cardContent}
              </article>
            );
          })}
        </div>
      </section>

      {/* Community presentations - lives within the FROM JEFF zone */}
      <section className="container pb-16 sm:pb-20">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-[#1B2A4A]">Community presentations</h3>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#5D6475]">Book clubs, civic groups, and specialty organizations across Nebraska.</p>
        </div>
        <div className="soft-card overflow-hidden lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <div
            className="min-h-[300px] lg:min-h-full"
            style={{
              backgroundImage: `url(${visualAssets.jkPhotography.duckDecoysWinter})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
          <div className="p-8 sm:p-10 lg:p-12">
            <h4 className="text-2xl font-semibold text-[#1B2A4A] sm:text-3xl">
              Book clubs, civic groups, and specialty organizations.
            </h4>
            <p className="mt-6 text-lg leading-8 text-[#445065]">
              Jeff speaks to book clubs, civic organizations, and specialty groups across Nebraska. He shares stories from his writing and photography career in a presentation tailored to your group's interests. No speaking fee required.
            </p>
            <Link
              href="/contact?type=General%20Inquiry#form"
              className="mt-8 inline-flex rounded-full bg-[#4A7C59] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3C6648]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ZONE 2: FROM NEBRASKALAND MAGAZINE — static editorial gateway, hand-curated.
          This page highlights Jeff's editorial connection to Nebraskaland while directing
          readers to official Nebraskaland destinations.
          id="nebraskaland" anchor lets the homepage Nebraskaland card scroll directly to this zone. */}
      <section id="nebraskaland" className="container pt-8 sm:pt-12 scroll-mt-24">
        <div className="mb-10 border-t-4 border-[#C5943A] pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5943A]">From Nebraskaland Magazine</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">Jeff is editor of Nebraskaland Magazine.</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#5D6475]">As editor of Nebraskaland Magazine, Jeff helps connect readers with the stories, photography, wildlife, conservation, and Nebraska landscapes that define the state. Use the official pathways below to explore Jeff's Nebraskaland work, feature stories, Voices, archives, digital issues, photography, and subscription options.</p>
        </div>
      </section>

      {/* Official Nebraskaland pathways - static gateway grid (Phase 1A). */}
      <section className="container pb-12 sm:pb-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-[#1B2A4A]">Official Nebraskaland pathways</h3>
            <p className="mt-2 max-w-2xl text-base leading-7 text-[#5D6475]">Direct links to evergreen sections of Nebraskaland Magazine.</p>
          </div>
          <a
            href="https://magazine.outdoornebraska.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex whitespace-nowrap rounded-full border border-[color:rgba(27,42,74,0.18)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1B2A4A] transition hover:border-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white"
          >
            Visit Nebraskaland Magazine
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {nebraskalandGateway.map((card) => (
            <a
              key={card.title}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-card flex flex-col p-7 transition hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(27,42,74,0.12)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B8860B]">{card.eyebrow}</p>
              <h3 className="mt-3 text-xl font-semibold text-[#1B2A4A]">{card.title}</h3>
              <p className="mt-4 flex-1 text-base leading-7 text-[#445065]">{card.description}</p>
              <span className="mt-5 inline-flex self-start text-sm font-semibold uppercase tracking-[0.14em] text-[#4A7C59] transition hover:text-[#3C6648]">
                {card.linkLabel}
              </span>
            </a>
          ))}
        </div>
        <p className="mt-8 text-sm text-[#5D6475]">
          <a
            href="https://magazine.outdoornebraska.gov/about/archive/digital-issues/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#4A7C59] transition hover:text-[#3C6648]"
          >
            Recent digital issues →
          </a>
          <span className="mx-3 text-[#C5943A]">·</span>
          <a
            href="https://magazine.outdoornebraska.gov/category/stories/photography/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#4A7C59] transition hover:text-[#3C6648]"
          >
            Photography →
          </a>
          <span className="mx-3 text-[#C5943A]">·</span>
          <a
            href="https://magazine.outdoornebraska.gov/about/shop-nebraskaland/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#4A7C59] transition hover:text-[#3C6648]"
          >
            Shop Nebraskaland →
          </a>
        </p>
      </section>

      {/* Current Issue - cover image with delayed mirror per audit P2.7. Renders only when news-feed.json includes a currentIssue object. */}
      {currentIssue && (
        <section className="container pb-12 sm:pb-16">
          <div className="grid gap-8 rounded-[1.75rem] border border-[color:rgba(27,42,74,0.10)] bg-white p-6 shadow-[0_18px_40px_rgba(27,42,74,0.08)] sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:p-10">
            <div className="overflow-hidden rounded-2xl bg-[#F3F0E7]">
              <img
                src={currentIssue.coverImage}
                alt={`Nebraskaland Magazine ${currentIssue.issueMonth} ${currentIssue.issueYear} cover`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5943A]">Current Issue</p>
              <h3 className="mt-3 text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">
                {currentIssue.issueMonth} {currentIssue.issueYear}
              </h3>
              {currentIssue.highlightStory && (
                <p className="mt-5 text-lg leading-8 text-[#445065]">
                  {currentIssue.highlightStory.byline ? `${currentIssue.highlightStory.byline}: ` : ""}
                  <em>{currentIssue.highlightStory.title}</em>
                  {currentIssue.highlightStory.page ? ` (page ${currentIssue.highlightStory.page})` : ""}
                </p>
              )}
              {currentIssue.subscribeLink && (
                <a
                  href={currentIssue.subscribeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex self-start rounded-full bg-[#1B2A4A] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#16233D]"
                >
                  Subscribe to Nebraskaland
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Nebraskaland Magazine featured callout — closes the FROM NEBRASKALAND zone. */}
      <section className="container pb-16 sm:pb-20">
        <div
          className="rounded-[1.75rem] border border-[color:rgba(96,87,62,0.16)] p-8 shadow-[0_24px_55px_rgba(76,59,37,0.10)] sm:p-10 lg:p-12"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(251,244,230,0.95), rgba(247,236,208,0.88)), url(${visualAssets.jkPhotography.foggyDockMahoney})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5943A]">About the magazine</p>
          <h3 className="mt-3 max-w-3xl text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">
            50+ national awards and counting.
          </h3>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#445065]">
            The magazine and its staff, during my tenure as editor since 2013, has won more than 50 national awards. Nebraskaland Magazine has been part of readers' lives since 1926, covering Nebraska's outdoor heritage, wildlife, and landscapes with photography and storytelling that holds up against anything in the country.
          </p>
        </div>
      </section>
    </div>
  );
}
