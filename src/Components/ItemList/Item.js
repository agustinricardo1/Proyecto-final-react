import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../../Style/Item.css'


const Item = ({img, title, price, stock, id, categoryId}) => {
    return(
        <React.Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Link to={`/item/${id}`} className='LinkCard'>
                            <Card style={{ width: '10rem', height: '13rem' }} className='Card'>
                                <Card.Img variant="top" src={img}/>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text className='priceCard'>USD $<b>{price}</b></Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Item