import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import getPage from '../../../Help'
import './ItemListContein.css'
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom'

export default function ItemListConteiner(  ) {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect( () => {
    getPage
    .then   (respuesta => {setProductos(respuesta)})
    .catch  (error     => {console.log (error)})
    .finally(()        => {setLoading  (false)})
  },[])

  return (
    <div className='ItemsContainer'>
      { 
        loading ?
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          // <h1 className='Loading'>Cargando...</h1> : 
        :
          <ItemList  productos = {productos} />  
      }
    </div>

  )
}