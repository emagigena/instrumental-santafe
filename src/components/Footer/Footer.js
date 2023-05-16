import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="text-white py-4 bg-dark">
        <Container>
          <Row>
            <Col>
              <Link to='/'>
                <img src='https://firebasestorage.googleapis.com/v0/b/instrumental-santa-fe.appspot.com/o/imagenes%20del%20inicio%2Flogoinstrumental.png?alt=media&token=7afaae90-4487-4725-b95f-9638c852f49d' className='mx-2' alt='hola' height='90' />
              </Link>
            </Col>
            <Col>
              <Row>
                <Col className="text-center d-flex align-items-center justify-content-center">
                  <h5 className="font-weight-bold">Cátalogo de productos de Instrumental Santa Fe</h5>
                  <p>En este sitio web podrás encontrar nuestro catálogo con gran cantidad de nuestro stock de productos y marcas.</p>
                </Col>
                <Col>
                  <h5 className="font-weight-bold">Contáctanos</h5>
                  <div><i className="bi bi-facebook"></i> Facebook: @DavidSantaFe</div>
                  <div><i className="bi bi-whatsapp"></i> WhatsApp: 342111111</div>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <h5>© Instrumental Santa Fe™</h5>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center">
                Realizado por Emanuel Gigena
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer;
