import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../cartWidget/cartWidget';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">CERATI</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#inicio">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#iografia">Biografia</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#discos">Discos</a>
                    </li>
                    <button type="button" class="btn btn-primary position-relative">
                        <CartWidget/>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            1
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>

                </ul>
            </div>
        </nav>
    )
}
export default NavBar