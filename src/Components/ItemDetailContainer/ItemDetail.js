import React from 'react';
import '../../Style/ItemDetail.css'

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
            </div>
        </div>
    )
}
export default ItemDetail