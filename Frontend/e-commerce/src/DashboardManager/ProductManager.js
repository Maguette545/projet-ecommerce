import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/ProductManager.css";

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    Name: "",
    Price: "",
    Description: "",
    Image: "",
    Genre: "",
    Style: "",
    Stock: ""
  });
  const [editingId, setEditingId] = useState(null);

  // 🔹 Fonction utilitaire pour lire le token quand il faut
  const getToken = () => localStorage.getItem("token");

  // Récupération des produits
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5011/api/all-product");
      setProducts(res.data.products || []);
    } catch (err) {
      console.error("Erreur récupération produits :", err.response?.data || err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Préparation des données avant envoi
  const prepareData = (data) => ({
    ...data,
    Price: Number(data.Price),
    Genre: data.Genre.charAt(0).toUpperCase() + data.Genre.slice(1),
    Style: data.Style.charAt(0).toUpperCase() + data.Style.slice(1),
    Stock: Number(data.Stock),
  });

  // Ajout / modification produit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = getToken();
    console.log("Token récupéré dans handleSubmit :", token);

    if (!token) {
      alert("Vous devez être connecté pour effectuer cette action ❌");
      return;
    }

    const preparedData = prepareData(formData);

    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5011/api/update-product/${editingId}`,
          preparedData,
          {
            headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
          }
        );
        alert("Produit modifié avec succès ✅");
      } else {
        await axios.post(
          "http://localhost:5011/api/new-product",
          preparedData,
          {
            headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
          }
        );
        alert("Produit ajouté avec succès ✅");
      }

      setEditingId(null);
      setFormData({ Name: "", Price: "", Description: "", Image: "", Genre: "", Style: "", Stock: "" });
      fetchProducts();

    } catch (err) {
      console.error("Erreur ajout/modification produit :", err.response?.data || err);
      alert("Erreur lors de l'opération ❌");
    }
  };

  // Suppression produit
  const handleDelete = async (id) => {
    const token = getToken();
    console.log("Token récupéré dans handleDelete :", token);

    if (!token) {
      alert("Vous devez être connecté pour effectuer cette action ❌");
      return;
    }

    if (!window.confirm("Supprimer ce produit ?")) return;
    try {
      await axios.delete(`http://localhost:5011/api/delete-product/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Produit supprimé ✅");
      fetchProducts();
    } catch (err) {
      console.error("Erreur suppression produit :", err.response?.data || err);
      alert("Erreur lors de la suppression ❌");
    }
  };

  // Edition produit
  const handleEdit = (product) => {
    setEditingId(product._id);
    setFormData({
      Name: product.Name,
      Price: product.Price,
      Description: product.Description,
      Image: product.Image,
      Genre: product.Genre.toLowerCase(),
      Style: product.Style.toLowerCase(),
      Stock: product.Stock,
    });
  };

  return (
    <div className="product-manager">
      <h2 className="manager-title">Gestion des Produits</h2>

      {/* Formulaire */}
      <form className="product-form" onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            placeholder={key}
            value={formData[key]}
            onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
            className="form-input"
          />
        ))}
        <button type="submit" className="submit-btn">
          {editingId ? "Mettre à jour" : "Ajouter"}
        </button>
      </form>

      {/* Liste des produits */}
      <div className="product-grid">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <img src={p.Image} alt={p.Name} className="product-image" />
            <h3 className="product-name">{p.Name}</h3>
            <p className="product-desc">{p.Description}</p>
            <p className="product-price"><strong>{p.Price} CFA</strong></p>
            <p className="product-info">
              Genre: {p.Genre} | Style: {p.Style} | Stock: {p.Stock}
            </p>
            <div className="product-actions">
              <button onClick={() => handleEdit(p)} className="edit-btn">Modifier</button>
              <button onClick={() => handleDelete(p._id)} className="delete-btn">Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManager;