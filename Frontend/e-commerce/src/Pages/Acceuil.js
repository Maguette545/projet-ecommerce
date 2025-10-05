import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faLock, faScissors, faPalette, faStar } from "@fortawesome/free-solid-svg-icons";

import {Col, Container, Row, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "../Styles/Accueil.css"

function Acceuil() {
   return (
    <>
      <div className="video-banner">
      <video autoPlay muted loop playsInline className="video-background">
        <source src="/img/Banner.mp4" type="video/mp4" />
        Ton navigateur ne supporte pas la vidéo.
      </video>
      </div>
      {/*----------------------------------------section 2------------------------------------*/}

      <div className="titre">
        <span></span>
         <h2> Avantages Clients</h2> 
        <span></span>
      </div>

      <div className="container">
        
        <div className="box">
          <div className="faI"> 
            <span><FontAwesomeIcon icon={faTruck}/> </span> 
            <h3> Livraison rapide </h3>
          </div>
            <p>Vos commandes expédiées sans attente pour vous satisfaire au plus vite.</p>
        </div>

        <div className="box decale">
          <div className="faI"> 
            <span><FontAwesomeIcon icon={faLock}/> </span> 
            <h3> Paiement sécurisé </h3>
          </div>
            <p>Votre tranquillité est notre priorité, vos paiements sont protégés.</p>
        </div>

        <div className="box">
          <div className="faI"> 
            <span><FontAwesomeIcon icon={faScissors}/> </span> 
            <h3> Couture de qualité</h3>
          </div>
            <p>Chaque tenue raconte une histoire d’amour et de précision.</p>
        </div>

        <div className="box decale">
          <div className="faI"> 
            <span><FontAwesomeIcon icon={faPalette}/> </span> 
            <h3> Personnalisation possible </h3>
          </div>
            <p>Imaginez, nous réalisons. Votre style, votre identité.</p>
        </div>
      </div>
      {/*----------------------------------------section 3-------------------------------------*/}

      <div className="titre">
        <span></span>
         <h2> BIENVENUE Chez YaBousso Style </h2> 
        <span></span>
      </div>

      <div className="container">
        <div className="Desc">

          <p>
            Ya Bousso Style est une maison de couture sénégalaise spécialisée dans la création de vêtements traditionnels africains et de tenues modernes sur mesure. Nous allions savoir-faire artisanal, élégance intemporelle et créativité contemporaine pour sublimer chaque silhouette.
            Notre atelier propose des boubous élégants, des robes africaines modernes, des tenues sur mesure pour femmes et hommes, ainsi que des habits traditionnels personnalisés pour vos cérémonies, mariages, baptêmes et événements spéciaux.
            Avec Ya Bousso Style, vous avez la possibilité de personnaliser vos tenues : choix des tissus africains (wax, bazin, pagne tissé, brodé), couleurs, boutons, broderies et accessoires. Chaque création reflète votre identité culturelle tout en s’adaptant aux tendances de la mode africaine contemporaine.
            Basée au Sénégal, Ya Bousso Style souhaite promouvoir la mode africaine haut de gamme, véhiculant des valeurs de paix, de partage et de fierté culturelle à travers ses collections.
          </p>
          <Link to="/À propos">
            <Button variant="primary" className='btn-link'>Voir plus</Button>
          </Link>
        </div>
        <div className="image">
          <img src="/img/E15.jpg" 
          alt="Couture sénégalaise,Personnalisation tenue africaine,Vêtements africains élégants"
          style={{ width: "500px", height: "600px", marginTop: "40px", borderRadius: "15px" }} 
          />
        </div>
      </div>

      {/*-----------------------------------section 4-----------------------------------*/}

    <div className="titre">
        <span></span>
         <h2> Les plus populaires </h2> 
        <span></span>
      </div>

    <Container className='container-galerie'>
      <Row>
        <Col xs={6} sm={4} md={2} className='item-galerie' >
          <img src="/img/E12.jpg" alt='Vêtements africains élégants femme et homme Ya Bousso Style' className='img-galerie' />
          <img src="/img/C3.jpg" alt='Couture africaine personnalisée Dakar Sénégal' className='img-galerie' />
          <img src="/img/B1.jpg" alt='Veste, costume, chemise africain' className='img-galerie' />
          <img src="/img/B1.jpg" alt='Veste, costume, chemise africain' className='img-galerie' />
          <img src="/img/C5.jpg" alt='Veste, costume, chemise africain' className='img-galerie' />
          <img src="/img/C5.jpg" alt='Veste, costume, chemise africain' className='img-galerie' />
          <img src="/img/B1.jpg" alt='Veste, costume, chemise africain' className='img-galerie' />
          <img src="/img/B1.jpg" alt='Veste, costume, chemise africain' className='img-galerie' />
          <img src="/img/C5.jpg" alt='Veste, costume, chemise africain' className='img-galerie' />
          <img src="/img/C5.jpg" alt='Veste, costume, chemise africain' className='img-galerie' />
          <img src="/img/B1.jpg" alt='Veste, costume, chemise africain' className='img-galerie' />
          <img src="/img/B1.jpg" alt='Veste, costume, chemise africain' className='img-galerie' />
          <img src="/img/C5.jpg" alt='Veste, costume, chemise africain' className='img-galerie' />
          <img src="/img/C5.jpg" alt='Veste, costume, chemise africain' className='img-galerie' />
          <img src="/img/C5.jpg" alt='Veste, costume, chemise africain' className='img-galerie' />
        </Col>
        <Link to="/Boutique">
          <Button variant="primary" className='btn-link galerie'>Voir la collection</Button>
        </Link>
      </Row>
    </Container>

      {/*-----------------------------------section 5------------------------------------*/}
     <div className="titre">
        <span></span>
         <h2> Témoignages / Avis clients </h2> 
        <span></span>
      </div>

     <div className="temoignages">
      
      <Carousel variant="dark" indicators={false} interval={5000}>
        {/* Témoignage 1 */}
        <Carousel.Item>
          <div className="avis-box">
            <div className="avis-header">
              <img src="/img/client1.jpg" alt="Client 1" className="avis-photo" />
              <h5>Aïssatou, Dakar</h5>
            </div>
            <p>"Service impeccable, ma robe était magnifique et livrée rapidement !"</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
          </div>
        </Carousel.Item>

        {/* Témoignage 2 */}
        <Carousel.Item>
          <div className="avis-box">
            <div className="avis-header">
              <img src="/img/client2.jpg" alt="Client 2" className="avis-photo" />
              <h5>Mamadou, Thiès</h5>
            </div>
            <p>"Ya Bousso Style a réalisé la tenue parfaite pour mon mariage. Merci !"</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
          </div>
        </Carousel.Item>

        {/* Témoignage 3 */}
        <Carousel.Item>
          <div className="avis-box">
            <div className="avis-header">
              <img src="/img/client3.jpg" alt="Client 3" className="avis-photo" />
              <h5>Fatou, Paris</h5>
            </div>
            <p>"Très bonne qualité et beaucoup d’originalité. Je recommande vivement."</p>
            <div className="stars">
              {[...Array(4)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
          </div>
        </Carousel.Item>

        {/* Témoignage 4 */}
        <Carousel.Item>
          <div className="avis-box">
            <div className="avis-header">
              <img src="/img/client4.jpg" alt="Client 4" className="avis-photo" />
              <h5>Khady, New York</h5>
            </div>
            <p>"J’ai commandé un boubou moderne, la finition est impeccable et je me sens unique à chaque sortie."</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
          </div>
        </Carousel.Item>

        {/* Témoignage 5 */}
        <Carousel.Item>
          <div className="avis-box">
            <div className="avis-header">
              <img src="/img/client5.jpg" alt="Client 5" className="avis-photo" />
              <h5>Cheikh, Dakar</h5>
            </div>
            <p>"Un service chaleureux, des conseils personnalisés et un résultat magnifique. Je recommande !"</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
          </div>
        </Carousel.Item>

        {/* Témoignage 6 */}
        <Carousel.Item>
          <div className="avis-box">
            <div className="avis-header">
              <img src="/img/client6.jpg" alt="Client 6" className="avis-photo" />
              <h5>Awa, Milan</h5>
            </div>
            <p>"Enfin une marque qui allie tradition et modernité. Ya Bousso Style, c’est l’élégance africaine à l’international."</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
          </div>
        </Carousel.Item>

      </Carousel>
  

    </div>


    </>
  );
}



export default Acceuil;