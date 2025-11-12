import { Card } from "@/components/ui/card";
import { Music2, PartyPopper, Heart, Building2, Users, Mic2 } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "DJ pour Mariage",
    description: "Animation musicale sur mesure pour votre mariage dans le Bas-Rhin. Créez des moments inoubliables avec une ambiance adaptée à votre jour unique.",
    color: "text-secondary",
  },
  {
    icon: PartyPopper,
    title: "Animation d'Anniversaire",
    description: "DJ pour fêtes d'anniversaire et soirées privées à Strasbourg et environs. Ambiance garantie pour vos invités de 20 à 150 personnes.",
    color: "text-primary",
  },
  {
    icon: Building2,
    title: "Soirée d'Entreprise",
    description: "Animation professionnelle pour événements corporate, séminaires et after-work dans le Kochersberg et le Bas-Rhin.",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Disco Mobile",
    description: "DJ mobile avec sonorisation et éclairage professionnel pour tous vos événements à Haguenau, Strasbourg et Osthoffen.",
    color: "text-secondary",
  },
  {
    icon: Music2,
    title: "DJ pour Soirée",
    description: "Animation musicale adaptée à tous styles et tous événements. Des sets énergiques pour faire danser vos invités toute la nuit.",
    color: "text-primary",
  },
  {
    icon: Mic2,
    title: "DJ Sonorisation",
    description: "Matériel audio et éclairage haut de gamme adapté à la taille de votre événement. Installation professionnelle garantie.",
    color: "text-accent",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Mes Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            DJ généraliste mobile aux alentours de Strasbourg, Haguenau et Kochersberg pour rendre vos événements uniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 p-6 hover-lift card-glow group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-background" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary p-8 border-0 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-background mb-4">
              Matériel Professionnel Haut de Gamme
            </h3>
            <p className="text-background/90 text-lg">
              Son Pioneer DJ, éclairage LED professionnel, et système audio adapté à la taille de votre événement
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
