import { useEffect, useState } from "react"
import Item from "../item/item"
import { useParams } from "react-router-dom"
import Carrousel from "../carrousel/carrousel"
import ItemList from "../itemList/itemList"
import { db } from "../../firebase/client"
import {collection, doc, getDocs} from "firebase/firestore"


const ItemListContainer = ({ greeting }) => {

     const [items, setItems] = useState([]) 

    useEffect(() => {
        const productsRef = collection(db, "products")
        getDocs(productsRef)
        .then(snapshot =>{
            setItems(snapshot.docs.map(doc=> ({id: doc.id, ...doc.data()})))
            .catch (e=> console.error(e))
        })
    }, [greeting])

    return (
        <>
            <ItemList greeting={items}/>
        </>
    )
}

export default ItemListContainer