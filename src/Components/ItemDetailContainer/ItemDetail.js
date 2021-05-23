import React from 'react';
import '../../Style/ItemDetail.css'
import Container from '../Container/Container'


const ItemDetail = ({datos}) => {
    return (
        <>
            <div key={datos.id} className='card-detail'>
                <div>
                    <img src={datos.img} alt="" className='img-detail'/>
                </div>
                <div className='itemDetailText'>
                    <h1>{datos.title}</h1>
                    <h4>$<b>{datos.price}</b></h4>
                </div>
            </div>
        </>
    )
}
export default ItemDetail