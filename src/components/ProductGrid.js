import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', title: 'Leather Tote Bag', price: '150', category: 'women', status: 'Sale' },
  { id: 2, image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', title: 'Chic Shoulder Bag', price: '150', category: 'women', status: 'Sale' },
  { id: 3, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', title: 'Elegant Clutch', price: '150', category: 'women', status: 'Sale' },
  { id: 4, image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', title: 'Crossbody Bag', price: '150', category: 'women', status: 'Sale' },
  { id: 5, image: 'https://images.unsplash.com/photo-1614179689702-355944cd0918?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', title: 'Designer Handbag', price: '150', category: 'women', status: 'Sale' },
  { id: 6, image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', title: 'Evening Purse', price: '150', category: 'women', status: 'Sale' },
  { id: 7, image: 'https://images.unsplash.com/photo-1601369447449-16fafc2e66ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', title: 'Bucket Bag', price: '150', category: 'women', status: 'Sale' },
  { id: 8, image: 'https://images.unsplash.com/photo-1590739225287-bd31519780c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', title: 'Mini Backpack', price: '150', category: 'women', status: 'Sale' },
];

const ProductGrid = () => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const [popupProduct, setPopupProduct] = useState(null); // State for product info in popup

  // Function to handle adding to cart and showing the popup
  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    setPopupProduct(product); // Set the product info for the popup
    setShowPopup(true); // Show popup

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">Trendy Bags for Women</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="overflow-hidden">
              <div className="relative">
                <img src={product.image} alt={product.title} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" />
                <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs">{product.status}</span>
              </div>
              <div className="mt-2">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-gray-600">{product.price} Dt</p>
                <p className="text-sm text-gray-500">{product.category}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popup notification */}
        {showPopup && popupProduct && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
            <p>Item "{popupProduct.title}" added to cart!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
