import Navbar from "@/components/Navbar";
import IndustriesSection from "@/components/IndustriesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import NumbersSection from "@/components/NumbersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Industries = () => (
  <>
    <Navbar />
    <main className="pt-24">
      <IndustriesSection />
      <CaseStudiesSection limit={4} />
      <NumbersSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Industries;
