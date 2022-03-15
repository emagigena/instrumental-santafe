import React from 'react';
import './Item.css';
//import ShowCarousel from './Carousel/Carousel';
//import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ItemCounter from '../../ItemCount/ItemCounter';
import guitarra from './guitarra.jpg'

function Item ( {onAdd} ) {
    return(
    
        <Card style={{width: "18rem"}}>
            <Card.Img variant="top" img src = {guitarra} className = "guitarra.jpg"/>
            <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>description</Card.Text>
            <ItemCounter stock={10} initial={1} onAdd={onAdd}/>
            </Card.Body>
        </Card>
    
    )
}

export default Item;