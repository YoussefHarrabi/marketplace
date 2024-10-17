import React, { useState } from 'react';
import { ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulating logged-in user
  const [username, setUsername] = useState('Mariem'); // Static username for testing
  const { cart } = useCart();
  const [showDropdown, setShowDropdown] = useState(false); // For showing logout button

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);  // Reset logged-in state
    setUsername('');       // Clear username
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">CarryMe</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/shop" className="hover:text-gray-300">Shop</Link></li>
            <li><Link to="/elements" className="hover:text-gray-300">Elements</Link></li>
            <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
            <li><Link to="/add-product" className="hover:text-gray-300">Add Product</Link></li> {/* Link to Add Product page */}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingBag className="w-6 h-6 cursor-pointer" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
          {isLoggedIn ? (
            <div className="relative">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <User className="w-6 h-6" />
                <span>{username}</span>
              </div>

              {/* Dropdown for Logout */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex space-x-2">
              <Link to="/login" className="hover:text-gray-300">Login</Link>
              <span>|</span>
              <Link to="/signup" className="hover:text-gray-300">Signup</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
