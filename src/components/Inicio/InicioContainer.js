import React from 'react'
import Inicio from './Inicio.js'
import Inicio2 from './inicio2.js'
import './InicioContainer.css'

export default function InicioContainer() {
  return (
    <div className='inicioContainer'>
       <li> <Inicio/> </li>
       <li> <Inicio2/> </li>
    </div>
  )
}
