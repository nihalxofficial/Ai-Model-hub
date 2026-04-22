import React, { useState, useEffect } from 'react';
import CartCard from '../CartCard.jsx/CartCard';
import { toast } from 'react-toastify';
import { FiShoppingBag, FiTrash2, FiCreditCard, FiShield, FiTruck } from 'react-icons/fi';
import { FaShoppingCart, FaArrowRight } from 'react-icons/fa';

const CartContainer = ({ cartItem, setCartItem }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    
    const totalPrice = cartItem.reduce((sum, item) => sum + item.price, 0);
    const tax = totalPrice * 0.1; // 10% tax
    const shipping = totalPrice > 100 ? 0 : 10; // Free shipping over $100
    const grandTotal = totalPrice + tax + shipping;

    const deleteItem = (id) => {
        const deletedArr = cartItem.filter(item => item.id !== id);
        setCartItem(deletedArr);
        toast.info("Item removed from cart", {
            position: "top-right",
            autoClose: 2000,
        });
    };

    const clearCart = () => {
        if (cartItem.length > 0) {
            setCartItem([]);
            toast.info("Cart cleared", {
                position: "top-right",
                autoClose: 2000,
            });
        }
    };

    const handlePayment = async () => {
        setIsProcessing(true);
        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        setCartItem([]);
        toast.success("Payment successful! Thank you for your purchase 🎉", {
            position: "top-right",
            autoClose: 3000,
        });
        setIsProcessing(false);
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10'>
            <div className='w-11/12 lg:w-10/12 xl:w-8/12 mx-auto space-y-6'>
                {cartItem.length <= 0 ? (
                    <div className='flex flex-col items-center justify-center my-20 py-20'>
                        <div className='bg-white rounded-full p-8 shadow-xl mb-6'>
                            <FiShoppingBag className='text-7xl text-gray-400' />
                        </div>
                        <h2 className='text-3xl lg:text-4xl font-bold text-gray-600 mb-3'>Your cart is Empty</h2>
                        <p className='text-gray-400 text-lg mb-6'>Looks like you haven't added any items yet</p>
                        <button className='bg-gradient-to-r cursor-pointer from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-red-500/50'>
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Header */}
                        <div className='flex justify-between items-center mb-8'>
                            <div className='flex items-center gap-3'>
                                <div className='bg-red-100 p-3 rounded-full'>
                                    <FaShoppingCart className='text-red-600 text-2xl' />
                                </div>
                                <h2 className='text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
                                    Your Cart
                                </h2>
                                <span className='bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                                    {cartItem.length} {cartItem.length === 1 ? 'Item' : 'Items'}
                                </span>
                            </div>
                            {cartItem.length > 0 && (
                                <button 
                                    onClick={clearCart}
                                    className='flex items-center gap-2 text-red-500 hover:text-red-700 transition-colors duration-300 font-semibold'
                                >
                                    <FiTrash2 />
                                    Clear All
                                </button>
                            )}
                        </div>

                        {/* Cart Items Grid */}
                        <div className='space-y-4'>
                            {cartItem.map(item => (
                                <CartCard key={item.id} item={item} deleteItem={deleteItem} />
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className='bg-white rounded-2xl shadow-xl overflow-hidden mt-8'>
                            <div className='p-6 lg:p-8'>
                                <h3 className='text-2xl font-bold text-gray-800 mb-6'>Order Summary</h3>
                                
                                <div className='space-y-4'>
                                    <div className='flex justify-between items-center pb-4 border-b border-gray-200'>
                                        <span className='text-gray-600'>Subtotal</span>
                                        <span className='font-semibold text-gray-800'>${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className='flex justify-between items-center pb-4 border-b border-gray-200'>
                                        <span className='text-gray-600'>Tax (10%)</span>
                                        <span className='font-semibold text-gray-800'>${tax.toFixed(2)}</span>
                                    </div>
                                    <div className='flex justify-between items-center pb-4 border-b border-gray-200'>
                                        <div className='flex items-center gap-2'>
                                            <FiTruck className='text-gray-500' />
                                            <span className='text-gray-600'>Shipping</span>
                                        </div>
                                        <span className='font-semibold text-gray-800'>
                                            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                                        </span>
                                    </div>
                                    {shipping === 0 && totalPrice > 100 && (
                                        <div className='bg-green-50 text-green-600 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2'>
                                            <FiShield />
                                            🎉 Free Shipping Applied!
                                        </div>
                                    )}
                                    <div className='flex justify-between items-center pt-4'>
                                        <span className='text-2xl font-bold text-gray-800'>Total</span>
                                        <span className='text-3xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent'>
                                            ${grandTotal.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <div className='p-6 lg:p-8 bg-gradient-to-r from-gray-50 to-gray-100'>
                                <button 
                                    onClick={handlePayment}
                                    disabled={isProcessing}
                                    className='relative overflow-hidden group w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-xl py-4 font-bold text-xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    <span className='absolute inset-0 w-0 bg-gradient-to-r from-red-700 to-red-600 transition-all duration-300 ease-out group-hover:w-full'></span>
                                    <span className='relative flex items-center justify-center gap-3'>
                                        {isProcessing ? (
                                            <>
                                                <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                <FiCreditCard className='text-2xl' />
                                                Proceed to Checkout
                                                <FaArrowRight className='group-hover:translate-x-1 transition-transform duration-300' />
                                            </>
                                        )}
                                    </span>
                                </button>
                                
                                <div className='flex items-center justify-center gap-4 mt-4 text-xs text-gray-500'>
                                    <span className='flex items-center gap-1'>🔒 Secure Payment</span>
                                    <span>•</span>
                                    <span className='flex items-center gap-1'>💳 100% Money Back Guarantee</span>
                                    <span>•</span>
                                    <span className='flex items-center gap-1'>🚚 Fast Shipping</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartContainer;