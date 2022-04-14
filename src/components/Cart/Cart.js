import React, {useState} from 'react'
import { useCartContext } from '../Context/CartContext'
import iconcarrito from "./iconcarrito.png"
import "./Cart.css"
import {Col, Container, Row} from "react-bootstrap"
import {  useNavigate } from 'react-router-dom'
import {getFirestore, collection, addDoc, documentId, writeBatch, getDocs, where, query, orderBy} from 'firebase/firestore'
  function Cart(){
    const [compraTerminada, setCompraTerminada] = useState(false)
    const [idOrden, setIdOrden] = useState(null)
    const [dataFormulario, setDataFormulario] = useState({ nombre: '', apellido: '', email: '', telefono: '', direccion: '', contrasena: '' });
    const {cartList, vaciarCart, borrarItem, calcularTotal, productosAgregados} = useCartContext()
    const navegar = useNavigate()

    const generarOrden = async (e) => {
      e.preventDefault();
      if (Object.values(dataFormulario).some(value => value === "")) {
       alert('Todos los campos son requeridos')
      }else{
      let orden = {}
      orden.comprador = dataFormulario
      orden.total = calcularTotal()
      orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.nombre
        const precio = cartItem.precio
          return {id, nombre, precio}
      })
    const db = getFirestore()
    const queryOrdenes = collection (db, 'orden')
    addDoc(queryOrdenes, orden)
    .then((res)=> setIdOrden(res.id))
    .catch(err => console.log(err))
    .finally(()=> vaciarCart())
    
    const queryProductos = collection (db, 'productos')
    
    const queryProductosFillter =  query(queryProductos , where(documentId(),'in',cartList.map(item => item.id)))
    
    const batch = writeBatch(db)

     getDocs(queryProductosFillter)
      .then(resp => resp.docs.forEach(res => batch.update(res.ref,{stock : res.data().stock - cartList.find(item => item.id === res.id).cantidad})))
      .finally(setCompraTerminada(true))
    // batch.commit()
    window.scroll(0,0)
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
            <h3>Gracias por comprar en Instrumental Santa Fe</h3>
            <h3>El Envío se realizará a la dirección: {dataFormulario.direccion}</h3>
            <h3>El codigo de su compra es: </h3>
            <h4>{idOrden}</h4>
            <button className='btn btn-success' onClick={()=> navegar('/')}>Volver al Inicio</button>
          </div>
          :
          <div>
          { 
          (productosAgregados() === 0) ?
            <div className="container my-4">
              <h4>El carrito de compras se encuentra vacío</h4>
              <h4>Podés agregar productos desde el botón de "añadir al carrito"</h4>
              <button className="btn btn-success mx-2" onClick={()=>navegar('/')}>Inicio</button>
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
              <h2> Datos del comprador:</h2>
              <form onSubmit={generarOrden}>
                <div className='form-group'>
                <label>Nombre</label>
                  <input 
                  className='form-control'
                  name="nombre"
                  type="name"
                  placeholder="Ingresar Nombre"                         
                  value={dataFormulario.nombre} 
                  onChange={handleOnChange}/>
                </div>
                  <div className='form-group'>
                  <label>Apellido</label>
                  <input
                  className='form-control'
                  name="apellido"
                  type="lastname"
                  placeholder="Ingresar Apellido" 
                  value={dataFormulario.apellido} 
                  onChange={handleOnChange}/>
                  </div>
                 
                  <div className='form-group'>
                  <label>Correo electrónico</label>
                  <input
                  className='form-control'
                  name="email"
                  type="email" 
                  placeholder="Enter email" 
                  value={dataFormulario.email} 
                  onChange={handleOnChange}/>
                  </div>
                 
                  <div className='form-group'>
                  <label>Celular</label>
                  <input 
                  className='form-control'
                  name="telefono"
                  type="phone"
                  placeholder="Ingresar Telefono" 
                  value={dataFormulario.telefono} 
                  onChange={handleOnChange}/>
                  </div>
                 
                  <div className='form-group'>
                  <label>Dirección de entrega</label>
                  <input
                 
                  className='form-control'
                  name="direccion"
                  type="direcction"
                  placeholder="Ingresar dirección" 
                  value={dataFormulario.direccion} 
                  onChange={handleOnChange}/>
                  </div>
                 
                  <div className='form-group'>
                  <label>Contraseña</label>
                  <input
                  className='form-control'
                  name="contrasena"
                  type="password"
                  placeholder="Ingresar contraseña" 
                  value={dataFormulario.contrasena} 
                  onChange={handleOnChange}/>
                  </div>
                  
                  <button onClick={generarOrden} className=" btn btn-success">Finalizar la compra</button>
              </form>
                  <button onClick={vaciarCart} className="btn btn-danger">Vaciar el carrito</button>
                  <button onClick={()=>navegar('/')}  className="btn btn-primary">Volver al Catálogo</button>
              </div>
        </div>
      }
    </div>
  }
</div>
)}

export default Cart