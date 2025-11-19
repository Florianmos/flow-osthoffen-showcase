import { Card } from "@/components/ui/card";
import rewentsLogo from "@/assets/logo/rewents.jfif";
import paysRhenanLogo from "@/assets/logo/logopaysrhenan.png";
import campingLogo from "@/assets/logo/campinglogo.jfif";
import fabeonLogo from "@/assets/logo/logofabeon.png";
import paddockLogo from "@/assets/logo/paddocklogo.png";
import ffsaLogo from "@/assets/logo/logoffsa.png";

const partners = [
  {
    name: "DJ R-ewent's",
    type: "Associé et partenaire DJ de confiance",
    logo: rewentsLogo,
  },
  {
    name: "Office de tourisme du Pays Rhénan",
    type: "Etablissement Public",
    logo: paysRhenanLogo,
  },
  {
    name: "Plage du Staedly",
    type: "Camping",
    logo: campingLogo,
  },
  {
    name: "Fabéon",
    type: "Centre de formation",
    logo: fabeonLogo,
  },
  {
    name: "Paddock AcademY",
    type: "Innovation",
    logo: paddockLogo,
  },
  {
    name: "FFSA - Terre 67",
    type: "Club Autocross Steinbourg",
    logo: ffsaLogo,
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient glow-on-scroll">
            Ils m'ont fait confiance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ils m'ont fait confiance pour leur événement.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 p-4 hover-lift group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square mb-3 rounded-lg overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="font-semibold text-sm text-foreground mb-1">
                {partner.name}
              </h4>
              <p className="text-xs text-muted-foreground">{partner.type}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
