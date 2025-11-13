import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollGlow } from "@/hooks/useScrollGlow";

const Index = () => {
  useScrollGlow();
  
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
