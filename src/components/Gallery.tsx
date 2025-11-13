import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Video } from "lucide-react";
import photo1 from "@/assets/gallery/photo-1.jpg.jfif";
import photo2 from "@/assets/gallery/photo-2.jpg.jfif";
import photo3 from "@/assets/gallery/photo-3.jpg.jfif";
import photo4 from "@/assets/gallery/photo-4.jpg.jfif";
import photo5 from "@/assets/gallery/photo-5.jpg.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg.jpg";
import photovid1 from "@/assets/video/vid1.jpg";
import vid1 from "@/assets/video/vid1.mp4";
import photovid2 from "@/assets/video/vid2.jpg";
import vid2 from "@/assets/video/vid2.mp4";
import photovid3 from "@/assets/video/vid3.jpg";
import vid3 from "@/assets/video/vid3.mp4";
import VideoDialog from "./VideoDialog";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");

  const photos = [
    {
      id: 1,
      url: photo1,
      alt: "Mariage - Ambiance salle par LED - Domaine du Haut-Koenigsbourg",
    },
    {
      id: 2,
      url: photo2,
      alt: "Mariage - L & T",
    },
    {
      id: 3,
      url: photo5,
      alt: "Soirée d'été - Camping Plage du Staedly",
    },
    {
      id: 4,
      url: photo4,
      alt: "Mariage - Salle festive Ernolsheim les Savernes",
    },
    {
      id: 5,
      url: photo3,
      alt: "Mariage - I & P",
    },
    { id: 6, url: photo6, alt: "Mariage - A & G - Rome Philippe Geispolsheim" },
  ];

  const videos = [
    {
      id: 1,
      thumbnail: photovid1,
      title: "Soirée d'été - Camping Plage du Staedly",
      url: vid1,
    },
    {
      id: 2,
      thumbnail: photovid2,
      title: "Anniversaire de Barbara - Salle polyvalente Dangolsheim",
      url: vid2,
    },
    {
      id: 3,
      thumbnail: photovid3,
      title:
        "Sonorisation cérémonie laïque et préparatif - Château d'Einhartshausen | Phalsbourg",
      url: vid3,
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-on-scroll">
            <span className="text-gradient">Photos & Vidéos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes dernières prestations et l'ambiance que je crée pour
            vos événements
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-card">
            <TabsTrigger
              value="photos"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-foreground"
            >
              <Image className="w-4 h-4 mr-2" />
              Photos
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-foreground"
            >
              <Video className="w-4 h-4 mr-2" />
              Vidéos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <Card
                  key={photo.id}
                  className="overflow-hidden group cursor-pointer hover-lift bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-foreground font-semibold">
                        {photo.alt}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  className="overflow-hidden group hover-lift bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all"
                >
                  <VideoDialog
                    videoUrl={video.url}
                    thumbnail={video.thumbnail}
                    title={video.title}
                  />
                  <div className="p-4">
                    <p className="text-foreground font-semibold">
                      {video.title}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
