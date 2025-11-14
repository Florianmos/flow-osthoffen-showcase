import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function AddReviewDialog() {
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [open, setOpen] = useState(false);
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaInput, setCaptchaInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Generate new captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: num1 + num2 });
    setCaptchaInput("");
  };

  // Generate captcha when dialog opens
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen) {
      generateCaptcha();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Validate captcha
    if (parseInt(captchaInput) !== captcha.answer) {
      toast({
        title: "❌ Erreur",
        description: "La réponse au captcha est incorrecte. Veuillez réessayer.",
        variant: "destructive",
      });
      generateCaptcha();
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("testimonials").insert({
        name: formData.get("name") as string,
        event: `${formData.get("eventType")} - ${new Date(
          formData.get("eventDate") as string
        ).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}`,
        rating,
        comment: formData.get("comment") as string,
        approved: true, // Auto-approve for now
      });

      if (error) throw error;

      toast({
        title: "✅ Commentaire correctement ajouté !",
        description: "Merci pour votre témoignage. Il apparaît maintenant sur le site.",
      });

      setOpen(false);
      e.currentTarget.reset();
      setRating(5);
      setCaptchaInput("");
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      toast({
        title: "❌ Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-primary text-foreground font-semibold hover:opacity-90 transition-opacity">
          Laisser un avis
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Partagez votre expérience</DialogTitle>
          <DialogDescription>
            Votre avis est précieux et me motive à donner le meilleur à chaque soirée.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom ou Initiales *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Ex: J & M"
              required
              className="bg-background/50 border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventType">Type d'événement *</Label>
            <Input
              id="eventType"
              name="eventType"
              placeholder="Ex: Mariage, Anniversaire..."
              required
              className="bg-background/50 border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventDate">Date de l'événement *</Label>
            <Input
              id="eventDate"
              name="eventDate"
              type="date"
              required
              className="bg-background/50 border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label>Note *</Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoveredRating || rating)
                        ? "fill-accent text-accent"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>
            <input type="hidden" name="rating" value={rating} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment">Commentaire *</Label>
            <Textarea
              id="comment"
              name="comment"
              placeholder="Partagez votre expérience..."
              required
              rows={4}
              className="bg-background/50 border-border focus:border-primary resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="captcha">
              Sécurité : Combien font {captcha.num1} + {captcha.num2} ? *
            </Label>
            <Input
              id="captcha"
              name="captcha"
              type="number"
              placeholder="Votre réponse"
              required
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="bg-background/50 border-border focus:border-primary"
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="bg-gradient-primary text-foreground hover:opacity-90"
              disabled={loading}
            >
              {loading ? "Envoi..." : "Envoyer"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
