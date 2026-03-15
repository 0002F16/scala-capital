'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="noise grid-pattern relative flex min-h-screen items-center overflow-hidden bg-scala-black px-6 lg:px-8">
      {/* Ambient gradient orb — slowly breathing light */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full opacity-[0.18] blur-[120px] lg:h-[800px] lg:w-[800px]"
          style={{
            background: 'radial-gradient(circle, #022AB0 0%, #1297F2 40%, transparent 70%)',
            animation: 'drift 20s ease-in-out infinite, pulse-soft 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -bottom-48 -left-48 h-[400px] w-[400px] rounded-full opacity-[0.06] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #37D1DD 0%, transparent 70%)',
            animation: 'drift 25s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* Fine geometric lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-[20%] h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute top-0 right-[40%] hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.025] to-transparent lg:block" />
        <div className="absolute bottom-24 left-0 h-px w-32 bg-gradient-to-r from-scala-blue/20 to-transparent" />
        <div className="absolute top-32 right-0 h-px w-48 bg-gradient-to-l from-white/[0.06] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl pt-24 pb-24 lg:pt-32 lg:pb-28">
        <div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-cardo text-[2.75rem] leading-[1.05] font-normal tracking-[-0.02em] text-white sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem]"
            >
              Partnering with ambitious founders solving structural problems in{' '}
              <span className="text-scala-sky">Southeast Asia</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-xl font-nunito text-lg leading-[1.8] font-light text-white/50 sm:text-xl"
            >
              We invest at the earliest stages in venture-scale businesses
              built on real operational insight.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-4 overflow-hidden border border-white/15 px-9 py-4 font-nunito text-[13px] font-light tracking-[0.25em] text-white uppercase transition-all duration-700 hover:border-scala-blue/50 hover:text-white"
              >
                <span className="absolute inset-0 -translate-x-full bg-scala-blue/10 transition-transform duration-700 group-hover:translate-x-0" />
                <span className="relative">Connect with us</span>
                <span className="relative transition-transform duration-300 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-nunito text-[9px] tracking-[0.4em] text-white/20 uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-10 w-px bg-gradient-to-b from-white/20 to-transparent"
          />
        </div>
      </motion.div>

      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  )
}
