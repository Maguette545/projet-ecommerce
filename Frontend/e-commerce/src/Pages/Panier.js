import { Link } from "react-router-dom";
import { useCart } from "../Contexte/CartContext";
import "../Styles/Panier.css"; 
import { Button } from "react-bootstrap";

function Panier() {
  const { cartItems, updateQty, removeFromCart } = useCart();

  return (
    <div className="panier-container">
      <div className="panier-card">
        <div className="panier-title">🛒 Mon panier</div>

        {cartItems.length === 0 ? (
          <p className="panier-empty">
            Votre panier est vide
            <span className="panier-empty-sub">
              {" "}Ajoutez des articles depuis la boutique.
            </span>
          </p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                {/* Image */}
                <img src={item.image} alt={item.title} />

                {/* Infos produit */}
                <div className="cart-info">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                  <p className="price">{item.price} CFA</p>
                  <span className="badge-size">Taille: {item.size}</span>
                  <span className="badge-length">Longueur: {item.length} cm</span>
                </div>

                {/* Actions quantité et supprimer */}
                <div className="cart-actions">
                  <div className="cart-qty">
                    <Button
                      className="btn-qty"
                      onClick={() => updateQty(item.id, -1)}
                    >
                      -
                    </Button>
                    <span>{item.qty}</span>
                    <Button
                      className="btn-qty"
                      onClick={() => updateQty(item.id, +1)}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    className="btn-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Supprimer
                  </Button>
                </div>
              </div>
            ))}

            <Link to="/Commande">
              <Button> Confirmée la commande</Button>
            </Link>

            {/* Total */}
            <h2 className="cart-total">
              Total: {cartItems.reduce((acc, item) => acc + item.qty * Number(item.price), 0)} FCFA
            </h2>
          </>
        )}

        <Link to="/Boutique" className="btn-continue">
          Continuer mes achats
        </Link>
      </div>
    </div>
  );
}

export default Panier;
