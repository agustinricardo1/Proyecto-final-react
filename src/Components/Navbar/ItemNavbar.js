import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../../Style/ItemNavbar.css'
import {Link} from 'react-router-dom'


const ItemNavbar = () => {

    return(
        <React.Fragment>
            <Navbar bg="light" expand="lg" className='menuMargin'>
                <Navbar.Brand href="#home">*Futuro Logo*</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="menu">
                    <Link to='/'><Nav className='menu-item'>Home</Nav></Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav className='menu-item'>Contacto</Nav>
                    <Nav className='menu-item'><i class="fas fa-shopping-cart"></i></Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
} 
export default ItemNavbar