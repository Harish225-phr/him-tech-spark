import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Services = () => (
  <>
    <Navbar />
    <main className="pt-24">
      <ServicesSection showAll />
      <ProcessSection />
      <IndustriesSection />
      <TechStackSection />
      <CaseStudiesSection limit={4} />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Services;
