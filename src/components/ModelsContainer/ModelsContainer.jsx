import React, { useState, useEffect } from 'react';
import ModelCard from '../ModelCard/ModelCard';
import { FiCpu, FiZap, FiTrendingUp, FiStar } from 'react-icons/fi';
import { FaRobot, FaBrain, FaMicrochip } from 'react-icons/fa';

const ModelsContainer = ({ models, cartItem, setCartItem }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const categories = ['all', ...new Set(models.map(model => model.category || 'AI Model'))];

    const filteredModels = models.filter(model => {
        const matchesCategory = selectedCategory === 'all' || model.category === selectedCategory;
        const matchesSearch = model.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             model.description?.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header Section */}
                <div className={`text-center space-y-6 mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {/* Badge */}
                    <div className='inline-flex items-center gap-2 bg-gradient-to-r from-red-500/10 to-purple-500/10 backdrop-blur-sm border border-red-500/30 text-red-500 text-sm font-semibold px-5 py-2 rounded-full shadow-lg'>
                        <FiZap className='text-yellow-500' />
                        🚀 Powered by Latest AI Technology
                        <FiTrendingUp className='text-green-500' />
                    </div>

                    <h2 className='text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent'>
                        Choose Your AI Model
                    </h2>
                    <p className='text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto'>
                        One subscription gives you access to all frontier AI models with cutting-edge capabilities
                    </p>

                    {/* Stats */}
                    <div className='flex flex-wrap justify-center gap-6 pt-4'>
                        <div className='flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md'>
                            <FaRobot className='text-red-500 text-xl' />
                            <span className='font-semibold text-gray-700'>{models.length}+ Models</span>
                        </div>
                        <div className='flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md'>
                            <FaBrain className='text-purple-500 text-xl' />
                            <span className='font-semibold text-gray-700'>Unlimited Access</span>
                        </div>
                        <div className='flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md'>
                            <FaMicrochip className='text-blue-500 text-xl' />
                            <span className='font-semibold text-gray-700'>Latest Updates</span>
                        </div>
                    </div>
                </div>

                {/* Search and Filter Section */}
                <div className={`mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className='flex flex-col lg:flex-row gap-4 justify-between items-center'>
                        {/* Search Bar */}
                        <div className='relative w-full lg:w-96'>
                            <input
                                type='text'
                                placeholder='Search AI models...'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className='w-full px-5 py-3 pl-12 rounded-full border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-300 bg-white shadow-sm'
                            />
                            <svg
                                className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                            </svg>
                        </div>

                        {/* Category Filters */}
                        <div className='flex flex-wrap gap-2 justify-center'>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-5 py-2 cursor-pointer rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                                        selectedCategory === category
                                            ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                                    }`}
                                >
                                    {category === 'all' ? 'All Models' : category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Models Grid */}
                {filteredModels.length === 0 ? (
                    <div className='text-center py-20'>
                        <div className='bg-white rounded-full p-8 shadow-xl inline-block mb-6'>
                            <FiCpu className='text-6xl text-gray-400' />
                        </div>
                        <h3 className='text-2xl font-bold text-gray-600 mb-2'>No models found</h3>
                        <p className='text-gray-400'>Try adjusting your search or filter criteria</p>
                    </div>
                ) : (
                    <>
                        {/* Results count */}
                        <div className='mb-6 text-right'>
                            <span className='text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm'>
                                Showing {filteredModels.length} of {models.length} models
                            </span>
                        </div>

                        {/* Grid */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                            {filteredModels.map((model, index) => (
                                <div
                                    key={model.id}
                                    className={`transition-all duration-700 delay-${index * 100} ${
                                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                >
                                    <ModelCard 
                                        model={model} 
                                        cartItem={cartItem} 
                                        setCartItem={setCartItem}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Featured Banner */}
                {filteredModels.length > 0 && (
                    <div className='mt-16 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-300'>
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
                            <div className='text-center lg:text-left'>
                                <div className='flex items-center gap-2 justify-center lg:justify-start mb-2'>
                                    <FiStar className='text-yellow-300 text-2xl fill-current' />
                                    <span className='font-semibold'>Special Offer</span>
                                </div>
                                <h3 className='text-2xl lg:text-3xl font-bold mb-2'>Upgrade to Annual Plan</h3>
                                <p className='text-white/90'>Save 40% and get 3 months absolutely free!</p>
                            </div>
                            <button className='bg-white cursor-pointer text-red-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                                Claim Offer →
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ModelsContainer;