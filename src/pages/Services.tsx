import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Services = () => (
  <>
    <Navbar />
    <main className="pt-24">
      <ServicesSection showAll />
      <ProcessSection />
      <TechStackSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Services;
