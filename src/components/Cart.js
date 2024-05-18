import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/CartSlice';
import { Table } from 'react-bootstrap';

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const removeProduct = (productId) => {
        dispatch(remove(productId));
    };

    console.log(cartItems);

    return (
        <>
            <h1 className='text-center'>Items You Want to Purchase</h1>
            <Table className='text-center'>
                <tbody>
                    {cartItems.map(product => (
                        <tr key={product.id}>
                            <td>
                                <img src={product.image} alt={product.title} style={{ height: '80px' }} />
                            </td>
                            <td>
                                <h5>{product.title}</h5>
                            </td>
                            <td>
                                <h5>{product.price}</h5>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => removeProduct(product.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default Cart;
