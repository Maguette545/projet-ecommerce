import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import '../Styles/Footer.css'; 

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className="Yabousso">
        <h4>À propos</h4>
        <p>Ya Bousso Style, créateur de tenues ethniques chic et modernes.</p>
        <Link to="/Politique" className="text-decoration-none">
        <Button 
          variant="primary" 
          className="btn-politique px-4 py-2 rounded-pill shadow-sm"
        >
          <strong className="text-underline">
            Conditions Générales et Politiques de Confidentialité
          </strong>
        </Button>
        </Link>
      </div>
      <div className="footer-lien">
        <h4>Liens rapides</h4>
        <p><a href="/">Accueil</a></p>
        <p><a href="/boutique">Boutique</a></p>
        <p><a href="/a-propos">À propos</a></p>
        <p><a href="/contact">Contact</a></p>
      </div>
      <div className="reseau-social">
        <h4>Suivez-nous</h4>
        <div className="social-icons">
          <button className="social-button" onClick={() => window.open('https://facebook.com', '_blank')}>
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button className="social-button" onClick={() => window.open('https://facebook.com', '_blank')}>
            <FontAwesomeIcon icon={faInstagram} />
          </button>
          <button className="social-button" onClick={() => window.open('https://facebook.com', '_blank')}>
            <FontAwesomeIcon icon={faWhatsapp} />
          </button>
          <button className="social-button" onClick={() => window.open('https://facebook.com', '_blank')}>
            <FontAwesomeIcon icon={faTiktok} />
          </button>
          
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Ya Bousso Style. Tous droits réservés.
      </div>
    </div>  
    </>
  );
};


export default Footer;