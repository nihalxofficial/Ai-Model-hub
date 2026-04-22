import logo from "../../assets/logo.png";
import { 
  FaTwitter, 
  FaGithub, 
  FaLinkedin, 
  FaDiscord, 
  FaYoutube,
  FaHeart,
  FaRobot,
  FaArrowUp
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 border-t border-red-500/20 pt-16 pb-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Logo & Description */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-xl">
                  <img src={logo} alt="AI Hub Logo" className="h-8 w-auto" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  AI Hub
                </h2>
              </div>

              <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-md">
                One subscription. Access to all frontier AI models in a single
                powerful platform. Empowering innovation with cutting-edge AI technology.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 group"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-gray-400 group-hover:text-white text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 group"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-gray-400 group-hover:text-white text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-gray-400 group-hover:text-white text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 group"
                  aria-label="Discord"
                >
                  <FaDiscord className="text-gray-400 group-hover:text-white text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 group"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-gray-400 group-hover:text-white text-xl" />
                </a>
              </div>
            </div>

            {/* Quick Links - Product */}
            <div className="md:col-span-2">
              <h3 className="text-red-400 font-semibold mb-6 text-lg flex items-center gap-2">
                <FaRobot className="text-sm" />
                Product
              </h3>
              <ul className="space-y-3">
                {['Models', 'Pricing', 'Features', 'API', 'Documentation'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links - Company */}
            <div className="md:col-span-2">
              <h3 className="text-red-400 font-semibold mb-6 text-lg">Company</h3>
              <ul className="space-y-3">
                {['About Us', 'Blog', 'Careers', 'Contact', 'Press Kit'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Newsletter */}
            <div className="md:col-span-3">
              <h3 className="text-red-400 font-semibold mb-6 text-lg">Legal</h3>
              <ul className="space-y-3 mb-8">
                {['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'GDPR Compliance'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="mt-6">
                <h4 className="text-white text-sm font-semibold mb-3">Stay Updated</h4>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-semibold whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-500 text-xs mt-2">
                  Get updates on new models and features
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} AI Hub. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-500">
              <span className="flex items-center gap-1">
                Made with <FaHeart className="text-red-500 animate-pulse" /> for AI enthusiasts
              </span>
              <span className="hidden md:inline">•</span>
              <a href="#" className="hover:text-red-400 transition-colors">
                Status
              </a>
              <span>•</span>
              <a href="#" className="hover:text-red-400 transition-colors">
                Support
              </a>
              <span>•</span>
              <a href="#" className="hover:text-red-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default Footer;