/*
Design philosophy for this file: Storybook Editorial heroes should feel like an inviting opening spread.
Blend image-led storytelling, large readable typography, and a framed supporting card without leaving dead space.
*/
import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  dark?: boolean;
  actions?: ReactNode;
  imagePosition?: string;
  /** "soft" = default editorial gradient. "strong" = heavier overlay for heroes
   * where the underlying image has bright/busy regions under the text (CONTACT-1). */
  gradientStrength?: "soft" | "strong";
};

export default function PageHero({ eyebrow, title, description, image, dark = true, actions, imagePosition = "center", gradientStrength = "soft" }: PageHeroProps) {
  const gradient = !dark
    ? "linear-gradient(125deg, rgba(255,250,242,0.88), rgba(255,248,240,0.2))"
    : gradientStrength === "strong"
      ? "linear-gradient(110deg, rgba(20,30,55,0.85) 0%, rgba(20,30,55,0.55) 100%)"
      : "linear-gradient(125deg, rgba(36,31,45,0.7), rgba(37,31,46,0.24))";

  return (
    <section className="container pt-8 sm:pt-12 lg:pt-14">
      <div
        className={`relative overflow-hidden rounded-[2.25rem] border border-[rgba(96,87,62,0.16)] px-6 py-10 shadow-[0_24px_55px_rgba(76,59,37,0.14)] sm:px-10 sm:py-14 lg:min-h-[520px] lg:px-14 lg:py-18 ${dark ? "text-white" : "text-[#22304F]"}`}
        style={{
          backgroundImage: `${gradient}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: imagePosition,
        }}
      >
        <div className="max-w-3xl">
          <span className={`mb-5 inline-flex text-sm font-semibold uppercase tracking-[0.2em] ${dark ? "text-[#F5E6BF]" : "text-[#5F7752]"}`}>{eyebrow}</span>
          <h1 className="text-balance max-w-3xl text-5xl font-semibold leading-[0.9] sm:text-6xl lg:text-[5.1rem]">
            {title}
          </h1>
          <p className={`mt-5 max-w-2xl text-xl leading-8 sm:text-[1.45rem] sm:leading-9 ${dark ? "text-white/92" : "text-[#31405C]"}`}>{description}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
