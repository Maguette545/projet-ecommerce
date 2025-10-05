import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles/SingnUp.css'; 
import { useState } from 'react';

const SingnUp = () => {

  const [FullName, setFullName] = useState("")
  const [PassWord, setPassWord] = useState("")
  const [Email, setEmail] = useState("")
  const [Telephone, setTelephone] = useState("")
  const [Adresse, setAdresse] = useState("")
  const [message, setmessage] = useState("")

  const handleSignUp = async (e) => {
    e.preventDefault();
      const res = await fetch('http://localhost:5011/api/new-user', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({FullName, PassWord, Email, Telephone, Adresse})
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data))
        setmessage('Utilisateur crée')
      } 

      if (data.Role === 'Admin') {
        window.location.href = "/Admin"
      } else {
        window.location.href = "/"
      }
  }

  return (
    <div className="signup-container">
      <h2 className="form-title">Créer un compte</h2>

      <Form onSubmit={handleSignUp} className="signup-form">
        <Form.Group className="form-group" controlId="formBasicName">
          <Form.Label className="form-label">Nom complet</Form.Label>
          <Form.Control
            type="text"
            placeholder="Saisissez votre Nom au complet"
            className="form-input"
             onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Entrez votre email"
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="form-group" controlId="formBasicPassword">
          <Form.Label className="form-label">Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Votre mot de passe"
            className="form-input"
             onChange={(e) => setPassWord(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="form-group" controlId="formBasicPhone">
          <Form.Label className="form-label">Téléphone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="77 000 00 00"
            className="form-input"
             onChange={(e) => setTelephone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="form-group" controlId="formBasicAddress">
          <Form.Label className="form-label">Adresse</Form.Label>
          <Form.Control
            type="text"
            placeholder="Votre adresse"
            className="form-input"
             onChange={(e) => setAdresse(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" className="submit-btn">
          S'inscrire
        </Button>

        {message && (
          <p className="mt-3 text-center text-sm text-red-500">{message}</p>
        )}

      </Form>
    </div>
  );
};

export default SingnUp;
