'use client'

import ScrollReveal from './ScrollReveal'

const expectations = [
  {
    title: 'Fewer decision-makers',
    detail: 'A small, trusted group with direct authority — no committee layers.',
  },
  {
    title: 'Faster decisions',
    detail:
      'Conviction-building and investment timelines measured in days, not months.',
  },
  {
    title: 'Direct communication',
    detail:
      'Transparent feedback and honest engagement from the first conversation.',
  },
]

const support = [
  {
    title: 'Strategic prioritization',
    detail: 'Help navigating trade-offs and sequencing what matters.',
  },
  {
    title: 'Early structural guidance',
    detail: 'Business setup, operational foundations, and governance considerations.',
  },
  {
    title: 'Cross-market perspectives',
    detail:
      'External viewpoints informed by experience across multiple markets and asset classes.',
  },
]

export default function FounderPartnershipSection() {
  return (
    <section
      id="founders"
      className="bg-scala-black px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="font-nunito text-xs font-light tracking-[0.35em] text-scala-cyan/70 uppercase">
            For Founders
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl font-cardo text-3xl leading-snug text-white sm:text-4xl lg:text-5xl">
            How we work with founders
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-6 max-w-2xl font-nunito text-base leading-relaxed font-light text-white/45">
            Our engagement style is collaborative rather than prescriptive. We
            aim to be pragmatic capital partners, not replacement operators.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-14 mb-16 h-px w-16 bg-white/10" />
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* What founders can expect */}
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="mb-8 font-nunito text-xs font-light tracking-[0.3em] text-white/35 uppercase">
                What to expect
              </h3>
              <div className="space-y-8">
                {expectations.map((item, i) => (
                  <div key={item.title} className="flex gap-5">
                    <span className="mt-0.5 font-nunito text-[11px] font-light tracking-wider text-scala-blue/60">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="font-cardo text-lg text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 font-nunito text-sm leading-relaxed font-light text-white/40">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* How we support */}
          <ScrollReveal delay={0.3}>
            <div>
              <h3 className="mb-8 font-nunito text-xs font-light tracking-[0.3em] text-white/35 uppercase">
                How we support
              </h3>
              <div className="space-y-8">
                {support.map((item, i) => (
                  <div key={item.title} className="flex gap-5">
                    <span className="mt-0.5 font-nunito text-[11px] font-light tracking-wider text-scala-blue/60">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="font-cardo text-lg text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 font-nunito text-sm leading-relaxed font-light text-white/40">
                        {item.detail}
                      </p>
                    </div>
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
