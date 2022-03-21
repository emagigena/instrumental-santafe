import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import './ItemDetail.css'
import { Col, Container, Row } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCounter'



export default function ItemDetail({producto}) {
  const [foto, setFoto]=useState(producto.fotos[0].foto)
  const cambiarfoto1 =()=>{
    setFoto(producto.fotos[0].foto)
  }
  const cambiarfoto2 =()=>{
    setFoto(producto.fotos[1].foto)
  }
  return (
  <header className='ItemDetail'>
    <Card>
        <Container>
          <Row>
            <Col className='FirstCol' xs={1}>
              <li onClick={cambiarfoto1}>
                <Card>
                <img src={producto.fotos[0].foto} />
                </Card>
              </li>
              <li onClick={cambiarfoto2}>
                <Card>
                  <img src={producto.fotos[1].foto} />
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
                  <ItemCount stock={producto.stock} initial={1}/>
              </Card>
            </Col>
          </Row>
        </Container>
      </Card>
  </header>
  )
}