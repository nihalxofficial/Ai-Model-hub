import React from 'react';
import CartCard from '../CartCard.jsx/CartCard';

const CartContainer = ({cartItem}) => {
    
    return (
        <div className='w-9/12 mx-auto space-y-10 mb-20'>
            <h2 className='text-5xl font-bold '>Your Cart</h2>
            {cartItem.map(item=> <CartCard key={item.id} item={item}></CartCard>)}
        </div>
    );
};

export default CartContainer;