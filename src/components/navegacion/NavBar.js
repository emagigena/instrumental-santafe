import React from "react";
import logoinstrumental from "./logo instrumental.JPG"
import './NavBar.css'
import Cart from "./Cart";

const NavBar = () => {
    return(
        <header>
           <div className = 'barrahorizontal'>
               <img src = {logoinstrumental} className = 'logo instrumental'></img>
                    <nav>
                        <div className ='Navegacion'>
                            <u1>
                                <li><a>Inicio</a></li>
                                <li><a>Instrumentos</a></li>
                                <li><a>Marcas</a></li>
                                <li><a>Contacto</a></li>
                            </u1>
                        </div>
                        <div className = "Carrito">
                            <li><a href="#"> <Cart numero = {"5"}/></a></li>
                        </div>
                    </nav>
            </div> 
        </header>
    )
}

export default NavBar