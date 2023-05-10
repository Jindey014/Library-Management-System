import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';

const Navbars = () => {
    const navigate = useNavigate()
    return (
        <Navbar className='navbar'>
            <Container>
                <Navbar.Brand onClick={() => navigate("/")}><h2>Library Management <br /> System</h2> </Navbar.Brand>
            </Container>
        </Navbar>

    )
}

export default Navbars