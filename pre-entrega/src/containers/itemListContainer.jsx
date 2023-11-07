import { useEffect, useState } from "react"
import Item from "../components/item/item"
import { useParams } from "react-router-dom"
import Carrousel from "../components/carrousel/carrousel"

// 1 Import las dependencias y componentes que necesite y creo el ItemListContainer

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]) // Creo un estado que me va a servir para trar mi API, como valor inicial tiene un array vacio

    // 2 Aca genero un useEffect, dependiendo de la prop greeting que le llegue al componente, cuando esta greeting se modifique, el componente se volvera a renderizar

    useEffect(() => {

        const url = greeting ? `https://fakestoreapi.com/products/category/${greeting}` : `https://fakestoreapi.com/products` 

        // 3 creo una constante en la cual uso el operador ternario, en caso de que al componente se le pase una props greeting (greeting=true) se va a guardar en la constante tal url (la que tiene el ${greeting}) y si no recibe ninguna greeting a la hora de renderizarse (greeting=false). Va a guardar en la constane, la url de productos.

        //Esta logica es necesaria, ya que este componente tambien se utiliza para renderizar la home "/", de esta manera nos ahorramos tener que crear un componente especifico para home pasandole solamente la url de products al fetch

        //y tambien sirve basicamente para poder renderizar las categorias que nosotros le pasemos, si pasamos la categoria jewerly por url (/category/jewerly), se va a guardar eso en la constante y despues se va a pasar al fetch, eso nos traeria de la API solamente los productos que utilicemos 

        fetch(url)
            .then(res => res.json())
            .then(json => setItems(json))
            .catch(error => console.error(error))

    }, [greeting])

    return (
        <>

            {items.length > 0 ? (
                <>
                <Carrousel/>
                <div className="contenedor">
                    {items.map(productos => <Item key={productos.id} productos={productos} ></Item>)}
                </div>
                </>
            ) : (
                <p className="contenedor load">Cargando...</p>
            )}

        </>
    )
}

export default ItemListContainer