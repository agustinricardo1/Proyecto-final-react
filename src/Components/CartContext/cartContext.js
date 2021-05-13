import React, { useContext, useEffect, useState } from 'react';

export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext);

export function CartProvider ({ children }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log(items);
    }, [items]);

    // Si el producto está o no en el carrito devuelve true or false
    const isInCart=(id)=>{
        const inCart = items.find(x=>x.id === id)
        if (inCart !== undefined) {
            return true
        }
        return false
    }

    // Si ya esta realizada un filtro con mapeo para solo sumar la cantidad nueva
    const getQuantity=(datos,count)=>{
        const filtro = [...items];
        filtro.map(i => {
            if (i.id === datos.id) {
                if (i.qty < 5 && (i.qty + count > 5)) {
                    i.qty = 5
                }
            }
        })
        setItems(filtro)
    }

    // Agregar un producto al carrito y manda la informacion a cantidad
    const addItems = (count, datos) => {
        console.log(...items);
        if (isInCart(datos.id)) {
            getQuantity(datos,count)
            console.log(datos);
        }else {
            if (items.length < 4) {
                setItems([...items, {...datos, qty: count}]);
            }
        }
    };

    // Suma el total resolviendo precio por cantidad
    function total() {
        const precioTotal = items.reduce((a,b)=>(a + (b.precio * b.qty)),0)
    }

    // Suma las cantidades para ser mostrada en el icono del carrito
    function getUnits(){
        const unid = items.reduce((a,b)=>(a + b.qty),0)
        return unid
    }

    const removeItems = (item) => {
        console.log(item);
        const newItems = item.filter(x=> x.id !== item);
        setItems(newItems);
    }

    // Borrar carrito
    const clear = () => {
        setItems([]);
    }


    return (
        <CartContext.Provider value={{ items ,addItems, removeItems, total, clear, getUnits }}>
            {children}
        </CartContext.Provider>
    );
};
