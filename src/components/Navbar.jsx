//Navbar.jsx
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../pages/AuthContext";

export default function Navbar1({ isDark, setIsDark }) {
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    function logout() {
        setToken(null); // Clear the token
        navigate("/"); // Navigate to the login page
        setIsDark(null);
    }

    return (
        <Navbar expand="lg" className="background" data-theme={isDark ? "dark" : "light"}>
            <Container>
                <Navbar.Brand href="#home" className='nav-container'>Resume</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex">
                        <Nav.Link href="#home" className='nav-container'>Home</Nav.Link>
                        <Nav.Link href="#link" className='nav-container'>Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button className='float-end btn btn-secondary' onClick={logout}>Log Out</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
