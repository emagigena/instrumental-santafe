import React, { useEffect, useState } from 'react'
import GetPage from '../Help.js'
import ItemDetail from '../ItemDetail/ItemDetail'

import { Spinner } from 'react-bootstrap'
import './ItemDetailContainer.css'

export default function ItemDetailContainer({}) {
  
  const [item, setItem] = useState({})
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    GetPage
    .then   (respuesta => setItem    (respuesta[0]))
    .catch  (error     => console.log(error))
    .finally(()        => setLoading (false))
  }, [] )
  return (
    <div className='ItemDetailContainer'>
      {
        loading ?
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner> :
        <ItemDetail producto={item} />    
      }
        </div>
  )
}