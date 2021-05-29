import React from 'react';
import {Link} from 'react-router-dom'
import {CartContext, useCartContext} from '../CartContext/cartContext'
import '../../Style/Item.css'
import '../../Style/ItemCart.css'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useState, useEffect, useContext } from 'react';
import { getFirestore } from '../firebase'

const Cart = () => {
    const {items, removeItems, clearItems, total} = useContext(CartContext)
    const [id, setId] = useState("")
    const [user, setUser] = useState({
        name: "Lionel Messi",
        email: "messi@gmail.com",
    });
    const [order, setOrder] = useState({})

    const db = getFirestore();
    const orders = db.collection("orders")
    
    const handleCompra = () => {
        let order = {
            buyer: {
                name: user.name,
                email: user.email,
            },
            items: items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total(),
        }
        items.length && setOrder(order)
        console.log(order);
    }

    const updateOrder = () => {
        const order = orders.doc(id)
        order.update({
            status: "enviado",
            total: "100"
        })
        .then((res)=>{
            console.log('res', res);
        })
        .catch((err)=> console.log('err', err))
    }

    useEffect(() => {
        if (order.items) {
            orders.add(order)
            .then((res)=>setId(res.id))
            .catch((err)=> console.log("error: ",err))
        }
    },[order])

    return (
        <>
            <section className="container desktop margin">
                <div className="desktopContainer">
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Nombre Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(x=> 
                                <tr key={x.id}>
                                    <td><img src={x.img} alt="imgProducto"/></td>
                                    <td className="td_text">{x.title}</td>
                                    <td className="td_text">
                                        <div>
                                        {x.qty}
                                        </div>
                                    </td>
                                    <td className="td_text">${x.price}</td>
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
                        <button onClick={handleCompra}>Confirmar compra</button>
                        <button onClick={updateOrder}>Update</button>
                    </div>
                    {
                        id &&
                        <>
                            <h4>Su compra fue realizada con exito!</h4>
                            <h4>Orden: {id}</h4>
                        </>
                    }
                </div>
            </section>
        </>
    )
} 
export default Cart