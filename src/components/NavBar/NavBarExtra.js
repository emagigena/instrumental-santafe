import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavBarExtra.css'
import Cart from './CartWidget/CartWidget.js'
import logoinstrumental from './logoinstrumental.JPG'
import { Link , NavLink } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'


export default function NavBarExtra() {
    const{productosAgregados} = useCartContext()
  return (
<Navbar collapseOnSelect expand="lg" bg="secundary" variant="light">
    <Container className='ContainerNavbar'>
    
        <Link to='/'>
        {<Navbar.Brand ><img src={logoinstrumental} className='logoinstrumental.JPG' alt='logo' /></Navbar.Brand>}
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto'>
                <NavLink to="categoria/EKO"><h6>   EKO   </h6></NavLink>
                <NavLink to="categoria/DANELECTRO"><h6>   DANELECTRO   </h6></NavLink>
                <NavLink to="categoria/TOKAI"><h6>  TOKAI   </h6> </NavLink>
                <NavLink to="categoria/LEONARD"><h6>   LEONARD   </h6> </NavLink>
                <NavLink to="categoria/STAGG"><h6>  STAGG   </h6> </NavLink>
                <NavLink to="/firebase"><h6>Firebase</h6></NavLink>    
                {/*<NavDropdown title="Categorias" id="collasible-nav-dropdown">
                    <NavDropdown.Item>BAJOS</NavDropdown.Item>
                    <NavDropdown.Item>ELECTROACÚSTICA</NavDropdown.Item>
                    <NavDropdown.Item>ELÉCTRICA</NavDropdown.Item>
                    <NavDropdown.Item>INDIVIDUALES</NavDropdown.Item>
                    <NavDropdown.Item>MULTIEFECTOS</NavDropdown.Item>
                    <NavDropdown.Item>AMPLIFICADORES DE BAJO</NavDropdown.Item>
                    <NavDropdown.Item>SONIDO</NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown>}*/}
            </Nav>
            <Nav>
                <Nav.Link href="https://www.facebook.com/david.santafe.108">Página de Facebook</Nav.Link>
                <Nav.Link href="#deets">Favoritos</Nav.Link>
                <Cart number={productosAgregados()}/>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}