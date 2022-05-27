import React, { useState, useEffect } from 'react';
import { getProducts, deleteProduct } from '../config/Myservice';
import { useNavigate } from 'react-router-dom';

export default function Products() {
    const [proData, setProData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getProducts()
            .then(res => setProData(res.data))
            .catch(err => console.log(err))
    }, [])

    const delPro = (id) => {
        if (window.confirm("Do you want to delete the product?")) {
            deleteProduct(id)
                .then(res => {
                    if (res) {
                        alert("product deleted");
                        getProducts()
                            .then(res => setProData(res.data))
                            .catch(err => console.log(err))
                    }
                })
                .catch(err => console.log(err))
        }
    }


    const info = (id) => {
        navigate(`/Productsinfo/${id}`);
    }
    return (
        <>
            <div className='container'>
                <h2>Products</h2>
                <div className='row'>
                    {proData.map(pro =>
                        <div className='col-sm-4' key={pro.id}>
                            <div className="card m-2" style={{ width: "18rem" }}>
                                <img src={pro.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{pro.name}</h5>
                                    <p className="card-text">Price: {pro.price}</p>
                                    <div>
                                        <button className='btn btn-success me-2' onClick={() => info(pro.id)}>Info</button>
                                        <button className='btn btn-info me-2'>Edit</button>
                                        <button className='btn btn-danger me-2' onClick={() => delPro(pro.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
