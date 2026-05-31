"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Bolt,
  Check,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Plus,
  Sparkle,
  Sun,
} from "./icons";

const cls = (...a: Array<string | false | null | undefined>) =>
  a.filter(Boolean).join(" ");

// ───────────────────────────────────────── Nav
export function Nav() {
  return (
    <header className="relative z-20">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="inline-grid place-items-center w-9 h-9 rounded-full bg-ink text-sun">
            <Sun size={20} strokeWidth={2.5} className="spin-slow" />
          </span>
          <span className="h-display text-[22px] tracking-tight">Bright Studio</span>
          <span className="mono text-[11px] uppercase tracking-[0.18em] text-ink/60 hidden sm:inline">
            / LLC
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          <a href="#services" className="ulink">Services</a>
          <a href="#work" className="ulink">Work</a>
          <a href="#manifesto" className="ulink">Manifesto</a>
          <a href="/loved" className="ulink">Loved</a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-ink text-cream px-4 py-2 rounded-full font-medium hover:bg-ink/90"
          >
            Hire me <ArrowRight size={16} />
          </a>
        </nav>
        <a
          href="#contact"
          className="md:hidden mono text-[11px] uppercase tracking-[0.18em] underline underline-offset-4"
        >
          Hire
        </a>
      </div>
    </header>
  );
}

// ───────────────────────────────────────── Hero
export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24">
        {/* status row */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 bg-cream border-2 border-ink rounded-full pl-3 pr-4 py-1.5 shadow-brut-sm">
            <span className="relative inline-flex">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 blink" />
            </span>
            <span className="mono text-[11px] uppercase tracking-[0.16em]">
              Available for new projects
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 mono text-[11px] uppercase tracking-[0.16em] text-ink/60">
            <span>v1.0</span>
            <span className="opacity-30">·</span>
            <span>Solo studio</span>
            <span className="opacity-30">·</span>
            <span>Est. 2026</span>
          </div>
        </div>

        {/* Headline grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <h1 className="col-span-12 lg:col-span-9 h-display text-[15vw] sm:text-[11vw] lg:text-[128px] xl:text-[148px]">
            Vibe-coded
            <br />
            software,
            <br />
            <span className="relative inline-block">
              <span className="absolute inset-x-[-4px] inset-y-[10%] bg-sun -z-0 rounded-md" />
              <span className="relative">shipped fast.</span>
            </span>
          </h1>
          <div className="col-span-12 lg:col-span-3 flex lg:justify-end">
            <div className="relative">
              <Sparkle size={84} strokeWidth={1.6} className="spin-slow text-ink" />
              <Asterisk
                size={28}
                strokeWidth={2.2}
                className="absolute -top-2 -right-3 text-ink"
              />
            </div>
          </div>
        </div>

        {/* sub + CTA row */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mt-10 sm:mt-14">
          <p className="col-span-12 lg:col-span-7 text-[20px] sm:text-[24px] leading-[1.35] text-ink/80 max-w-[640px]">
            Bright Studio is a solo studio building AI-native prototypes, MVPs,
            and tools — for founders, indie hackers, and{" "}
            <span className="serif-it text-ink">humans who need to make a thing.</span>
          </p>
          <div className="col-span-12 lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <a
              href="#contact"
              className="group inline-flex items-center justify-between gap-4 bg-ink text-cream pl-6 pr-3 py-4 rounded-full text-[18px] font-medium border-2 border-ink shadow-brut hover:shadow-brut-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <span>Let&apos;s build something</span>
              <span className="grid place-items-center w-10 h-10 rounded-full bg-sun text-ink">
                <ArrowRight size={20} strokeWidth={2.5} />
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-cream text-ink px-5 py-3.5 rounded-full text-[15px] font-medium border-2 border-ink hover:bg-cream-deep"
            >
              See services <Plus size={16} />
            </a>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const phrase = [
    "vibe-coded",
    "shipped fast",
    "built for humans",
    "no agency overhead",
    "AI-native",
    "weeks not months",
  ];
  const row = (
    <div className="flex items-center gap-10 pr-10 shrink-0">
      {phrase.map((p, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="h-display text-[42px] sm:text-[64px] uppercase">{p}</span>
          <Asterisk size={28} strokeWidth={2.2} className="spin-slow" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="border-y-2 border-ink bg-sun overflow-hidden py-4 relative">
      <div className="flex marquee-track w-max">
        {row}
        {row}
      </div>
    </div>
  );
}

// ───────────────────────────────────────── About
export function About() {
  return (
    <section id="about" className="relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <SectionLabel num="01" label="Who I am" />
        <div className="grid grid-cols-12 gap-6 sm:gap-10 mt-8">
          <div className="col-span-12 lg:col-span-7">
            <p className="h-display text-[34px] sm:text-[52px] lg:text-[60px] leading-[1.02] tracking-tight">
              I&apos;m Jessica. I build software for{" "}
              <span className="serif-it font-normal">humans who need to make a thing.</span>
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pt-4 space-y-5 text-[17px] leading-[1.65] text-ink/80">
            <p>
              I spent years as a Product Manager — writing specs, running stand-ups,
              shipping someone else&apos;s roadmap. Then I picked up Claude and Cursor
              and stopped writing tickets for the things I could just build.
            </p>
            <p>
              Now I run Bright Studio. I vibe-code with founders, ship MVPs in weeks
              instead of months, and protect the weird, personal, &ldquo;this probably
              won&apos;t scale but it matters to me&rdquo; parts of a product that an agency
              would have flattened on page one.
            </p>
            <p className="mono text-[12px] uppercase tracking-[0.18em] text-ink/60 pt-2">
              ↳ PM → AI-native builder · Solo · Wyoming
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────── Services
type Tier = {
  name: string;
  price: string;
  unit: string;
  altPrice: string;
  desc: string;
  who: string;
  bullets: string[];
  cta: string;
  tone: "cream" | "sun";
};

export function Services() {
  const tiers: Tier[] = [
    {
      name: "Vibe-Code Sessions",
      price: "$197",
      unit: "/ hour",
      altPrice: "or $497 for a 3-pack",
      desc: "I pair-code with you on YOUR project, in YOUR repo, on YOUR stack. We ship something live in the session — a feature, a bug fix, a prototype, a refactor.",
      who: "Founders learning AI-augmented coding by doing. Devs who are stuck. Anyone who wants to see vibe coding in practice.",
      bullets: ["Live pair-coding", "Your repo, your stack", "Ship before we hang up"],
      cta: "Book a Session",
      tone: "cream",
    },
    {
      name: "AI Reality Check",
      price: "$2,500",
      unit: "/ flat",
      altPrice: "1 week · 5 business days",
      desc: "I audit your product, business, or workflow and give you a 12-page roadmap. Where AI fits. What to build. What to skip. What to fear less than you think. What to fear more.",
      who: "Founders, ops leaders, and small business owners drowning in AI noise.",
      bullets: ["12-page roadmap", "Buy / build / skip calls", "No vendor pitches"],
      cta: "Get Your Roadmap",
      tone: "cream",
    },
    {
      name: "MVP in 4 Weeks",
      price: "$9,500",
      unit: "/ project",
      altPrice: "4 weeks · fixed scope",
      desc: "You bring the idea. I ship the working software. Web app, mobile app, agent system — whatever the idea calls for. AI-augmented development means weeks not months.",
      who: "Founders with a clear idea and a deadline. Or just enough budget that they don't want to learn to code themselves right now.",
      bullets: ["Working software", "Weekly ship cadence", "Yours to keep, top to bottom"],
      cta: "Start Your Build",
      tone: "sun",
    },
  ];

  return (
    <section id="services" className="relative bg-cream-deep/60 border-y-2 border-ink">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <SectionLabel num="02" label="The ladder" />
            <h2 className="h-display text-[44px] sm:text-[68px] mt-3 max-w-[18ch]">
              Three ways to work together.
            </h2>
          </div>
          <p className="mono text-[12px] uppercase tracking-[0.18em] text-ink/60 max-w-[280px]">
            ↘ Lowest friction to highest commitment. Pick the rung that fits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {tiers.map((t, i) => (
            <ServiceCard key={t.name} t={t} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ t, idx }: { t: Tier; idx: number }) {
  const isSun = t.tone === "sun";
  return (
    <div
      className={cls(
        "brut-card relative rounded-[22px] border-2 border-ink shadow-brut p-6 sm:p-7 flex flex-col",
        isSun ? "bg-sun" : "bg-cream",
      )}
    >
      <div className="flex items-center justify-between mb-6">
        <span className="mono text-[11px] uppercase tracking-[0.18em] bg-ink text-cream px-2.5 py-1 rounded-full">
          Tier 0{idx + 1}
        </span>
        {isSun ? (
          <Bolt size={26} strokeWidth={2.2} />
        ) : idx === 0 ? (
          <Sparkle size={26} strokeWidth={2} />
        ) : (
          <Asterisk size={26} strokeWidth={2.2} />
        )}
      </div>

      <h3 className="h-display text-[28px] sm:text-[32px] leading-[1.02] mb-4">{t.name}</h3>

      <div className="flex items-baseline gap-2 mb-1">
        <span className="h-display text-[44px] sm:text-[52px] tnum">{t.price}</span>
        <span className="mono text-[13px] text-ink/70">{t.unit}</span>
      </div>
      <p className="mono text-[11px] uppercase tracking-[0.16em] text-ink/60 mb-6">
        {t.altPrice}
      </p>

      <p className="text-[15px] leading-[1.55] text-ink/85 mb-5">{t.desc}</p>

      <ul className="space-y-2 mb-6">
        {t.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[14px]">
            <span
              className={cls(
                "mt-1 inline-grid place-items-center w-4 h-4 rounded-full border border-ink shrink-0",
                isSun ? "bg-ink text-sun" : "bg-ink text-cream",
              )}
            >
              <Check size={10} strokeWidth={3} />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4 border-t-2 border-dashed border-ink/30">
        <p className="text-[13px] text-ink/70 mb-4 leading-relaxed">
          <span className="mono uppercase tracking-[0.14em] text-[10px] text-ink/60">
            Best for ·{" "}
          </span>
          {t.who}
        </p>
        <a
          href="#contact"
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-full border-2 border-ink font-medium text-[15px] hover:translate-x-0.5 transition-transform bg-ink text-cream"
        >
          {t.cta}
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
}

// ───────────────────────────────────────── Work
type Project = {
  name: string;
  tag: string;
  blurb: string;
  accent: string;
  shape: "orb" | "wave" | "paw" | "cards" | "leaf" | "spark" | "chat";
  sub?: string;
  href?: string;
  status?: "beta";
};

export function Work() {
  const projects: Project[] = [
    {
      name: "The Group Chat: IRL",
      tag: "Social app",
      blurb:
        "A living calendar for a friend group — subscribe once, and every plan, photo gallery, and trip lands in one place.",
      accent: "#2F7CC0",
      shape: "chat",
      href: "https://jesstar-bright.github.io/the-group-chat-irl/",
      status: "beta",
    },
    {
      name: "Pax",
      tag: "AI Agent",
      blurb: "Personal AI assistant for handling communication.",
      accent: "#1A4FE0",
      shape: "orb",
    },
    {
      name: "Crea",
      tag: "React Native",
      blurb:
        "Menopause-aware fitness app with agent architecture. Built for my mom.",
      accent: "#FF6B6B",
      shape: "wave",
      sub: "formerly Vivi",
    },
    {
      name: "PawDispatch AI",
      tag: "Hackathon",
      blurb:
        "Autonomous pet grooming business manager. So she gets her Saturday back.",
      accent: "#FFD60A",
      shape: "paw",
    },
    {
      name: "BoardPrep",
      tag: "EdTech",
      blurb:
        "PPTX in, AI quizzes/flashcards/notes out. MLS board exam study app.",
      accent: "#0A0A0A",
      shape: "cards",
    },
    {
      name: "Mosshollow Academy",
      tag: "Curriculum bot",
      blurb:
        "Pre-K chatbot with a sarcastic hedge witch persona. Enchanted woodland aesthetic.",
      accent: "#2F5D3A",
      shape: "leaf",
    },
    {
      name: "Bright Social",
      tag: "Agent system",
      blurb: "IG / LinkedIn content agent. The reason you found this site.",
      accent: "#FFD60A",
      shape: "spark",
    },
  ];

  return (
    <section id="work" className="relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <SectionLabel num="03" label="Selected work" />
            <h2 className="h-display text-[44px] sm:text-[68px] mt-3 max-w-[18ch]">
              Things I&apos;ve shipped{" "}
              <span className="serif-it font-normal">(or am shipping).</span>
            </h2>
          </div>
          <p className="mono text-[12px] uppercase tracking-[0.18em] text-ink/60 max-w-[280px]">
            ↘ Seven projects. Real problems. Real humans behind each one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <ProjectTile key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectTile({ p, i }: { p: Project; i: number }) {
  const [hover, setHover] = useState(false);
  const external = Boolean(p.href);
  return (
    <a
      href={p.href ?? "#contact"}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="brut-card group relative block rounded-[22px] border-2 border-ink shadow-brut bg-cream overflow-hidden"
    >
      <div
        className="aspect-[5/3] relative overflow-hidden border-b-2 border-ink"
        style={{
          background: `repeating-linear-gradient(135deg, ${p.accent}22 0 12px, transparent 12px 24px), ${p.accent}14`,
        }}
      >
        <ProjectShape shape={p.shape} accent={p.accent} hover={hover} />
        <div className="absolute top-3 left-3 mono text-[10px] uppercase tracking-[0.18em] bg-ink text-cream px-2 py-1 rounded-full">
          0{i + 1} / {p.tag}
        </div>
        <div className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-cream border-2 border-ink transition-transform group-hover:rotate-45">
          <ArrowUpRight size={16} strokeWidth={2.4} />
        </div>
        {p.status === "beta" && (
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-cream border-2 border-ink rounded-full pl-2 pr-2.5 py-1 shadow-brut-sm">
            <span className="relative inline-flex">
              <span className="w-2 h-2 rounded-full bg-coral" />
              <span className="absolute inset-0 w-2 h-2 rounded-full bg-coral blink" />
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.16em]">
              Live beta
            </span>
          </div>
        )}
      </div>
      <div className="p-5 sm:p-6 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-2">
            <h3 className="h-display text-[24px]">{p.name}</h3>
            {p.sub && (
              <span className="mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
                {p.sub}
              </span>
            )}
          </div>
          <p className="text-[14px] leading-[1.5] text-ink/75 mt-1">{p.blurb}</p>
        </div>
      </div>
    </a>
  );
}

function ProjectShape({
  shape,
  accent,
  hover,
}: {
  shape: Project["shape"];
  accent: string;
  hover: boolean;
}) {
  const t = hover ? "translate(0,-6px)" : "translate(0,0)";
  const common = { transition: "transform .4s ease", transform: t };
  if (shape === "orb")
    return (
      <svg viewBox="0 0 200 120" className="absolute inset-0 w-full h-full">
        <g style={common}>
          <circle cx="100" cy="60" r="36" fill={accent} />
          <circle cx="100" cy="60" r="36" fill="none" stroke="#0A0A0A" strokeWidth="2" />
          <circle cx="86" cy="50" r="6" fill="#FAF8F3" />
        </g>
      </svg>
    );
  if (shape === "wave")
    return (
      <svg viewBox="0 0 200 120" className="absolute inset-0 w-full h-full">
        <g style={common} fill="none" stroke="#0A0A0A" strokeWidth="2">
          <path d="M10 80 Q 50 40, 100 80 T 190 80" stroke={accent} strokeWidth="6" />
          <path d="M10 92 Q 50 56, 100 92 T 190 92" />
          <circle cx="155" cy="40" r="14" fill={accent} />
        </g>
      </svg>
    );
  if (shape === "paw")
    return (
      <svg viewBox="0 0 200 120" className="absolute inset-0 w-full h-full">
        <g style={common} stroke="#0A0A0A" strokeWidth="2">
          <ellipse cx="100" cy="78" rx="26" ry="20" fill={accent} />
          <circle cx="74" cy="48" r="10" fill={accent} />
          <circle cx="126" cy="48" r="10" fill={accent} />
          <circle cx="60" cy="68" r="8" fill={accent} />
          <circle cx="140" cy="68" r="8" fill={accent} />
        </g>
      </svg>
    );
  if (shape === "cards")
    return (
      <svg viewBox="0 0 200 120" className="absolute inset-0 w-full h-full">
        <g style={common} stroke="#0A0A0A" strokeWidth="2">
          <rect x="48" y="32" width="74" height="58" rx="6" fill="#FAF8F3" />
          <rect
            x="62"
            y="40"
            width="74"
            height="58"
            rx="6"
            fill={accent === "#0A0A0A" ? "#FFD60A" : accent}
          />
          <rect x="76" y="48" width="74" height="58" rx="6" fill="#FAF8F3" />
          <line x1="84" y1="62" x2="142" y2="62" />
          <line x1="84" y1="72" x2="130" y2="72" />
          <line x1="84" y1="82" x2="138" y2="82" />
        </g>
      </svg>
    );
  if (shape === "leaf")
    return (
      <svg viewBox="0 0 200 120" className="absolute inset-0 w-full h-full">
        <g style={common} stroke="#0A0A0A" strokeWidth="2">
          <path
            d="M40 90 C 40 40, 100 20, 160 30 C 150 90, 90 110, 40 90 Z"
            fill={accent}
          />
          <path
            d="M50 86 Q 100 60, 150 36"
            stroke="#FAF8F3"
            fill="none"
            strokeWidth="2"
          />
        </g>
      </svg>
    );
  if (shape === "chat")
    return (
      <svg viewBox="0 0 200 120" className="absolute inset-0 w-full h-full">
        <g style={common} stroke="#0A0A0A" strokeWidth="2" strokeLinejoin="round">
          <rect x="34" y="28" width="92" height="46" rx="12" fill="#FAF8F3" />
          <path d="M52 72 L52 90 L34 72 Z" fill="#FAF8F3" />
          <rect x="96" y="56" width="72" height="40" rx="12" fill={accent} />
          <path d="M150 94 L150 110 L166 94 Z" fill={accent} />
          <g stroke="none">
            <circle cx="114" cy="76" r="4" fill="#FAF8F3" />
            <circle cx="132" cy="76" r="4" fill="#FAF8F3" />
            <circle cx="150" cy="76" r="4" fill="#FAF8F3" />
          </g>
        </g>
      </svg>
    );
  return (
    <svg viewBox="0 0 200 120" className="absolute inset-0 w-full h-full">
      <g style={common} stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round">
        <circle cx="100" cy="60" r="22" fill={accent} />
        <line x1="100" y1="20" x2="100" y2="36" />
        <line x1="100" y1="84" x2="100" y2="100" />
        <line x1="60" y1="60" x2="76" y2="60" />
        <line x1="124" y1="60" x2="140" y2="60" />
        <line x1="72" y1="32" x2="82" y2="42" />
        <line x1="118" y1="78" x2="128" y2="88" />
        <line x1="128" y1="32" x2="118" y2="42" />
        <line x1="82" y1="78" x2="72" y2="88" />
      </g>
    </svg>
  );
}

// ───────────────────────────────────────── Manifesto
export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative bg-sun border-y-2 border-ink overflow-hidden"
    >
      <Asterisk
        size={520}
        strokeWidth={1.2}
        className="absolute -right-32 -top-24 text-ink/10 hidden sm:block"
      />
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-24 sm:py-36 relative">
        <div className="flex items-center gap-3 mb-10">
          <span className="mono text-[11px] uppercase tracking-[0.2em] bg-ink text-sun px-2.5 py-1 rounded-full">
            04 — Thesis
          </span>
          <span className="mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
            The soul of the studio
          </span>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <p className="h-display font-extrabold text-[28px] sm:text-[42px] lg:text-[54px] leading-[1.08] tracking-tight">
              The best software I&apos;ve ever built started with a{" "}
              <span className="serif-it font-normal">human problem</span>, not a
              technical one. A mom who needed a workout that understood her body. A
              groomer who needed her Saturday back. A brother studying for boards at
              midnight.
            </p>

            <p className="mt-10 text-[20px] sm:text-[26px] leading-[1.45] max-w-[58ch]">
              AI lets me build faster. But faster was never the point. The point is
              that the thing I ship actually{" "}
              <span className="underline decoration-2 underline-offset-4">fits</span>{" "}
              — fits the person, fits the problem, fits the life it&apos;s landing in.
            </p>

            <p className="mt-8 text-[20px] sm:text-[26px] leading-[1.45] max-w-[60ch]">
              I&apos;m not interested in replacing the human parts. I&apos;m
              interested in protecting them. The weird ideas, the personal missions,
              the &ldquo;this probably won&apos;t scale but it matters to me&rdquo;
              projects. That&apos;s the work I want to do.
            </p>

            <div className="mt-14 flex items-center gap-5 flex-wrap">
              <p className="h-display text-[64px] sm:text-[112px] leading-[0.9]">
                Bring yours.
              </p>
              <Sparkle size={64} strokeWidth={2} className="spin-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────── Assets
type AssetItem = { title: string; kicker: string; desc: string; cta: string };

export function Assets() {
  const items: AssetItem[] = [
    {
      title: "How to Get Started as a Builder",
      kicker: "Free guide · PDF",
      desc: "A practical setup for a local AI-augmented dev environment. The exact stack I use to ship in days, not months. Anyone can build — start here.",
      cta: "Download guide",
    },
    {
      title: "Future of PM Checklist",
      kicker: "Free checklist · PDF",
      desc: "What product managers need to know now. Vibe-coding skills, LinkedIn visibility, interviewing in the AI era. Stay relevant. Stay shipping.",
      cta: "Download checklist",
    },
  ];
  return (
    <section id="assets" className="relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <SectionLabel num="05" label="Free things" />
            <h2 className="h-display text-[44px] sm:text-[68px] mt-3 max-w-[18ch]">
              Take something{" "}
              <span className="serif-it font-normal">on the way out.</span>
            </h2>
          </div>
          <p className="mono text-[12px] uppercase tracking-[0.18em] text-ink/60 max-w-[280px]">
            ↘ No email gate. Just give me a follow if it lands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {items.map((it, i) => (
            <a
              key={it.title}
              href="#contact"
              className="brut-card group flex items-stretch gap-0 rounded-[22px] border-2 border-ink shadow-brut bg-cream overflow-hidden"
            >
              <div className="w-32 sm:w-40 shrink-0 bg-cream-deep border-r-2 border-ink relative grid place-items-center">
                <div className="absolute top-3 left-3 mono text-[10px] uppercase tracking-[0.16em] text-ink/60">
                  {`A.0${i + 1}`}
                </div>
                <Download
                  size={46}
                  strokeWidth={1.6}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </div>
              <div className="p-5 sm:p-6 flex-1">
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-ink/60 mb-2">
                  {it.kicker}
                </p>
                <h3 className="h-display text-[24px] sm:text-[28px] leading-[1.05] mb-3">
                  {it.title}
                </h3>
                <p className="text-[14px] leading-[1.55] text-ink/75 mb-5">{it.desc}</p>
                <span className="inline-flex items-center gap-2 mono text-[12px] uppercase tracking-[0.16em] border-b-2 border-ink pb-0.5">
                  {it.cta} <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────── Contact
export function Contact() {
  const links = [
    {
      label: "hello@brightstudio.build",
      href: "mailto:hello@brightstudio.build",
      Icon: Mail,
      primary: true,
    },
    {
      label: "@jess_h_talbert",
      href: "https://instagram.com/jess_h_talbert",
      Icon: Instagram,
      primary: false,
    },
    { label: "LinkedIn", href: "#", Icon: Linkedin, primary: false },
    { label: "GitHub", href: "#", Icon: Github, primary: false },
  ];
  return (
    <section id="contact" className="relative bg-ink text-cream">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <SectionLabel num="06" label="Hire me" tone="dark" />
        <div className="grid grid-cols-12 gap-6 sm:gap-10 mt-6">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="h-display text-[52px] sm:text-[88px] lg:text-[112px] leading-[0.94]">
              Let&apos;s build
              <br />
              <span className="text-sun">something good.</span>
            </h2>
            <p className="mt-6 text-[18px] sm:text-[20px] leading-[1.5] text-cream/75 max-w-[52ch]">
              You&apos;ll talk to me, not an account manager. Tell me what you&apos;re
              building, what&apos;s stuck, or what you wish existed. Short notes
              preferred.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:pt-4">
            <ul className="space-y-3">
              {links.map(({ label, href, Icon, primary }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={cls(
                      "group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border-2 transition-transform hover:-translate-y-0.5",
                      primary
                        ? "bg-sun text-ink border-sun"
                        : "bg-transparent text-cream border-cream/25 hover:border-cream",
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={20} strokeWidth={2} />
                      <span
                        className={cls(
                          "font-medium",
                          primary ? "text-[17px]" : "text-[16px]",
                        )}
                      >
                        {label}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="opacity-70 group-hover:opacity-100 group-hover:rotate-12 transition"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-cream/15">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-8 flex items-center justify-between flex-wrap gap-4 mono text-[11px] uppercase tracking-[0.16em] text-cream/60">
        <div className="flex items-center gap-2">
          <Sun size={14} strokeWidth={2.2} className="text-sun spin-slow" />
          <span>© 2026 Bright Studio LLC</span>
          <span className="opacity-40">·</span>
          <span>Wyoming, USA</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Built with vibes and Vercel</span>
          <span className="opacity-40">·</span>
          <a href="#top" className="underline underline-offset-4 hover:text-cream">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

// ───────────────────────────────────────── Section label primitive
function SectionLabel({
  num,
  label,
  tone = "light",
}: {
  num: string;
  label: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={cls(
          "mono text-[11px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full",
          tone === "dark" ? "bg-sun text-ink" : "bg-ink text-cream",
        )}
      >
        {num}
      </span>
      <span
        className={cls(
          "mono text-[11px] uppercase tracking-[0.2em]",
          tone === "dark" ? "text-cream/60" : "text-ink/60",
        )}
      >
        — {label}
      </span>
    </div>
  );
}
