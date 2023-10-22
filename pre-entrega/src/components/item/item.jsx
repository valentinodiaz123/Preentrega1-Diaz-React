import { Link } from "react-router-dom"

const Item = ({ productos }) => {
    return (
        <>
            <div className="contenedor-item-list" >
                <img className="image-item-list" src={productos.image} alt="" />
                <div className="text-item-list">
                    <h1 className="card-title">{productos.title}</h1>
                    <p className="card-price">{productos.price}</p>
                    <button className="btn btn-primary m-3"><Link className="text-light text-decoration-none"to={`/item/${productos.id}`}>Ver Mas</Link></button>
                </div>

            </div>
        </>)
}

export default Item