// src/Pages/Boutique.jsx
import { useEffect, useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/boutique.css";
import { useCart } from "../Contexte/CartContext";
import axios from "axios";

// -------------------- Composant Carte produit --------------------
function Cards({ product }) {
  const { addToCart } = useCart();
  const [size, setSize] = useState("M");
  const [length, setLength] = useState(100);

  const { _id, Image, Name, Description, Price } = product;
  const produit = {
    id: _id + size + length,
    productId: _id,
    image: Image,
    title: Name,
    desc: Description,
    price: Price,
    size,
    length,
  };

  return (
    <Card className="card">
      <Card.Img className="img" variant="top" src={Image} />
      <Card.Body className="body"  style={{ paddingTop: "0.5rem" }}>
        <Card.Title className="titre">{Name}</Card.Title>
        <Card.Text className="desc">{Description}</Card.Text>
        <Card.Text className="price">{Price} CFA</Card.Text>

        {/* Taille et longueur */}
        <div className="d-flex justify-content-between mb-2">
          <div>
            <label>Taille: </label>
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              {["S","M","L","XL","XXL","XXXL"].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label>Longueur: </label>
            <input
              type="number"
              value={length}
              min="50"
              max="200"
              onChange={(e) => setLength(e.target.value)}
              style={{ width: "60px" }}
            />
          </div>
        </div>

        <Button className="button" onClick={() => addToCart(produit)}>
          🛒 Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  );
}

// -------------------- Page Boutique --------------------
const Boutique = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");

  const fetchProducts = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5011/api/all-product", {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setProducts(res.data.products);
    } catch (err) {
      console.error("Erreur récupération produits :", err.response?.data || err);
    }
  }, [token]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <h1 className="titreH">🛍️ Boutique</h1>
      <Container>
        <Row>
          {products.length === 0 && <p>Aucun produit disponible pour le moment.</p>}
          {products.map((p) => (
            <Col key={p._id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <Cards product={p} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Boutique;
