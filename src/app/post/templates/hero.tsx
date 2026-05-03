import { Sun, Asterisk } from "@/components/icons";
import type { HeroPost } from "../posts";

const bgMap = {
  sun: "bg-sun text-ink",
  cream: "bg-cream text-ink",
  ink: "bg-ink text-cream",
} as const;

export function HeroTemplate({ post }: { post: HeroPost }) {
  const bg = bgMap[post.bg ?? "sun"];
  const isDark = post.bg === "ink";

  return (
    <article
      className={`relative w-[1080px] h-[1350px] ${bg} border-2 border-ink overflow-hidden`}
      style={{ fontFeatureSettings: '"ss01"' }}
    >
      <Asterisk
        size={680}
        strokeWidth={1.1}
        className={`absolute -right-40 -bottom-40 ${isDark ? "text-cream/10" : "text-ink/10"}`}
      />

      <div className="relative h-full flex flex-col justify-between p-[88px]">
        <div className="flex items-center gap-4">
          <span
            className={`inline-grid place-items-center w-14 h-14 rounded-full ${
              isDark ? "bg-sun text-ink" : "bg-ink text-sun"
            }`}
          >
            <Sun size={32} strokeWidth={2.5} />
          </span>
          <span className="mono text-[18px] uppercase tracking-[0.22em] font-medium">
            {post.eyebrow}
          </span>
        </div>

        <h1 className="h-display text-[120px] leading-[0.92] tracking-[-0.02em]">
          {post.headlinePre}
          <span className="serif-it font-normal">{post.headlineSerif}</span>
        </h1>

        <div className="flex items-end justify-between">
          <div>
            <div className="h-display text-[34px] leading-none">Bright Studio</div>
            <div className="mono text-[16px] uppercase tracking-[0.18em] mt-2">
              {post.url}
            </div>
          </div>
          {post.handle && (
            <div className="mono text-[16px] uppercase tracking-[0.18em] text-right">
              {post.handle}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
