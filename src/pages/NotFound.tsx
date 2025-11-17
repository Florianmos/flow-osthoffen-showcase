import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Music } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="text-center px-4">
        <Music className="w-24 h-24 text-primary/30 mx-auto mb-8 animate-pulse" />
        <h1 className="mb-4 text-8xl font-bold text-gradient">404</h1>
        <p className="mb-2 text-2xl font-semibold text-foreground">Page introuvable</p>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/">
          <Button size="lg" className="gap-2">
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
