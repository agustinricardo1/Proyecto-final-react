import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ItemCount from '../Contador/ItemCount'
import {Link} from 'react-router-dom'
import '../../Style/Item.css'


const Item = ({img, title, precio, stock, id}) => {
    return(
        <React.Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card style={{ width: '18rem', height: '40rem' }}>
                            <Card.Img variant="top" src={img} style={{height: '310px'}}/>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <ItemCount stock={stock}/>
                                <Card.Text>{precio}</Card.Text>
                                <div className='card-bottons'>
                                    <Link to={`/Item/${id}`}><Button variant="secondary" className='btn-secondary'>Ver detalles</Button></Link>
                                    <Link><Button variant="primary" className='btn-primary'>Agregar al carrito</Button></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Item