import React, { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loading from '../Loading/Loading'
import {useCartContext} from '../CartContext/cartContext'
import ItemCountContainer from '../Contador/ItemCountContainer'
import { getFirestore } from '../firebase'


const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        console.log('datos', datos);
        const db = getFirestore();
        const itemCollection = db.collection("items")
        const detailItem = itemCollection.doc(id);
        detailItem.get().then((doc) =>{
            if(!doc.exists) { 
                return;
            }
            
            setDatos({id: doc.id, ...doc.data()});
        })
        }, [id]);

    return(
        <React.Fragment>
                {datos.length == null ? <ItemDetail datos={datos}/> : <Loading/>}
                {datos.length == null ? <ItemCountContainer stock={datos.stock} datos={datos}/> : console.log('Error count')}
        </React.Fragment>
    )

}
export default ItemDetailContainer