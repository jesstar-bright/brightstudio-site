// IG post data. One entry per post. Add new posts here, then either reuse an
// existing template variant or build a new one in ./templates/.

export type HeroPost = {
  slug: string;
  template: "hero";
  eyebrow: string;
  headlinePre: string;
  headlineSerif: string;
  url: string;
  handle?: string;
  bg?: "sun" | "cream" | "ink";
};

export type Post = HeroPost;
// Future: | QuotePost | ManifestoPost | TipPost | ProjectPost | ServicesPost

export const posts: Post[] = [
  {
    slug: "intro",
    template: "hero",
    eyebrow: "Hi — I'm Jess",
    headlinePre: "I build software with AI, for ",
    headlineSerif: "humans who need to ship.",
    url: "brightstudio.build",
    handle: "@jess_h_talbert",
    bg: "sun",
  },
];
