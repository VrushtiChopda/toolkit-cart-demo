import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, remove } from '../redux/CartSlice'
function Products() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const addProduct = (item) => {
        dispatch(add(item))
    }
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
                        <div key={item.id} className="card" style={{ width: '18rem' }}>
                            <div className="card-img-top">
                                <img src={item.image} alt="..."></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h6>Price : {item.price}</h6>
                            </div>
                            <div className='card-footer'>
                                <button className="btn btn-primary" onClick={() => addProduct(item)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Products
