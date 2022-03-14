import React, { useState } from 'react'
import { Button } from 'bootstrap'
import Card from 'react-bootstrap/Card'
import ShowCarousel from '../ItemList/Item/Carousel/Carousel'
import './ItemDetail.css'
import { Col, Container, Row } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCounter'


export default function ItemDetail({producto}) {
  
  const [foto, setFoto] = useState(producto.fotos[0].foto)

  const cambiarfoto1 =()=>{
    setFoto(producto.fotos[0].foto)
  }
  const cambiarfoto2 =()=>{
    setFoto(producto.fotos[1].foto)
  }
  const cambiarfoto3 =()=>{
    setFoto(producto.fotos[2].foto)
  }

  return (
  <header className='ItemDetail'>
    <Card>
        <Container>
          <Row >
          <Col className='FirstCol' xs={1}>
                <li onClick={cambiarfoto1}><Card>
                  <img src={producto.fotos[0].foto} />
                </Card></li>
                <li onClick={cambiarfoto2}><Card>
                  <img src={producto.fotos[1].foto} />
                </Card></li>
                <li onClick={cambiarfoto3}><Card>
                  <img src={producto.fotos[2].foto} />
                </Card></li>
          </Col>
          <Col className='SecondCol' xs={7}>
            <img src={foto} />
          </Col>
          <Col className='ThirdCol' xs={4}>
            <Card className='InfoCard' >
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Title>$ {producto.precio}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                  the card's content.
              </Card.Text>
              <ItemCount stock={10} initial={1}/>
            </Card>
          </Col>
          </Row>
        </Container>
        </Card>
  </header>
  )
}