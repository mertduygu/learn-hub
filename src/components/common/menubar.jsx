import React from 'react'
import { Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { config } from '../../helpers/config'

const MenuBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
          <Container>
            <Navbar.Brand href="#"><Image src="/images/logo/logo.png" alt={config.project.name}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls= "mainMenu" />
            <Navbar.Offcanvas
              id="mainmenu"
              aria-labelledby="offcanvas"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvas">Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  )
}

export default MenuBar