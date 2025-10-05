import { Accordion } from "react-bootstrap";
import "../Styles/Faq.css";

const FAQ = () => {
  return (
    <>
      <div className="faq-container">
        <h1 className="section-faq"> FAQ</h1>

        <Accordion defaultActiveKey="0" flush>
          {/* Livraison */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              🚚 Quels sont les délais de livraison au Sénégal ?
            </Accordion.Header>
            <Accordion.Body>
              Nos livraisons au Sénégal prennent entre{" "}
              <strong>3 et 7 jours ouvrés</strong> selon la ville.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>🌍 Livrez-vous à l’international ?</Accordion.Header>
            <Accordion.Body>
              Oui ! Nous livrons partout dans le monde. Les délais varient entre{" "}
              <strong>7 et 15 jours ouvrés</strong>.
            </Accordion.Body>
          </Accordion.Item>

          {/* Paiement */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              💳 Quels moyens de paiement acceptez-vous ?
            </Accordion.Header>
            <Accordion.Body>
              Nous acceptons :{" "}
              <strong>
                Wave, Orange Money, carte bancaire, PayPal et virement bancaire
              </strong>
              .
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>🔒 Le paiement est-il sécurisé ?</Accordion.Header>
            <Accordion.Body>
              Oui ✅ Toutes vos transactions sont protégées grâce à un système de
              paiement <strong>sécurisé et crypté</strong>.
            </Accordion.Body>
          </Accordion.Item>

          {/* Commande & Personnalisation */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>👗 Puis-je personnaliser ma tenue ?</Accordion.Header>
            <Accordion.Body>
              Oui 🎨 Vous pouvez choisir le <strong>tissu</strong> (wax, bazin,
              pagne tissé…), la <strong>couleur</strong>, les{" "}
              <strong>broderies</strong>, les <strong>boutons</strong> et les{" "}
              <strong>accessoires</strong>.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              🛍️ Comment passer une commande sur mesure ?
            </Accordion.Header>
            <Accordion.Body>
              Il vous suffit de sélectionner le modèle, puis d’indiquer vos
              préférences (taille, tissu, couleur) dans le formulaire de commande.
            </Accordion.Body>
          </Accordion.Item>

          {/* Retours & Échanges */}
          <Accordion.Item eventKey="6">
            <Accordion.Header>↩️ Puis-je retourner un article ?</Accordion.Header>
            <Accordion.Body>
              Oui, vous avez <strong>7 jours</strong> après réception pour
              demander un retour ou un échange.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>
              📦 Les articles personnalisés sont-ils remboursables ?
            </Accordion.Header>
            <Accordion.Body>
              Non ❌ Les articles faits sur mesure ou personnalisés ne sont pas
              remboursables sauf en cas de <strong>défaut de fabrication</strong>.
            </Accordion.Body>
          </Accordion.Item>

          {/* Autres */}
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              ✅ Comment savoir si ma commande est confirmée ?
            </Accordion.Header>
            <Accordion.Body>
              Après validation de votre paiement, vous recevrez un{" "}
              <strong>email ou SMS de confirmation</strong> avec le récapitulatif
              de votre commande.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="9">
            <Accordion.Header>
              📞 Comment puis-je contacter Ya Bousso Style ?
            </Accordion.Header>
            <Accordion.Body>
              Vous pouvez nous écrire via notre <strong>formulaire de contact</strong>,
              par <strong>WhatsApp</strong> ou par <strong>email</strong> (indiqué
              dans la page Contact).
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default FAQ;
