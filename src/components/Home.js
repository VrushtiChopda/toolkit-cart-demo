import React from 'react'
import Products from './Products'
function Home() {
    return (
        <>
            <h2 className='text-center m-4'>Welcome to redux toolkit store</h2>
            <section>
                <Products />
            </section>
        </>
    )
}

export default Home
