export const siteMeta = {
  title: "Jeff Kurrus",
  subtitle: "Children's Book Author & Photographer",
  location: "Gretna, Nebraska",
  email: "jeffreyekurrus@gmail.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Books", href: "/books" },
    { label: "School Visits", href: "/school-visits" },
    { label: "Senior Photography", href: "/photography" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/jeffkurrus/" },
    { label: "Facebook", href: "https://www.facebook.com/jeffreyekurrus/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jeff-kurrus-25b02757/" },
  ],
};

// T-08 (2026-04-18): CloudFront URLs rewritten to local /images/* paths.
// Originals live in 02_SITE_WORKING/site_source_manus_v1/client/src/lib/siteContent.ts
// and on the Manus CDN (d2xsxph8kpxj0f.cloudfront.net) as the upstream reference.
export const visualAssets = {
  generated: {
    heroPrairie: "/images/hero-prairie-dawn.webp",
    booksTexture: "/images/books-texture.webp",
    contactSkyline: "/images/contact-skyline.webp",
  },
  jkPhotography: {
    heroWindmillSunset: "/images/hero-windmill-sunset.jpg",
    heroBarnGoldenHour: "/images/hero-barn-golden-hour.jpg",
    heroPrairieGrass: "/images/hero-prairie-grass.jpg",
    foggyDockMahoney: "/images/foggy-dock-mahoney.jpg",
    doubleRainbowDirtRoad: "/images/double-rainbow-dirt-road.jpg",
    duckDecoysWinter: "/images/duck-decoys-winter.jpg",
    lakeDiveSunset: "/images/lake-dive-sunset.jpg",
    sunflowerLight: "/images/sunflower-light.jpg",
    seniorDragonsAthlete: "/images/senior-dragons-athlete.jpg",
    seniorSdAthlete: "/images/senior-sd-athlete.jpg",
    seniorGraduationToss: "/images/senior-graduation-toss.jpg",
    heroFishermanSunrise: "/images/hero-fisherman-sunrise.jpg",
    heroFoggyFisherman: "/images/hero-foggy-fisherman.jpg",
    heroFoggyGoldenLandscape: "/images/hero-foggy-golden-landscape.jpg",
  },
  uploaded: {
    donnieBats: "/images/donnie-bats-cover.jpg",
    mary: "/images/have-you-seen-mary-cover.jpg",
    john: "/images/can-you-dance-like-john-cover.jpg",
    schoolVisit1: "/images/school-visit-1.jpg",
    schoolVisit2: "/images/school-visit-2.jpg",
    senior01: "/images/senior-01.jpg",
    senior02: "/images/senior-02.jpg",
    senior03: "/images/senior-03.jpg",
    senior04: "/images/senior-04.jpg",
    senior05: "/images/senior-05.jpg",
    senior06: "/images/senior-06.jpg",
    senior07: "/images/senior-07.jpg",
    senior08: "/images/senior-08.jpg",
    senior09: "/images/senior-09.jpg",
    senior10: "/images/senior-10.jpg",
    bookReleaseComing: "/images/book-release-coming.jpg",
    jacobSwift: "/images/tale-of-jacob-swift.jpg",
    readerShipping: "/images/reader-shipping.jpg",
    readerThankYou: "/images/reader-thank-you.jpg",
    readerCouch: "/images/reader-couch.jpg",
    momDaughterSunset: "/images/mom-daughter-sunset.jpg",
    seniorAthlete: "/images/senior-athlete.jpg",
    schoolVisitTurtle: "/images/school-visit-turtle.jpg",
  },
};

