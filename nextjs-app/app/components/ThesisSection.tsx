'use client'

import ScrollReveal from './ScrollReveal'

const pillars = [
  {
    title: 'Structural Opportunity',
    description:
      'Persistent operational problems that have been solved in Western markets remain unresolved across Southeast Asia — creating fertile ground for technology-enabled leapfrogging.',
  },
  {
    title: 'Founder Talent',
    description:
      'A strong and growing pool of technically capable, globally competitive talent paired with rising founder ambition and increasing digital adoption.',
  },
  {
    title: 'Capital Gap',
    description:
      'Early-stage funding remains scarce relative to founder demand, particularly from investors willing to move quickly and engage constructively at formative stages.',
  },
]

export default function ThesisSection() {
  return (
    <section id="thesis" className="bg-white px-6 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="font-nunito text-xs font-light tracking-[0.35em] text-scala-blue uppercase">
            Our Thesis
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl font-cardo text-3xl leading-snug text-scala-black sm:text-4xl lg:text-5xl">
            Why Southeast Asia
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-6 max-w-2xl font-nunito text-base leading-relaxed font-light text-scala-gray">
            The region presents a convergence of structural gaps, rising talent,
            and underfunded ecosystems — the conditions that produce outsized
            venture outcomes.
          </p>
        </ScrollReveal>

        {/* Accent line */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 mb-14 h-px w-16 bg-scala-blue/40" />
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={0.15 + i * 0.1}>
              <div className="group">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-nunito text-[11px] font-light tracking-widest text-scala-blue/60 uppercase">
                    0{i + 1}
                  </span>
                  <div className="h-px flex-1 bg-scala-black/8" />
                </div>
                <h3 className="font-cardo text-xl text-scala-black">
                  {pillar.title}
                </h3>
                <p className="mt-3 font-nunito text-sm leading-relaxed font-light text-scala-gray">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
