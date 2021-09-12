import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"
import { useState } from "react"

const NavBar = () => {
  const [variant, setVariant] = useState('dark')
  const [color, setColor] = useState('dark')

    return(
        <Navbar bg={color} variant={variant} sticky='top'>
        <Container>
        <Navbar.Brand>Create and add your contacts</Navbar.Brand>

        <Nav className="mr-auto">
        <Navbar.Brand> Navbar settings</Navbar.Brand>
          <NavDropdown title="Color">
            <NavDropdown.Item onClick={()=>(setColor('primary'))}>Primary</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>(setColor('secondary'))}>Secondary</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>(setColor('primary'))}>Primary</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>(setColor('danger'))}>Danger</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>(setColor('warning'))}>Warning</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>(setColor('info'))}>Info</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>(setColor('light'))}>Light</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>(setColor('dark'))}>Dark</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Variant">
            <NavDropdown.Item onClick={()=>(setVariant('dark'))}>Dark</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>(setVariant('light'))}>Light</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar
