import { Button } from "@/components/ui/button";
import { Music, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dj.jpg";
import logo from "@/assets/logo.svg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Logo in top-left corner */}
      <div className="absolute top-4 left-4 z-20 header--logo">
        <img src={logo} alt="DJ Flo'w Logo" className="h-12 md:h-16 w-auto" />
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="DJ Flo'w Setup"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              DJ Professionnel secteur Alsace
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient glow-text mb-6">
            DJ FLO'W
          </h1>

          <p className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto">
            DJ Mobile Généraliste - Strasbourg et Bas-Rhin
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Animation musicale sur mesure pour mariages, anniversaires et
            soirées d'entreprise. Sonorisation professionnelle jusqu'à 250
            personnes. Déplacements jusqu'à 1h autour de Strasbourg.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 py-6 animate-glow-pulse"
              onClick={() => scrollToSection("contact")}
            >
              <Music className="mr-2 h-5 w-5" />
              Prendre contact
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
              onClick={() => scrollToSection("services")}
            >
              Découvrir les services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
