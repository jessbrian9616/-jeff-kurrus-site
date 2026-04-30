/*
Design philosophy for this file: News is the cross-promotion engine.
The "Latest from Nebraskaland Magazine" block is auto-fed from
client/src/data/news-feed.json (refreshed weekly by Claude scheduled task
'kurrus-news-refresh' against /wp-json/wp/v2/posts?author=8). This page
borrows Nebraskaland's authority every time an agent or librarian visits
jeffkurrus.com - exactly the cross-flow Brand Strategy v3 §5 calls for.
*/
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";
import { visualAssets } from "@/lib/siteContent";
import newsFeed from "@/data/news-feed.json";

type NebraskalandPost = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  link: string;
  category: string;
};

type AroundJeffItem = {
  title: string;
  date: string;
  excerpt: string;
  link: string;
};

type CurrentIssue = {
  coverImage: string;
  issueMonth: string;
  issueYear: number;
  highlightStory?: { title: string; page?: number; byline?: string };
  subscribeLink?: string;
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
};

export default function News() {
  usePageMeta(
    "News & Events",
    "Recent bylines from Nebraskaland Magazine, school visit updates, book award news, and the latest on The Return of Donnie Bats. Updated weekly."
  );

  const nebraskalandPosts = (newsFeed.latestFromNebraskaland ?? []) as NebraskalandPost[];
  const aroundJeff = (newsFeed.aroundJeff ?? []) as AroundJeffItem[];
  const currentIssue = (newsFeed as { currentIssue?: CurrentIssue }).currentIssue;

  return (
    <div className="page-shell">
      <div className="relative">
        <PageHero
          eyebrow="News"
          title="What I've been writing, where I've been visiting, and what's new at Nebraskaland."
          description="Recent bylines, school visits, and what's coming next. This page refreshes itself."
          image={visualAssets.jkPhotography.doubleRainbowDirtRoad}
          imagePosition="center center"
        />
        <span className="absolute bottom-4 right-8 text-[0.7rem] tracking-[0.06em] text-white/70">Courtesy of Nebraskaland Magazine</span>
      </div>

      {/* ZONE 1: From Nebraskaland Magazine. Editorial work, auto-pulled. */}
      <section className="container pt-16 sm:pt-20">
        <div className="mb-10 border-t-4 border-[#C5943A] pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5943A]">From Nebraskaland Magazine</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">Jeff's editorial work, refreshed weekly.</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#5D6475]">Recent bylines, the current issue, and the magazine itself.</p>
        </div>
      </section>

      {/* Latest from Nebraskaland - auto-pulled from /wp-json/wp/v2/posts?author=8 */}
      <section className="container pb-12 sm:pb-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-[#1B2A4A]">Latest bylines</h3>
            <p className="mt-2 max-w-2xl text-base leading-7 text-[#5D6475]">Recent stories from Jeff at Nebraskaland Magazine. Updated automatically each week.</p>
          </div>
          <a
            href="https://magazine.outdoornebraska.gov/author/jeff-kurrus/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-[color:rgba(27,42,74,0.18)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1B2A4A] transition hover:border-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white"
          >
            Read more on Nebraskaland
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {nebraskalandPosts.map((post) => (
            <article key={post.id} className="soft-card flex flex-col p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B8860B]">{post.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-[#1B2A4A]">{post.title}</h3>
              <p className="mt-2 text-sm text-[#5D6475]">{formatDate(post.date)}</p>
              <p className="mt-4 flex-1 text-base leading-7 text-[#445065]">{post.excerpt}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex self-start text-sm font-semibold uppercase tracking-[0.14em] text-[#4A7C59] transition hover:text-[#3C6648]"
              >
                Read on Nebraskaland →
              </a>
            </article>
          ))}
        </div>
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

      {/* Nebraskaland Magazine featured callout */}
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

      {/* ZONE 2: From Jeff. School visits, books, community appearances. */}
      <section className="container pt-8 sm:pt-12">
        <div className="mb-10 border-t-4 border-[#4A7C59] pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4A7C59]">From Jeff</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">School visits, books, and what's coming next.</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#5D6475]">Author events, award news, and community presentations across Nebraska.</p>
        </div>
      </section>

      {/* What's happening with Jeff */}
      <section className="container pb-12 sm:pb-16">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#1B2A4A]">Recent updates</h3>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#5D6475]">School visits, awards, community appearances, and book updates.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {aroundJeff.map((item) => (
            <article key={item.title} className="rounded-[1.75rem] border-l-4 border-[#1B2A4A] bg-[#EEF1F6] p-7 shadow-[0_16px_32px_rgba(27,42,74,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B2A4A]">{formatDate(item.date)}</p>
              <h4 className="mt-3 text-xl font-semibold text-[#1B2A4A]">{item.title}</h4>
              <p className="mt-4 text-base leading-7 text-[#445065]">{item.excerpt}</p>
              {item.link?.startsWith("/") ? (
                <Link href={item.link} className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-[#4A7C59] transition hover:text-[#3C6648]">
                  Learn more →
                </Link>
              ) : (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-[#4A7C59] transition hover:text-[#3C6648]">
                  Learn more →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Community Presentations - lives within the From Jeff zone */}
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
