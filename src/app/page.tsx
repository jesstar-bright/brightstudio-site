export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-black flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        <p className="text-sm font-mono uppercase tracking-widest mb-8 opacity-60">
          Bright Studio · Coming soon
        </p>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          Vibe-coded software,
          <br />
          <span className="bg-yellow px-2 -ml-2">shipped fast.</span>
        </h1>

        <p className="text-xl sm:text-2xl leading-relaxed mb-12 max-w-2xl">
          Bright Studio is a solo studio building AI-native prototypes,
          MVPs, and tools — for founders, indie hackers, and humans who
          need to make a thing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:hello@brightstudio.build"
            className="inline-flex items-center justify-center px-6 py-4 bg-black text-cream rounded-full font-medium hover:bg-cobalt transition-colors"
          >
            Let&apos;s build something →
          </a>
          <a
            href="https://github.com/jessicatalbert"
            className="inline-flex items-center justify-center px-6 py-4 border border-black rounded-full font-medium hover:bg-yellow transition-colors"
          >
            See my work
          </a>
        </div>

        <p className="mt-24 text-sm font-mono opacity-50">
          Real site coming this weekend. In the meantime: hello@brightstudio.build
        </p>
      </div>
    </main>
  );
}
