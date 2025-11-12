import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface ServiceDetail {
  title: string;
  items: string[];
}

interface ServiceDetailsDialogProps {
  serviceTitle: string;
  details: ServiceDetail[];
  equipment?: string[];
}

const ServiceDetailsDialog = ({ serviceTitle, details, equipment }: ServiceDetailsDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="mt-4">
          <Info className="w-4 h-4 mr-2" />
          Voir les détails
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{serviceTitle}</DialogTitle>
          <DialogDescription>
            Détails complets de la prestation
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          {details.map((detail, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-3 text-primary">{detail.title}</h3>
              <ul className="space-y-2">
                {detail.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {equipment && equipment.length > 0 && (
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="font-semibold text-lg mb-3 text-primary">Matériel Professionnel</h3>
              <ul className="space-y-2">
                {equipment.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsDialog;
