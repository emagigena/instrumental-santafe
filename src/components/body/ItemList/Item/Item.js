import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Item.css';
import ShowCarousel from './Carousel/Carousel';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

function Item ( {prod} ) {
    return(
    <li>
        <Card 
        // style={{ width: '18rem' }}
        >
            <ShowCarousel fotos={prod.fotos}/>
            <Card.Body>
                <Card.Title>{prod.nombre}</Card.Title>
                <Card.Title>$ {prod.precio}</Card.Title>
                <Button variant="primary" href={`/detalle/${prod.id}`} >Ver detalle del producto</Button>
                {/* <Card.Text>Stock disponible: {prod.stock}</Card.Text> */}
            </Card.Body>
        </Card>
    </li>
    )
}

export default Item;