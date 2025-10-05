import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearch,faEnvelope,faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";
import {useCart} from '../Contexte/CartContext'

import logo from "../Images/logo.jpg"


function Navbar() {
    const { cartCount } = useCart();
    const navigation = useNavigate()
    return(
        <>
        <nav className="navb">

            <div className="Logo">
                <img src={logo} alt="logo"/>
                <h2><span>YaBoussoStyle</span></h2>
            </div>
                    {/*navigation*/}
            <div className="navigation">
                    <ul className="menu">
                        <li>
                            <Link to="/">Acceuil</Link>
                        </li>
                        <li>
                            <Link to="/Boutique">Boutique</Link>
                        </li>
                        <li>
                            <Link to="/APropos">À propos</Link>
                        </li>
                        <li>
                            <Link to="/FAQ">FAQ</Link>
                        </li>
                    </ul>
            </div>

            <div className="fa">
                <Link to="/SingnUp">
                  <Button className='btn'>S'inscrire</Button>
                </Link>
                <Link to="/Login">
                  <Button className='btn'>Se connecter</Button>
                </Link>
                <Button className='btn' onClick={() => navigation("/Userprofil")}>
                <FontAwesomeIcon icon={faSearch}/>
                </Button>
                <Button className='btn' onClick={() => navigation("/Userprofil")}>
                <FontAwesomeIcon icon={faEnvelope}/>
                </Button>
                <Button className='btn' onClick={() => navigation("/Userprofil")}>
                <FontAwesomeIcon icon={faUser}/>
                </Button>
                <Button className='btn' onClick={() => navigation("/panier")}>
                   <FontAwesomeIcon icon={faShoppingCart}/>
                   {cartCount > 0 && (
                 <span
                  className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
                 >
                    {cartCount}
                 </span>
                )}
                </Button>
            </div>

        </nav>
        </>
    )
}


export default Navbar;
