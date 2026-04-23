from pathlib import Path

project = Path('/home/ubuntu/jeff-kurrus-site')

files = {
    'client/index.html': '''<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>Jeff Kurrus</title>
    <meta
      name="description"
      content="Jeff Kurrus is a children's book author, school visit presenter, and photographer based in Gretna, Nebraska."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <script
      defer
      src="%VITE_ANALYTICS_ENDPOINT%/umami"
      data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"></script>
  </body>
</html>
''',
    'client/src/App.tsx': '''import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteLayout from "./components/SiteLayout";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import News from "./pages/News";
import Photography from "./pages/Photography";
import SchoolVisits from "./pages/SchoolVisits";

function Router() {
  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/school-visits" component={SchoolVisits} />
        <Route path="/about" component={About} />
        <Route path="/photography" component={Photography} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </SiteLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
''',
    'client/src/index.css': '''/*
Design philosophy for this file: editorial naturalism with contemporary gallery minimalism.
Use museum-white surfaces, disciplined navy typography, restrained green accents, and warm gold highlights.
Favor crisp geometry, generous whitespace, subtle texture, and premium readability over trendy effects.
*/
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --font-sans: "Source Sans 3", sans-serif;
  --font-display: "Manrope", sans-serif;
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
}

:root {
  --radius: 1rem;
  --background: oklch(0.991 0.004 95.1);
  --foreground: oklch(0.271 0.038 269.3);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.271 0.038 269.3);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.271 0.038 269.3);
  --primary: oklch(0.311 0.063 266.4);
  --primary-foreground: oklch(0.985 0.002 95);
  --secondary: oklch(0.962 0.007 108.2);
  --secondary-foreground: oklch(0.271 0.038 269.3);
  --muted: oklch(0.96 0.004 95);
  --muted-foreground: oklch(0.496 0.03 264);
  --accent: oklch(0.63 0.083 146.5);
  --accent-foreground: oklch(0.985 0.002 95);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.899 0.014 98.2);
  --input: oklch(0.92 0.01 98.1);
  --ring: oklch(0.63 0.083 146.5);
}

.dark {
  --background: oklch(0.22 0.026 266.5);
  --foreground: oklch(0.96 0.004 95);
  --card: oklch(0.26 0.022 266.5);
  --card-foreground: oklch(0.96 0.004 95);
  --popover: oklch(0.26 0.022 266.5);
  --popover-foreground: oklch(0.96 0.004 95);
  --primary: oklch(0.72 0.065 87.2);
  --primary-foreground: oklch(0.24 0.022 266.5);
  --secondary: oklch(0.33 0.018 266.5);
  --secondary-foreground: oklch(0.96 0.004 95);
  --muted: oklch(0.3 0.018 266.5);
  --muted-foreground: oklch(0.8 0.01 95);
  --accent: oklch(0.68 0.085 146.5);
  --accent-foreground: oklch(0.22 0.026 266.5);
  --destructive: oklch(0.704 0.191 22.216);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(1 0 0 / 12%);
  --input: oklch(1 0 0 / 16%);
  --ring: oklch(0.68 0.085 146.5);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground antialiased;
    font-family: var(--font-sans);
    background-image:
      radial-gradient(circle at top left, rgba(74, 124, 89, 0.08), transparent 28%),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(250, 248, 243, 0.98));
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-display);
    letter-spacing: -0.03em;
  }

  p {
    text-wrap: pretty;
  }

  button:not(:disabled),
  [role="button"]:not([aria-disabled="true"]),
  [type="button"]:not(:disabled),
  [type="submit"]:not(:disabled),
  [type="reset"]:not(:disabled),
  a[href],
  select:not(:disabled),
  input[type="checkbox"]:not(:disabled),
  input[type="radio"]:not(:disabled) {
    @apply cursor-pointer;
  }
}

@layer components {
  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .flex {
    min-width: 0;
    min-height: 0;
  }

  .section-label {
    @apply mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[color:#4A7C59];
  }

  .section-label::before {
    content: "";
    width: 2.5rem;
    height: 1px;
    background: rgba(74, 124, 89, 0.55);
  }

  .page-shell {
    @apply relative overflow-hidden bg-white;
  }

  .page-shell::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: radial-gradient(rgba(27, 42, 74, 0.05) 0.7px, transparent 0.7px);
    background-size: 18px 18px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.22), transparent 55%);
  }

  .editorial-grid {
    display: grid;
    gap: 1.5rem;
  }

  .soft-card {
    @apply rounded-[1.5rem] border border-[color:rgba(27,42,74,0.08)] bg-white/92 shadow-[0_24px_60px_rgba(27,42,74,0.08)] backdrop-blur;
  }

  .grain-overlay {
    position: relative;
  }

  .grain-overlay::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.12;
    mix-blend-mode: multiply;
    background-image:
      linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
      radial-gradient(circle at 20% 20%, rgba(139, 115, 85, 0.25), transparent 18%),
      radial-gradient(circle at 80% 40%, rgba(74, 124, 89, 0.18), transparent 20%);
  }

  .text-balance {
    text-wrap: balance;
  }

  @media (min-width: 640px) {
    .container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      max-width: 1280px;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .editorial-grid {
      grid-template-columns: 1.2fr 0.8fr;
      align-items: end;
      gap: 2rem;
    }
  }
}
''',
    'client/src/components/PlaceholderBlock.tsx': '''/*
Design philosophy for this file: placeholders should feel curated and intentional, not temporary or careless.
Use deep natural tones, restrained framing, and clear labeling so missing assets still support the premium editorial aesthetic.
*/
type PlaceholderBlockProps = {
  label: string;
  className?: string;
};

export default function PlaceholderBlock({ label, className = "" }: PlaceholderBlockProps) {
  return (
    <div
      className={`grain-overlay relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#2D4A3A] p-8 text-center shadow-[0_30px_60px_rgba(22,33,29,0.28)] ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_40%,rgba(184,134,11,0.16))]" />
      <div className="relative max-w-md text-sm font-semibold uppercase tracking-[0.22em] text-white/92">
        {label}
      </div>
    </div>
  );
}
''',
    'client/src/components/PageHero.tsx': '''/*
Design philosophy for this file: every page hero should feel like the opening spread of a monograph.
Maintain asymmetry, calm authority, and strong contrast between expansive imagery and disciplined typography.
*/
import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  dark?: boolean;
  actions?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, image, dark = true, actions }: PageHeroProps) {
  return (
    <section className="container pt-8 sm:pt-12 lg:pt-16">
      <div
        className={`relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-20 ${dark ? "text-white" : "text-[#1B2A4A]"}`}
        style={{
          backgroundImage: `${dark ? "linear-gradient(125deg, rgba(18,31,58,0.82), rgba(18,31,58,0.34))" : "linear-gradient(125deg, rgba(255,255,255,0.76), rgba(255,255,255,0.18))"}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-2xl">
          <span className={`mb-5 inline-flex text-xs font-semibold uppercase tracking-[0.28em] ${dark ? "text-white/78" : "text-[#4A7C59]"}`}>
            {eyebrow}
          </span>
          <h1 className="text-balance max-w-3xl text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className={`mt-5 max-w-xl text-base leading-7 sm:text-lg ${dark ? "text-white/82" : "text-[#334460]"}`}>
            {description}
          </p>
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
''',
    'client/src/components/SiteLayout.tsx': '''/*
Design philosophy for this file: the global frame should feel like a premium editorial scaffold.
Use disciplined spacing, understated borders, and clear navigation so every page inherits the same gallery-quality structure.
*/
import { Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { siteMeta } from "@/lib/siteContent";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <header className="sticky top-0 z-50 border-b border-[color:rgba(27,42,74,0.08)] bg-[rgba(255,255,255,0.88)] backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <Link href="/" className="min-w-0 no-underline">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:rgba(27,42,74,0.12)] bg-white text-sm font-extrabold uppercase tracking-[0.28em] text-[#1B2A4A] shadow-[0_10px_30px_rgba(27,42,74,0.08)]">
                JK
              </div>
              <div>
                <div className="font-[family:var(--font-display)] text-lg font-semibold text-[#1B2A4A]">Jeff Kurrus</div>
                <div className="text-sm text-[#556177]">Author and photographer</div>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {siteMeta.nav.map((item) => {
              const active = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold tracking-[0.14em] uppercase transition-colors ${
                    active ? "text-[#1B2A4A]" : "text-[#5A667B] hover:text-[#1B2A4A]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:rgba(27,42,74,0.1)] bg-white text-[#1B2A4A] lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-[color:rgba(27,42,74,0.08)] bg-white lg:hidden">
            <div className="container flex flex-col py-4">
              {siteMeta.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[color:rgba(27,42,74,0.06)] py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#1B2A4A] last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="mt-24 border-t border-[color:rgba(27,42,74,0.08)] bg-[#F6F4EE]">
        <div className="container grid gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4A7C59]">Jeff Kurrus</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#1B2A4A]">{
              location === "/books" ? "Stories for kids who'd rather be outside." :
              location === "/about" ? "Author, photographer, and editor of Nebraskaland Magazine." :
              location === "/school-visits" ? "Bringing writing to life in K-8 classrooms across Nebraska." :
              location === "/photography" ? "Senior portraits and family sessions in the Gretna and Omaha area." :
              location === "/news" ? "What's happening with Jeff's books, school visits, and Nebraskaland Magazine." :
              location === "/contact" ? "Let's talk about what your classroom, group, or family needs." :
              "Author. Photographer. Writing coach."
            }</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#526077]">
              Based in Gretna, Nebraska.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1B2A4A]">Navigation</h3>
              <div className="mt-5 flex flex-col gap-3">
                {siteMeta.nav.map((item) => (
                  <Link key={item.href} href={item.href} className="text-base text-[#526077] transition-colors hover:text-[#1B2A4A]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1B2A4A]">Connect</h3>
              <div className="mt-5 flex flex-col gap-3">
                {siteMeta.socials.map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="text-base text-[#526077] transition-colors hover:text-[#1B2A4A]">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container border-t border-[color:rgba(27,42,74,0.08)] py-6 text-sm text-[#526077]">
          Copyright 2026 Jeff Kurrus. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
''',
    'client/src/pages/News.tsx': '''/*
Design philosophy for this file: the news page should feel like an editorial bulletin board.
Combine Nebraskaland Magazine credibility with upcoming events in a scannable, warm layout.
Use card-based event listings, a featured callout for the magazine, and a clear community CTA.
*/
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import { visualAssets } from "@/lib/siteContent";

const upcomingEvents = [
  { date: "May 2025", title: "Thedford School Visit", description: "Jeff brings his Writer\\'s Workshop to Thedford, Nebraska." },
  { date: "End of May", title: "Radio Show", description: "Jeff joins the airwaves to talk about children\\'s books and Nebraskaland Magazine." },
  { date: "TBA", title: "Podcast Guest", description: "Details coming soon." },
  { date: "July", title: "ACI Awards for Magazine", description: "Nebraskaland Magazine competes at ACI national awards." },
  { date: "Fall 2025", title: "Return of Donnie Bats Excerpts", description: "Early excerpts from the sequel begin appearing." },
];

const recentOngoing = [
  { title: "Author in Residence Re-up in Papillion", description: "Jeff continues his Author in Residence role in Papillion." },
  { title: "Nebraskaland Magazine Durham Exhibit", description: "Jeff\\'s photography featured in the Durham Museum exhibit." },
  { title: "New Issue of Nebraskaland", description: "The latest issue is on newsstands now." },
];

export default function News() {
  return (
    <div className="page-shell">
      <PageHero eyebrow="News" title="What\\'s happening with Jeff\\'s books, school visits, and Nebraskaland Magazine." description="Upcoming events, magazine awards, and community presentations across Nebraska." image={visualAssets.jkPhotography.heroPrairieGrass} imagePosition="center 60%" />
      <section className="container py-16 sm:py-20">
        <div className="rounded-[1.75rem] border border-[color:rgba(96,87,62,0.16)] p-8 shadow-[0_24px_55px_rgba(76,59,37,0.10)] sm:p-10 lg:p-12" style={{ backgroundImage: "linear-gradient(135deg, rgba(251,244,230,0.95), rgba(247,236,208,0.88))", backgroundSize: "cover", backgroundPosition: "center" }}>
          <p className="section-label">Nebraskaland Magazine</p>
          <h2 className="max-w-3xl text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">50+ national awards and counting.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#445065]">The magazine and its staff, during my tenure as editor since 2013, has won more than 50 national awards.</p>
        </div>
      </section>
      <section className="container pb-16 sm:pb-20">
        <p className="section-label">Upcoming events</p>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {upcomingEvents.map((event) => (<article key={event.title} className="soft-card p-7"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">{event.date}</p><h3 className="mt-3 text-xl font-semibold text-[#1B2A4A]">{event.title}</h3><p className="mt-4 text-base leading-7 text-[#445065]">{event.description}</p></article>))}
        </div>
      </section>
      <section className="container pb-16 sm:pb-20">
        <p className="section-label">Recent and ongoing</p>
        <div className="grid gap-5 lg:grid-cols-3">
          {recentOngoing.map((item) => (<article key={item.title} className="rounded-[1.5rem] border border-[color:rgba(27,42,74,0.08)] bg-[#FBFAF6] p-7 shadow-[0_18px_35px_rgba(27,42,74,0.05)]"><h3 className="text-xl font-semibold text-[#1B2A4A]">{item.title}</h3><p className="mt-4 text-base leading-7 text-[#445065]">{item.description}</p></article>))}
        </div>
      </section>
      <section className="container pb-16 sm:pb-20">
        <div className="soft-card overflow-hidden lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-h-[300px] lg:min-h-full" style={{ backgroundImage: "url(" + visualAssets.jkPhotography.doubleRainbowDirtRoad + ")", backgroundSize: "cover", backgroundPosition: "center 55%" }} />
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="section-label">Community presentations</p>
            <h2 className="text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">Book clubs, civic groups, and specialty organizations.</h2>
            <p className="mt-6 text-lg leading-8 text-[#445065]">Jeff speaks to book clubs, civic organizations, and specialty groups across Nebraska. No speaking fee required.</p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#4A7C59] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3C6648]">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
''',
    'client/src/pages/Home.tsx': '''/*
Design philosophy for this file: lead with restraint and authority.
The home page should feel like a premium landing sequence for adults making decisions, with strong book visuals, quiet social proof, and generous white space.
*/
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import { visualAssets } from "@/lib/siteContent";

export default function Home() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Home"
        title="Books for kids who'd rather be outside."
        description="Jeff Kurrus writes children's books shaped by natural landscapes, baseball diamonds, and years spent paying attention behind the camera."
        image={visualAssets.generated.heroPrairie}
        actions={
          <>
            <Link href="/books">
              <Button className="rounded-full bg-[#4A7C59] px-7 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#3C6648]">
                Get the Book
              </Button>
            </Link>
            <Link href="/school-visits">
              <Button variant="outline" className="rounded-full border-[color:rgba(255,255,255,0.35)] bg-white/10 px-7 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur hover:bg-white/18">
                Book an Author Visit
              </Button>
            </Link>
          </>
        }
      />

      <section className="container py-16 sm:py-20">
        <div className="editorial-grid">
          <div className="soft-card p-6 sm:p-8 lg:p-10">
            <p className="section-label">Featured book</p>
            <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:items-center">
              <img
                src={visualAssets.uploaded.donnieBats}
                alt="The Legend of Donnie Bats book cover by Jeff Kurrus"
                className="mx-auto w-full max-w-[260px] rounded-[1.5rem] object-cover shadow-[0_24px_40px_rgba(27,42,74,0.18)]"
              />
              <div>
                <h2 className="text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">The Legend of Donnie Bats</h2>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">$12.95 | Ages 7-12</p>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#445065]">
                  Donnie Bats loves baseball. He just can't hit, throw, or catch. A chapter book for every kid who has ever been the worst player on the team.
                </p>
                <a href="https://www.amazon.com/Legend-Donnie-Bats-Greatness-Lives/dp/0991638921/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#1B2A4A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#16233D]">
                  Buy on Amazon
                </a>
              </div>
            </div>
          </div>
          <div className="soft-card overflow-hidden">
            <div className="h-full min-h-[360px] bg-[#F3F0E7] p-6 sm:p-8" style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.95)), url(${visualAssets.generated.booksTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}>
              <p className="section-label">Coming next</p>
              <h2 className="max-w-sm text-3xl font-semibold text-[#1B2A4A]">The Return of Donnie Bats</h2>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">Coming December 2026</p>
              <p className="mt-6 max-w-sm text-lg leading-8 text-[#445065]">The sequel is coming December 2026.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="soft-card p-8 sm:p-10">
            <p className="section-label">Recognition</p>
            <blockquote className="text-2xl font-semibold leading-[1.3] text-[#1B2A4A] sm:text-3xl">
              Jeff Kurrus's words and Michael Forsberg's photographs are teamed here to bring us a remarkable story...
            </blockquote>
            <p className="mt-6 text-base font-semibold text-[#1B2A4A]">Joel Sartore, founder of National Geographic Photo Ark</p>
            <p className="mt-1 text-base text-[#526077]">on Have You Seen Mary?</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">Golden Sower Award nominee. 25,000+ books in readers' hands.</p>
          </div>
          <div className="soft-card p-8 sm:p-10">
            <p className="section-label">About Jeff</p>
            <div className="space-y-5 text-lg leading-8 text-[#445065]">
              <p>
                I spent years behind a camera. Sandhill cranes on the Platte River. Swift foxes in the short grass. I learned that a good photograph and a good story ask the same thing of you: pay attention and tell the truth about what you see.
              </p>
              <p>
                I am the editor of Nebraskaland Magazine. I live in Gretna, Nebraska. I write baseball chapter books for kids who would rather be outside than reading.
              </p>
            </div>
            <Link href="/about" className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[#4A7C59]">
              Read more
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="soft-card overflow-hidden">
          <div className="h-full bg-[#F5F2EA] p-8 lg:p-12" style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.88), rgba(245,242,234,0.92)), url(${visualAssets.generated.contactSkyline})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <p className="section-label">For educators</p>
            <img
              src={visualAssets.uploaded.schoolVisit1}
              alt="Students engaged during Jeff Kurrus school visit"
              className="mb-6 h-[220px] w-full rounded-[1.5rem] object-cover shadow-[0_20px_40px_rgba(27,42,74,0.12)]"
            />
            <p className="text-lg leading-8 text-[#445065]">
              Jeff brings a 45-minute writing program to K-8 classrooms across Nebraska. Students hear the story behind Donnie Bats, dig into the writing process, and leave with signed books.
            </p>
            <blockquote className="mt-5 border-l-2 border-[#4A7C59]/40 pl-4">
              <p className="text-base italic leading-7 text-[#445065]">
                'Jeff Kurrus Days' are a core memory for every student who has had the chance to experience them.
              </p>
              <footer className="mt-2 text-sm font-semibold text-[#4A7C59]">
                — Mrs. Lisa Giles, 4th Grade, Ashbury Elementary
              </footer>
            </blockquote>
            <Link href="/school-visits" className="mt-8 inline-flex rounded-full bg-[#4A7C59] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3C6648]">
              Book an Author Visit
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <PlaceholderBlock label="Coming Soon" className="min-h-[240px] bg-[#1B2A4A]" />
          <PlaceholderBlock label="Coming Soon" className="min-h-[240px] bg-[#6C665E]" />
        </div>
      </section>
    </div>
  );
}
''',
    'client/src/pages/Books.tsx': '''/*
Design philosophy for this file: the books page should read like a restrained catalog from a premium independent publisher.
Give the Donnie Bats title the strongest hierarchy, keep the grid airy, and let missing covers appear as elegant placeholders.
*/
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import { bookCatalog, visualAssets } from "@/lib/siteContent";

export default function Books() {
  const [featured, sequel, ...catalog] = bookCatalog;

  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Books"
        title="Five titles shaped by baseball, prairie light, and Nebraska stories."
        description="The Donnie Bats books lead the catalog, with the nature titles following below in a cleaner library-style presentation."
        image={visualAssets.generated.booksTexture}
        dark={false}
      />

      <section className="container py-16 sm:py-20">
        <div className="soft-card p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:items-center">
            <img src={featured.image ?? ""} alt={featured.alt} className="mx-auto w-full max-w-[300px] rounded-[1.75rem] object-cover shadow-[0_24px_50px_rgba(27,42,74,0.18)]" />
            <div>
              <p className="section-label">Featured</p>
              <h1 className="text-4xl font-semibold text-[#1B2A4A] sm:text-5xl">{featured.title}</h1>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">{featured.price}</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#445065]">{featured.description}</p>
              <a href={featured.href} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#1B2A4A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#16233D]">
                {featured.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="soft-card overflow-hidden lg:grid lg:grid-cols-[0.8fr_1.2fr]">
          <PlaceholderBlock label={sequel.placeholder ?? "Cover placeholder"} className="min-h-[360px] rounded-none bg-[#6A655E] lg:min-h-full" />
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="section-label">Coming next</p>
            <h2 className="text-3xl font-semibold text-[#1B2A4A] sm:text-4xl">{sequel.title}</h2>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8860B]">{sequel.price}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#445065]">{sequel.description}</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#667084]">Check back for release updates.</p>
          </div>
        </div>
      </section>

      <section className="container pb-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {catalog.map((book) => (
            <article key={book.title} className="soft-card overflow-hidden p-6 sm:p-8">
              {book.image ? (
                <img src={book.image} alt={book.alt} className="mb-6 h-[360px] w-full rounded-[1.5rem] object-cover shadow-[0_18px_40px_rgba(27,42,74,0.12)]" />
              ) : (
                <PlaceholderBlock label={book.placeholder ?? "Cover placeholder"} className="mb-6 min-h-[360px] bg-[#2E465A]" />
              )}
              <h2 className="text-2xl font-semibold text-[#1B2A4A]">{book.title}</h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#B8860B]">{book.price}</p>
              {book.note ? <p className="mt-4 text-sm font-semibold text-[#4A7C59]">{book.note}</p> : null}
              <p className="mt-4 text-base leading-7 text-[#445065]">{book.description}</p>
              <a href={book.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full border border-[color:rgba(27,42,74,0.12)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1B2A4A] transition hover:border-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white">
                {book.cta}
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
''',
    'client/src/pages/SchoolVisits.tsx': '''/*
Design philosophy for this file: this page must convert administrators and librarians with clarity and confidence.
Use a polished information architecture, visible pricing, and practical booking structure while preserving the premium photographic tone.
*/
import PageHero from "@/components/PageHero";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import { schoolVisitPricing, visualAssets } from "@/lib/siteContent";

export default function SchoolVisits() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="School visits"
        title="A 45-minute K-5 author presentation built for real school scheduling decisions."
        description="This page is designed to answer the questions librarians, principals, and school administrators need answered before they book a visit."
        image={visualAssets.uploaded.schoolVisit2}
      />

      <section className="container py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="soft-card p-8 sm:p-10">
            <p className="section-label">Program description</p>
            <div className="space-y-5 text-lg leading-8 text-[#445065]">
              <p>
                A 45-minute K-5 author presentation. Students hear the story behind Donnie Bats, learn about the writing process, and discover that the worst player on the team might have the best story to tell.
              </p>
              <p>
                I read from the book, talk about where stories come from, and take questions. Every student gets to meet the author and sign books at the table afterward.
              </p>
            </div>
          </div>
          <div className="soft-card p-8 sm:p-10">
            <p className="section-label">Curriculum alignment</p>
            <p className="text-lg leading-8 text-[#445065]">
              Common Core ELA connections: reading engagement, narrative structure, author's craft, vocabulary in context, speaking and listening standards. Jeff's presentation supports classroom reading goals and gives students a reason to pick up a book.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <p className="section-label">Programs</p>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="soft-card p-7">
            <h3 className="text-xl font-semibold text-[#22304F]">Writer's Workshop <span className="ml-2 text-base font-normal text-[#5F7752]">Grades K-2</span></h3>
            <p className="mt-4 text-lg leading-8 text-[#445065]">Jeff reads the Golden Sower-nominated 'Have You Seen Mary?', then introduces his 7 Question Words: Who, What, When, Where, How, Why, and Can. Students start building stories within minutes.</p>
          </div>
          <div className="soft-card p-7">
            <h3 className="text-xl font-semibold text-[#22304F]">Writer's Workshop <span className="ml-2 text-base font-normal text-[#5F7752]">Grades 3-5</span></h3>
            <p className="mt-4 text-lg leading-8 text-[#445065]">Starting with an excerpt from 'The Legend of Donnie Bats,' Jeff walks students through his 7 Question Words, then layers in drawing, storyboarding, and a technique called 'Once Upon a Time' to tackle writing's hardest challenge: getting started.</p>
          </div>
          <div className="soft-card p-7 lg:col-span-2">
            <h3 className="text-xl font-semibold text-[#22304F]">Photography Workshop <span className="ml-2 text-base font-normal text-[#5F7752]">Grades 6-8</span></h3>
            <p className="mt-4 text-lg leading-8 text-[#445065]">Jeff shares 20 years of experience as a professional outdoor photographer for the award-winning Nebraskaland Magazine. Students learn the basics of composition, aperture, and shutter speed, plus photography's most important tool: an alarm clock.</p>
          </div>
          <div className="soft-card p-7">
            <h3 className="text-xl font-semibold text-[#22304F]">Author Q&amp;A <span className="ml-2 text-base font-normal text-[#5F7752]">Grades K-8</span></h3>
            <p className="mt-4 text-lg leading-8 text-[#445065]">Jeff draws on 20 years of working with student writers to give an authentic, story-driven look at the life of an author.</p>
          </div>
          <div className="soft-card p-7">
            <h3 className="text-xl font-semibold text-[#22304F]">Zoom Q&amp;A <span className="ml-2 text-base font-normal text-[#5F7752]">Grades K-8</span></h3>
            <p className="mt-4 text-lg leading-8 text-[#445065]">Jeff connects with students virtually, answering questions about the writing life and how he tackles the complicated (but thrilling) writing process. Works especially well with reluctant writers.</p>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="soft-card p-8 sm:p-10 lg:p-12">
          <p className="section-label">Public pricing</p>
          <div className="grid gap-5 lg:grid-cols-3">
            {schoolVisitPricing.map((item) => (
              <article key={item.label} className="rounded-[1.5rem] border border-[color:rgba(27,42,74,0.08)] bg-[#FBFAF6] p-6 shadow-[0_18px_35px_rgba(27,42,74,0.05)]">
                <h2 className="text-2xl font-semibold text-[#1B2A4A]">{item.label}</h2>
                <p className="mt-4 text-xl font-semibold text-[#B8860B]">{item.value}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-base leading-7 text-[#445065]">All pricing is negotiable. Reach out and let's talk about how we can help your young writers.</p>
          <div className="mt-6 rounded-[1.5rem] border border-[color:rgba(96,87,62,0.14)] bg-[#FBFAF6] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5F7752]">Book orders</p>
            <p className="mt-4 text-lg leading-8 text-[#445065]">Books can be ordered in advance at bulk pricing -- contact Jeff directly to arrange. Students can also purchase at the signing table after the presentation.</p>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="soft-card p-8 sm:p-10" style={{ backgroundColor: "rgba(246,239,217,0.5)" }}>
            <p className="section-label">What to expect</p>
            <blockquote className="text-xl leading-9 italic text-[#31405C]">
              One moment, the room is roaring with laughter. The next, it is filled with focused silence as students craft their stories with purpose and confidence.
            </blockquote>
            <footer className="mt-5 text-base font-semibold text-[#5B6D53]">
              Jeanna White, Facilitator of Curriculum and Instruction
            </footer>
          </div>
          <div className="soft-card p-8 sm:p-10">
            <p className="section-label">What Jeff needs</p>
            <p className="text-lg leading-8 text-[#445065]">Not much. A whiteboard helps, but he's hosted plenty of classes outdoors. As long as he has his timer, your students will write -- and have fun doing it. For assemblies, a microphone is nice, but his voice can fill an auditorium.</p>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="soft-card p-8 sm:p-10">
            <p className="section-label">School visit photos</p>
            <div className="grid gap-4 md:grid-cols-2">
              <img src={visualAssets.uploaded.schoolVisit1} alt="Students engaged during Jeff Kurrus school visit" className="h-[250px] w-full rounded-[1.5rem] object-cover" />
              <img src={visualAssets.uploaded.schoolVisit2} alt="Student work from Jeff Kurrus author visit" className="h-[250px] w-full rounded-[1.5rem] object-cover" />
              <img src={visualAssets.uploaded.schoolVisitTurtle} alt="Students gathered around a turtle during a Jeff Kurrus school visit" className="h-[250px] w-full rounded-[1.5rem] object-cover md:col-span-2" />
            </div>
            <div className="mt-6 grid gap-4">
              <PlaceholderBlock label="Coming Soon" className="min-h-[180px] bg-[#1B2A4A]" />
              <blockquote className="rounded-[1.8rem] border border-[rgba(95,119,82,0.24)] bg-[#F7ECD0] p-7 text-[#22304F] shadow-[0_18px_36px_rgba(96,87,62,0.1)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5F7752]">From educators</p>
                <p className="mt-4 text-xl leading-9 text-[#31405C]">
                  He truly pours his heart into each lesson and students feel that. He's supportive and honest; thoughtful and silly. He works hard to make learning come alive so that every child feels like an author. 'Jeff Kurrus Days' are a core memory for every student who has had the chance to experience them. We are so lucky to work with him!
                </p>
                <footer className="mt-5 text-base font-semibold text-[#5B6D53]">
                  Mrs. Lisa Giles -- 4th grade teacher, Ashbury Elementary
                </footer>
              </blockquote>
              {/* Parent / reader testimonial */}
              <div className="rounded-[1.8rem] border border-[rgba(75,100,90,0.20)] bg-[#EDF3EA] p-7 shadow-[0_18px_36px_rgba(96,87,62,0.1)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5F7752]">What parents are saying</p>
                <div className="mt-4 grid grid-cols-[1.3fr_0.7fr] gap-3">
                  <img
                    src={visualAssets.uploaded.readerShipping}
                    alt="Table of Donnie Bats books being prepped for shipping"
                    className="h-[170px] w-full rounded-[1.2rem] bg-[#f5f3ee] object-contain"
                  />
                  <img
                    src={visualAssets.uploaded.readerThankYou}
                    alt="Hand-drawn thank-you card from a young reader"
                    className="h-[170px] w-full rounded-[1.2rem] bg-[#f5f0e8] object-contain"
                  />
                </div>
                <div className="mt-3 flex justify-center">
                  <img
                    src={visualAssets.uploaded.readerCouch}
                    alt="Boy reading a Jeff Kurrus book on the couch"
                    className="h-[220px] w-[75%] rounded-[1.2rem] object-cover object-[center_40%]"
                  />
                </div>
                <p className="mt-5 text-xl leading-9 text-[#31405C]">
                  My son started your book on our drive home from school yesterday, read for 3 solid hours, woke up and finished the book by 7am this morning! He'd like to know when book 2 will be done.
                </p>
                <footer className="mt-5 text-base font-semibold text-[#5B6D53]">
                  — Parent
                </footer>
              </div>
              <PlaceholderBlock label="Coming Soon" className="min-h-[180px] bg-[#6C665E]" />
              <PlaceholderBlock label="Coming Soon" className="min-h-[180px] bg-[#36516E]" />
            </div>
          </div>
          <div className="soft-card p-8 sm:p-10">
            <p className="section-label">Requirements and ordering</p>
            <div className="space-y-6 text-lg leading-8 text-[#445065]">
              <p>
                Jeff brings everything he needs. A projector or screen and a room where students can sit comfortably is all that's required. For assemblies: a microphone and gym or auditorium seating.
              </p>
              <p>
                Books can be ordered in advance for your school at bulk pricing. Contact Jeff directly to arrange. Students can also purchase at the signing table after the presentation.
              </p>
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-[color:rgba(27,42,74,0.08)] bg-[#FBFAF6] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4A7C59]">Booking inquiry form</p>
              <form action="https://formspree.io/jeffreyekurrus@gmail.com" method="POST" className="mt-6 space-y-4">
                <input type="hidden" name="_subject" value="School Visit Booking Inquiry" />
                <input type="hidden" name="inquiry_type" value="School Visit" />
                <input type="text" name="name" placeholder="Name" required className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
                <input type="text" name="school" placeholder="School / Organization" required className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
                <input type="text" name="role" placeholder="Role (Teacher, Librarian, Principal, PTO, Other)" className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
                <input type="email" name="email" placeholder="Email" required className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
                <input type="tel" name="phone" placeholder="Phone" required className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
                <input type="text" name="grade_levels" placeholder="Grade Levels" className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
                <input type="text" name="preferred_date" placeholder="Preferred Dates" className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
                <textarea name="message" placeholder="Message" rows={5} className="w-full rounded-[1.5rem] border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
                <button type="submit" className="w-full rounded-full bg-[#4A7C59] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3C6648]">
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
''',
    'client/src/pages/About.tsx': '''/*
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
          <PlaceholderBlock label="Coming Soon" className="min-h-[520px] bg-[#1B2A4A]" />
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
    </div>
  );
}
''',
    'client/src/pages/Photography.tsx': '''/*
Design philosophy for this file: this page should meet the standard of a premium portrait portfolio.
Keep imagery dominant, text spare, package pricing elegant, and the booking path unmistakably clear.
*/
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import { photographyGallery, photographyPackages } from "@/lib/siteContent";

export default function Photography() {
  const heroImage = photographyGallery[0]?.src ?? "";

  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Senior Photography"
        title="You own every image. No usage fees. No restrictions."
        description="I've been photographing beautiful Nebraska for twenty years. The same eye that finds a stunning sunrise finds the light on a senior's face at golden hour. I specialize in getting people of all ages comfortable in front of the camera -- so the expression you see is the real one."
        image={heroImage}
      />

      <section className="container py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {photographyGallery.map((photo, index) => (
            <figure key={photo.src} className={`${index === 0 ? "md:col-span-2 xl:col-span-2" : ""} overflow-hidden rounded-[1.75rem] bg-white shadow-[0_26px_55px_rgba(27,42,74,0.12)]`}>
              <img src={photo.src} alt={photo.alt} style={{ objectPosition: photo.position }} className={`w-full object-cover ${index === 0 ? "h-[440px]" : "h-[320px]"}`} />
            </figure>
          ))}
        </div>
      </section>

      <section className="container pb-16 sm:pb-20">
        <div className="soft-card p-8 sm:p-10 lg:p-12">
          <p className="section-label">Packages</p>
          <div className="grid gap-6 lg:grid-cols-3">
            {photographyPackages.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-[color:rgba(27,42,74,0.08)] bg-[#FBFAF6] p-7 shadow-[0_18px_40px_rgba(27,42,74,0.06)]">
                <h2 className="text-2xl font-semibold text-[#1B2A4A]">{item.title}</h2>
                <p className="mt-4 text-4xl font-semibold text-[#B8860B]">{item.price}</p>
                <p className="mt-6 text-base leading-7 text-[#445065]">{item.details}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="rounded-[1.5rem] bg-[#1B2A4A] p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">Add-ons</p>
              <p className="mt-4 text-lg leading-8">Family portrait: +$100-$150. Travel beyond 30 miles: $0.50/mile.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[color:rgba(27,42,74,0.08)] bg-white p-6">
              <p className="text-lg leading-8 text-[#445065]">Gretna, Omaha, and surrounding areas. Travel available.</p>
              <p className="mt-4 text-lg leading-8 text-[#445065]">To check availability or schedule a session, send a message through the contact page or email jeffreyekurrus@gmail.com.</p>
              <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#4A7C59] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3C6648]">
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
''',
    'client/src/pages/Contact.tsx': '''/*
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
              <input type="text" name="name" placeholder="Name" required className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
              <input type="email" name="email" placeholder="Email" required className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
              <input type="tel" name="phone" placeholder="Phone" required className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
              <select name="inquiry_type" className="w-full rounded-2xl border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]">
                <option value="Senior Photo Session">Senior Photo Session</option>
                <option value="School Visit">School Visit</option>
                <option value="Order Books">Order Books</option>
                <option value="Media Inquiry">Media Inquiry</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
              <textarea name="message" placeholder="Message" rows={7} className="w-full rounded-[1.5rem] border border-[color:rgba(27,42,74,0.12)] bg-white px-5 py-4 text-base outline-none transition focus:border-[#4A7C59]" />
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
              <h2 className="text-3xl font-semibold text-[#1B2A4A]">jeffreyekurrus@gmail.com</h2>
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
''',
}

for relative_path, content in files.items():
    path = project / relative_path
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content)
