import React, { useState } from 'react'
import { Button } from 'bootstrap'
import Card from 'react-bootstrap/Card'
import ShowCarousel from '../Item/Carousel/Carousel'
import './ItemDetail.css'
import { Col, Container, Row } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCounter'


export default function ItemDetail({producto}) {
  return (
  <header className='ItemDetail'>
    <Card>
        <Container>
          <Row>
          <Col className='FirstCol' xs={1}>
                <Card>
                  <img src={producto.fotos[0].foto} />
                </Card>
                <Card>
                  <img src={producto.fotos[0].foto} />
                </Card>
                <Card>
                  <img src={producto.fotos[0].foto} />
                </Card>
          </Col>
          <Col className='SecondCol' xs={7}>
            <img src={producto.fotos[0].foto} />
          </Col>
          <Col className='ThirdCol' xs={4}>
            <Card className='InfoCard' >
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Title>$ {producto.precio}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                  the card's content.
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