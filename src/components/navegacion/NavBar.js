import React from "react";
import logoinstrumental from "./logo instrumental.JPG"
import './NavBar.css'
import {Link} from 'react-router-dom';
import CartWiget from "./CartWidget/Cart.js";

const NavBar = () => {
    return(
        <header>
           <div className = 'barrahorizontal'>
               <img src = {logoinstrumental} className = 'logo instrumental.JPG' alt="logo"></img>
                    <nav>
                        <div className ='Navegacion'>
                            <ul>
                                <li><Link to = "/">Inicio</Link></li>
                                <li><Link to = "/categoria/Instrumentos">Instrumentos</Link></li>
                                <li><Link to = "/categoria/Marcas">Marcas</Link></li>
                                <li><Link to = "/categoria/Contacto">Contacto</Link></li>
                            </ul>
                        </div>
                            <div className = "Carrito">
                                <li> <CartWiget numero = {"5"}/></li>
                            </div>
                    </nav>
            </div> 
        </header>
    )
}

export default NavBar;