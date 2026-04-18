/*
Design philosophy for this file: Storybook Editorial should make the global frame feel welcoming, bookish, and unmistakably navigable.
Use warmer surfaces, clearer active-page emphasis, and softer framed details without sacrificing professionalism.
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
      <header className="sticky top-0 z-50 border-b border-[color:rgba(96,87,62,0.12)] bg-[rgba(255,250,242,0.9)] backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <Link href="/" className="min-w-0 no-underline">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:rgba(96,87,62,0.18)] bg-[#FBF4E6] text-sm font-extrabold uppercase tracking-[0.24em] text-[#233659] shadow-[0_12px_28px_rgba(84,67,41,0.12)]">
                JK
              </div>
              <div>
                <div className="font-[family:var(--font-display)] text-[2rem] leading-none font-semibold text-[#22304F] sm:text-[2.2rem]">Jeff Kurrus</div>
                <div className="text-base text-[#5D6475]">Author and photographer</div>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-3 lg:flex">
            {siteMeta.nav.map((item) => {
              const active = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-[0.95rem] font-semibold uppercase tracking-[0.12em] transition-all ${
                    active
                      ? "border border-[rgba(179,152,88,0.7)] bg-[#FBF3DE] text-[#22304F] shadow-[0_10px_20px_rgba(113,90,46,0.14)]"
                      : "text-[#43536E] hover:bg-[#F7EFD8] hover:text-[#22304F]"
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:rgba(96,87,62,0.14)] bg-[#FFF9EF] text-[#22304F] lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-[color:rgba(96,87,62,0.12)] bg-[#FFF9EF] lg:hidden">
            <div className="container flex flex-col gap-2 py-4">
              {siteMeta.nav.map((item) => {
                const active = location === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl border px-4 py-4 text-base font-semibold uppercase tracking-[0.14em] transition-colors ${
                      active
                        ? "border-[rgba(179,152,88,0.68)] bg-[#FBF3DE] text-[#22304F]"
                        : "border-[rgba(96,87,62,0.08)] bg-white/70 text-[#344463]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="mt-24 border-t border-[color:rgba(96,87,62,0.12)] bg-[#F5EEDC]">
        <div className="container grid gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5F7752]">Jeff Kurrus</p>
            <h2 className="mt-4 text-4xl font-semibold text-[#22304F] sm:text-5xl">Children's books, school visits, and portrait photography.</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#566070]">
              Based in Gretna, Nebraska. Built for readers, educators, librarians, and families looking for portrait sessions in the Omaha area.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22304F]">Navigation</h3>
              <div className="mt-5 flex flex-col gap-3">
                {siteMeta.nav.map((item) => (
                  <Link key={item.href} href={item.href} className="text-lg text-[#4F5D74] transition-colors hover:text-[#22304F]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22304F]">Connect</h3>
              <div className="mt-5 flex flex-col gap-3">
                {siteMeta.socials.map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="text-lg text-[#4F5D74] transition-colors hover:text-[#22304F]">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container border-t border-[color:rgba(96,87,62,0.12)] py-6 text-base text-[#566070]">
          Copyright 2026 Jeff Kurrus. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
