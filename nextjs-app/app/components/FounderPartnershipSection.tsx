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
      className="noise relative overflow-hidden bg-scala-black px-6 py-28 lg:px-8 lg:py-40"
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[150px]"
          style={{ background: 'radial-gradient(circle, #022AB0 0%, transparent 70%)' }}
        />
        {/* Geometric lines */}
        <div className="absolute top-0 left-[33%] h-full w-px bg-gradient-to-b from-transparent via-white/[0.025] to-transparent" />
        <div className="absolute top-0 left-[66%] hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.025] to-transparent lg:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-scala-cyan/40" />
            <span className="font-nunito text-[11px] font-light tracking-[0.4em] text-scala-cyan/60 uppercase">
              For Founders
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 font-cardo text-4xl leading-[1.15] text-white sm:text-5xl lg:text-[3rem] xl:text-[3.5rem]">
            How we work with founders
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-8 max-w-xl font-nunito text-base leading-[1.8] font-light text-white/40">
            Our engagement style is collaborative rather than prescriptive. We
            aim to be pragmatic capital partners, not replacement operators.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 mb-16 h-px w-full bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-0">
          {/* What founders can expect */}
          <ScrollReveal delay={0.2}>
            <div className="lg:border-r lg:border-white/[0.05] lg:pr-16">
              <h3 className="mb-10 font-nunito text-[11px] font-light tracking-[0.35em] text-white/30 uppercase">
                What to expect
              </h3>
              <div className="space-y-10">
                {expectations.map((item, i) => (
                  <div key={item.title} className="group flex gap-6">
                    <span className="font-cardo text-3xl leading-none font-bold text-white/[0.06] transition-colors duration-500 group-hover:text-scala-blue/20">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="font-cardo text-lg text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 font-nunito text-sm leading-[1.8] font-light text-white/35">
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
            <div className="lg:pl-16">
              <h3 className="mb-10 font-nunito text-[11px] font-light tracking-[0.35em] text-white/30 uppercase">
                How we support
              </h3>
              <div className="space-y-10">
                {support.map((item, i) => (
                  <div key={item.title} className="group flex gap-6">
                    <span className="font-cardo text-3xl leading-none font-bold text-white/[0.06] transition-colors duration-500 group-hover:text-scala-blue/20">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="font-cardo text-lg text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 font-nunito text-sm leading-[1.8] font-light text-white/35">
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
