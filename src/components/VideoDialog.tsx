import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { useState } from "react";

interface VideoDialogProps {
  videoUrl: string;
  thumbnail: string;
  title: string;
}

const VideoDialog = ({ videoUrl, thumbnail, title }: VideoDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative aspect-video overflow-hidden cursor-pointer group">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play
                className="w-8 h-8 text-foreground ml-1"
                fill="currentColor"
              />
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 bg-background">
        <div className="relative aspect-video w-full">
          <video
            className="w-full h-full"
            controls
            autoPlay
            src={videoUrl}
          >
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
        <div className="p-4">
          <p className="text-foreground font-semibold">{title}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;
