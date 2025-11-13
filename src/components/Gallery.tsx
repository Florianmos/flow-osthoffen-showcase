import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Video, Play } from "lucide-react";
import aboutHistory from "@/assets/about-history.jpg";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");

  const photos = [
    { id: 1, url: aboutHistory, alt: "Mariage - Ambiance salle" },
    { id: 2, url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop", alt: "DJ Setup Pro" },
    { id: 3, url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop", alt: "Soirée d'entreprise" },
    { id: 4, url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&auto=format&fit=crop", alt: "Animation mariage" },
    { id: 5, url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop", alt: "Événement privé" },
    { id: 6, url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop", alt: "Anniversaire" },
  ];

  const videos = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1598387181032-a3103a2db5b1?w=800",
      title: "Mariage - Château de Pourtalès",
      url: "#",
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
      title: "Soirée Corporate - Tech Summit 2024",
      url: "#",
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800",
      title: "Festival d'été - Strasbourg",
      url: "#",
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
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-background"
            >
              <Image className="w-4 h-4 mr-2" />
              Photos
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-background"
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
                  className="overflow-hidden group cursor-pointer hover-lift bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play
                          className="w-8 h-8 text-background ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>
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
