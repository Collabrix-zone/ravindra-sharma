import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VideoSection from "@/components/sections/VideoSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <VideoSection homepage />
      <CTASection />
    </>
  );
}
