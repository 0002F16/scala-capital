'use client'

import ScrollReveal from './ScrollReveal'

const pillars = [
  {
    num: '01',
    title: 'Structural Opportunity',
    description:
      'Persistent operational problems solved in developed markets remain unresolved across emerging economies, creating fertile ground for technology-enabled leapfrogging.',
  },
  {
    num: '02',
    title: 'Founder Talent',
    description:
      'A strong and growing pool of technically capable, globally competitive talent paired with rising founder ambition and increasing digital adoption.',
  },
  {
    num: '03',
    title: 'Capital Gap',
    description:
      'Early-stage funding remains scarce relative to founder demand, particularly from investors willing to move quickly and engage constructively at formative stages.',
  },
]

export default function ThesisSection() {
  return (
    <section id="thesis" className="relative bg-white px-6 py-28 lg:px-8 lg:py-40">

      <div className="relative mx-auto max-w-6xl">
        {/* Header: asymmetric layout */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-scala-blue/40" />
                <span className="font-nunito text-[11px] font-light tracking-[0.4em] text-scala-blue uppercase">
                  Our Thesis
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mt-6 font-cardo text-4xl leading-[1.15] text-scala-black sm:text-5xl lg:text-[3.5rem]">
                Why Early-Stage
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 lg:flex lg:items-end">
            <ScrollReveal delay={0.15}>
              <p className="max-w-md font-nunito text-base leading-[1.8] font-light text-scala-gray lg:pb-1">
                A convergence of structural gaps, rising talent, and underfunded ecosystems — the conditions that produce outsized venture outcomes.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Accent rule */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 mb-16 h-px w-full bg-gradient-to-r from-scala-blue/20 via-scala-black/[0.06] to-transparent" />
        </ScrollReveal>

        {/* Pillars */}
        <div className="grid gap-0 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={0.15 + i * 0.12}>
              <div className={`group relative py-2 ${i < 2 ? 'md:border-r md:border-scala-black/[0.06] md:pr-10' : ''} ${i > 0 ? 'md:pl-10' : ''}`}>
                {/* Large decorative number */}
                <span className="mb-6 block font-cardo text-[3.5rem] leading-none font-bold text-scala-blue/[0.08]">
                  {pillar.num}
                </span>
                <h3 className="font-cardo text-xl text-scala-black">
                  {pillar.title}
                </h3>
                <p className="mt-4 font-nunito text-[0.9rem] leading-[1.8] font-light text-scala-gray">
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
