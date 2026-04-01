import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Blog = () => (
  <>
    <Navbar />
    <main className="pt-24">
      <BlogSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Blog;
