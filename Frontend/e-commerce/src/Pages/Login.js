import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles/Login.css'; 
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../Contexte/AuthContext';

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5011/api/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Email, PassWord: Password }),
    });

    const data = await res.json();
    console.log("Réponse backend :", data);

   if (res.ok) {
  loginUser(data.user); 
  setMessage("Connexion réussie ✅");

  // Sauvegarder le token dans le localStorage
  localStorage.setItem("token", data.token);   
  console.log("Token reçu du backend :", data.token);
localStorage.setItem("token", data.token);

  // Redirection
  if (data.user.Role === "Admin") {
    navigate("/Admin");
  } else {
    navigate("/");
  }
} else {
  setMessage(data.message || "Erreur de connexion ❌");
}
  } catch (err) {
    console.error("Erreur login :", err);
    setMessage("Erreur serveur ❌");
  }
};

  return (
    <div className="login-container">
      <h2 className="form-title">Connexion</h2>

      <Form onSubmit={handleLogin} className="login-form">
        <Form.Group className="form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Entrez votre email"
            className="form-input"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="form-group" controlId="formBasicPassword">
          <Form.Label className="form-label">Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Votre mot de passe"
            className="form-input"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="form-check-group" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            id="rememberMe"
            label="Se souvenir de moi"
            className="form-check" 
          />
        </Form.Group>

        <Button type="submit" className="submit-btn">
          Se connecter
        </Button>

        {message && <p className="mt-3 text-center text-sm text-red-500">{message}</p>}
      </Form>
    </div>
  );
};

export default Login;
