import React from 'react';
import { Link, useLocation } from 'react-router'; 
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaXTwitter, 
  FaRegEnvelope 
} from 'react-icons/fa6';
import { IoSearchOutline } from 'react-icons/io5';

const Navbar = () => {
  // Using core hooks for active state detection
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gaming News', path: '/news' },
    { name: 'Mobile Games', path: '/mobile' },
    { name: 'PS4', path: '/ps4' },
    { name: 'Xbox', path: '/xbox' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="w-full bg-[#0f0f0f] text-white font-sans">
      {/* Top Header Section */}
      <div className="flex justify-between items-center px-10 py-2 border-b border-white/5 text-gray-500">
        <div className="flex space-x-4">
          <FaFacebookF size={13} className="hover:text-white cursor-pointer transition-colors" />
          <FaInstagram size={13} className="hover:text-white cursor-pointer transition-colors" />
          <FaLinkedinIn size={13} className="hover:text-white cursor-pointer transition-colors" />
          <FaXTwitter size={13} className="hover:text-white cursor-pointer transition-colors" />
        </div>
        <div className="flex items-center space-x-2 text-[11px] font-medium tracking-tight">
          <FaRegEnvelope size={12} />
          <span className="hover:text-white cursor-pointer">contact@yourwebsite.com</span>
        </div>
      </div>

      {/* Main Branding & Navigation */}
      <div className="flex justify-between items-center px-10 py-5">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-[#ff2d55] w-9 h-9 flex items-center justify-center rotate-45 rounded-sm">
            <span className="-rotate-45 font-black text-xl text-white">G</span>
          </div>
          <span className="text-xl font-bold tracking-tight">
            Gaming <span className="font-semibold text-gray-200">Magazine</span>
          </span>
        </div>

        {/* Menu Items */}
        <div className="flex items-center space-x-8">
          <div className="flex space-x-7 items-center text-[12px] font-bold uppercase tracking-[0.05em]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors duration-200 ${
                  location.pathname === link.path 
                    ? 'text-[#ff2d55]' 
                    : 'text-gray-400 hover:text-[#ff2d55]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Search Toggle */}
          <div className="pl-6 border-l border-white/10">
            <IoSearchOutline 
              size={20} 
              className="text-gray-400 hover:text-white cursor-pointer transition-all active:scale-90" 
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;