import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Features } from "@/components/sections/features";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Proof } from "@/components/sections/proof";
import { Story } from "@/components/sections/story";
import { VisualShowcase } from "@/components/sections/visual-showcase";
import { AnimatedBg } from "@/components/ui/animated-bg";

export default function Home() {
  return (
    <main className="relative overflow-hidden pt-24 sm:pt-28">
      <AnimatedBg />
      <Navbar />
      <Hero />
      <Proof />
      <Features />
      <VisualShowcase />
      <HowItWorks />
      <Story />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
