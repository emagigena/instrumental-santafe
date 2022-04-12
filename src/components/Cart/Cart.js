import React, {useState} from 'react'
import { useCartContext } from '../Context/CartContext'
import iconcarrito from "./iconcarrito.png"
import "./Cart.css"
import {Col, Container, Form, Row} from "react-bootstrap"
import { Link } from 'react-router-dom'
import {getFirestore, collection, addDoc, documentId, writeBatch, getDocs, where, query} from 'firebase/firestore'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'bootstrap'



  
  function Cart(){
    const {cartList, vaciarCart, borrarItem, calcularTotal, productosAgregados} = useCartContext()
    const [compraTerminada, setCompraTerminada] = useState(false)
    const [idOrden, setIdOrden] = useState()
    const [dataFormulario, setDataFormulario] = useState({ nombre: '', apellido: '', email: '', telefono: '', direccion: '', contraseña: '' });
    const validarData = () =>{
      if( dataFormulario.nombre === '' || dataFormulario.apellido === '' || dataFormulario.email === '' || dataFormulario.telefono === "" || dataFormulario.direccion === "" || dataFormulario.contraseña === ""){
        alert('Ingrese los datos del formulario en los campos vacios')
        return false
        }else{
            return true
        }
    }

    const generarOrden = async () => {
      if(validarData()){
      var item = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.nombre
        const precio = cartItem.precio
          return {id, nombre, precio}
      })
      var orden = {
        comprador: {
          nombre: dataFormulario.nombre,
           apellido: dataFormulario.apellido,
            email: dataFormulario.email,
             telefono: dataFormulario.telefono,
              direccion: dataFormulario.direccion,
               contraseña: dataFormulario.contraseña}, total:calcularTotal(), items:item
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
    vaciarCart()
  }
}
const handleOnChange = (e) =>{
  setDataFormulario({...dataFormulario, [e.target.name] : e.target.value
  })
}
  return (
    
    
      <div className='container my-4'>
        {
          compraTerminada ?
          <div>
            <h3>{dataFormulario.nombre}</h3>
            <h3>Gracias por su compra</h3>
            <h3>El Envío se realizará a la dirección: {dataFormulario.direccion}</h3>
            <h3>El codigo de su compra es: </h3>
            <h4>{idOrden}</h4>
            <LinkContainer to='/'>
              <Button variant = 'success'>Volver al Inicio</Button>
            </LinkContainer>
          </div>
          :
          <div>
          { 
          (productosAgregados() === 0) ?
            <div className="container my-5">
              <h4>El carrito de compras está vacío</h4>
              <h4>Podés agregar productos desde el botón de "añadir al carrito"</h4>
              <Link to="/" className="btn btn-success mx-2">Inicio</Link>
            </div>
          :
            
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
              <div className="formulario">
              <h2> Datos de comprador:</h2>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control 
                  name="nombre"
                  type="name"
                  placeholder="Ingresar Nombre"                         
                  value={dataFormulario.nombre} 
                  onChange={handleOnChange}/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridApellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control 
                  name="apellido"
                  type="lastname"
                  placeholder="Ingresar Apellido" 
                  value={dataFormulario.apellido} 
                  onChange={handleOnChange}/>
                  </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridmail">
                  <Form.Label>Dirección de correo electrónico</Form.Label>
                  <Form.Control
                  name="email"
                  type="email" 
                  placeholder="Enter email" 
                  value={dataFormulario.email} 
                  onChange={handleOnChange}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridTelefono">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control 
                  name="telefono"
                  type="phone"
                  placeholder="Ingresar Telefono" 
                  value={dataFormulario.telefono} 
                  onChange={handleOnChange}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridDireccion">
                  <Form.Label>Dirección de entrega</Form.Label>
                  <Form.Control 
                  name="direccion"
                  type="direcction"
                  placeholder="Ingresar dirección" 
                  value={dataFormulario.direccion} 
                  onChange={handleOnChange}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridpassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control 
                  name="contraseña"
                  type="password"
                  placeholder="Ingresar contraseña" 
                  value={dataFormulario.contraseña} 
                  onChange={handleOnChange}/>
                  </Form.Group>

                <Button onClick={vaciarCart} variant="danger">Vaciar Carrito</Button>{' '}
                <Button onClick={generarOrden} variant="success">Terminar compra</Button>
              </Form>
          </div>
        </div>
      }
    </div>
  }
</div>
)}

export default Cart