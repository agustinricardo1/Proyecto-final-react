import React, {useState} from 'react';
import {Button} from 'react-bootstrap'
import '../../Style/Item.css'

const ItemCount = ({stock}) => {
    const [stockTotal, setStockTotal] = useState(stock)
    const [stockUser, setStockUser] = useState(0)

    const sumar = () => {
        if (stockTotal === 0) {
        }else{
            setStockUser( stockUser + 1);
            setStockTotal (stockTotal - 1);
        }
    }

    const restar = () =>{
        if (stockTotal === 0 | stockUser === 0) {
        }else{
            setStockUser(stockUser - 1);
            setStockTotal(stockTotal + 1);
        }
    }

    return(
        <React.Fragment>
            <div className="contadorItemDetail">
                <p>Cantidad en stock: {stockTotal}</p>
                <div className='contador'>
                    <Button onClick={restar}>-</Button>
                    <p>{stockUser}</p>
                    <Button onClick={sumar}>+</Button>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ItemCount