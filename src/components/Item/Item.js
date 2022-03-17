import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Item.css';
import ShowCarousel from './Carousel/Carousel';

function Item ( {prod} ) {
    return(
    <li>
        <Card>
            <ShowCarousel fotos={prod.fotos[0].foto}/>
            <Card.Body>
                <Card.Title>{prod.nombre}</Card.Title>
                <Card.Title>$ {prod.precio}</Card.Title>
                <Button variant="primary">Ver detalle del producto</Button>
            </Card.Body>
        </Card>
    </li>
    )
}

export default Item;