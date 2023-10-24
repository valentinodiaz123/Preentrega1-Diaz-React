import { useEffect, useState } from "react"
import Item from "../components/item/item"
import { useParams } from "react-router-dom"
import Carrousel from "../components/carrousel/carrousel"

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const url = greeting ? `https://fakestoreapi.com/products/category/${greeting}` : `https://fakestoreapi.com/products`
        fetch(url)
            .then(res => res.json())
            .then(json => setItems(json))
            .catch(error => console.error(error))
    }, [greeting])

    return (
        <>

            {items.length > 0 ? (
                
                <div className="contenedor">
                    {items.map(productos => <Item key={productos.id} productos={productos} ></Item>)}
                </div>
            ) : (
                <p className="contenedor load">Cargando...</p>
            )}

        </>
    )
}

export default ItemListContainer