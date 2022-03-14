import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import ListPhotosCarousel from './ListPhotosCarousel'
import './Carousel.css'


function ShowCarousel( {fotos} ) {
  return (
<div>
    <Carousel className='carousell' variant="dark" interval={null}>
        {/* <ListPhotosCarousel fotos={prod.fotos} /> */}
        {/* {fotos}.map( (foto) => <Carousel.Item>
        
        <img 
        className="d-block w-100" 
        // src={fotos[0].foto} 
        alt="First slide"
        />
          
        </Carousel.Item>  
        ) */}
        <Carousel.Item>
        <img 
        // className="d-block w-100" 
        src={fotos[0].foto} 
        alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img 
        // className="d-block w-100" 
        src={fotos[1].foto} 
        alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
        // className="d-block w-100" 
        src={fotos[2].foto} 
        alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
</div>
  )
}
export default ShowCarousel;