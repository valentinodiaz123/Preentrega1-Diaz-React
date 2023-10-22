import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../cartWidget/cartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav>
                        <Navbar.Brand href="/">ShopStore</Navbar.Brand>
                        <Nav.Link href="/category/electronics">Electronics</Nav.Link>
                        <Nav.Link href="/category/jewelery">Jewerly</Nav.Link>
                        <Nav.Link href="/category/womens clothing">women's clothing</Nav.Link>
                        <Nav.Link href="/category/mens clothing">"men's clothing"</Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar