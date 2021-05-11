import React from 'react';
import '../../Style/ItemDetail.css'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import ItemCount from '../Contador/ItemCount'
import { useCartContext } from '../CartContext/cartContext'

const ItemDetail = ({datos}) => {
    const [ addToCart ] = useCartContext();
    return (
        <div key={datos.id} className='card-detail'>
            <div>
                <img src={datos.img} alt="" className='img-detail'/>
            </div>
            <div>
                <h2>{datos.title}</h2>
                <ItemCount stock={datos.stock}/>
                <h4>{datos.precio}</h4>
                <Link><Button variant="primary" className='btn-primary' onClick={()=> addToCart(datos)}>Agregar al carrito</Button></Link>
            </div>
        </div>
    )
}
export default ItemDetail