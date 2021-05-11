import React, { useContext, useState } from 'react';

export const CartContext = React.createContext()

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    const [items, setItems] = useState([]);

    const addToCart = (amount, item) => {
        if (items.some(i => i.title === item.title)) {
            const serchItem = items.findIndex(i => i.title === item.title);
            const arrCopy = [...items];
            arrCopy[serchItem] = {
                ...arrCopy[serchItem],
                amount: arrCopy[serchItem].amount + amount
            };
        setItems(arrCopy);
    } else {
        setItems([...items, { ...item, amount }]);
    }
    setCount(count + amount);
    setShow(!show);
    };
    const clear = () => {
        setItems([]);
        setCount(0);
    };
    function handleShow() {
        setShow(!show);
    }
    return (
        <CartContext.Provider value={{ addToCart, count, items, show, handleShow, clear }}>
            {children}
        </CartContext.Provider>
    );
};
