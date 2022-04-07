import React from 'react'
import { Carousel  } from 'react-bootstrap'
import './Inicio.css'



function Inicio() {
  return (
          <div className="galeria">
     
              <Carousel>
              <Carousel.Item>
              <video className="uno" src="https://l6c-acdn2.line6.net/data/6/0a020a3fdbc96241dab5ce3cc/video/mp4/CATALYST_WEB_V6_TITLES_FINAL.mp4" alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
              <img className="dos" src="https://productos.mjmusic.com.ar/slider/0000000346631micsAudix.jpg" alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
              <img className="tres" src="https://productos.mjmusic.com.ar/slider/0000001071001unite2.jpg" alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
              <img className="cuatro" src="https://productos.mjmusic.com.ar/slider/0000000859002qtSabian.jpg" alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
              <img className="cinco" src="https://productos.mjmusic.com.ar/b/sonorVintage.jpg" alt="Third slide"/>
              </Carousel.Item>
              <Carousel.Item>
              <img className="seis" src="https://firebasestorage.googleapis.com/v0/b/instrumental-santa-fe.appspot.com/o/1.png?alt=media&token=3a5eddeb-b2f8-43bb-910d-61ba97645d9d" alt="Third slide"/>
              </Carousel.Item>
              <Carousel.Item>
              <img className="siete" src="https://firebasestorage.googleapis.com/v0/b/instrumental-santa-fe.appspot.com/o/2.png?alt=media&token=1b0e65e6-8c27-47c7-9368-856f2b779623" alt="Third slide"/>
              </Carousel.Item>
              </Carousel>

          </div> 
  )
}
export default Inicio

