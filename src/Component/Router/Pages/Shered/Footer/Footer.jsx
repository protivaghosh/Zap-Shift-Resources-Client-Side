import React from "react";
import Logo from "../../../../Logo/Logo";
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-300 py-12 px-6 rounded-xl mt-10">
      {/* Top: Logo & Description */}
      <div className="text-center mb-6">
        <Logo />

        <p className="max-w-xl mx-auto mt-3 text-sm text-gray-400">
          Enjoy fast, reliable parcel delivery with real-time tracking and service 
          excellence. From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Middle: Menu Links */}
      <div className="flex justify-center mb-6">
        <ul className="flex gap-6 text-sm text-gray-400">
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Coverage</li>
          <li className="hover:text-white cursor-pointer">About Us</li>
          <li className="hover:text-white cursor-pointer">Pricing</li>
          <li className="hover:text-white cursor-pointer">Blog</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-xl">
        <a className="hover:text-white"><FaLinkedinIn /></a>
        <a className="hover:text-white"><FaXTwitter /></a>
        <a className="hover:text-white"><FaFacebookF /></a>
        <a className="hover:text-white"><FaYoutube /></a>
      </div>

      {/* Bottom: Copyright */}
      <p className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} ZapShift — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
