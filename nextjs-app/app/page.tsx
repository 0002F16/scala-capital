import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ThesisSection from './components/ThesisSection'
import InvestmentFocusSection from './components/InvestmentFocusSection'
import FounderPartnershipSection from './components/FounderPartnershipSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ThesisSection />
        <InvestmentFocusSection />
        <FounderPartnershipSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
