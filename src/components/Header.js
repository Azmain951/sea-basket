
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useData from '../hooks/useData';

const Header = () => {

    const [data] = useData();

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={'/'}>
                        <img src={data.logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='me-4' href="#category">Category</Nav.Link>
                            <Nav.Link className='me-4' href="#faqs">FAQs</Nav.Link>
                            <Nav.Link className='me-4' href="#blog">Blogs</Nav.Link>
                            <Nav.Link as={Link} className='me-4' to='/admin-panel'>Admin Panel</Nav.Link>
                            <Nav.Link as={Link} className='me-4 btn btn-primary text-white' to='/login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;