export const bookCatalog = [
  {
    title: "The Legend of Donnie Bats",
    price: "$12.95 | Ages 7-12 | Chapter Book",
    description:
      "Donnie Bats loves baseball but can't hit, throw, or catch -- until he discovers he might just be the best player his town has ever seen.",
    cta: "Buy on Amazon",
    href: "https://www.amazon.com/Legend-Donnie-Bats-Greatness-Lives/dp/0991638921/",
    image: visualAssets.uploaded.donnieBats,
    alt: "The Legend of Donnie Bats book cover by Jeff Kurrus",
  },
  {
    title: "The Return of Donnie Bats",
    price: "Coming December 2026",
    description: "A new Donnie Bats story is on the way, with more heart, humor, and ballfield trouble ahead.",
    cta: "Be the first to know.",
    href: "/contact",
    image: null,
    alt: "Placeholder for The Return of Donnie Bats cover",
    placeholder: "COVER PLACEHOLDER: The Return of Donnie Bats. Jeff owns cover photo.",
  },
  {
    title: "Have You Seen Mary?",
    price: "$9.95 (softcover) / $17.00 (hardcover) | Ages 5-10",
    description:
      "'. . . and the sky blackened with dark, gray bodies. In the blurry confusion, John lost Mary.' So begins Have You Seen Mary?, the photo fictional account of one sandhill crane's faithful search during spring migration for his lost mate. Set on the crane's migration path, this bittersweet story of love, loss, and healing will appeal to all ages. Michael Forsberg's beautiful color photographs also help entertain and educate readers about sandhill cranes.",
    note: "Golden Sower Award Nominee | Photography by Michael Forsberg | Endorsed by Joel Sartore, founder of National Geographic Photo Ark.",
    cta: "Buy on Amazon",
    href: "https://www.amazon.com/Have-Seen-Mary-Jeff-Kurrus/dp/0991638905/",
    image: visualAssets.uploaded.mary,
    alt: "Have You Seen Mary book cover by Jeff Kurrus and Michael Forsberg",
  },
  {
    title: "The Tale of Jacob Swift",
    price: "$17.00 | Ages 5-10 | Photography by Rob Palmer",
    description:
      "Jacob recounts the struggles and triumphs that one swift fox family experiences in raising its son in the harsh but beautiful grasslands of North America. Looks like a picture book, reads like a chapter book.",
    cta: "Buy on Amazon",
    href: "https://www.amazon.com/Tale-Jacob-Swift-Jeff-Kurrus/dp/0991638913/",
    image: visualAssets.uploaded.jacobSwift,
    alt: "The Tale of Jacob Swift book cover by Jeff Kurrus and Rob Palmer",
  },
  {
    title: "Can You Dance Like John?",
    price: "$17.00 | Ages 5-10 | Photography by Michael Forsberg",
    description:
      "The story of John and Mary continues in this picture book follow-up to Have You Seen Mary?, returning to John and Mary with a tale of love, loss, and the memories that keep us going.",
    cta: "Buy on Amazon",
    href: "https://www.amazon.com/Can-You-Dance-Like-John/dp/1496206673/",
    image: visualAssets.uploaded.john,
    alt: "Can You Dance Like John book cover by Jeff Kurrus and Michael Forsberg",
  },
];

export const schoolVisitPricing = [
  { label: "One-off visit", value: "$1,000/day + book sales" },
  { label: "Repeat / local schools", value: "$500/day + book sales" },
  { label: "Civic and community groups", value: "No fee. Book sales only." },
];

export const photographyPackages = [
  {
    title: "The Runway",
    price: "$1,500",
    details:
      "Two 3-hour sessions. Unlimited outfits. Preview after first session. 50 image work-ups. You own all images.",
  },
  {
    title: "The Golden Hour",
    price: "$800",
    details:
      "One 3-hour session. Unlimited outfits. Preview during session. 25 image work-ups. You own all images.",
  },
  {
    title: "The Essential",
    price: "$500",
    details:
      "One 1-hour session. Unlimited outfits. 15 image work-ups. You own all images.",
  },
];

export const photographyGallery = [
  {
    src: visualAssets.uploaded.senior01,
    alt: "Senior portrait photography by Jeff Kurrus in Gretna Nebraska, natural light",
    position: "center center",
  },
  {
    src: visualAssets.uploaded.senior02,
    alt: "Senior portrait photography by Jeff Kurrus in Gretna Nebraska, outdoor portrait",
    position: "center center",
  },
  {
    src: visualAssets.uploaded.senior03,
    alt: "Senior portrait photography by Jeff Kurrus in Gretna Nebraska, golden hour",
    position: "center top",
  },
  {
    src: visualAssets.uploaded.senior05,
    alt: "Senior portrait photography by Jeff Kurrus in Gretna Nebraska, field portrait",
    position: "center top",
  },
  {
    src: visualAssets.uploaded.senior06,
    alt: "Senior portrait photography by Jeff Kurrus in Gretna Nebraska, warm outdoor portrait",
    position: "center top",
  },
  {
    src: visualAssets.uploaded.senior07,
    alt: "Senior portrait photography by Jeff Kurrus in Gretna Nebraska, natural light portrait",
    position: "center top",
  },
  {
    src: visualAssets.uploaded.senior08,
    alt: "Senior portrait photography by Jeff Kurrus in Gretna Nebraska, outdoor senior session",
    position: "center top",
  },
  {
    src: visualAssets.uploaded.senior09,
    alt: "Senior portrait photography by Jeff Kurrus in Gretna Nebraska, softball portrait at golden hour",
    position: "center center",
  },
  {
    src: visualAssets.uploaded.senior10,
    alt: "Senior portrait photography by Jeff Kurrus in Gretna Nebraska, graduation portrait in summer greenery",
    position: "center top",
  },
  {
    src: visualAssets.uploaded.seniorAthlete,
    alt: "Student athlete senior portrait by Jeff Kurrus in Gretna Nebraska",
    position: "center top",
  },
  {
    src: visualAssets.uploaded.momDaughterSunset,
    alt: "Mother and daughter portrait at sunset in a golden field by Jeff Kurrus",
    position: "center center",
  },
  {
    src: visualAssets.jkPhotography.seniorDragonsAthlete,
    alt: "Dragons multi-sport athlete senior portrait with jerseys and football by Jeff Kurrus",
    position: "center center",
  },
  {
    src: visualAssets.jkPhotography.seniorGraduationToss,
    alt: "Graduation cap toss celebration portrait in red gown by Jeff Kurrus",
    position: "center 15%",
  },
];
