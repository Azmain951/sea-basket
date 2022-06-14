import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useData from '../hooks/useData';

const Header = () => {

    const [data] = useData();

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={data.logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Category</Nav.Link>
                            <Nav.Link href="#link">FAQs</Nav.Link>
                            <Nav.Link href="#link">My Cart</Nav.Link>
                            <button className='btn btn-primary'>Login</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;