import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 px-4 border-t border-zinc-800">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-8">
        
        {/* Logo and Branding Section */}
        <div className="flex items-center gap-3">
          <div className="bg-[#ff1e4e] p-2 rounded-lg">
            <span className="text-white font-black text-2xl italic">G</span>
          </div>
          <h2 className="text-white text-2xl font-bold tracking-tight">
            Gaming Magazine
          </h2>
        </div>

        {/* Quick Links */}
        <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-white font-bold text-sm uppercase tracking-wide">
          <li className="hover:text-[#ff1e4e] cursor-pointer transition-colors">Mobile Games</li>
          <li className="hover:text-[#ff1e4e] cursor-pointer transition-colors">Gaming News</li>
          <li className="hover:text-[#ff1e4e] cursor-pointer transition-colors">PS4</li>
          <li className="hover:text-[#ff1e4e] cursor-pointer transition-colors">XBOX</li>
        </ul>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-zinc-800 max-w-4xl opacity-50"></div>

        {/* Copyright Text */}
        <div className="text-center">
          <p className="text-gray-500 text-sm tracking-tight">
            Copyright © 2026 Gaming Magazine Demo - Powered by Anika Theme
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;