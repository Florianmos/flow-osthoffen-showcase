import { Card } from "@/components/ui/card";
import { Music2, PartyPopper, Heart, Building2, Users, Mic2 } from "lucide-react";
import ServiceDetailsDialog from "./ServiceDetailsDialog";

const services = [
  {
    icon: Heart,
    title: "DJ pour Mariage",
    description: "Animation musicale sur mesure pour votre mariage dans le Bas-Rhin. Accompagnement complet de la signature du contrat jusqu'au jour J avec rencontre physique, élaboration du programme et coordination avec vos prestataires.",
    color: "text-secondary",
    details: [
      {
        title: "Accompagnement Personnalisé",
        items: [
          "Rencontre physique pour la signature du contrat",
          "Communication régulière avec les mariés jusqu'au jour J",
          "Coordination avec les témoins, traiteur et photographe si nécessaire",
          "Accompagnement pour l'élaboration du programme de soirée",
          "Appel téléphonique de mise au point 1 semaine avant le mariage"
        ]
      },
      {
        title: "Options Supplémentaires",
        items: [
          "Possibilité de sonoriser le vin d'honneur (2 micros sans fils + 2 enceintes)",
          "Location vidéoprojecteur avec écran de 2m x 2m",
          "Machine à fumée pour effets d'ambiance",
          "2 micros sans fils pour discours et animations",
          "8 Par LED type lèche-murs avec choix de couleur selon votre décoration"
        ]
      }
    ],
    equipment: [
      "Colonnes LD Systems (2 Maui 28 G2 et 2 Maui 11 G2)",
      "Éclairage LED professionnel et compact",
      "Matériel pro adapté à votre événement"
    ]
  },
  {
    icon: PartyPopper,
    title: "Animation d'Anniversaire",
    description: "DJ pour fêtes d'anniversaire et soirées privées à Strasbourg et environs. Ambiance garantie pour vos invités de 20 à 250 personnes avec sonorisation et éclairage adaptés.",
    color: "text-primary",
    details: [
      {
        title: "Options Disponibles",
        items: [
          "Location vidéoprojecteur avec écran de 2m x 2m",
          "Machine à fumée pour l'ambiance",
          "2 micros sans fils pour animations",
          "8 Par LED type lèche-murs avec choix de couleur selon votre décoration"
        ]
      }
    ],
    equipment: [
      "Colonnes LD Systems (2 Maui 28 G2 et 2 Maui 11 G2)",
      "Éclairage LED professionnel et compact",
      "Matériel pro adapté à la taille de votre événement"
    ]
  },
  {
    icon: Building2,
    title: "Soirée d'Entreprise",
    description: "Animation professionnelle pour événements corporate, séminaires et after-work dans le Kochersberg et le Bas-Rhin. Prestation adaptée à votre image et à vos besoins.",
    color: "text-accent",
    details: [
      {
        title: "Options Disponibles",
        items: [
          "Location vidéoprojecteur avec écran de 2m x 2m pour présentations",
          "Machine à fumée pour effets d'ambiance",
          "2 micros sans fils pour prises de parole",
          "8 Par LED type lèche-murs avec choix de couleur selon votre charte graphique"
        ]
      }
    ],
    equipment: [
      "Colonnes LD Systems (2 Maui 28 G2 et 2 Maui 11 G2)",
      "Éclairage LED professionnel et compact",
      "Matériel pro adapté à votre événement"
    ]
  },
  {
    icon: Users,
    title: "Disco Mobile",
    description: "DJ mobile avec sonorisation et éclairage professionnel pour tous vos événements à Haguenau, Strasbourg et Osthoffen. De 20 à 250 personnes.",
    color: "text-secondary",
    details: [
      {
        title: "Options Disponibles",
        items: [
          "Location vidéoprojecteur avec écran de 2m x 2m",
          "Machine à fumée",
          "2 micros sans fils",
          "8 Par LED type lèche-murs avec choix de couleur"
        ]
      }
    ],
    equipment: [
      "Colonnes LD Systems (2 Maui 28 G2 et 2 Maui 11 G2)",
      "Éclairage LED professionnel et compact",
      "Matériel pro adapté à votre événement"
    ]
  },
  {
    icon: Music2,
    title: "DJ pour Soirée Privée",
    description: "Animation musicale adaptée à tous styles et tous événements. Des sets énergiques pour faire danser vos invités toute la nuit avec matériel professionnel.",
    color: "text-primary",
    details: [
      {
        title: "Options Disponibles",
        items: [
          "Location vidéoprojecteur avec écran de 2m x 2m",
          "Machine à fumée pour l'ambiance",
          "2 micros sans fils",
          "8 Par LED type lèche-murs avec choix de couleur selon votre décoration"
        ]
      }
    ],
    equipment: [
      "Colonnes LD Systems (2 Maui 28 G2 et 2 Maui 11 G2)",
      "Éclairage LED professionnel et compact"
    ]
  },
  {
    icon: Mic2,
    title: "DJ Sonorisation",
    description: "Matériel audio et éclairage haut de gamme adapté à la taille de votre événement. Installation professionnelle garantie avec matériel LD Systems et LED pro.",
    color: "text-accent",
    details: [
      {
        title: "Matériel Disponible",
        items: [
          "Sonorisation complète de 20 à 250 personnes",
          "Éclairage LED professionnel type lèche-murs (8 Par LED)",
          "Vidéoprojecteur avec écran de 2m x 2m",
          "Machine à fumée",
          "Micros sans fils (jusqu'à 2)"
        ]
      }
    ],
    equipment: [
      "Colonnes LD Systems : 2 Maui 28 G2",
      "Colonnes LD Systems : 2 Maui 11 G2",
      "Éclairage LED professionnel et compact",
      "Matériel pro et compact pour installation rapide"
    ]
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
            DJ mobile généraliste basé aux alentours de Strasbourg. Je m'adapte à chaque événement pour créer une expérience mémorable.
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
                {service.details && (
                  <ServiceDetailsDialog 
                    serviceTitle={service.title}
                    details={service.details}
                    equipment={service.equipment}
                  />
                )}
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
              Colonnes LD Systems (Maui 28 G2 & Maui 11 G2), éclairage LED professionnel et compact. Matériel pro adapté de 20 à 250 personnes.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
