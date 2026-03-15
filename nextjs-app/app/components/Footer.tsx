export default function Footer() {
  return (
    <footer className="relative bg-scala-black px-6 py-14 lg:px-8">
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="font-cardo text-sm tracking-wide text-white/40">
              &copy; {new Date().getFullYear()} Scala Capital
            </span>
            <div className="hidden h-3 w-px bg-white/10 sm:block" />
            <span className="hidden font-nunito text-[10px] font-light tracking-wider text-white/20 sm:block">
              New York &middot; Southeast Asia
            </span>
          </div>
          <div className="flex gap-8">
            {[
              { label: 'Thesis', href: '#thesis' },
              { label: 'Focus', href: '#focus' },
              { label: 'Founders', href: '#founders' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-nunito text-[10px] tracking-[0.2em] text-white/25 uppercase transition-colors duration-300 hover:text-white/50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
