import React from 'react';
import {Link} from 'react-router-dom'
import {CartContext, useCartContext} from '../CartContext/cartContext'
import '../../Style/Item.css'
import '../../Style/ItemCart.css'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useState, useEffect, useContext } from 'react';
import { getFirestore } from '../firebase'
import swal from 'sweetalert'
import Swal from 'sweetalert2'

const Cart = () => {
    const {items, removeItems, clearItems, total} = useContext(CartContext)
    const [id, setId] = useState("")
    const [user, setUser] = useState({});
    const [order, setOrder] = useState({})

    const db = getFirestore();
    const orders = db.collection("orders")
    
    const handleCompra = () => {
        items.length !== 0 ?
        confirmCompra()
        : swal({
            title: 'El carrito está vacío!',
            text: ' ',
            icon: 'warning',
            buttons: 'Close',
        });
        let order = {
            buyer: {
                name: user.name,
                email: user.email
            },
            items: items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total(),
        }
        if (items.length && user.name && user.email) {
            setOrder(order)
        }
    }

    const confirmCompra = () => {
        (async () => {
            const { value: formValues } = await Swal.fire({
                title: 'Ingrese sus datos',
                html:
                    `<form>
                        <label>Nombre:</label>
                            <input type='text' id="swal-input1" name="name" class="swal2-input" required/>
                        <br/>
                        <label>Email:</label>
                            <input type='email' id="swal-input2" name="email" class="swal2-input" required/>
                    </form>
                    `
                    ,
                focusConfirm: false,
                preConfirm: () => {
                    return [
                    setUser({
                        name: document.getElementById('swal-input1').value, 
                        email: document.getElementById('swal-input2').value 
                    }),
                    document.getElementById('swal-input1').value,
                    ]
                }
            })
            if (document.getElementById('swal-input1').value) {
                swal({
                    title: 'Su compra fue realizada con éxito!',
                    text: `Gracias por su compra ${(formValues)}`,
                    icon: 'success',
                    buttons: 'Close',
                })
            } else {
                swal({
                    title: 'Datos erróneos',
                    text: ' ',
                    icon: 'warning',
                    buttons: 'Close',
                })
            }
        })()
    }

    const updateOrder = () => {
        if (order.items) {
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
    }
    console.log('comprador', user);
    console.log('orden',order);

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
                                    <th style={{maxWidth: '300px'}}></th>
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
                            <div><b>Total:</b></div>
                            <div>${total()}</div>
                        </div>
                        <button onClick={clearItems} className='btnCart'>Vaciar Carrito</button>
                        <button onClick={updateOrder} className='btnCart'>Update</button>
                        <button onClick={handleCompra} className='btnBuy'>Confirmar compra</button>
                    </div>
                    {
                        id && user.name && user.email &&
                        <>
                            <div className='containerOrder'>
                                <h4>Gracias por su compra!</h4>
                                <p>Orden: {id}</p>
                            </div>
                        </>
                    }
                </div>
            </section>
        </>
    )
} 
export default Cart