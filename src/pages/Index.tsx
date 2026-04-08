import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ClientsMarquee from "@/components/ClientsMarquee";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import StackingCardsSection from "@/components/StackingCardsSection";
import TechStackSection from "@/components/TechStackSection";
import NumbersSection from "@/components/NumbersSection";
import AchievementsSection from "@/components/AchievementsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ClientsMarquee />
        <ServicesSection />
        <WhyChooseUs />
        <ProcessSection />
        <IndustriesSection />
        <CaseStudiesSection limit={4} />
        <TechStackSection />
        <NumbersSection />
        <AchievementsSection />
        <TestimonialsSection />
        <BlogSection limit={3} />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
