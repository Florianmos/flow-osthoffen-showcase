import { Music, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-gradient">DJ Flo'w</span>
            </div>
            <p className="text-muted-foreground">
              Votre DJ professionnel à Osthoffen pour tous vos événements en Alsace et au-delà.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  Avis
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-primary transition-colors">
                  Partenaires
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Osthoffen, Alsace</li>
              <li>
                <a href="tel:+33600000000" className="hover:text-primary transition-colors">
                  06 XX XX XX XX
                </a>
              </li>
              <li>
                <a href="mailto:contact@djflow.fr" className="hover:text-primary transition-colors">
                  contact@djflow.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} DJ Flo'w. Créé avec <Heart className="w-4 h-4 text-secondary fill-secondary" /> en Alsace
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
