import React from 'react'
import loader from '../../img/loading.gif'
// import './Loading.css'

export default function Loading() {
    return(
        <>
        <div className='loadingContainer'>
            <img src={loader} alt="" width='150px'/>
        </div>
        </>
    )
}