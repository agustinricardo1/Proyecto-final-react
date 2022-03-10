import React from 'react'
import '../../Style/Item.css'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

export default function Container () {
    return(
        <React.Fragment>
        <div className="container">
            <div className="desktop">
                <div className="title">
                    <h1>Productos</h1>
                </div>
                <ul className="tools">
                    <li><u>F</u>ile</li>
                    <li><u>E</u>dit</li>
                    <li><u>V</u>iew</li>
                    <li><u>H</u>elp</li>
                </ul>
                <div className="desktopContainer">
                    <ItemDetailContainer/>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}