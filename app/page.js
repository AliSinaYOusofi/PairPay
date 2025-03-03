import Hero from "@/components/Hero"
import Features from "@/components/Featuers"
import DemoSection from "@/components/DemoSection"
import Testimonials from "@/components/Testimonials"
import CtaSection from "@/components/CtaAction"
import Footer from "@/components/Footer"
import AppDownload from "@/components/PlayStoreDownload"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AppDownload />
      <Features />
      <DemoSection />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  )
}

