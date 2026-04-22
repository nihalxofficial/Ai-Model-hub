import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";

const ModelCard = ({ model, cartItem, setCartItem }) => {
    const [isLoading, setIsLoading] = useState(false);
    
    // Check if model is already in cart
    const isInCart = cartItem.some(item => item.id === model.id);
    
    // Reset loading state when cart changes
    useEffect(() => {
        setIsLoading(false);
    }, [cartItem]);

    const handleSubscription = async () => {
        if (isInCart) {
            toast.error(`${model.title} is already in your cart!`);
            return;
        }

        setIsLoading(true);
        
        // Simulate processing
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setCartItem(prevCart => [...prevCart, model]);
        toast.success(`${model.title} added to cart!`);
        
        setIsLoading(false);
    };

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            {/* Image Container */}
            <div className="bg-gray-50 p-6 flex justify-center items-center h-48">
                <img 
                    className="h-32 w-32 object-contain transition-transform duration-300 hover:scale-105" 
                    src={model.image} 
                    alt={model.title}
                />
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Title */}
                <h2 className="font-semibold text-xl text-gray-800 mb-2">
                    {model.title}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                    {model.description}
                </p>

                {/* Price Section */}
                <div className="mb-5">
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-gray-900">
                            ${model.price}
                        </span>
                        <span className="text-gray-500 text-sm">/month</span>
                    </div>
                </div>

                {/* Subscribe Button */}
                <button
                    onClick={handleSubscription}
                    disabled={isInCart || isLoading}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                        isInCart
                            ? 'bg-green-500 text-white cursor-default'
                            : 'bg-red-500 hover:bg-red-600 text-white cursor-pointer'
                    }`}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Processing...
                        </div>
                    ) : isInCart ? (
                        <div className="flex items-center justify-center gap-2">
                            <FaCheckCircle />
                            Added to Cart
                        </div>
                    ) : (
                        <div className="flex items-center justify-center gap-2">
                            <FaShoppingCart />
                            Subscribe Now
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ModelCard;