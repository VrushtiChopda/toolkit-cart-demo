import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchingProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            console.log(data, ' <----------------------->')
            setProducts(data)
        }
        fetchingProducts()
    }, [])
    return (
        <>
            <div className='productsWrapper'>
                {
                    products.map(item => (
                        <div className="card" style={{ width: '18rem' }}>
                            <div class="card-img-top">
                                <img src={item.image} alt="..."></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h6>Price : {item.price}</h6>
                                <button className="btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Products
