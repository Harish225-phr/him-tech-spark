import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const About = () => (
  <>
    <Navbar />
    <main className="pt-24">
      <AboutSection />
      <TimelineSection />
      <TechStackSection />
      <TestimonialsSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default About;
