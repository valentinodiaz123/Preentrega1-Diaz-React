import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../cartWidget/cartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav>
                        <Navbar.Brand ><Link className="nav-a" to={"/"}>MusicStore</Link></Navbar.Brand>
                        
                        <Nav.Link> <Link className="nav-a" to={"/category/guitarras"}>Guitarras</Link> </Nav.Link>
                        <Nav.Link> <Link className="nav-a" to={"/category/teclados"}>Teclados</Link> </Nav.Link>
                        <Nav.Link> <Link className="nav-a" to={"/category/baterias"}>baterias</Link> </Nav.Link>
                        <Nav.Link> <Link className="nav-a" to={"/category/micros"}>micros</Link> </Nav.Link>

                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar