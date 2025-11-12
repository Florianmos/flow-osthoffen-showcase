import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "L & T",
    event: "Mariage - 21 septembre 2025",
    rating: 5,
    comment:
      "On voulait te remercier pour ton super boulot d'hier soir. C'était une une super soirée, on a adoré, tu as fait du super travail c'était vraiment génial !! Encore un grand merci pour ton accompagnement, ton écoute et tout le reste.",
    image:
      "https://cdn0.mariages.net/vendor/7506/3_2/960/jpeg/image00035_3_227506-172166798616344.jpeg",
  },
  {
    name: "S & P",
    event: "Mariage - 6 septembre 2025",
    rating: 5,
    comment:
      "Une soirée formidable géré à la perfection par Florian, Souriant, rigoureux, efficace, il s'est adapté au planning en coordination avec les différents interlocuteurs (photographe, traiteur, témoins) Discret, il a su mettre en avant les moments importants de la soirée et nous a fait danser jusqu'au bout de la nuit. Grand merci à toi. Phip et Isa",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfXTDyyQUAkS2ChDtBz-oSivbmDEtZYqF_jA&s",
  },
  {
    name: "L & J",
    event: "Mariage - 30 août 2025",
    rating: 5,
    comment: "Merci encore Florian. C'était une magnifique soirée !",
    image: "https://www.dalhunden.fr/images/Location%20salle.jpg",
  },
  {
    name: "S & R",
    event: "Mariage - 12 juillet 2025",
    rating: 5,
    comment:
      "Merci enormément pour ta prestation samedi ! Nous te recommanderons sans hésiter !",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/5b/a4/18/hostellerie-de-l-etoile.jpg?w=1000&h=1000&s=1",
  },
  {
    name: "Autocross Steinbourg / TERRE67",
    event: "Evenment d'entreprise - 7 juin 2025",
    rating: 5,
    comment:
      "Merci pour cette belle soirée, tout le monde a apprécié l'ambiance musicale. On refera appel à toi sans hésiter !",
    image:
      "https://bocir-medias-prod.s3.fr-par.scw.cloud/medias/bdw90XUz6T/image/affiche_20251745306374610-format1by1.jpg",
  },
  {
    name: "Cédric",
    event: "Anniversaire - 18 mai 2025",
    rating: 5,
    comment: "Merci ! On a passé une exellente soirée !",
    image:
      "https://mairie-osthoffen.fr/wp-content/uploads/2016/12/foyer-osthoffen.jpg",
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
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.event}
                  </p>
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
