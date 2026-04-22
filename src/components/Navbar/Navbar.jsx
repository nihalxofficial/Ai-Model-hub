import logo from "../../assets/logo.png";
import { 
  IoCartOutline, 
  IoMenuOutline, 
  IoCloseOutline,
  IoHomeOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
  IoCallOutline 
} from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Example cart items state - you can replace this with your actual cart logic
  const [cartItems] = useState([]); // Replace with your actual cart items
  const cartItemCount = cartItems.length; // Get the number of items in cart

  const navLinks = [
    { name: "Home", icon: <IoHomeOutline />, href: "#" },
    { name: "About", icon: <IoInformationCircleOutline />, href: "#" },
    { name: "Services", icon: <IoSettingsOutline />, href: "#" },
    { name: "Contact", icon: <IoCallOutline />, href: "#" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <img className="w-10 md:w-12 transition-transform group-hover:scale-110" src={logo} alt="Logo" />
              <div className="flex items-baseline">
                <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                  Ai
                </span>
                <span className="font-bold text-xl md:text-2xl text-gray-800"> Hub</span>
              </div>
              <FaRobot className="text-red-500 text-xl" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group relative px-4 py-2 text-gray-700 font-semibold hover:text-red-600 transition-colors duration-300"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">{link.icon}</span>
                    {link.name}
                  </span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 md:gap-5">
              {/* Cart Icon with Conditional Badge */}
              <div className="relative group cursor-pointer">
                <div className="p-2 text-red-600 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-red-50 hover:to-gray-100 text-2xl rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md">
                  <IoCartOutline />
                </div>
                {/* Show badge only if there are items in cart */}
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                    {cartItemCount}
                  </span>
                )}
              </div>

              {/* Get in Touch Button */}
              <button className="relative cursor-pointer overflow-hidden group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-5 md:px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105">
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-red-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <IoCloseOutline className="text-2xl text-gray-700" />
                ) : (
                  <IoMenuOutline className="text-2xl text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow-xl">
            <div className="px-4 py-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 font-semibold hover:bg-gradient-to-r hover:from-red-50 hover:to-purple-50 hover:text-red-600 rounded-lg transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xl text-red-500 group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default NavBar;