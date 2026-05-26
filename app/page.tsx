import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ProblemSection } from "@/components/home/problem-section"
import { SystemSection } from "@/components/home/system-section"
import { FreezeBanner } from "@/components/home/freeze-banner"
import { SolutionsSection } from "@/components/home/solutions-section"
import { CasesSection } from "@/components/home/cases-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SystemSection />
        <FreezeBanner />
        <SolutionsSection />
        <CasesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
