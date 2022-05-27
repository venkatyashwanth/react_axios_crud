import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../config/Myservice';

export default function Productsinfo() {
    const { id } = useParams();
    const [proData,setProData] = useState({});
    useEffect(()=>{
        getProductById(id)
        .then(res => {
            setProData(res.data);
        })
        .catch(err => console.log(err))
    },[])
    return (
        <>
            <div className='container'>
                <h1>Product Details</h1>
                <div>
                    <h3>{proData.name}</h3>
                    <div>
                        <img src={proData.image}/>
                    </div>
                    <p>
                        Price: {proData.price}
                    </p>
                    <p>
                        Quantity: {proData.quantity}
                    </p>
                    <input type="button" value="Add to cart" className='btn btn-primary'/>
                </div>
            </div>
        </>
    )
}
