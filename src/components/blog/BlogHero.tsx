import Link from 'next/link';

export default function BlogHero() {
  return (
    <section className="blog-hero relative overflow-hidden">
      <div className="blog-hero-glow blog-hero-glow-one" />
      <div className="blog-hero-glow blog-hero-glow-two" />

      {/* Top Header Bar */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-white transition-opacity hover:opacity-90">
            <img src="/favicon.ico" width={28} height={28} alt="Hammet" className="rounded" />
            <span className="font-serif text-lg font-bold tracking-tight sm:text-xl">Hammet</span>
            <span className="rounded-full bg-cyan/20 px-2 py-0.5 text-xs font-semibold text-cyan">Journal</span>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            <Link href="/" className="text-xs font-medium text-white/70 transition-colors hover:text-white sm:text-sm">
              Home
            </Link>
            <Link href="/lace" className="text-xs font-medium text-white/70 transition-colors hover:text-white sm:text-sm">
              LACE 1.0
            </Link>
            <Link href="/bootcamp" className="hidden text-xs font-medium text-white/70 transition-colors hover:text-white sm:inline-block sm:text-sm">
              Bootcamp
            </Link>
            <Link href="/testimonials" className="hidden text-xs font-medium text-white/70 transition-colors hover:text-white md:inline-block sm:text-sm">
              Testimonials
            </Link>
            <Link
              href="/lace#tickets"
              className="inline-flex items-center justify-center rounded-full bg-cyan px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-dark transition-all hover:bg-cyan/90 sm:px-4 sm:py-2"
            >
              Get Tickets
            </Link>
          </nav>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="blog-fade-up max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan sm:text-sm">
            <span>The Hammet Journal</span>
            <span className="h-1 w-1 rounded-full bg-cyan/60" />
            <span className="text-white/60">Research &amp; Ideas</span>
          </div>

          <h1 className="font-serif text-3xl leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Ideas for the future of AI and work.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-7 sm:text-lg sm:leading-8">
            Research, practical guides, and ideas helping the next generation
            understand AI and build careers around it.
          </p>
        </div>
      </div>
    </section>
  );
}
