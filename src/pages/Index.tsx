import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ColdSparks from "@/components/ColdSparks";
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
      <Helmet>
        <title>DJ FLO'W | DJ Mariage &amp; Anniversaire en Alsace</title>
        <meta
          name="description"
          content="DJ FLO'W – Florian Mossler, DJ professionnel pour mariages, anniversaires et soirées d'entreprise partout en Alsace."
        />
        <link rel="canonical" href="https://florianmossler.fr/" />
        <meta property="og:url" content="https://florianmossler.fr/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <Services />
      <ColdSparks />
      <Gallery />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
