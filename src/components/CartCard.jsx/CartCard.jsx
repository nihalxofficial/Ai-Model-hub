import React from 'react';
import { toast } from 'react-toastify';
import { FiTrash2 } from 'react-icons/fi';

const CartCard = ({ item, deleteItem }) => {
    const handleDelete = () => {
        deleteItem(item.id);
        toast.success(`${item.title} removed from cart!`);
    };
    
    return (
        <div className='flex justify-between bg-gradient-to-r from-gray-50 to-white p-4 shadow-md hover:shadow-lg transition-all duration-300 gap-5 rounded-2xl border border-gray-100'>
            {/* Image - fixed width, won't shrink */}
            <div className='rounded-xl p-3 w-28 h-28 bg-gradient-to-br from-gray-100 to-gray-50 shrink-0 flex items-center justify-center'>
                <img 
                    className='h-24 w-24 object-contain transition-transform duration-300 hover:scale-105' 
                    src={item.image} 
                    alt={item.title} 
                />
            </div>

            {/* Middle section */}
            <div className='flex justify-between items-center flex-1 min-w-0 gap-4'>
                
                {/* Left text area */}
                <div className='min-w-0 flex-1'>
                    <h2 className='text-xl font-bold text-gray-800 mb-2 truncate hover:text-violet-600 transition-colors duration-300'>
                        {item.title}
                    </h2>
                    <p className='text-gray-500 text-sm line-clamp-2'>
                        {item.description}
                    </p>
                </div>

                {/* Price section */}
                <div className='shrink-0 text-right'>
                    <h2 className='text-2xl font-bold bg-gradient-to-r from-red-600 to-violet-600 bg-clip-text text-transparent'>
                        ${item.price}
                    </h2>
                    <p className='whitespace-nowrap text-gray-500 text-xs mt-1'>per month</p>
                </div>
            </div>

            {/* Delete button */}
            <div className='flex justify-center items-center'>
              <button 
                onClick={handleDelete}
                className='text-gray-400 shrink-0  hover:text-red-500 transition-all duration-300 cursor-pointer hover:scale-110 p-2 hover:bg-red-50 rounded-full'
                aria-label="Remove item"
            >
                <FiTrash2 className='text-xl ' />
            </button>
            </div>
        </div>
    );
};

export default CartCard;