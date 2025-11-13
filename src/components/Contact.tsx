import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Instagram, Music } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-on-scroll">
            <span className="text-gradient">Contactez-moi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discutons de votre projet et créons ensemble l'événement de vos rêves
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Nom *
                  </label>
                  <Input 
                    placeholder="Votre nom"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Prénom *
                  </label>
                  <Input 
                    placeholder="Votre prénom"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Email *
                </label>
                <Input 
                  type="email"
                  placeholder="votre@email.com"
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Téléphone *
                </label>
                <Input 
                  type="tel"
                  placeholder="06 XX XX XX XX"
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Type d'événement *
                </label>
                <Input 
                  placeholder="Mariage, Anniversaire, Corporate..."
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Date de l'événement
                </label>
                <Input 
                  type="date"
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Message *
                </label>
                <Textarea 
                  placeholder="Parlez-moi de votre projet..."
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary text-background hover:opacity-90 transition-opacity text-lg py-6"
              >
                <Mail className="mr-2 h-5 w-5" />
                Envoyer ma demande
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                  <a href="tel:+33699486638" className="text-muted-foreground hover:text-primary transition-colors">
                    06 99 48 66 38
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:fm.mossler@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    fm.mossler@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Localisation</h3>
                  <p className="text-muted-foreground">
                    17 rue Liberté<br />
                    67990 Osthoffen, Bas-Rhin<br />
                    Zone d'intervention : Strasbourg, Haguenau, Kochersberg
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-primary p-6 border-0">
              <h3 className="font-semibold text-background mb-4 text-lg">Suivez-moi</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-lg bg-background/20 hover:bg-background/30 flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-6 h-6 text-background" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-lg bg-background/20 hover:bg-background/30 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-6 h-6 text-background" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-lg bg-background/20 hover:bg-background/30 flex items-center justify-center transition-colors"
                >
                  <Music className="w-6 h-6 text-background" />
                </a>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border p-6">
              <h3 className="font-semibold text-foreground mb-3">Disponibilité</h3>
              <p className="text-muted-foreground mb-4">
                Je réponds généralement sous 24h. Pour une demande urgente, n'hésitez pas à m'appeler directement.
              </p>
              <div className="text-sm text-muted-foreground">
                <p>⏰ Lun - Ven : 9h - 19h</p>
                <p>⏰ Samedi : 9h - 00h</p>
                <p>⏰ Dimanche : 9h - 19h</p>
                <p className="mt-2 text-xs">Fermé du 20 déc. au 4 janv.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
