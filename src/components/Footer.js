import React from 'react';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CarryMe</h3>
            <p className="mb-4">www.CarryMe.com</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Github size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">locate us</h3>
            <p>Tunis,Tunisia,Ariana</p>
            <p>Mobile:28648927</p>
            <p>Phone:29301621</p>
            <p>e-mail:mariem@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Profile</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">my account</a></li>
              <li><a href="#" className="hover:text-gray-300">checkout</a></li>
              <li><a href="#" className="hover:text-gray-300">order tracking</a></li>
              <li><a href="#" className="hover:text-gray-300">help & support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex">
              <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;