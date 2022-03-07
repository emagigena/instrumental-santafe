import React, { useState } from 'react'
import { Button, ButtonGroup, Card, FormControl } from 'react-bootstrap'
import guitarra from "./guitarra.jpg"

export default function ItemCount({stock, initial, onAdd}) {
    
    const [contador, setContador]= useState(initial);
    function suma() {
        if (contador<10)
        setContador(contador+1)
    }
    function resta(){
        if(contador>1){
            setContador(contador-1)
        }
    }
    function agregaralcarrito(){
        console.log("Agregaste "+ contador + " de este producto")
    }
    
    console.log(contador)
    return (
    <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" /*img src = {guitarra} className = 'guitarra.jpg'*//>
            <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>description
            </Card.Text>
            <ButtonGroup aria-label="Basic example">
                <Button onClick={resta} variant="secondary">-</Button>
                <FormControl type="text"  placeholder= {contador}   aria-label="Input group example"   aria-describedby="btnGroupAddon2"/>
                <Button onClick={suma} variant="secondary">+</Button>
            </ButtonGroup>
            <Button onClick={agregaralcarrito} variant="primary" size="lg">
            Añadir al carrito
            </Button>
            </Card.Body>
        </Card>
  
  </div>
  )

}
