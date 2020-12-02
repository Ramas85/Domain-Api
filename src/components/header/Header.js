import "./header.scss"
import {NavLink} from 'react-router-dom';
import {Nav, Container, Navbar} from 'react-bootstrap'


function Header() {
    return ( 
    <header>
        <h1 className="text-center">Domains-app</h1>
       
        <Container>
                <Navbar expand="md" variant="dark" bg="dark" className="justify-content-center">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav.Item>
                        <NavLink exact to="/" className="nav-link">Pradinis</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/List/" className="nav-link">Sąrašas</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/About/" className="nav-link">Apie</NavLink>
                    </Nav.Item>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
    </header>
    )
}
export default Header;
