import { Card } from "@/components/ui/card";

const partners = [
  {
    name: "Office de tourisme du Pays Rhénan",
    type: "Etablissement Public",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8E04wJCOE2yKBn0bXJhkCXCgnsQXITvW0fA&s",
  },
  {
    name: "Plage du Staedly",
    type: "Camping",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDa7YydhZTruNGRQfRvFgEJ5r5pfOnNSqhQ&s",
  },
  {
    name: "Fabéon",
    type: "Centre de formation",
    logo: "https://fabeon.fr/wp-content/uploads/2023/05/Capture-decran-2023-05-19-a-13.40.50.png",
  },
  {
    name: "Paddock AcademY",
    type: "Innovation",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrI_its8aa_9LfuOxTsF55_l1iusobYYn1RA&s",
  },
  {
    name: "FFSA - Terre 67",
    type: "Club Autocross Steinbourg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-fsErukZTN_ZrkgftEmucrVPCOZfiLhA3Q&s",
  },

  {
    name: "Commune d'Osthoffen",
    type: "Commune de l'Eurométropole",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Blason_ville_fr_Osthoffen_%28Bas-Rhin%29.svg",
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-on-scroll">
            <span className="text-gradient">Entreprises partenaires</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ils m'ont fait confiance pour leur événement
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

        <div className="mt-16 text-center">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Vous êtes un professionnel ?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Collaborons ensemble pour offrir des prestations d'exception à nos
              clients
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
