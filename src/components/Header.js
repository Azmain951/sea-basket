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
                            <Nav.Link className='me-4' href="#category">Category</Nav.Link>
                            <Nav.Link className='me-4' href="#faqs">FAQs</Nav.Link>
                            <Nav.Link className='me-4' href="#cart">My Cart</Nav.Link>
                            <button className='btn btn-primary'>Login</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;