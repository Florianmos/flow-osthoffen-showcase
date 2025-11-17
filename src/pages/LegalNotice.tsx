import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LegalNotice = () => {
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
          Mentions Légales
        </h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Éditeur du site
            </h2>
            <p>Le site web florianmossler.fr est édité par :</p>
            <ul className="list-none ml-4 mt-2 space-y-2">
              <li>
                <strong>Nom commercial :</strong> DJ Flo'w
              </li>
              <li>
                <strong>Responsable :</strong> Florian Mossler
              </li>
              <li>
                <strong>Adresse :</strong> Osthoffen, Alsace, France
              </li>
              <li>
                <strong>Téléphone :</strong> 06 10 19 63 73
              </li>
              <li>
                <strong>E-mail :</strong> fm.mossler@gmail.com
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Hébergement
            </h2>
            <p>Le site est hébergé par :</p>
            <ul className="list-none ml-4 mt-2 space-y-2">
              <li>
                <strong>Hébergeur :</strong> Hostinger International Ltd.
              </li>
              <li>
                <strong>Adresse :</strong> 61 Lordou Vironos Street, 6023
                Larnaca, Chypre
              </li>
              <li>
                <strong>Site web :</strong>{" "}
                <a
                  href="https://www.hostinger.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.hostinger.fr
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Directeur de publication
            </h2>
            <p>
              Le directeur de la publication du site est Florian Mossler,
              contactable à l'adresse e-mail : fm.mossler@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Propriété intellectuelle
            </h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos,
              graphismes, mise en page, etc.) est la propriété exclusive de DJ
              Flo'w, sauf mention contraire. Toute reproduction, distribution,
              modification ou utilisation à des fins commerciales ou non, sans
              autorisation écrite préalable, est strictement interdite et
              constitue une contrefaçon sanctionnée par les articles L.335-2 et
              suivants du Code de la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Crédits photos et vidéos
            </h2>
            <p>
              Les photographies et vidéos présentes sur le site sont la
              propriété de DJ Flo'w ou ont été utilisées avec l'autorisation de
              leurs auteurs. Le nom du photographe est mentionné lorsque
              celui-ci est connu. Si vous êtes l'auteur d'une photographie et
              souhaitez qu'elle soit créditée ou retirée, merci de nous
              contacter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Données personnelles
            </h2>
            <p>
              Les données personnelles collectées sur ce site font l'objet d'un
              traitement conforme au Règlement Général sur la Protection des
              Données (RGPD). Pour plus d'informations, consultez notre{" "}
              <Link
                to="/privacy-policy"
                className="text-primary hover:underline"
              >
                Politique de Confidentialité
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Cookies
            </h2>
            <p>
              Le site utilise des cookies techniques nécessaires à son bon
              fonctionnement. Pour plus d'informations, consultez notre{" "}
              <Link
                to="/privacy-policy"
                className="text-primary hover:underline"
              >
                Politique de Confidentialité
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Limitation de responsabilité
            </h2>
            <p>
              DJ Flo'w s'efforce de fournir des informations exactes et à jour
              sur ce site. Toutefois, DJ Flo'w ne peut garantir l'exactitude, la
              précision ou l'exhaustivité des informations mises à disposition.
              En conséquence, DJ Flo'w décline toute responsabilité pour toute
              imprécision, inexactitude ou omission portant sur des informations
              disponibles sur ce site.
            </p>
            <p className="mt-4">
              DJ Flo'w ne pourra être tenu responsable des dommages directs ou
              indirects résultant de l'utilisation de ce site ou de
              l'impossibilité d'y accéder.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Liens hypertextes
            </h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. DJ Flo'w
              n'exerce aucun contrôle sur ces sites et décline toute
              responsabilité quant à leur contenu, leur politique de
              confidentialité ou leurs pratiques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, et après tentative de recherche d'une solution
              amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. Contact
            </h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez
              nous contacter :
            </p>
            <ul className="list-none ml-4 mt-2 space-y-2">
              <li>E-mail : fm.mossler@gmail.com</li>
              <li>Téléphone : 06 10 19 63 73</li>
            </ul>
          </section>

          <p className="text-sm mt-8 text-muted-foreground">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
