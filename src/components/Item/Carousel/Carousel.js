import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'


function ShowCarousel( {fotos} ) {
  return (
<div>
    <Carousel className='carousell' variant="dark" interval={null}>

        <Carousel.Item>
        <img 
  
        src={fotos} 
        alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img 
  
        src={fotos} 
        alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img

        src={fotos} 
        alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
</div>
  )
}
export default ShowCarousel;