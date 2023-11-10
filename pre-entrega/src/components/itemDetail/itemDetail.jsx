const ItemDetail = ({producto}) => { 

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
export default ItemDetail