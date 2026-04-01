'use client'

import ScrollReveal from './ScrollReveal'

export default function ContactSection() {
  return (
    <section id="contact" className="noise relative overflow-hidden bg-scala-blue px-6 py-28 lg:px-8 lg:py-40">
      {/* Atmospheric depth layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient mesh */}
        <div
          className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-[0.15] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #1297F2 0%, transparent 70%)' }}
        />
        <div
          className="absolute -right-32 -bottom-32 h-[400px] w-[400px] rounded-full opacity-[0.1] blur-[100px]"
          style={{ background: 'radial-gradient(circle, #37D1DD 0%, transparent 70%)' }}
        />
        {/* Geometric lines */}
        <div className="absolute top-0 left-[25%] h-full w-px bg-gradient-to-b from-white/[0.06] via-transparent to-white/[0.04]" />
        <div className="absolute top-0 right-[25%] hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent lg:block" />
        <div className="absolute top-0 right-0 left-0 h-px bg-white/[0.06]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <div className="mx-auto mb-8 flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-white/20" />
              <span className="font-nunito text-[11px] font-light tracking-[0.4em] text-white/40 uppercase">
                Get in Touch
              </span>
              <div className="h-px w-8 bg-white/20" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-cardo text-3xl leading-[1.2] text-white sm:text-4xl lg:text-[3.25rem]">
              If you are building in this space, we would like to hear from you
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-lg font-nunito text-base leading-[1.8] font-light text-white/40">
              We are actively investing in founders solving real problems with venture-scale ambition.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-14 flex flex-col items-center gap-8">
              <a
                href="mailto:founders@scala-vc.com"
                className="group relative inline-flex items-center gap-4 overflow-hidden border border-white/20 bg-white/[0.04] px-10 py-5 font-nunito text-[13px] font-light tracking-[0.2em] text-white uppercase backdrop-blur-sm transition-all duration-700 hover:border-white/40 hover:bg-white/[0.08]"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/[0.06] transition-transform duration-700 group-hover:translate-x-0" />
                <span className="relative">founders@scala-vc.com</span>
                <span className="relative transition-transform duration-300 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </a>
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-white/10" />
                <span className="font-nunito text-[11px] font-light tracking-[0.3em] text-white/25 uppercase">
                  www.scalacapital.com
                </span>
                <div className="h-px w-6 bg-white/10" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
