import React, { useState } from "react";
import { useCart } from "../Contexte/CartContext";
import "../Styles/commande.css";

const Commande = () => {
  const { cartItems = [] } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.qty,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Votre panier est vide ❌");
      return;
    }

    const productOrder = cartItems.map((item) => ({
      ProductId: item.id.replace(/M\d+$/, ""),
      quantity: item.qty,
    }));

    try {
      const res = await fetch("http://localhost:5011/api/new-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          UserOrder: null,
          ProductOrder: productOrder,
          TotalAmount: total,
          AdresseDelivery: formData.address,
          UserAnonymous: {
            UserFullName: formData.name,
            UserEmail: formData.email,
            UserTelephone: formData.phone,
          },
        }),
      });

      const data = await res.json();
      console.log("Réponse backend :", data);

      if (res.ok) {
        alert("Commande enregistrée ✅ Vérifiez vos emails");
      } else {
        alert(data.message || "Erreur ❌");
      }
    } catch (err) {
      console.log("Erreur fetch:", err);
      alert("Erreur serveur ❌");
    }
  };

  return (
    <div className="commande-container">
      <div className="row">
        {/* FORMULAIRE */}
        <div className="commande-form">
          <div className="commande-card">
            <h2 className="commande-title">Passer une commande</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nom complet"
                value={formData.name}
                onChange={handleChange}
                required
                className="commande-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
                className="commande-input"
              />
              <input
                type="text"
                name="phone"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="commande-input"
              />
              <textarea
                name="address"
                placeholder="Adresse de livraison"
                value={formData.address}
                onChange={handleChange}
                required
                className="commande-input"
              />

              {/* --- Mode de paiement (exemple avec radio) --- */}
              <h3 className="commande-subtitle">Mode de paiement</h3>
              <div className="radio-group custom-radio">
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="payment"
                    value="carte"
                    className="form-check-input"
                    required
                  />
                  Carte bancaire
                </label>
              </div>
              <div className="radio-group custom-radio">
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="payment"
                    value="livraison"
                    className="form-check-input"
                  />
                  Paiement à la livraison
                </label>
              </div>

              <button type="submit" className="commande-btn">
                Valider la commande
              </button>
            </form>
          </div>
        </div>

        {/* RÉSUMÉ */}
        <div className="commande-resume">
          <div className="resume-card">
            <h3 className="resume-title">Résumé du panier</h3>
            {cartItems.length === 0 ? (
              <p>Votre panier est vide</p>
            ) : (
              <>
                {cartItems.map((item, index) => (
                  <div className="resume-item" key={item.id || index}>
                    <span>
                      {item.title} x {item.qty}
                    </span>
                    <span>{Number(item.price) * item.qty} CFA</span>
                  </div>
                ))}
                <div className="resume-total">Total : {total} CFA</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commande;
