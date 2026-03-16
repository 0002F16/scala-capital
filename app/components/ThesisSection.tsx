'use client'

import ScrollReveal from './ScrollReveal'

const pillars = [
  {
    num: '01',
    title: 'Structural Opportunity',
    description:
      'Persistent operational problems that have been solved in Western markets remain unresolved across Southeast Asia, creating fertile ground for technology-enabled leapfrogging.',
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
      {/* Faint decorative SEA map silhouette */}
      <div className="pointer-events-none absolute top-16 right-8 select-none opacity-[0.03] lg:right-16">
        <svg width="500" height="480" viewBox="0 0 500 480" fill="currentColor" className="h-[280px] w-auto text-scala-black lg:h-[420px]">
          {/* Myanmar */}
          <path d="M95 45 L110 40 L125 55 L130 75 L120 95 L115 120 L105 145 L95 160 L90 140 L85 110 L80 80 L85 55 Z" />
          {/* Thailand */}
          <path d="M120 95 L140 85 L155 95 L160 115 L155 140 L145 165 L140 190 L130 210 L125 195 L120 170 L115 145 L110 120 Z" />
          {/* Laos */}
          <path d="M155 75 L170 70 L180 85 L175 105 L165 120 L155 110 L150 95 Z" />
          {/* Vietnam */}
          <path d="M180 65 L195 60 L200 80 L195 105 L185 130 L180 155 L175 180 L170 200 L165 185 L160 160 L165 135 L170 110 L175 90 Z" />
          {/* Cambodia */}
          <path d="M145 140 L165 135 L175 150 L170 170 L155 175 L140 165 Z" />
          {/* Malaysia Peninsula */}
          <path d="M130 210 L140 205 L145 225 L140 250 L135 275 L125 290 L120 270 L122 245 L125 225 Z" />
          {/* Sumatra */}
          <path d="M100 260 L120 250 L130 275 L125 310 L115 345 L100 365 L90 345 L85 315 L88 285 Z" />
          {/* Borneo */}
          <path d="M175 225 L210 215 L235 230 L240 260 L230 285 L210 295 L190 285 L175 265 L170 245 Z" />
          {/* Java */}
          <path d="M115 370 L145 365 L180 368 L215 372 L245 370 L265 375 L245 385 L215 388 L180 386 L145 382 L115 380 Z" />
          {/* Sulawesi */}
          <path d="M260 260 L275 245 L285 255 L280 275 L270 290 L265 310 L275 295 L290 285 L295 305 L285 320 L270 315 L260 295 L255 275 Z" />
          {/* Philippines */}
          <path d="M275 80 L290 75 L295 95 L290 115 L280 130 L275 110 Z" />
          <path d="M260 110 L280 105 L285 125 L280 145 L270 160 L260 150 L255 130 Z" />
          <path d="M245 150 L265 145 L275 160 L270 180 L260 190 L248 178 L242 165 Z" />
          {/* Papua / Eastern Islands */}
          <path d="M310 270 L340 260 L370 265 L395 275 L410 290 L400 310 L375 315 L345 310 L320 300 L310 285 Z" />
          {/* Smaller islands: Bali, Lombok, Flores, Timor chain */}
          <path d="M270 375 L285 372 L300 375 L315 378 L330 380 L345 385 L330 392 L310 390 L290 388 L270 385 Z" />
        </svg>
      </div>

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
                Why Southeast Asia
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 lg:flex lg:items-end">
            <ScrollReveal delay={0.15}>
              <p className="max-w-md font-nunito text-base leading-[1.8] font-light text-scala-gray lg:pb-1">
                The region presents a convergence of structural gaps, rising talent,
                and underfunded ecosystems, the conditions that produce outsized
                venture outcomes.
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
