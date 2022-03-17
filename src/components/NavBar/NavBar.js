import React from "react";
import logoinstrumental from "./logo instrumental.JPG"
import './NavBar.css'
import Cart from './CartWidget/CartWidget.js'
import {Link} from 'react-router-dom';

export const NavBar = () => {
    return(
        <header>
           <div className = 'barrahorizontal'>
               <img src = {logoinstrumental} className = 'logo instrumental.JPG' alt="logo"></img>
                    <nav>
                        <div className ='Navegacion'>
                            <ul>
                                <li>Inicio</li>
                                <li>Instrumentos</li>
                                <li>Marcas</li>
                                <li>Contacto</li>
                                <Cart/>
                            </ul>
                        </div> 
                    </nav>
            </div> 
        </header>
    )
}

export default NavBar;