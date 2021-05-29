import React, { useContext, useEffect, useState } from 'react';

export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext);

export function CartProvider ({ children }) {
    const [items, setItems] = useState(localStorage.getItem('Items')
                                        ? JSON.parse(localStorage.getItem('Items'))
                                        : []);
    const[tost, setTost] = useState(false)
    const [vacio, setVacio]= useState(false)

    useEffect(() => {
    
    }, [items]);

    const isInCart=(id)=>{
        const enElCart = items.some(x=>x.id === id);
        
        return enElCart;
    }

    const getQuantity=(datos,count)=>{
        const filtro = [...items];
        filtro.forEach(i => {
            if(i.id === datos.id){
            if((i.qty += count) > 10){
                i.qty = 10 
                setTost(true) 
            }
        }  
    })
    setItems(filtro);
    }

    const addItems = (count, datos) => {
        console.log(...items)
        if(isInCart(datos.id)){
        getQuantity(datos,count)
        console.log(datos)
        }
        else{
        if(items.length < 10){
            setItems([...items, {...datos, qty: count}]);
        }
    }
    setVacio(true)
    };

    function total (){
        const preciTotal = items.reduce((a,b)=>(a + (b.price * b.qty)),0)
        return preciTotal;
    }

    function getUnits(){
        const unid = items.reduce((a,b)=>(a + b.qty),0)
        if(unid === 0){
            setVacio(false)
        }
        return unid;
    }

    const removeItems = (item) => {
        console.log(item)
        const newItems = items.filter(x=> x.id !== item);
        setItems(newItems);
        console.log('Items eliminado');
    };

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
