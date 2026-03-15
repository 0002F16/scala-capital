'use client'

import ScrollReveal from './ScrollReveal'

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-scala-blue px-6 py-28 lg:px-8 lg:py-36">
      {/* Subtle geometric accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-white/[0.08] via-transparent to-transparent" />
        <div className="absolute right-0 bottom-0 h-px w-48 bg-gradient-to-l from-white/[0.08] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl text-center">
        <ScrollReveal>
          <span className="font-nunito text-xs font-light tracking-[0.35em] text-white/50 uppercase">
            Get in Touch
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-2xl font-cardo text-3xl leading-snug text-white sm:text-4xl lg:text-5xl">
            If you are building in this space, we would like to hear from you
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-lg font-nunito text-base leading-relaxed font-light text-white/50">
            We are actively investing in founders across Southeast Asia who are
            solving real problems with venture-scale ambition.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-6">
            <a
              href="mailto:founders@scalacapital.com"
              className="group inline-flex items-center gap-3 border border-white/30 bg-white/5 px-10 py-4 font-nunito text-sm font-light tracking-widest text-white uppercase backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white/10"
            >
              founders@scalacapital.com
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <span className="font-nunito text-xs font-light tracking-wider text-white/30">
              www.scalacapital.com
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
