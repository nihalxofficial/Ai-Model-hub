import React, { useState } from 'react';
import CartCard from '../CartCard.jsx/CartCard';

const CartContainer = ({cartItem}) => {
    const[totalPrice, setTotalPrice] = useState(0)
    
    return (
        <div className='w-11/12 lg:w-8/12 mx-auto space-y-10 mb-20'>
            <h2 className='text-5xl font-bold '>Your Cart</h2>
            {cartItem.map(item=> <CartCard key={item.id} item={item}></CartCard>)}
            <div className='flex justify-between items-center p-7 bg-black text-white rounded-2xl'>
                <h2 className='text-3xl font-bold'>Total</h2>
                <h2 className='text-3xl font-bold text-red-400'>$20</h2>
            </div>
            <button className='btn rounded-2xl bg-red-600 text-white w-full text-2xl font-bold py-8 shadow-[0_5px_7px_rgba(255,0,0,0.4)] border-none'>Proceed To Checkout</button>
        </div>
    );
};

export default CartContainer;