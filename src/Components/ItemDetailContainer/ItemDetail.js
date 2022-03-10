import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../../Style/ItemDetail.css'


const ItemDetail = ({datos}) => {

    const history = useHistory()
    const handleReturn = (categoryId) => {
        if (categoryId === 'acciones') {
            history.push('/category/acciones')
        }else {
            history.push('/category/criptomoneda')
        }
    };
    return (
        <>
        <div className="container">
            <button onClick={() => handleReturn(datos.categoryId)}>Volver</button>
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
        </div>
        </>
    )
}
export default ItemDetail