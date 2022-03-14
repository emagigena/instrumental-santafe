import React, { useEffect, useState } from 'react'
import GetPage from '../../../Help'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import './ItemDetailContein.css'

export default function ItemDetailContein({}) {
  
  const idLink = useParams();

  const [item, setItem] = useState({})
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    GetPage
    .then   (respuesta => setItem    (respuesta[idLink.id-1]))
    .catch  (error     => console.log(error))
    .finally(()        => setLoading (false))
  }, [] )

  return (
    <div className='ItemDetailContein'>
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