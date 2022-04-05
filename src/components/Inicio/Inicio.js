import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Inicio.css'



export default function Inicio() {
  return (
    <div className="galeria">
      <Carousel>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://productos.mjmusic.com.ar/slider/0000000346631micsAudix.jpg"
        alt="First slide"
      />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://productos.mjmusic.com.ar/slider/0000001071001unite2.jpg"
        alt="First slide"
      />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://productos.mjmusic.com.ar/slider/0000000859002qtSabian.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://productos.mjmusic.com.ar/b/sonorVintage.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
</div>

  )
}

