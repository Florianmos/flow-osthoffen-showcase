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
import { Star, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import blankProfile from "@/assets/blank-profile.webp";

export function AddReviewDialog() {
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [open, setOpen] = useState(false);
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaInput, setCaptchaInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
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
    } else {
      setImageFile(null);
      setImagePreview(null);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Validate captcha
    if (parseInt(captchaInput) !== captcha.answer) {
      toast({
        title: "❌ Erreur",
        description:
          "La réponse au captcha est incorrecte. Veuillez réessayer.",
        variant: "destructive",
      });
      generateCaptcha();
      return;
    }

    setLoading(true);

    try {
      let imageUrl = blankProfile; // Use default image

      // Upload image if provided
      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("testimonial-images")
          .upload(filePath, imageFile);

        if (uploadError) throw uploadError;

        // Get public URL
        const {
          data: { publicUrl },
        } = supabase.storage.from("testimonial-images").getPublicUrl(filePath);

        imageUrl = publicUrl;
      }

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
        image: imageUrl,
        photographer: null,
        approved: true, // Auto-approve for now
      });

      if (error) throw error;

      toast({
        title: "✅ Commentaire correctement ajouté !",
        description:
          "Merci pour votre témoignage. Il apparaît maintenant sur le site.",
      });

      e.currentTarget.reset();
      setRating(5);
      setCaptchaInput("");
      setImageFile(null);
      setImagePreview(null);
      setOpen(false);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-primary text-foreground font-semibold hover:opacity-90 transition-opacity">
          Laisser un avis
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-sm border-border">
        <DialogHeader>
          <DialogTitle className="text-gradient text-2xl">
            Partagez votre expérience 🎵
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Votre avis compte ! Partagez votre expérience avec DJ FLO'W.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Pseudonyme *</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Votre pseudonyme"
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventType">Type d'événement *</Label>
              <Input
                id="eventType"
                name="eventType"
                required
                placeholder="ex: Mariage, Anniversaire..."
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
                        ? "fill-secondary text-secondary"
                        : "text-muted"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment">Votre témoignage *</Label>
            <Textarea
              id="comment"
              name="comment"
              required
              placeholder="Partagez votre expérience avec DJ FLO'W..."
              className="min-h-[100px] bg-background/50 border-border focus:border-primary resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventImage">Image de l'événement (optionnel)</Label>
            <div className="flex items-center gap-4">
              <Input
                id="eventImage"
                name="eventImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="bg-background/50 border-border focus:border-primary"
              />
              <Upload className="w-5 h-5 text-muted-foreground" />
            </div>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Aperçu"
                className="w-20 h-20 rounded-lg object-cover border-2 border-primary/30"
              />
            )}
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
