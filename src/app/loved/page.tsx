import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Sparkle,
  Sun,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Loved — Bright Studio",
  description:
    "Tools, subscriptions, and goods that keep me human. The stuff I reach for when I'm not building software with AI.",
};

type Item = {
  name: string;
  kicker?: string;
  desc: string;
  href: string;
  price?: string;
};

type Category = {
  slug: string;
  num: string;
  title: string;
  subtitle: string;
  items: Item[];
};

const categories: Category[] = [
  {
    slug: "making",
    num: "01",
    title: "For Making",
    subtitle:
      "The tools my grandparents would recognize. Some of them would still use.",
    items: [
      {
        name: "Speedball Artista pottery wheel",
        kicker: "Pottery · ~$320",
        desc: "Quiet, table-top, doesn't pretend to be more than it is. Best entry to throwing without a studio.",
        href: "https://www.speedballart.com/",
      },
      {
        name: "Procreate",
        kicker: "Digital art · $12.99 once",
        desc: "Buy it once, never pay again. The best $13 in software. iPad becomes a sketchbook that doesn't run out of pages.",
        href: "https://procreate.com/",
      },
      {
        name: "Winsor & Newton Cotman watercolors",
        kicker: "Painting · $35-80",
        desc: "Travel-friendly. The half-pan tin will outlive your laptop. Painting at the kitchen table without a studio setup.",
        href: "https://www.winsornewton.com/",
      },
      {
        name: "Brother CS7000X sewing machine",
        kicker: "Sewing · ~$200",
        desc: "Beginner-friendly enough to learn on, capable enough to grow into. My grandmother would approve.",
        href: "https://www.brother-usa.com/",
      },
    ],
  },
  {
    slug: "thinking",
    num: "02",
    title: "For Thinking",
    subtitle: "Quiet tools. The opposite of the dopamine apps.",
    items: [
      {
        name: "Obsidian",
        kicker: "Note-taking · Free",
        desc: "Plain markdown files on your disk that you actually own. Beats Notion if you care about owning your thinking.",
        href: "https://obsidian.md/",
      },
      {
        name: "Reader by Readwise",
        kicker: "Reading · $9.99/mo",
        desc: "Saves articles, books, tweets, podcasts in one place. Highlights resurface in your daily review. Best reading habit I've built.",
        href: "https://readwise.io/read",
      },
      {
        name: "The Marginalian",
        kicker: "Newsletter · Free",
        desc: "Maria Popova has been writing about books, art, and being alive for nearly 20 years. Slow internet at its best.",
        href: "https://www.themarginalian.org/",
      },
      {
        name: "Bear Notes",
        kicker: "Writing · $2.99/mo",
        desc: "Beautiful, distraction-free, prose-first. For when Obsidian is too much and Apple Notes is not enough.",
        href: "https://bear.app/",
      },
    ],
  },
  {
    slug: "living",
    num: "03",
    title: "For Living",
    subtitle: "Subscriptions, memberships, and a free thing more people should use.",
    items: [
      {
        name: "Spotify Premium",
        kicker: "Music · $11.99/mo",
        desc: "The single most reliable mood lever. Daylist + Discover Weekly is enough.",
        href: "https://spotify.com",
      },
      {
        name: "Letterboxd Pro",
        kicker: "Movies · $19/yr",
        desc: "Movie tracking + a community that hasn't been ruined by AI yet. The closest thing to a 2010 internet.",
        href: "https://letterboxd.com/",
      },
      {
        name: "America the Beautiful Pass",
        kicker: "Parks · $80/yr",
        desc: "Every national park, every monument, all year. The best $80 the federal government will ever take from you.",
        href: "https://store.usgs.gov/recreational-passes",
      },
      {
        name: "Your local library card",
        kicker: "Books + more · Free",
        desc: "Libby for ebooks/audiobooks, hoopla for streaming, Kanopy for arthouse films. The most underused tool in modern life.",
        href: "https://overdrive.com/libraries",
      },
    ],
  },
  {
    slug: "moving",
    num: "04",
    title: "For Moving",
    subtitle: "Hot girl walk essentials. ADHD-tested.",
    items: [
      {
        name: "Strava",
        kicker: "Tracking · Free tier",
        desc: "The free tier is plenty. Every walk is a small win. ADHD brain loves the data.",
        href: "https://strava.com/",
      },
      {
        name: "Trucker hat + 32oz water bottle",
        kicker: "The kit · ~$50 total",
        desc: "Sun off your face, water in your hand. The whole hot girl walk economy in two items.",
        href: "https://www.amazon.com/s?k=trucker+hat",
      },
      {
        name: "Ten Thousand training shorts",
        kicker: "Apparel · $58",
        desc: "Lined, pocketed, and they don't ride up. The shorts you wear when you mean it.",
        href: "https://www.tenthousand.cc/",
      },
    ],
  },
];

