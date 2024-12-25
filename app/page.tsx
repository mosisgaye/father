import Aboutme from "@/components/Aboutme";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import MilitaryStory from "@/components/MilitaryStory";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <TestimonialSection />
      <PricingSection />
      <MilitaryStory />
      <Faq />
      <CallToAction />
      
    </div>
  );
}
