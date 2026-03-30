import React from 'react';

const CartCard = ({item}) => {
    
    return (
        <div className='flex justify-between bg-gray-200/50 p-4 shadow-sm gap-5 rounded-2xl'>
            <div className='rounded-2xl p-3 w-30 h-30 bg-white'>
                <img className='h-25 w-25 object-contain' src={item.image} alt="" />
            </div>
            <div className='flex justify-between items-center '>
                <div>
                    <h2 className='text-2xl font-bold mb-2'>{item.title}</h2>
                    <p className='text-gray-400'>{item.description}</p>
                </div>
                <div className='ml-3'>
                    <h2 className='text-3xl font-bold mb-2'>${item.price}</h2>
                    <p className='whitespace-nowrap text-gray-600 text-sm'>per month</p>
                </div>
            </div>
            <button className='text-xl mr-1.5 text-gray-700 cursor-pointer'>X</button>
        </div>
    );
};

export default CartCard;