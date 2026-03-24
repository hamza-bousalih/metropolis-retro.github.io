type ArchiveHeroProps = {
  eyebrow: string
  title: string
  description: string
}

export function ArchiveHero({ eyebrow, title, description }: ArchiveHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(32,62,236,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,212,255,0.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <p className="mb-6 text-sm uppercase tracking-wider text-muted-foreground">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl tracking-tight md:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </section>
  )
}
