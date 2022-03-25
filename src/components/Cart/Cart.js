import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import Item from '../Item/Item'
import ItemCart from './ItemCart'
import "./Cart.css"

  function Cart(){
    const {cartList, vaciarCart, borrarItem} = useCartContext()
    console.log(cartList)
  
  return (
  <>
    <div className='container my-4'>
      <h2>Tu compra finalizada</h2>
      <hr/>
      {
        cartList.map((item) => (
          <div key={item.id}>
            <h4>{item.nombre}</h4>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: ${item.cantidad * item.precio}</p>
            <button className='btn btn-danger' onClick={()=>borrarItem(item.id)}>
              Borrar
            </button>
          </div>
        ))
      }
      <hr/>
       {/* <h2>Total: ${totalCart()}</h2> */}
       <div className='my-2'>
         <button className='btn btn-danger' onClick={vaciarCart}>Vaciar el Carrito</button>
         <Link to="/" className='btn btn-success mx-2'>Terminar la Compra</Link>
       </div>
    </div>
  </>
  )
}
export default Cart