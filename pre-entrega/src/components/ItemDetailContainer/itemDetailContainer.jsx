import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
// import '../components/ItemDetailContainer/itemDetailContainer.module.css'



const ItemDetailContainer = () => {

    const {id} = useParams()

    const [producto, setProducto] = useState()

    useEffect(() => {

  

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProducto(json))
            .catch(error => console.error(error))

    }, [id])

    
    // "ccontenedor-item-d d-flex flex-row "
    return(
        <div className="contenedor-item-d">
            <img className="imagen-item-d" src={producto && producto.image} alt="" />
            <section className="texto-item-d">
                <h1>{producto && producto.title}</h1>
                <h2>{producto && "Precio: $" + producto.price }</h2>
                <h3>{producto && producto.description}</h3>
            </section>
        </div>
    )
}
export default ItemDetailContainer