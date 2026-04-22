import React, { use, useState, useEffect } from 'react';
import ModelsContainer from '../ModelsContainer/ModelsContainer';
import CartContainer from '../CartContainer/CartContainer';
import { FiGrid, FiShoppingCart, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaRobot, FaShoppingBag } from 'react-icons/fa';

const Models = ({ modelPromise }) => {
    const models = use(modelPromise);
    const [handleTab, setHandleTab] = useState("ModelsContainer");
    const [cartItem, setCartItem] = useState([]);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cartItems');
        if (savedCart) {
            setCartItem(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItem));
    }, [cartItem]);

    const handleTabChange = (tab) => {
        if (tab === handleTab) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setHandleTab(tab);
            setIsTransitioning(false);
        }, 300);
    };

    const totalItems = cartItem.reduce((sum, item) => sum + (item.quantity || 1), 0);

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50'>
            {/* Hero Section with Tabs */}
            <div className='relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden'>
                {/* Animated Background */}
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full blur-3xl'></div>
                    <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl'></div>
                </div>
                
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10'>
                    <div className='text-center space-y-4'>
                        <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2'>
                            <FaRobot className='text-red-400' />
                            <span className='text-sm font-semibold'>AI Models Hub</span>
                        </div>
                        <h1 className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                            Explore & Choose Your AI
                        </h1>
                        <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
                            Discover cutting-edge AI models and add them to your cart with just one click
                        </p>
                    </div>

                    {/* Tab Buttons */}
                    <div className='flex flex-col sm:flex-row justify-center gap-4 mt-10'>
                        <button
                            onClick={() => handleTabChange("ModelsContainer")}
                            className={`group cursor-pointer relative overflow-hidden px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                                handleTab === "ModelsContainer"
                                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30'
                                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
                            }`}
                        >
                            <span className='relative flex items-center gap-2'>
                                <FiGrid className='text-xl' />
                                Browse Models
                                {handleTab !== "ModelsContainer" && (
                                    <FiArrowRight className='opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300' />
                                )}
                            </span>
                        </button>
                        
                        <button
                            onClick={() => handleTabChange("Cart")}
                            className={`group cursor-pointer relative overflow-hidden px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                                handleTab === "Cart"
                                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30'
                                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
                            }`}
                        >
                            <span className='relative flex items-center gap-2'>
                                <FiShoppingCart className='text-xl' />
                                My Cart
                                {cartItem.length > 0 && (
                                    <span className='absolute -top-2 -right-6 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse'>
                                        {totalItems}
                                    </span>
                                )}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Container with Transition */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className={`transition-all duration-500 transform ${
                    isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}>
                    {handleTab === "ModelsContainer" ? (
                        <ModelsContainer 
                            models={models} 
                            cartItem={cartItem} 
                            setCartItem={setCartItem}
                        />
                    ) : (
                        <CartContainer 
                            cartItem={cartItem} 
                            setCartItem={setCartItem}
                        />
                    )}
                </div>
            </div>

            {/* Floating Cart Summary (Mobile) */}
            {handleTab !== "Cart" && cartItem.length > 0 && (
                <div className='fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden'>
                    <button
                        onClick={() => handleTabChange("Cart")}
                        className='bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-bounce-slow'
                    >
                        <FaShoppingBag className='text-xl' />
                        <span className='font-semibold'>{totalItems} items in cart</span>
                        <FiArrowRight />
                    </button>
                </div>
            )}

            {/* Cart Summary Bar (Desktop) */}
            {handleTab !== "Cart" && cartItem.length > 0 && (
                <div className='fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-200 transform translate-y-full animate-slide-up hidden lg:block z-40'>
                    <div className='container mx-auto px-8 py-4'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-red-100 p-2 rounded-full'>
                                    <FaShoppingBag className='text-red-600 text-xl' />
                                </div>
                                <div>
                                    <span className='font-bold text-gray-800'>{totalItems} items in your cart</span>
                                    <p className='text-sm text-gray-500'>Ready to checkout?</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleTabChange("Cart")}
                                className='bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300'
                            >
                                View Cart →
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes slideUp {
                    from {
                        transform: translateY(100%);
                    }
                    to {
                        transform: translateY(0);
                    }
                }
                
                @keyframes bounceSlow {
                    0%, 100% {
                        transform: translateX(-50%) translateY(0);
                    }
                    50% {
                        transform: translateX(-50%) translateY(-10px);
                    }
                }
                
                .animate-slide-up {
                    animation: slideUp 0.5s ease-out forwards;
                }
                
                .animate-bounce-slow {
                    animation: bounceSlow 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Models;