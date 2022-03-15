import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import getPage from '../../../Help'
import './ItemListContein.css'
import Spinner from 'react-bootstrap/Spinner'
import {useParams} from 'react-router-dom'

export default function ItemListContein(  ) {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoriaID} = useParams()

  console.log(categoriaID)
  
  useEffect( () => {
    if(categoriaID){
    getPage
    .then   (respuesta => {setProductos(respuesta.filter(prod => prod.categoria === categoriaID))})
    .catch  (error     => {console.log (error)})
    .finally(()        => {setLoading  (false)})
  }else{
    getPage
    .then   (respuesta => {setProductos(respuesta); console.log(respuesta)})
    .catch  (error     => {console.log (error)})
    .finally(()        => {setLoading  (false)})
  }
  },[categoriaID])

  return (
    <div className='ItemsContein'>
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