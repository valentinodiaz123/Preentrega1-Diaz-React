import Carousel from 'react-bootstrap/Carousel';

const Carrousel = () => {
    return (
        <Carousel className=''>
            <Carousel.Item>
                <img src="https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg?w=1380&t=st=1698119050~exp=1698119650~hmac=64368c5063a1e786962aa92c5202fbba972d04b102383ca0e689c03a0a0d447a" alt="" className='d-block w-100 img-carrousel'/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg?w=1380&t=st=1698119050~exp=1698119650~hmac=64368c5063a1e786962aa92c5202fbba972d04b102383ca0e689c03a0a0d447a" alt="" className='d-block w-100 img-carrousel'/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg?w=1380&t=st=1698119050~exp=1698119650~hmac=64368c5063a1e786962aa92c5202fbba972d04b102383ca0e689c03a0a0d447a" alt="" className='d-block w-100 img-carrousel'/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel