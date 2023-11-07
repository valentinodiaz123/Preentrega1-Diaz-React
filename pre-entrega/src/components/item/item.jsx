import { Link } from "react-router-dom"
// import { CartContext } from "../../context/cartContext"
// import { useContext } from "react"

const Item = ({ productos }) => {

    // const {numero, setNumero} = useContext(CartContext)
    
    return (
        <>
            <div className="contenedor-item-list" >
                
                <img className="image-item-list" src={productos.image} alt="" />

                <div className="text-item-list">
                    <h1 className="card-title">{productos.title}</h1>
                    <p className="card-price">{productos.price}</p>
                </div>
                {/* <p>Prueba del context{numero}</p> */}

                <button className="btn btn-primary m-3"><Link className="text-light text-decoration-none"to={`/item/${productos.id}`}>Ver Mas</Link></button>

            </div>
        </>)
}

export default Item