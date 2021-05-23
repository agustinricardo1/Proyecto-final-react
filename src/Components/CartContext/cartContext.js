import React, { useContext, useEffect, useState } from 'react';

export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext);

export function CartProvider ({ children }) {
    const [items, setItems] = useState([]);
    const[tost, setTost] = useState(false)
    const [vacio, setVacio]= useState(false)

    useEffect(() => {
    
    }, [items]);


    //si el producto esta o no en el carrito devuelve true || false.
    const isInCart=(id)=>{
        const enElCart = items.some(x=>x.id === id);
        
        return enElCart;
    }

    //si ya esta realiza un filtro con un mapeo para solo sumar la cantidad nueva.
    const getQuantity=(datos,count)=>{
        const filtro = [...items];
        filtro.forEach(i => {
            if(i.id === datos.id){
            if((i.qty += count) > 5){
                i.qty = 5 
                setTost(true) 
            }
        }  
    })
    setItems(filtro);
    }

   //agrega el producto al carrito y si ya esta, manda la info a cantidad.
    const addItems = (count, datos) => {
        console.log(...items)
        if(isInCart(datos.id)){
        getQuantity(datos,count)
        console.log(datos)
        }
        else{
        if(items.length < 4){
            setItems([...items, {...datos, qty: count}]);
        }
    }
    };


    //suma el total resolviendo precio por cantidad.
    function total (){
        const preciTotal = items.reduce((a,b)=>(a + (b.precio * b.qty)),0)
        return preciTotal;
    }


    //suma las cantiades para ser mostrada en el conteo del icono carrito.
    function getUnits(){
        const unid = items.reduce((a,b)=>(a + b.qty),0)
        if(unid==0){
            setVacio(false)
        }
    return unid;
    }


    //borra un producto del carrito .
    const removeItems = (item) => {
        console.log(item)
        const newItems = items.filter(x=> x.id !== item);
        setItems(newItems);
        console.log('Items eliminado');
    };


    //borra todos los productos del carrito.
    const clearItems = () =>{
        setItems([])
        setVacio(false);
    } 
    return (
        <CartContext.Provider value={{ items, addItems, removeItems, clearItems, total, getUnits, tost, vacio }}>
        {children}
        </CartContext.Provider>
    );
}
