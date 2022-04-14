import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './NavBarExtra.css'
import Cart from './CartWidget/CartWidget.js'
import logoinstrumental from './logoinstrumental.png'
import { useCartContext } from '../Context/CartContext'
import { LinkContainer } from "react-router-bootstrap"
import { Link, NavLink } from 'react-router-dom'


export default function NavBarExtra() {
    const{productosAgregados} = useCartContext()
  return (
    <Navbar collapseOnSelect expand="lg" bg="secundary" variant="light">
        <Container className='ContainerNavbar'>
        {<Link to="/"><img src={logoinstrumental} className='logoinstrumental.png' alt='logo' /></Link>}
        <LinkContainer to="/">
        {<Navbar.Brand ></Navbar.Brand>}
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto'>
                
                {<NavLink to="categoria/EKO"><h6>   EKO   </h6></NavLink>}
                {<NavLink to="categoria/DANELECTRO"><h6>   DANELECTRO   </h6></NavLink>}
                {<NavLink to="categoria/TOKAI"><h6>  TOKAI   </h6> </NavLink>}
                {<NavLink to="categoria/LEONARD"><h6>   LEONARD   </h6> </NavLink>}
                {<NavLink to="categoria/STAGG"><h6>  STAGG   </h6> </NavLink>}
            </Nav>
            <Nav>
                <Nav.Link href="https://www.facebook.com/david.santafe.108">Página de Facebook</Nav.Link>
                <Cart number={productosAgregados()}/>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}