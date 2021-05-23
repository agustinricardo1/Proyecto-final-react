import React, {useState, useEffect} from 'react';
import ItemCount from './ItemCount';
import {useCartContext} from '../CartContext/cartContext'
import ItemNavbar from '../Navbar/ItemNavbar';

// realiza toda la logica del contador de unidades.

const ItemCountContainer = ({stock, datos}) => {
    const [stockTotal, setStockTotal] = useState(stock);
    const [stockUser, setStockUser] = useState(0);
    const [botonActivo, setBotonActivo] = useState(true);
    const [activo,setActivo]=useState(false)
    const count = stockUser;
    const {addItems, items, tost} = useCartContext()
    

    useEffect(() => {
        console.log(stock);
        // setStockTotal(stock);
        if(stockTotal === 0){
            setBotonActivo(false);
            if(stockUser > 0){
            setBotonActivo(true);
            }
        }
    }, [stockTotal,stockUser])
    
    
    const sumar = () => {
        if(stockTotal > 0){
        setStockUser( stockUser + 1 );
        setStockTotal (stockTotal - 1);
        setActivo(true)
        }
    }

      //Resta realiza la logica de desaumentar por unidad con el boton menos, y suma el stock principal
      //y no permite bajar de 0
    const restar =()=>{
        if(stockUser === 0){
            setActivo(false)
            setStockUser(0);
        }
        else if(stockTotal >= 0 ){
        setStockUser ( stockUser - 1);
        setStockTotal (stockTotal + 1)
        }
    }

    const onAdd = (count) => {
        addItems(count, datos)
        items.length !== null ? console.log('Agregaste al carrito!') :
            console.log('Error')
    }
    
    return (
        <>
        <ItemCount  stockUser={stockUser} stockTotal={stockTotal} sumar={sumar} restar={restar} botonActivo={botonActivo} activo={activo} onAdd={onAdd} count={count}/>
        </>
    )
}
export default ItemCountContainer;