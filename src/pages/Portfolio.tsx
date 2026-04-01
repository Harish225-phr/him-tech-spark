import Navbar from "@/components/Navbar";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import NumbersSection from "@/components/NumbersSection";
import ClientsMarquee from "@/components/ClientsMarquee";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Portfolio = () => (
  <>
    <Navbar />
    <main className="pt-24">
      <CaseStudiesSection />
      <NumbersSection />
      <ClientsMarquee />
      <TestimonialsSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Portfolio;
