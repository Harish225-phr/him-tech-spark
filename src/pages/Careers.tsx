import Navbar from "@/components/Navbar";
import CareersSection from "@/components/CareersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Careers = () => (
  <>
    <Navbar />
    <main className="pt-24">
      <CareersSection />
      <TestimonialsSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Careers;
