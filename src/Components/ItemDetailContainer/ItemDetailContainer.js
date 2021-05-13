import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loading from '../Loading/Loading'
import { useCartContext } from '../CartContext/cartContext'
import ItemCountContainer from '../Contador/ItemCountContainer'

const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);
    const [addItems, items] = useCartContext();
    const { id } = useParams()

    useEffect(() => {
        const catalogo = [
            {
                id: 'agaskgabjhkfghfga',
                title: 'Remera',
                precio: '$2500',
                img: 'https://www.guantexindustrial.com.ar/700-large_default/remera-algodon-jersey-azul-talle-xxxl.jpg',
                stock: 7,
            },
            {
                id: 'agaskgabjewethka',
                title: 'Pantalón',
                precio: '$2000',
                img: 'https://www.clementdesign.com/es/wp-content/uploads/sites/4/products/06CCYCL/06CCYCLNOIR/p_vface.png',
                stock: 10,
            },
            {
                id: 'agaskgaasdbjhka',
                title: 'Campera',
                precio: '$4500',
                img: 'https://d2r9epyceweg5n.cloudfront.net/stores/143/626/products/campera-undead1-21373735edc521da4815450885284633-1024-1024.png',
                stock: 4,
            }
        ]
        const catalogosPromise = new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(catalogo)
            }, 2000);
        })
        catalogosPromise.then(dato =>{
            const itemFilterFind = dato.find(item => item.id ===`${id}`)
            setDatos(itemFilterFind)
        })
    },[id])

    const onAdd = (count) => {
        addItems(count, datos)
    }
    return(
        <React.Fragment>
            <div>
                {datos.length == null ? <ItemDetail datos={datos}/> : <Loading/>}
                {<ItemCountContainer datos={datos} onAdd={onAdd}></ItemCountContainer>}
            </div>
        </React.Fragment>
    )

}
export default ItemDetailContainer