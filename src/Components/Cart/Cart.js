import React from 'react';
import {Link} from 'react-router-dom'
import {useCartContext} from '../CartContext/cartContext'
import '../../Style/Item.css'
import '../../Style/ItemCart.css'

const Cart = () => {
    const {items, removeItems, clearItems, total} = useCartContext()
    console.log('items', items);
    return (
        <>
            <section className="container desktop">
                <div className="desktopContainer">
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Nombre Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(x=> 
                                <tr key={x.id}>
                                    <td><img src={x.img} alt="imgProducto"/></td>
                                    <td>{x.title}</td>
                                    <td>${x.price}</td>
                                    <td>
                                        <div>
                                        {x.qty}
                                        </div>
                                    </td>
                                    <td><button onClick={() => removeItems(x.id)}>X</button></td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="CartBtn">
                        <div className="CartTotal">
                            <div>Total:</div>
                            <div>${total()}</div>
                        </div>
                        <button onClick={clearItems}>Vaciar Carrito</button>
                        <Link to={'/'}><button>Checkout</button></Link>
                    </div>
                </div>
            </section>
        </>
    )
} 
export default Cart