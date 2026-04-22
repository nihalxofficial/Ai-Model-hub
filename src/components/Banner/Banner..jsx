import BannerImage from "../../assets/banner.png";
import { useState, useEffect } from "react";
import { FaRocket, FaCheck, FaInfinity, FaCalendarAlt, FaArrowRight, FaStar, FaGem } from "react-icons/fa";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/10 to-violet-500/10 backdrop-blur-sm border border-red-500/30 text-red-500 text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
              <FaStar className="text-yellow-500" />
              ✨ Frontier AI Models
              <FaGem className="text-violet-500" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter">
              One Subscription.
              <br />
              <span className="bg-gradient-to-r from-red-600 via-violet-600 to-red-600 bg-clip-text text-transparent">
                All the AIs You Need
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed">
              Experience the full spectrum of frontier intelligence — all the most
              advanced AI models, unified under a single, powerful subscription.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group cursor-pointer relative bg-gradient-to-r from-red-600 to-violet-600 hover:from-red-700 hover:to-violet-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-red-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-violet-500/60 flex items-center gap-3 overflow-hidden">
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-red-700 to-violet-700 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center gap-3">
                  <FaRocket className="text-xl" />
                  Get Unlimited Access
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-violet-500 rounded-lg flex items-center justify-center text-white font-bold">
                  50+
                </div>
                <div className="text-sm font-semibold text-gray-700">Frontier Models</div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                  <FaInfinity />
                </div>
                <div className="text-sm font-semibold text-gray-700">No Usage Limits</div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white">
                  <FaCalendarAlt />
                </div>
                <div className="text-sm font-semibold text-gray-700">Cancel Anytime</div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pt-6 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 border-2 border-white"></div>
                ))}
              </div>
              <div>
                <span className="font-bold text-gray-900">10,000+</span> creators trust us
              </div>
            </div>
          </div>

          {/* Right Image with Both Badges Always Visible */}
          <div className={`relative flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative group">
              {/* Subtle Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-violet-500/20 rounded-3xl blur-2xl transition-all duration-700 group-hover:opacity-100 opacity-50"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
                {/* Image with Subtle Float and Scale on Hover */}
                <div className="overflow-hidden">
                  <img
                    className="w-full h-auto max-h-[500px] lg:max-h-[600px] object-contain bg-gradient-to-br from-gray-900 to-gray-800 transition-all duration-700 group-hover:scale-105 animate-float-subtle"
                    src={BannerImage}
                    alt="AI Models Banner"
                  />
                </div>
                
                {/* Subtle Overlay Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Badge 1 - Always Visible */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl p-3 transition-all duration-500 hover:scale-110 cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-gray-800">Live Demo</span>
                </div>
              </div>
              
              {/* Badge 2 - Always Visible */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-3 transition-all duration-500 hover:scale-110 cursor-pointer">
                <div className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span className="text-sm font-bold text-gray-800">30-Day Trial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for natural animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes floatSubtle {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float-subtle {
          animation: floatSubtle 4s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Banner;