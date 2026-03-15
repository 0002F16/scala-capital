'use client'

import ScrollReveal from './ScrollReveal'

const stages = ['Angel', 'Pre-Seed', 'Early Seed']

const criteria = [
  'Early traction or credible validation',
  'Clear intent to build venture-scale businesses',
  'Founders solving meaningful, non-trivial problems',
]

const sectors = [
  {
    label: 'Technology',
    detail: 'Software platforms and tech-enabled services',
  },
  {
    label: 'Automation',
    detail: 'Solutions addressing operational inefficiencies',
  },
  {
    label: 'Productivity',
    detail: 'Tools improving execution and coordination',
  },
]

export default function InvestmentFocusSection() {
  return (
    <section
      id="focus"
      className="bg-stone-50 px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="font-nunito text-xs font-light tracking-[0.35em] text-scala-blue uppercase">
            Investment Focus
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl font-cardo text-3xl leading-snug text-scala-black sm:text-4xl lg:text-5xl">
            Where we invest
          </h2>
        </ScrollReveal>

        {/* Stage spectrum */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 mb-20">
            <span className="mb-6 block font-nunito text-xs font-light tracking-[0.3em] text-scala-gray uppercase">
              Stage
            </span>
            <div className="flex items-center gap-0">
              {stages.map((stage, i) => (
                <div key={stage} className="flex items-center">
                  {i > 0 && (
                    <div className="mx-3 h-px w-10 bg-scala-blue/25 sm:mx-5 sm:w-16" />
                  )}
                  <div className="flex items-center gap-2.5">
                    <div className="h-2 w-2 rounded-full border border-scala-blue bg-scala-blue/15" />
                    <span className="font-nunito text-sm font-normal tracking-wide text-scala-black sm:text-base">
                      {stage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* What we look for */}
          <ScrollReveal delay={0.15}>
            <div>
              <h3 className="font-cardo text-2xl text-scala-black">
                What we look for
              </h3>
              <div className="mt-6 space-y-4">
                {criteria.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-px w-4 shrink-0 bg-scala-blue/50" />
                    <p className="font-nunito text-sm leading-relaxed font-light text-scala-gray">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 font-nunito text-sm leading-relaxed font-light text-scala-gray/70">
                We do not invest in lifestyle businesses or traditional small
                enterprises. We are industry agnostic by policy — sector labels
                are secondary to problem clarity, founder insight, and execution
                potential.
              </p>
            </div>
          </ScrollReveal>

          {/* Sector orientation */}
          <ScrollReveal delay={0.25}>
            <div>
              <h3 className="font-cardo text-2xl text-scala-black">
                Sector orientation
              </h3>
              <div className="mt-6 space-y-6">
                {sectors.map((sector) => (
                  <div
                    key={sector.label}
                    className="border-l border-scala-black/8 py-1 pl-5 transition-colors duration-300 hover:border-scala-blue/40"
                  >
                    <h4 className="font-nunito text-sm font-semibold tracking-wide text-scala-black">
                      {sector.label}
                    </h4>
                    <p className="mt-1 font-nunito text-sm font-light text-scala-gray">
                      {sector.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
