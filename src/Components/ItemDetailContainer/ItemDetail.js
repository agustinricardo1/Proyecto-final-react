import React from 'react';
import '../../Style/ItemDetail.css'


const ItemDetail = ({datos}) => {
    return (
        <>
            <div key={datos.id} className='card-detail'>
                <div>
                    <img src={datos.img} alt="" className='img-detail'/>
                </div>
                <div className='itemDetailText'>
                    <h1>{datos.title}</h1>
                    <br/>
                    <h4>Precio: $<b>{datos.price}</b> USD</h4>
                </div>
            </div>
        </>
    )
}
export default ItemDetail