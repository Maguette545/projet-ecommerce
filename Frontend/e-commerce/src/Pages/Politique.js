import "../Styles/Politique.css"

function Politique() {
  return (
    <div className="politique-container">
      <h1>Politique de Confidentialité, CGV et Retours</h1>

      {/* Section Confidentialité */}
      <h2>1. Politique de Confidentialité</h2>
      <section>
        <p>
          Chez <strong>Ya Bousso Style</strong>, nous accordons une grande importance
          à la protection de vos données personnelles. Les informations collectées
          (nom, adresse, email, téléphone) servent uniquement à la gestion des
          commandes, à la livraison et à la relation client.
        </p>
        <p>
          Vos données ne seront jamais revendues à des tiers. Vous pouvez à tout
          moment demander la modification ou la suppression de vos informations en
          nous contactant à : <a href="mailto:contact@yabousso.com">contact@yabousso.com</a>.
        </p>
      </section>

      {/* Section CGV */}
      <h2>2. Conditions Générales de Vente (CGV)</h2>
      <section>
        <ul>
          <li><strong>Prix :</strong> Les prix affichés sont en [FCFA/€] et incluent toutes taxes applicables.</li>
          <li><strong>Paiement :</strong> Les paiements sont sécurisés via [Carte bancaire, PayPal, Wave, Orange Money].</li>
          <li><strong>Livraison :</strong> Les commandes sont expédiées sous [X jours ouvrés]. Les délais peuvent varier selon la destination.</li>
          <li><strong>Disponibilité :</strong> Nos articles sont confectionnés artisanalement. En cas de rupture de stock, nous vous informerons immédiatement.</li>
        </ul>
      </section>

      {/* Section Retours */}
      <h2>3. Politique de Retours & Remboursements</h2>
      <section>
        <p>
          Vous disposez de <strong>7 jours</strong> après réception de votre commande
          pour demander un échange ou un remboursement, à condition que l’article soit
          neuf, non porté et dans son emballage d’origine.
        </p>
        <p>
          Les articles personnalisés (sur mesure, broderies spéciales, tissus choisis
          par le client) ne sont ni repris ni remboursés sauf défaut de fabrication de
          notre part.
        </p>
        <p>
          Pour initier un retour, veuillez nous contacter à :
          <a href="mailto:retours@yabousso.com"> retours@yabousso.com</a>.
        </p>
      </section>
        
        <h2>4. Contact</h2>
      <section>
        <p>
          Pour toute question concernant ces politiques, vous pouvez nous écrire à :
          <a href="mailto:contact@yabousso.com"> contact@yabousso.com</a>
        </p>
      </section>
    </div>
  );
}

export default Politique;
