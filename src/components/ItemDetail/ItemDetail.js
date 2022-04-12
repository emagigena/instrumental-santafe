import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import './ItemDetail.css'
import { Col, Container, Row } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCounter'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'bootstrap'


export default function ItemDetail({producto}) {
  const [state, setState] = useState(true)
  const [foto, setFoto] = useState(producto.fotos[0])
  const [cantidad,setCantidad] = useState(0)
  const {agregarCart} = useCartContext()
  const cambiarfoto1 =()=>{
    setFoto(producto.fotos[0])
  }
  const cambiarfoto2 =()=>{
    setFoto(producto.fotos[1])
  }
    const onAdd = (cantidad) => {
        if(cantidad !== 0){
          setCantidad(cantidad)
          setState(!state)
        }
        agregarCart({...producto, cantidad:cantidad})
      
      }
    
  return (
  <header className='ItemDetail'>
    <Card>
        <Container>
          <Row>
            <Col className='FirstCol' xs={1}>
              <li onClick={cambiarfoto1}>
                <Card>
                <img src={producto.fotos[0]} />
                </Card>
              </li>
              <li onClick={cambiarfoto2}>
                <Card>
                  <img src={producto.fotos[1]} />
                </Card>
              </li>
            </Col>
            <Col className='SecondCol' xs={7}>
              <img src={foto} />
            </Col>
            <Col className='ThirdCol' xs={4}>
              <Card className='InfoCard' >
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Title>$ {producto.precio}</Card.Title>
                <Card.Text>
                Este es un producto de nuestra página web, por compra, canje o consulta, 
              porfavor enviar un whatsapp al siguiente número 342111111111, Gracias
                </Card.Text>
              {state ?
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
                :
                <LinkContainer to="/Cart">
                <button variant="primary" size='lg' >Comprar ahora</button>
                </LinkContainer>
              }
              </Card>
            </Col>
          </Row>
        </Container>
      </Card>
  </header>
  )
}