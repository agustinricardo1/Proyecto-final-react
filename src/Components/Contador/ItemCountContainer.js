import React, {useState, useEffect} from 'react';
import ItemCount from './ItemCount';

// realiza toda la logica del contador de unidades.

const ItemCountContainer = ({datos, onAdd}) => {
    const [stockTotal, setStockTotal] = useState(datos.stockT);
    const [stockUser, setStockUsser] = useState(0);
    const [botonActivo, setBotonActivo] = useState(true);
    const [activo,setActivo]=useState(false)
    const count = stockUser;
    // Sumar realiza la logica de aumentar por unidad con el boton mas, y resta del stock principal
    // si no hay nada en el stock bloque el boton de compra y anula los botones de + y -
    

    useEffect(() => {
        if(stockTotal === 0){
            setBotonActivo(false);
            if(stockUser > 0){
            setBotonActivo(true);
            }
        }
    }, [stockTotal,stockUser])
    
    
    const sumar = () => {
        if(stockTotal > 0){
        setStockUsser( stockUser + 1 );
        setStockTotal (stockTotal - 1);
        setActivo(true)
        }
    }

      //Resta realiza la logica de desaumentar por unidad con el boton menos, y suma el stock principal
      //y no permite bajar de 0
    const restar =()=>{
        if(stockUser === 0){
            setActivo(false)
            setStockUsser(0);
        }
        else if(stockTotal >= 0 ){
        setStockUsser ( stockUser - 1);
        setStockTotal (stockTotal + 1)
        }
    }
    
    return (
        <ItemCount id={datos.id} stockUser={stockUser} stockTotal={stockTotal} sumar={sumar} restar={restar} botonActivo={botonActivo} activo={activo} onAdd={onAdd} count={count}/>
    )
}
export default ItemCountContainer;