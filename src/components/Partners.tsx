import { Card } from "@/components/ui/card";

const partners = [
  {
    name: "Château de Pourtalès",
    type: "Lieu de Réception",
    logo: "https://images.unsplash.com/photo-1519167758481-83f29da8dd8f?w=300",
  },
  {
    name: "Traiteur Excellence",
    type: "Restauration",
    logo: "https://images.unsplash.com/photo-1555244162-803834f70033?w=300",
  },
  {
    name: "Fleurs d'Alsace",
    type: "Décoration Florale",
    logo: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=300",
  },
  {
    name: "Photo & Vidéo Pro",
    type: "Photographe/Vidéaste",
    logo: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=300",
  },
  {
    name: "Mairie d'Osthoffen",
    type: "Partenaire Institutionnel",
    logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=300",
  },
  {
    name: "Location Mobilier Events",
    type: "Location Matériel",
    logo: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300",
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Mes Partenaires</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Je collabore avec les meilleurs professionnels pour garantir la réussite de votre événement
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
              <h4 className="font-semibold text-sm text-foreground mb-1">{partner.name}</h4>
              <p className="text-xs text-muted-foreground">{partner.type}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Vous êtes un professionnel de l'événementiel ?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Collaborons ensemble pour offrir des prestations d'exception à nos clients
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-gradient-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Devenir Partenaire
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Partners;
