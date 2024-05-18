import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
    const cartItems = useSelector((state) => state.cart.items)
    console.log(cartItems)
    return (
        <>
            <div className='navbar'>
                <h2><span className='logo'>Online Shop</span></h2>
                <h4>
                    <Link className='navLink' to={'/'}>Home</Link>
                    <Link className='navLink' to={'/cart'}>cart</Link>
                </h4>
                <h4><span className='cartCount'>Cart Items : {cartItems?.length}</span></h4>
            </div>
        </>
    )
}

export default Navbar   