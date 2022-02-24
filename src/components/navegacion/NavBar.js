import React from "react";
import logoinstrumental from "./logo instrumental.JPG"
import './NavBar.css'

const NavBar = () => {
    return(
        <header>
           <div className = 'barrahorizontal'>
               <img src = {logoinstrumental} className = 'logo instrumental'></img>
                    <nav>
                        <div className ='Navegacion'>
                            <u1>
                                <li><a>Incio</a></li>
                                <li><a>Instrumentos</a></li>
                                <li><a>Marcas</a></li>
                                <li><a>Contacto</a></li>
                            </u1>
                        </div>
                    </nav>
            </div> 
        </header>
    )
}

export default NavBar