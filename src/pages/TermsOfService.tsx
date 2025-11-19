import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-gradient mb-8">
          Conditions Générales d'Utilisation
        </h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Objet
            </h2>
            <p>
              Les présentes Conditions Générales d'Utilisation (CGU) régissent
              l'utilisation du site web florianmossler.fr (ci-après "le Site"),
              édité par DJ FLO'W, prestation de services de DJ professionnel
              basé à Osthoffen, Alsace.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Acceptation des CGU
            </h2>
            <p>
              L'accès et l'utilisation du Site impliquent l'acceptation sans
              réserve des présentes CGU. Si vous n'acceptez pas ces conditions,
              veuillez ne pas utiliser le Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Services proposés
            </h2>
            <p>
              Le Site présente les services de DJ professionnel proposés par DJ
              Flo'w pour divers événements (mariages, anniversaires, événements
              d'entreprise, etc.) en Alsace. Il permet également aux visiteurs
              de :
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Consulter les prestations et tarifs</li>
              <li>Visualiser la galerie photos et vidéos</li>
              <li>Lire les témoignages clients</li>
              <li>
                Soumettre des demandes de renseignements via le formulaire de
                contact
              </li>
              <li>Déposer un avis sur les services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Propriété intellectuelle
            </h2>
            <p>
              L'ensemble des éléments du Site (textes, images, vidéos, logos,
              graphismes, etc.) est protégé par les droits de propriété
              intellectuelle. Toute reproduction, distribution ou utilisation
              non autorisée est interdite sans l'accord préalable de DJ FLO'W.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Témoignages et avis clients
            </h2>
            <p>
              Les utilisateurs peuvent publier des avis sur les services. En
              publiant un avis, vous garantissez :
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Que le contenu est authentique et véridique</li>
              <li>Que vous disposez des droits sur les photos partagées</li>
              <li>
                Que le contenu ne contient rien d'illégal, diffamatoire ou
                offensant
              </li>
            </ul>
            <p className="mt-4">
              DJ FLO'W se réserve le droit de modérer, modifier ou supprimer
              tout avis inapproprié sans préavis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Limitation de responsabilité
            </h2>
            <p>
              DJ FLO'W s'efforce de maintenir le Site accessible et à jour, mais
              ne peut garantir une disponibilité continue. DJ FLO'W ne saurait
              être tenu responsable des dommages directs ou indirects résultant
              de l'utilisation ou de l'impossibilité d'utiliser le Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Liens hypertextes
            </h2>
            <p>
              Le Site peut contenir des liens vers des sites tiers. DJ FLO'W
              n'est pas responsable du contenu de ces sites externes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Modification des CGU
            </h2>
            <p>
              DJ FLO'W se réserve le droit de modifier les présentes CGU à tout
              moment. Les modifications prendront effet dès leur publication sur
              le Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Droit applicable
            </h2>
            <p>
              Les présentes CGU sont régies par le droit français. Tout litige
              relatif à l'utilisation du Site sera soumis aux tribunaux français
              compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Contact
            </h2>
            <p>
              Pour toute question concernant ces CGU, vous pouvez nous contacter
              à l'adresse : fm.mossler@gmail.com ou par téléphone au 06 10 19 63
              73.
            </p>
          </section>

          <p className="text-sm mt-8 text-muted-foreground">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
