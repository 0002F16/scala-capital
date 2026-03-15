'use client'

import ScrollReveal from './ScrollReveal'

const attributes = [
  {
    label: 'Patient Capital',
    text: 'No fixed fund lifecycle or external LP pressure. We invest with a long-term orientation aligned with venture-style outcomes.',
  },
  {
    label: 'Family-Backed',
    text: 'Fully family-backed capital allows us to move with conviction, not consensus. Our decisions reflect genuine belief, not committee compromise.',
  },
  {
    label: 'Flat Structure',
    text: 'A small decision-making group with direct authority. Speed, judgment, and context take precedence over process.',
  },
  {
    label: 'Operator Roots',
    text: 'Extensive experience in owning, operating, and managing businesses across multiple asset classes — we understand what it takes to build.',
  },
]

export default function AboutSection() {
  return (
    <section className="bg-white px-6 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left column */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <span className="font-nunito text-xs font-light tracking-[0.35em] text-scala-blue uppercase">
                The Firm
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mt-5 font-cardo text-3xl leading-snug text-scala-black sm:text-4xl lg:text-5xl">
                Built differently
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-6 font-nunito text-base leading-relaxed font-light text-scala-gray">
                Scala Capital is a family-backed investment platform rooted in
                decades of real estate and business operations. We are expanding
                into early-stage venture investing as part of a broader
                diversification strategy and long-term capital growth mandate.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-4 font-nunito text-sm leading-relaxed font-light text-scala-gray/70">
                We are not a large institutional fund, an accelerator program,
                or a replacement management team. We are pragmatic capital
                partners for founders who value speed, directness, and
                substance over pageantry.
              </p>
            </ScrollReveal>
          </div>

          {/* Right column — attributes */}
          <div className="lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-2">
              {attributes.map((attr, i) => (
                <ScrollReveal key={attr.label} delay={0.15 + i * 0.08}>
                  <div className="border-t border-scala-black/8 pt-5">
                    <h3 className="font-cardo text-lg text-scala-black">
                      {attr.label}
                    </h3>
                    <p className="mt-2 font-nunito text-sm leading-relaxed font-light text-scala-gray">
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
