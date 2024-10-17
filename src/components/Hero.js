import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <div className="bg-yellow-400 inline-block px-4 py-2 mb-4">
              <span className="font-bold">Get 15% off</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">your first Fashion order</h1>
            <p className="mb-4">Use the code: 15OFF</p>
            <p className="text-sm">Easy and FREE Returns*</p>
            <p className="text-xs">*T&Cs apply</p>
          </div>
          <div className="w-1/2 relative">
            <img
              src={images[currentImage]}
              alt="Fashion items"
              className="w-full h-96 object-cover transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button onClick={prevImage} className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextImage} className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;