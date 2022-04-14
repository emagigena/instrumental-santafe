import React from 'react'
import { Card  } from 'react-bootstrap'
import "./Inicio3.css"

export default function Inicio3() {
  return (
<div className='CardInfo'>

    <div className='d-flex4'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/instrumental-santa-fe.appspot.com/o/DSC_0421~2.JPG?alt=media&token=54592b27-982b-4520-a12b-5d2a9c274c2e" />
    <Card.Body>
    <Card.Title>Individuales</Card.Title>
        <Card.Text>
        Percusión, Baterías eléctricas y acústicas, y mucho más
        </Card.Text>
       
    </Card.Body>
    </Card>
    </div>
    
    <div className='d-flex5'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/instrumental-santa-fe.appspot.com/o/DSC_0105%20(1).JPG?alt=media&token=da176ac0-cafa-4fba-bb70-903a7bd7f6d0" />
    <Card.Body>
    <Card.Title>Percusión</Card.Title>
        <Card.Text>
        Percusión, Baterías eléctricas y acústicas, y mucho más
        </Card.Text>
       
    </Card.Body>
    </Card>
    </div>
    <div className='d-flex6'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/instrumental-santa-fe.appspot.com/o/DSC_0838.JPG?alt=media&token=b835dba3-3b98-4266-bd04-3f7f83862e74" />
    <Card.Body>
    <Card.Title>Percusión</Card.Title>
        <Card.Text>
        Percusión, Baterías eléctricas y acústicas, y mucho más
        </Card.Text>
       
    </Card.Body>
    </Card>
    </div>
  
  

</div>
  )
}
