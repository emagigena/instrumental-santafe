import React from "react";
import {Link} from 'react-router-dom'

const Footer = () =>{
    return (
      <div>
        <footer className="text-white py-4 bg-dark center">
          <div className="container">
            <nav className="row">
              <Link to='/' className="col-12 col-md-3 d-flex alling-items-center justyfy-content-center">
                <img src='https://firebasestorage.googleapis.com/v0/b/instrumental-santa-fe.appspot.com/o/imagenes%20del%20inicio%2Flogoinstrumental.png?alt=media&token=7afaae90-4487-4725-b95f-9638c852f49d' className='mx-2' alt= 'hola' height='90'/>
              </Link>
              <ul className="col-2 col-md-4 list-unstyled text-center">
                <li className="font-weight-bold mb-2">Cátalogo de productos de Instrumental Santa Fe</li>
                <li className="text-center">En este sitio web podrás encontrar nuestro catálogo con gran cantidad de nuestro stock de productos y marcas.</li>
                
              </ul>
              <ul className="col-2 col-md-4 list-unstyled text-center">
              <h5>© Instrumental Santa Fe™</h5>
              </ul>
              
            </nav>
          </div>
          
        </footer>
        
      </div>
    )
  }
export default Footer;