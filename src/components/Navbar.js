import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2><span className='logo'>REDUX STORE</span></h2>
                <h3>
                    <Link className='navLink' to='/'>Home</Link>
                    <Link className='navLink' to='/cart'>cart</Link>
                </h3>
                <h4><span className='cartCount'>Cart Items : 0</span></h4>
            </div>
        </>
    )
}

export default Navbar