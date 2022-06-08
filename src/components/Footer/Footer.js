import React from "react";
import {Link} from 'react-router-dom'
import "./Footer.css"

const Footer = () =>{
    return (
      <div>
        <footer className="text-white py-4 bg-dark center">
          <div className="container">
            <nav className="row">

              <Link to='/' className="col-12 col-md-3 d-flex alling-items-center justify-content-center">
                <img src='https://firebasestorage.googleapis.com/v0/b/instrumental-santa-fe.appspot.com/o/imagenes%20del%20inicio%2Flogoinstrumental.png?alt=media&token=7afaae90-4487-4725-b95f-9638c852f49d' className='mx-2' alt= 'hola' height='90'/>
              </Link>
              <ul className="col-12 col-md-10 list-unstyled text-center">
                <li className="font-weight-bold mb-2">Cátalogo de productos de Instrumental Santa Fe</li>
                <li>En este sitio web podrás encontrar nuestro catálogo con gran cantidad de nuestro stock de productos y marcas.</li>
              </ul>
              <ul className="col-12 col-md-3 list-unstyled">
                <li className="font-weight-bold mb-1">Contactános</li>
                <li className='justify-content-between'>
                  <div><i className="bi bi-facebook"></i><span>Facebook: @DavidSantaFe</span></div>
                  <div><i className="bi bi-whatsapp"></i><span>WhatsApp:342111111</span></div>
                </li>
              </ul>
              
              <ul className="col-12 col-md-5 d-flex alling-items-center justify-content-center list-unstyled text-center">
                <h5>© Instrumental Santa Fe™</h5>
              </ul>
              <div className="container">Realizado por Emanuel Gigena</div>

            </nav>
          </div>
          
        </footer>
        
      </div>
    )
  }
export default Footer;