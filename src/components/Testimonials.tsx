import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie & Marc",
    event: "Mariage - Juin 2024",
    rating: 5,
    comment: "DJ Flo'w a rendu notre mariage absolument magique ! L'ambiance était parfaite du début à la fin. Nos invités n'ont pas arrêté de danser toute la soirée. Professionnel, à l'écoute et un excellent choix musical. Merci infiniment !",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150",
  },
  {
    name: "Thomas Entreprise SAS",
    event: "Soirée Corporate - Mars 2024",
    rating: 5,
    comment: "Nous avons fait appel à DJ Flo'w pour notre soirée d'entreprise annuelle. Le résultat a dépassé nos attentes ! Ambiance professionnelle et festive à la fois. Nos 200 collaborateurs ont adoré. Une vraie réussite !",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
  },
  {
    name: "Julie",
    event: "Anniversaire 30 ans - Octobre 2024",
    rating: 5,
    comment: "Pour mes 30 ans, je voulais une soirée inoubliable et DJ Flo'w a été à la hauteur ! Il a su lire la foule et adapter sa playlist. Tout le monde me demande encore ses coordonnées. Je recommande à 200% !",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
  },
  {
    name: "Association Les Amis d'Osthoffen",
    event: "Festival local - Juillet 2024",
    rating: 5,
    comment: "DJ Flo'w est un pilier de nos événements locaux. Toujours ponctuel, professionnel et surtout, il sait créer une atmosphère festive qui plaît à tous les âges. Un artiste local dont nous sommes fiers !",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
  {
    name: "Emma & Lucas",
    event: "Mariage - Septembre 2024",
    rating: 5,
    comment: "Un grand merci à DJ Flo'w pour avoir illuminé notre mariage ! Sa prestation était impeccable, du vin d'honneur à la fin de soirée. Il a su mélanger nos styles musicaux et créer une ambiance unique. Que de beaux souvenirs !",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
  },
  {
    name: "Pierre",
    event: "Soirée d'anniversaire - Novembre 2024",
    rating: 5,
    comment: "DJ Flo'w a transformé ma soirée en un moment exceptionnel ! Excellent DJ, matériel de qualité, et surtout une capacité incroyable à sentir ce que le public veut. Mes invités en parlent encore. Merci !",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Avis Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La satisfaction de mes clients est ma plus grande fierté
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 p-6 hover-lift relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.comment}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
