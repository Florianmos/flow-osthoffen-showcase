import { Sparkles, Shield, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import coldSparks from "@/assets/cold-sparks.jpg.asset.json";

const ColdSparks = () => {
  return (
    <section id="etincelles-froides" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all card-glow">
            <img
              src={coldSparks.url}
              alt="Machines à étincelles froides en fonctionnement lors d'une soirée"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </Card>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Option</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient glow-on-scroll">
              Étincelles froides
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Créez un moment spectaculaire avec des machines à étincelles
              froides : un effet feu d'artifice d'intérieur, sans flamme, sans
              fumée et sans danger pour vos invités.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span className="text-foreground/90">
                  Parfait pour l'entrée des mariés, l'ouverture de bal ou
                  l'arrivée du gâteau.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span className="text-foreground/90">
                  Étincelles non brûlantes, utilisables en intérieur comme en
                  extérieur.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span className="text-foreground/90">
                  Déclenchement synchronisé avec la musique pour un effet
                  garanti.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColdSparks;
