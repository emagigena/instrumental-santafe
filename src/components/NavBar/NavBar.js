import React from "react";
import logoinstrumental from "./logoinstrumental.JPG"
import './NavBar.css'
import Cart from './CartWidget/CartWidget.js'
import {Link} from 'react-router-dom';

export const NavBar = () => {
    return(
        <header>
           <div className = 'barrahorizontal'>
               <img src = {logoinstrumental} className = 'logoinstrumental.JPG' alt="logo"></img>
                    <nav>
                        <div className ='Navegacion'>
                            <ul>
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Instrumentos</a></li>
                                <li><a href="#">Marcas</a></li>
                                <li><a href="#">Contacto</a></li>
                                <Cart/>
                            </ul>
                        </div> 
                    </nav>
            </div> 
        </header>
    )
}

export default NavBar;