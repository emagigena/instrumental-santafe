import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavBarExtra.css'
import Cart from './CartWidget/CartWidget.js'
import logoinstrumental from './logoinstrumental.JPG'
import { Link , NavLink } from 'react-router-dom'


export default function NavBarExtra() {
  return (
<Navbar collapseOnSelect expand="lg" bg="secundary" variant="light">
    <Container className='ContainerNavbar'>
    <img src={logoinstrumental} className='logoinstrumental.JPG' alt='logo' />
        <Link to='/'>
        <Navbar.Brand ><h6>Inicio</h6></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto'>
                <NavLink to="categoria/EKO"><h6>   EKO   </h6></NavLink>
                <NavLink to="categoria/DANELECTRO"><h6>   DANELECTRO   </h6></NavLink>
                <NavLink to="categoria/TOKAI"><h6>  TOKAI   </h6> </NavLink>
                <NavLink to="categoria/LEONARD"><h6>   LEONARD   </h6> </NavLink>
                <NavLink to="categoria/STAGG"><h6>  STAGG   </h6> </NavLink>
                {<NavDropdown title="Categorias" id="collasible-nav-dropdown">
                    <NavDropdown.Item>BAJOS</NavDropdown.Item>
                    <NavDropdown.Item>ELECTROACÚSTICA</NavDropdown.Item>
                    <NavDropdown.Item>ELÉCTRICA</NavDropdown.Item>
                    <NavDropdown.Item>INDIVIDUALES</NavDropdown.Item>
                    <NavDropdown.Item>MULTIEFECTOS</NavDropdown.Item>
                    <NavDropdown.Item>AMPLIFICADORES DE BAJO</NavDropdown.Item>
                    <NavDropdown.Item>SONIDO</NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown>}
            </Nav>
            <Nav>
                <Nav.Link href="https://www.facebook.com/david.santafe.108">Página de Facebook</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
    <Cart number={'5'}/>
</Navbar>
  )
}