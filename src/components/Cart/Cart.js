import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import Item from '../Item/Item'
import trashh from "./trashh.png"
import "./Cart.css"
import {Col, Container, Row} from "react-bootstrap"

  function Cart(){
    const {cartList, vaciarCart, borrarItem, calcularTotal, productosAgregados} = useCartContext()
  
  return (
    <div>
    { 
      (productosAgregados() === 0) ?
        <div className="container my-4">
          <h4>El carrito de compras está vacío</h4>
          <h4>Puedes agregar productos desde el botón de "añadir al carrito"</h4>
          <Link to="/" className="btn btn-success mx-2">Inicio</Link>
        </div>
        :
        <div className='descripcionCart'>
        <div className="container my-4">
          <h4>Descripción de tu pedido:</h4>
              <hr/>
              <Container>
                <Row>
                  <Col xs={2}><h6>Producto</h6></Col>
                  <Col xs={5}></Col>
                  <Col xs={1}><h6>Precio</h6></Col>
                  <Col xs={1}><h6>Cantidad</h6></Col>
                  <Col xs={1}><h6>Subtotal</h6></Col>
                  <Col xs={1}></Col>
                </Row>
              </Container>
          
          {
            cartList.map((item) => (
              <div key={item.id} className='mt-3'>
              <Container>
                <Row>
                  <Col xs={2}><img src={item.fotos[0]} class="rounded" width={'150'}></img></Col>
                  <Col xs={5}><h4>{item.nombre}</h4></Col>
                  <Col xs={1}><h5>${item.precio}</h5></Col>
                  <Col xs={1}><p>Cantidad: {item.cantidad}</p></Col>
                  <Col xs={1}><h5>${item.cantidad * item.precio}</h5></Col>
                  <Col xs={1}>Quitar<img src={trashh} className='trashh.png' alt='trash' onClick={() => borrarItem(item.id)}></img></Col>
                </Row>
              </Container>
              </div>
               ))
              }
              <hr/>
              <h2>Total: ${calcularTotal()}</h2>
              <div className="my-2">
                <button className="btn btn-danger" onClick={vaciarCart}>Vaciar carrito</button>
                <Link to="/" className="btn btn-success mx-2">Terminar mi compra</Link>
              </div>
            </div>
            </div>
          }
          
    </div>
  )
}
export default Cart