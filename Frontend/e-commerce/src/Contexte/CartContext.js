// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

const CartContext = createContext();

/**
 * CartProvider
 * Fournit le panier et ses méthodes aux composants enfants
 */
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    // Lecture du panier depuis localStorage au premier rendu
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Sauvegarde automatique dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Ajouter au panier
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, qty: 1 }];
      }
    });
  };

  // Modifier la quantité (positif ou négatif)
  const updateQty = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + amount } : item
        )
        .filter((item) => item.qty > 0) // supprime si qty <= 0
    );
  };

  // Supprimer un article complètement
  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  // Compteur total d'articles
  const cartCount = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.qty, 0),
    [cartItems]
  );

  // Objet fourni aux enfants (mémoïsé pour limiter les rerenders)
  const value = useMemo(
    () => ({ cartItems, addToCart, updateQty, removeFromCart, cartCount }),
    [cartItems, cartCount]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

/**
 * Hook useCart
 * Simplifie l’accès au contexte du panier
 */
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart doit être utilisé à l'intérieur d'un CartProvider");
  }
  return context;
}
