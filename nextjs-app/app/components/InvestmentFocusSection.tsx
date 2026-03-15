'use client'

import ScrollReveal from './ScrollReveal'

const stages = [
  { label: 'Angel', position: '10%' },
  { label: 'Pre-Seed', position: '45%' },
  { label: 'Early Seed', position: '80%' },
]

const criteria = [
  'Early traction or credible validation',
  'Clear intent to build venture-scale businesses',
  'Founders solving meaningful, non-trivial problems',
]

const sectors = [
  {
    label: 'Technology',
    detail: 'Software platforms and tech-enabled services',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-scala-blue/40">
        <rect x="2" y="3" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="0.75" />
        <line x1="6" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="0.75" />
        <line x1="10" y1="15" x2="10" y2="18" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    ),
  },
  {
    label: 'Automation',
    detail: 'Solutions addressing operational inefficiencies',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-scala-blue/40">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="0.75" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Productivity',
    detail: 'Tools improving execution and coordination',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-scala-blue/40">
        <path d="M4 5h12M4 10h8M4 15h10" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function InvestmentFocusSection() {
  return (
    <section
      id="focus"
      className="noise relative overflow-hidden bg-[#FAFAF8] px-6 py-28 lg:px-8 lg:py-40"
    >
      {/* Decorative background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #022AB0 0%, transparent 70%)' }}
        />
        <div className="absolute top-0 left-[30%] h-full w-px bg-gradient-to-b from-transparent via-scala-blue/[0.06] to-transparent" />
        <div className="absolute top-0 right-[30%] hidden h-full w-px bg-gradient-to-b from-transparent via-scala-black/[0.03] to-transparent lg:block" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        {/* Faint decorative background text — sits behind heading */}
        <div className="pointer-events-none absolute -top-6 -left-4 select-none font-cardo text-[10rem] leading-none font-bold text-scala-black/[0.015] lg:text-[14rem]">
          FOCUS
        </div>

        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-scala-blue/40" />
            <span className="font-nunito text-[11px] font-light tracking-[0.4em] text-scala-blue uppercase">
              Investment Focus
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl font-cardo text-4xl leading-[1.15] text-scala-black sm:text-5xl lg:text-[3.5rem]">
            Where we invest
          </h2>
        </ScrollReveal>

        {/* Stage spectrum — visual timeline */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 mb-20">
            <span className="mb-8 block font-nunito text-[11px] font-light tracking-[0.3em] text-scala-gray/60 uppercase">
              Stage
            </span>
            <div className="relative">
              {/* Timeline bar */}
              <div className="h-[2px] w-full bg-scala-black/[0.06]" />
              <div className="absolute top-0 left-[8%] h-[2px] w-[76%] bg-gradient-to-r from-scala-blue/60 via-scala-blue/35 to-scala-blue/10" />
              {/* Glow effect on active range */}
              <div className="absolute -top-[3px] left-[8%] h-[8px] w-[76%] bg-gradient-to-r from-scala-blue/20 via-scala-blue/10 to-transparent blur-[4px]" />
              {/* Stage markers */}
              <div className="relative mt-0">
                {stages.map((stage) => (
                  <div
                    key={stage.label}
                    className="absolute -top-[8px] flex flex-col items-center"
                    style={{ left: stage.position }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 scale-[2.5] rounded-full bg-scala-blue/10 blur-[6px]" />
                      <div className="relative h-[16px] w-[16px] rounded-full border-2 border-scala-blue bg-white shadow-[0_0_12px_rgba(2,42,176,0.15)]" />
                    </div>
                    <span className="mt-4 font-nunito text-sm font-semibold tracking-wide text-scala-black whitespace-nowrap">
                      {stage.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* What we look for */}
          <ScrollReveal delay={0.15}>
            <div>
              <h3 className="font-cardo text-2xl text-scala-black">
                What we look for
              </h3>
              <div className="mt-8 space-y-0">
                {criteria.map((item, i) => (
                  <div key={item} className="group relative flex items-start gap-5 border-b border-scala-black/[0.05] py-6 transition-colors duration-300 hover:bg-scala-blue/[0.02]">
                    <span className="font-cardo text-[2.5rem] leading-none font-bold text-scala-blue/[0.08] transition-colors duration-500 group-hover:text-scala-blue/[0.15]">
                      0{i + 1}
                    </span>
                    <div className="flex-1 pt-2">
                      <p className="font-nunito text-[0.95rem] leading-[1.7] font-light text-scala-gray">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-10 border-l-2 border-scala-blue/15 pl-5 font-nunito text-sm leading-[1.8] font-light text-scala-gray/60 italic">
                We are industry agnostic by policy — sector labels are secondary
                to problem clarity, founder insight, and execution potential.
              </p>
            </div>
          </ScrollReveal>

          {/* Sector orientation */}
          <ScrollReveal delay={0.25}>
            <div>
              <h3 className="font-cardo text-2xl text-scala-black">
                Sector orientation
              </h3>
              <div className="mt-8 space-y-4">
                {sectors.map((sector) => (
                  <div
                    key={sector.label}
                    className="group flex items-start gap-5 rounded-sm border border-scala-black/[0.06] bg-white px-6 py-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-500 hover:border-scala-blue/20 hover:shadow-[0_4px_20px_rgba(2,42,176,0.06)]"
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-scala-blue/[0.04] transition-colors duration-300 group-hover:bg-scala-blue/[0.08]">
                      {sector.icon}
                    </div>
                    <div>
                      <h4 className="font-nunito text-sm font-semibold tracking-wide text-scala-black">
                        {sector.label}
                      </h4>
                      <p className="mt-1.5 font-nunito text-sm leading-[1.7] font-light text-scala-gray">
                        {sector.detail}
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
