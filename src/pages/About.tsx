import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import NumbersSection from "@/components/NumbersSection";
import AchievementsSection from "@/components/AchievementsSection";
import TechStackSection from "@/components/TechStackSection";
import ClientsMarquee from "@/components/ClientsMarquee";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const About = () => (
  <>
    <Navbar />
    <main className="pt-24">
      <AboutSection />
      <TimelineSection />
      <NumbersSection />
      <AchievementsSection />
      <TechStackSection />
      <ClientsMarquee />
      <TestimonialsSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default About;
