import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Contact = () => (
  <>
    <Navbar />
    <main className="pt-24">
      <ContactSection />
      <FAQSection />
    </main>
    <Footer />
  </>
);

export default Contact;
