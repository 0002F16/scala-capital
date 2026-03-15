'use client'

import ScrollReveal from './ScrollReveal'

const attributes = [
  {
    num: '01',
    label: 'Patient Capital',
    text: 'No fixed fund lifecycle or external LP pressure. We invest with a long-term orientation aligned with venture-style outcomes.',
  },
  {
    num: '02',
    label: 'Family-Backed',
    text: 'Fully family-backed capital allows us to move with conviction, not consensus. Our decisions reflect genuine belief, not committee compromise.',
  },
  {
    num: '03',
    label: 'Flat Structure',
    text: 'A small decision-making group with direct authority. Speed, judgment, and context take precedence over process.',
  },
  {
    num: '04',
    label: 'Operator Roots',
    text: 'Extensive experience in owning, operating, and managing businesses across multiple asset classes — we understand what it takes to build.',
  },
]

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-28 lg:px-8 lg:py-40">
      {/* Decorative background */}
      <div className="pointer-events-none absolute top-0 right-0 select-none font-cardo text-[14rem] leading-none font-bold text-scala-black/[0.012] lg:text-[20rem]">
        SC
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left column */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-scala-blue/40" />
                <span className="font-nunito text-[11px] font-light tracking-[0.4em] text-scala-blue uppercase">
                  The Firm
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mt-6 font-cardo text-4xl leading-[1.15] text-scala-black sm:text-5xl lg:text-[3.5rem]">
                Built differently
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-8 space-y-5">
                <p className="font-nunito text-base leading-[1.8] font-light text-scala-gray">
                  Scala Capital is a family-backed investment platform rooted in
                  decades of real estate and business operations. We are expanding
                  into early-stage venture investing as part of a broader
                  diversification strategy and long-term capital growth mandate.
                </p>
                <p className="font-nunito text-sm leading-[1.8] font-light text-scala-gray/60">
                  We are not a large institutional fund, an accelerator program,
                  or a replacement management team. We are pragmatic capital
                  partners for founders who value speed, directness, and
                  substance over pageantry.
                </p>
              </div>
            </ScrollReveal>

            {/* Decorative accent */}
            <ScrollReveal delay={0.2}>
              <div className="mt-10 h-px w-16 bg-scala-blue/30" />
            </ScrollReveal>
          </div>

          {/* Right column — attributes */}
          <div className="lg:col-span-7">
            <div className="grid gap-0 sm:grid-cols-2">
              {attributes.map((attr, i) => (
                <ScrollReveal key={attr.label} delay={0.15 + i * 0.08}>
                  <div className={`group relative py-8 transition-colors duration-500 ${
                    i % 2 === 0 ? 'sm:pr-10' : 'sm:pl-10 sm:border-l sm:border-scala-black/[0.05]'
                  } ${i < 2 ? 'border-b border-scala-black/[0.05]' : ''}`}>
                    <span className="mb-4 block font-cardo text-2xl font-bold text-scala-blue/[0.08] transition-colors duration-500 group-hover:text-scala-blue/[0.15]">
                      {attr.num}
                    </span>
                    <h3 className="font-cardo text-xl text-scala-black">
                      {attr.label}
                    </h3>
                    <p className="mt-3 font-nunito text-sm leading-[1.8] font-light text-scala-gray">
                      {attr.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