export default function LovedPage() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      {categories.map((c) => (
        <CategorySection key={c.slug} category={c} />
      ))}
      <SwagComingSoon />
      <FooterCTA />
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-20">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-grid place-items-center w-9 h-9 rounded-full bg-ink text-sun">
            <Sun size={20} strokeWidth={2.5} className="spin-slow" />
          </span>
          <span className="h-display text-[22px] tracking-tight">Bright Studio</span>
          <span className="mono text-[11px] uppercase tracking-[0.18em] text-ink/60 hidden sm:inline">
            / LLC
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          <Link href="/#services" className="ulink">Services</Link>
          <Link href="/#work" className="ulink">Work</Link>
          <Link href="/#manifesto" className="ulink">Manifesto</Link>
          <span className="ulink font-medium">Loved</span>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-ink text-cream px-4 py-2 rounded-full font-medium hover:bg-ink/90"
          >
            Hire me <ArrowRight size={16} />
          </Link>
        </nav>
        <Link
          href="/"
          className="md:hidden mono text-[11px] uppercase tracking-[0.18em] underline underline-offset-4"
        >
          Home
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-10 sm:pt-16 pb-12 sm:pb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="mono text-[11px] uppercase tracking-[0.2em] bg-ink text-cream px-2.5 py-1 rounded-full">
            Loved
          </span>
          <span className="mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
            What keeps me human
          </span>
        </div>

        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <h1 className="col-span-12 lg:col-span-9 h-display text-[12vw] sm:text-[9vw] lg:text-[112px] xl:text-[128px]">
            Things I&apos;d rather
            <br />
            be doing than{" "}
            <span className="serif-it font-normal">scrolling.</span>
          </h1>
          <div className="col-span-12 lg:col-span-3 flex lg:justify-end">
            <Sparkle size={84} strokeWidth={1.6} className="spin-slow text-ink" />
          </div>
        </div>

        <p className="mt-10 sm:mt-14 max-w-[640px] text-[18px] sm:text-[20px] leading-[1.5] text-ink/80">
          I build software with AI all day. The stuff below is what I reach for
          when I&apos;m not building. Pottery wheels. Watercolors. National park
          passes. Library cards. Things that pay attention back.
        </p>
        <p className="mt-5 max-w-[640px] text-[18px] sm:text-[20px] leading-[1.5] text-ink/80">
          We are <span className="serif-it">humans</span> who build AI so we
          can keep doing the things humans were always meant to do — paint, pot,
          create, love, play.
        </p>
      </div>

      <div className="border-y-2 border-ink bg-sun overflow-hidden py-4 relative">
        <div className="flex marquee-track w-max">
          <Strip />
          <Strip />
        </div>
      </div>
    </section>
  );
}

function Strip() {
  const phrases = [
    "make things",
    "take walks",
    "read books",
    "touch grass",
    "call your mom",
    "love loudly",
    "play more",
    "stay curious",
  ];
  return (
    <div className="flex items-center gap-10 pr-10 shrink-0">
      {phrases.map((p, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="h-display text-[42px] sm:text-[64px] uppercase">{p}</span>
          <Asterisk size={28} strokeWidth={2.2} className="spin-slow" />
        </span>
      ))}
    </div>
  );
}

