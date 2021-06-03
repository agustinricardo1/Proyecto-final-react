import React from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../../Style/Item.css'
import {CartContext, useCartContext} from '../CartContext/cartContext'

const ItemCount = ({id,stockUser,stockTotal,sumar,restar,botonActivo,activo, onAdd, count}) => {
    const {items} = useCartContext()
    return(
        <React.Fragment>
            <section className="containerSectionItem">
                <div className="container-item"></div>
                <div className="contadorItemDetail">
                    <h5 id={id}>Cantidad en stock: {stockTotal}</h5>
                    <div className='contador'>
                        <Button onClick={restar} disabled={!botonActivo}>-</Button>
                        <p>{stockUser}</p>
                        <Button onClick={sumar} disabled={!botonActivo}>+</Button>
                    </div>
                    <div className="btn-addItem">
                        <button onClick={()=> onAdd(count)} disabled={!activo}>Agregar al carrito</button>
                        {
                            items.length !== 0 ? <Link to={'/cart'}><button>Ir al carrito</button></Link> : console.log('Carrito vacío')
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default ItemCount