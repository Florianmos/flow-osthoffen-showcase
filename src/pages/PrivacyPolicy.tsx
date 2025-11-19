import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
          Politique de Confidentialité
        </h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Introduction
            </h2>
            <p>
              DJ FLO'W accorde une grande importance à la protection de vos
              données personnelles. Cette politique de confidentialité explique
              comment nous collectons, utilisons et protégeons vos informations
              lorsque vous utilisez notre site web florianmossler.fr.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données est DJ FLO'W, basé à
              Osthoffen, Alsace. Pour toute question relative à vos données,
              vous pouvez nous contacter à fm.mossler@gmail.com ou au 06 10 19
              63 73.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Données collectées
            </h2>
            <p>Nous collectons les données suivantes :</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>
                <strong>Formulaire de contact :</strong> nom, prénom, adresse
                e-mail, numéro de téléphone, type d'événement, date prévue,
                message
              </li>
              <li>
                <strong>Témoignages publics :</strong> pseudonyme (pas de nom
                réel), type d'événement, date de l'événement, note, commentaire,
                photo de l'événement (optionnel), nom du photographe
                (optionnel). Votre pseudonyme et commentaire seront affichés
                publiquement sur le site.
              </li>
              <li>
                <strong>Données de navigation :</strong> stockage local du
                navigateur (localStorage) pour la gestion des sessions
                techniques. Aucun cookie de tracking ou publicitaire n'est
                utilisé.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Finalités du traitement
            </h2>
            <p>Vos données sont collectées pour :</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Répondre à vos demandes de renseignements et devis</li>
              <li>Gérer et afficher les témoignages clients</li>
              <li>Améliorer l'expérience utilisateur du site</li>
              <li>Assurer la sécurité et le bon fonctionnement du site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Base légale du traitement
            </h2>
            <p>Le traitement de vos données repose sur :</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>
                Votre consentement (pour les témoignages et le formulaire de
                contact)
              </li>
              <li>L'intérêt légitime (pour l'amélioration du service)</li>
              <li>
                L'exécution d'un contrat (pour les prestations commandées)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Durée de conservation
            </h2>
            <p>
              Vos données sont conservées pendant la durée nécessaire aux
              finalités pour lesquelles elles ont été collectées :
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Demandes de contact : 3 ans après le dernier contact</li>
              <li>
                Témoignages : tant que vous ne demandez pas leur suppression
              </li>
              <li>Données de navigation : 13 mois maximum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Destinataires des données
            </h2>
            <p>
              Vos données sont uniquement accessibles par DJ FLO'W et ne sont
              jamais vendues à des tiers. Nous pouvons partager vos données avec
              des prestataires techniques (hébergement, service d'envoi
              d'e-mails) qui agissent en notre nom et sous notre responsabilité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Sécurité des données
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données contre tout accès non
              autorisé, perte, destruction ou altération. Le site utilise le
              protocole HTTPS pour sécuriser les échanges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants concernant
              vos données personnelles :
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à fm.mossler@gmail.com ou
              par téléphone au 06 10 19 63 73. Vous disposez également du droit
              d'introduire une réclamation auprès de la CNIL.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Cookies
            </h2>
            <p>
              Le site utilise des cookies techniques nécessaires au
              fonctionnement du site (stockage local pour l'authentification
              backend). Ces cookies ne collectent pas de données personnelles à
              des fins publicitaires. Aucun cookie tiers n'est utilisé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. Modifications
            </h2>
            <p>
              Cette politique de confidentialité peut être mise à jour
              périodiquement. Nous vous encourageons à la consulter
              régulièrement. La date de dernière mise à jour est indiquée en bas
              de page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              12. Contact
            </h2>
            <p>
              Pour toute question concernant cette politique de confidentialité
              ou vos données personnelles, contactez-nous :
            </p>
            <ul className="list-none ml-4 mt-2 space-y-2">
              <li>E-mail : fm.mossler@gmail.com</li>
              <li>Téléphone : 06 10 19 63 73</li>
              <li>Adresse : Osthoffen, Alsace, France</li>
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

export default PrivacyPolicy;
