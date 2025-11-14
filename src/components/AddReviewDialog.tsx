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

export function AddReviewDialog() {
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    toast({
      title: "✅ Merci pour votre avis !",
      description: "Votre témoignage sera publié après validation.",
    });
    
    setOpen(false);
    e.currentTarget.reset();
    setRating(5);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            >
              Envoyer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
