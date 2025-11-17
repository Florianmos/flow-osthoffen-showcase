import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { AddReviewDialog } from "@/components/AddReviewDialog";
import { supabase } from "@/integrations/supabase/client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Testimonial {
  id: string;
  name: string;
  event: string;
  rating: number;
  comment: string;
  image: string | null;
  created_at: string;
}

const ITEMS_PER_PAGE = 6;

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();

    // Subscribe to realtime changes
    const channel = supabase
      .channel("testimonials-changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "testimonials",
          filter: "approved=eq.true",
        },
        (payload) => {
          setTestimonials((prev) => [payload.new as Testimonial, ...prev]);
          setCurrentPage(1); // Go to first page to show new testimonial
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .eq("approved", true)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching testimonials:", error);
    } else {
      setTestimonials(data || []);
    }
    setLoading(false);
  };

  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-on-scroll">
            <span className="text-gradient">Avis Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La satisfaction de mes clients est ma plus grande fierté
          </p>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground">
            Chargement des avis...
          </div>
        ) : currentTestimonials.length === 0 ? (
          <div className="text-center text-muted-foreground">
            Aucun avis pour le moment. Soyez le premier à laisser un avis !
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentTestimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 p-6 hover-lift relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

                  <div className="flex items-center gap-4 mb-4">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                      />
                    )}
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
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>
                </Card>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            onClick={() => setCurrentPage(page)}
                            isActive={currentPage === page}
                            className="cursor-pointer"
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    )}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                        }
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
        <div className="mt-16 text-center">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Partagez votre expérience !
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Laissez-moi un petit mot sur votre expérience. Vos avis sont
              précieux et me motivent à donner le meilleur à chaque soirée.
            </p>
            <AddReviewDialog />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
