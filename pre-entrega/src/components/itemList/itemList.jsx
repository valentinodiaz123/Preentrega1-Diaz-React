import Carrousel from "../carrousel/carrousel"
import Item from "../item/item"

const ItemList = ({ greeting }) => {

    return (
        greeting.length > 0 ? (
            <>
                <Carrousel />
                <div className="contenedor">
                    {greeting.map(productos => <Item key={productos.id} productos={productos} ></Item>)}
                </div>
            </>
        ) : (
            <p className="contenedor load">Cargando...</p>
        )

    )
}
export default ItemList