import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import ItemCountContainer from '../Contador/ItemCountContainer'
import { getFirestore } from '../firebase'


const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
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
                {datos && <ItemDetail datos={datos}/> }
                {/* {datos.length == null ? <ItemDetail datos={datos}/> : <Loading/>} */}
                {datos.length == null ? <ItemCountContainer stock={datos.stock} datos={datos}/> : console.log('Error count')}
        </React.Fragment>
    )

}
export default ItemDetailContainer