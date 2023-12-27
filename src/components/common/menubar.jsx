import React from 'react'
import { Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { config } from '../../helpers/config'
import { Link } from 'react-router-dom'
import Menu from './menu'

const MenuBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <Image src="/images/logo/logo.png" alt={config.project.name}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls= "mainMenu" />
            <Navbar.Offcanvas
              id="mainmenu"
              aria-labelledby="offcanvas"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvas">
                  <Image src="/images/logo/logo.png" alt={config.project.name}/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Menu/>
                </Nav>

               <a href={`tel:${config.contact.phone}`} 
               className="btn btn-outline-primary">
                CALL NOW!
               </a>
              </Offcanvas.Body>

            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  )
}

export default MenuBar