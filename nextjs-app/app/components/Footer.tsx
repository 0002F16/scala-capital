export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-scala-black px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-cardo text-sm tracking-wide text-white/50">
          &copy; {new Date().getFullYear()} Scala Capital
        </span>
        <div className="flex gap-8">
          <a
            href="#thesis"
            className="font-nunito text-xs tracking-widest text-white/40 uppercase transition-colors hover:text-white/70"
          >
            Thesis
          </a>
          <a
            href="#focus"
            className="font-nunito text-xs tracking-widest text-white/40 uppercase transition-colors hover:text-white/70"
          >
            Focus
          </a>
          <a
            href="#founders"
            className="font-nunito text-xs tracking-widest text-white/40 uppercase transition-colors hover:text-white/70"
          >
            Founders
          </a>
          <a
            href="#contact"
            className="font-nunito text-xs tracking-widest text-white/40 uppercase transition-colors hover:text-white/70"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
