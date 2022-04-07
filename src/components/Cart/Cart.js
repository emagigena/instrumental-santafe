import React, {useState} from 'react'
import { useCartContext } from '../Context/CartContext'
import iconcarrito from "./iconcarrito.png"
import "./Cart.css"
import {Col, Container, Row} from "react-bootstrap"
import { Link } from 'react-router-dom'
import {getFirestore, collection, addDoc, documentId, writeBatch, getDocs, where, query} from 'firebase/firestore'



  
  function Cart(){
    const {cartList, vaciarCart, borrarItem, calcularTotal, productosAgregados} = useCartContext()
    const [compraTerminada, setCompraTerminada] = useState(false)
    const [idOrden, setIdOrden] = useState()
    const generarOrden = async () => {
      var item = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.nombre
        const precio = cartItem.precio
        return {id, nombre, precio}
      })
      var orden = {
        comprador: {name:'Emanuel',phone:'3404519318',mail:'emanuelgigena79@gmail.com'}, total:calcularTotal(), items:item
      }
    
  
    const db = getFirestore()
    const queryOrdenes = collection (db, 'orden')

    addDoc (queryOrdenes, orden)
    .then(({id})=> setIdOrden(id))
    .catch(err => console.log(err))
    
    const queryProductos = collection (db, 'productos')
    
    const queryProductosFillter = await query(queryProductos , where(documentId(),'in',cartList.map(item => item.id)))
    
    const batch = writeBatch(db)

    await getDocs(queryProductosFillter)

      .then(resp => resp.docs.forEach(res => batch.update(res.ref,{stock : res.data().stock - cartList.find(item => item.id === res.id).cantidad})))
      .finally(setCompraTerminada(true))
    batch.commit()
  }
  return (
    
    <div>
    { 
      (productosAgregados() === 0) ?
        <div className="container my-4">
          <h4>El carrito de compras está vacío</h4>
          <h4>Podés agregar productos desde el botón de "añadir al carrito"</h4>
          <Link to="/" className="btn btn-success mx-2">Inicio</Link>
        </div>
        :
        <div className='descripcionCart'>
        <div className="container my-4">
          <h4>Carrito de compras:</h4>
              <hr/>
              <Container>
                <Row>
                  <Col xs={2}><h6>Productos</h6></Col>
                  <Col xs={5}></Col>
                  <Col xs={1}><h6>Precio</h6></Col>
                  <Col xs={1}><h6>Cantidad</h6></Col>
                  <Col xs={1}><h6>Subtotal</h6></Col>
                  <Col xs={1}><h6>Quitar del Carrito</h6></Col>
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
                  <Col xs={1}><img src={iconcarrito} className='iconcarrito' alt='iconcarrito' onClick={() => borrarItem(item.id)}></img></Col>
                </Row>
              </Container>
              </div>
               ))
              }
              <hr/>
              <h2>Total: ${calcularTotal()}</h2>
              <div className="my-2">
                <button className="btn-danger" onClick={vaciarCart}>Vaciar carrito</button>
                {
                  compraTerminada ?
                  <div>
                    <h3>Agradecemos tu compra</h3>
                    <h3>El codigo de tu compra es: </h3>
                    <h4>{idOrden}</h4>
                  </div>
                  :
                  <button onClick={generarOrden} className="btn-success mx-2">Terminar compra</button>
                }
              </div>
            </div>
          </div>
          }
         
    </div>
  )
}

export default Cart