function CategorySection({ category }: { category: Category }) {
  return (
    <section id={category.slug} className="relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="mono text-[11px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-ink text-cream">
                {category.num}
              </span>
              <span className="mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
                — {category.title}
              </span>
            </div>
            <h2 className="h-display text-[40px] sm:text-[60px] mt-3 max-w-[16ch]">
              {category.title}
            </h2>
          </div>
          <p className="mono text-[12px] uppercase tracking-[0.18em] text-ink/60 max-w-[300px]">
            ↘ {category.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {category.items.map((item) => (
            <ItemCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ItemCard({ item }: { item: Item }) {
  const isExternal = item.href.startsWith("http");
  return (
    <a
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="brut-card group relative block rounded-[22px] border-2 border-ink shadow-brut bg-cream p-6 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        {item.kicker && (
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-ink/60">
            {item.kicker}
          </p>
        )}
        <div className="grid place-items-center w-9 h-9 rounded-full bg-cream border-2 border-ink shrink-0 transition-transform group-hover:rotate-45">
          <ArrowUpRight size={16} strokeWidth={2.4} />
        </div>
      </div>

      <h3 className="h-display text-[24px] sm:text-[28px] leading-[1.05] mb-3">
        {item.name}
      </h3>

      <p className="text-[14px] sm:text-[15px] leading-[1.55] text-ink/80">
        {item.desc}
      </p>
    </a>
  );
}

function SwagComingSoon() {
  return (
    <section
      id="wearing"
      className="relative bg-sun border-y-2 border-ink overflow-hidden"
    >
      <Asterisk
        size={520}
        strokeWidth={1.2}
        className="absolute -right-32 -top-24 text-ink/10 hidden sm:block"
      />
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 sm:py-28 relative">
        <div className="flex items-center gap-3 mb-8">
          <span className="mono text-[11px] uppercase tracking-[0.2em] bg-ink text-sun px-2.5 py-1 rounded-full">
            05
          </span>
          <span className="mono text-[11px] uppercase tracking-[0.2em] text-ink/70">
            — For Wearing · Coming soon
          </span>
        </div>

        <h2 className="h-display text-[44px] sm:text-[68px] lg:text-[88px] leading-[0.95] max-w-[14ch] mb-6">
          Bright Studio swag.{" "}
          <span className="serif-it font-normal">In the works.</span>
        </h2>
        <p className="text-[18px] sm:text-[20px] leading-[1.5] max-w-[58ch] mb-10">
          Limited drops. Made to last. The first three: a yellow trucker hat with
          the sun mark, a &ldquo;Bring yours.&rdquo; tee, and a vibe-coded
          hoodie. Drops when they&apos;re ready, not before.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {[
            { name: "Trucker Hat", desc: "Yellow brim, sun mark, embroidered.", icon: "🧢" },
            { name: '"Bring yours." Tee', desc: "Cream + black. Loose fit.", icon: "👕" },
            { name: "Vibe-coded Hoodie", desc: "Heavy cotton. Black + sun.", icon: "🌅" },
          ].map((s) => (
            <div
              key={s.name}
              className="rounded-[22px] border-2 border-ink bg-cream p-6 sm:p-7 relative"
            >
              <div className="text-4xl mb-4" aria-hidden>{s.icon}</div>
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-ink/60 mb-2">
                Coming soon
              </p>
              <h3 className="h-display text-[22px] mb-2">{s.name}</h3>
              <p className="text-[14px] leading-[1.5] text-ink/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterCTA() {
  return (
    <section className="relative bg-ink text-cream">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="h-display text-[44px] sm:text-[68px] leading-[0.96]">
              Make something. Touch grass.{" "}
              <span className="text-sun">Then come back.</span>
            </h2>
            <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.5] text-cream/75">
              When you&apos;re ready to build, I&apos;m here. Until then —
              go pot something.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:flex lg:items-end">
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-between gap-4 bg-sun text-ink pl-6 pr-3 py-4 rounded-full text-[18px] font-medium border-2 border-sun w-full"
            >
              <span>Back to studio</span>
              <span className="grid place-items-center w-10 h-10 rounded-full bg-ink text-sun">
                <ArrowRight size={20} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <footer className="border-t border-cream/15">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-8 flex items-center justify-between flex-wrap gap-4 mono text-[11px] uppercase tracking-[0.16em] text-cream/60">
          <div className="flex items-center gap-2">
            <Sun size={14} strokeWidth={2.2} className="text-sun spin-slow" />
            <span>© 2026 Bright Studio LLC</span>
            <span className="opacity-40">·</span>
            <span>Wyoming, USA</span>
          </div>
          <Link href="/" className="underline underline-offset-4 hover:text-cream">
            ← Back to home
          </Link>
        </div>
      </footer>
    </section>
  );
}
