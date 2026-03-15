'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-scala-black px-6 lg:px-8">
      {/* Subtle geometric accent — thin diagonal line */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute right-24 bottom-0 h-px w-72 bg-gradient-to-r from-scala-blue/30 to-transparent" />
        {/* Corner accent */}
        <svg
          className="absolute top-20 right-12 opacity-[0.04] lg:right-24"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
        >
          <rect
            x="0"
            y="0"
            width="200"
            height="200"
            stroke="white"
            strokeWidth="0.5"
          />
          <line x1="0" y1="0" x2="200" y2="200" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl pt-24 pb-28">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <span className="font-nunito text-xs font-light tracking-[0.35em] text-scala-blue uppercase">
            Early-Stage Venture Capital
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-cardo text-4xl leading-[1.15] font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          Partnering with ambitious founders solving structural problems in{' '}
          <span className="text-scala-blue">Southeast Asia</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl font-nunito text-lg leading-relaxed font-light text-white/50"
        >
          Family-backed capital with a long-term orientation. We invest at the
          earliest stages — from angel to seed — in venture-scale businesses
          built on real operational insight.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-white/20 px-8 py-4 font-nunito text-sm font-light tracking-widest text-white uppercase transition-all duration-500 hover:border-scala-blue hover:bg-scala-blue/10"
          >
            Connect with us
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-nunito text-[10px] tracking-[0.3em] text-white/25 uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-8 w-px bg-gradient-to-b from-white/25 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}
