import React from 'react';
import '../../Style/ItemDetail.css'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const ItemDetail = ({datos}) => {
    return (
        <div key={datos.id} className='card-detail'>
            <div>
                <img src={datos.img} alt="" className='img-detail'/>
            </div>
            <div>
                <h2>{datos.title}</h2>
                <p>Stock: {datos.stock}</p>
                <h4>{datos.precio}</h4>
                <Link><Button variant="primary" className='btn-primary'>Agregar al carrito</Button></Link>
            </div>
        </div>
    )
}
export default ItemDetail