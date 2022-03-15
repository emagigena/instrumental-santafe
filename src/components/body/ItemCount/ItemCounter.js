import React, { useState } from "react";

import "./ItemCounter.css";
import { Button, ButtonGroup, FormControl } from 'react-bootstrap'
export default function ItemCounter({ stock, initial }) {


  if(stock === 0) initial = 0;
  const [count, setCount] = useState(initial);
  const rest = () =>{
    if (count > 1)setCount(count - 1);
  }
  const sum = () =>{
    if (count<stock)setCount(count + 1);
  }
  const onAdd = () =>{
    if(count !==0)
    console.log("Se añadió: " + count + " productos")
  }

 // const onBuy = () => {
 // console.log("Has comprado" + count + " de este producto")
 //}
  return (
    <>
        <ButtonGroup aria-label="Basic example">
          <Button onClick={rest} variant="secondary">-</Button>
          <FormControl type="text" placeholder={count} aria-label="Input group example"></FormControl>
          <Button onClick={sum} variant="secondary">+</Button>  
        </ButtonGroup>
        <Button onClick={onAdd} variant="primary" size="lg">
        Añadir al Carrito
      </Button>
      </>
   // <div className='CountCard'> 
    //    {/* <Card className='CountCard' > */}
    //        {/* <Card.Body> */}
    //            {/* <Card.Title>Producto X</Card.Title> */}
    //            <Card.Text >({stock} disponibles)</Card.Text>
    //                <div className='ImputCantidad'>
    //                <InputGroup>
    //                    <Button variant="outline-secondary" onClick={rest}>-</Button>
    //                    <FormControl className='Agregar' type="text" placeholder={count}/>
    //                    <Button variant="outline-secondary" onClick={sum}>+</Button>
    //                </InputGroup>
    //                </div>
    //                <div className='BuyButton' /*className='d-grid gap-2'*/>
    //                    <Button variant="primary" size='lg' onClick={onBuy}>Comprar ahora</Button>
    //                    <Button variant="outline-primary" size='lg' onClick={onAdd}>Agregar al carrito</Button>
    //                </div>
                    
    //        {/* </Card.Body> */}
    //    {/* </Card> */}

    //</div>

  )
  }