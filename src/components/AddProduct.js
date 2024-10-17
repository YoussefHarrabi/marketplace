import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const AddProduct = () => {
  // Simulate a logged-in user
  const isLoggedIn = true; // Set to true to simulate the user being logged in

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the uploaded image file
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a form data object to handle file uploads
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('image', image); // Append the uploaded image

    // Here you can send the formData to your backend using fetch or axios
    console.log([...formData]); // Just logging the data for now
  };

  // Redirect if the user is not logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Add a New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-lg font-semibold mb-2">Product Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-lg font-semibold mb-2">Price</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-lg font-semibold mb-2">Description</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-lg font-semibold mb-2">Category</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        {/* Product Image */}
        <div>
          <label className="block text-lg font-semibold mb-2">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
