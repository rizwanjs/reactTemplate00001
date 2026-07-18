import { useState } from "react";
import { Heart, Search, Bell, User, Moon, ShoppingBag, Star } from "lucide-react";

import img1 from "../assets/01.jpg";
import img2 from "../assets/02.jpg";
import img3 from "../assets/03.jpg";
import img4 from "../assets/04.jpg";

const images = [img1, img2, img3, img4];

const colors = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <div>
          <h1 className="text-lg font-bold tracking-wide leading-none">SHOPINGO</h1>
          <p className="text-[10px] text-gray-400 leading-none">eCommerce</p>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Categories</a>
          <a href="#" className="hover:text-black">Shop</a>
          <a href="#" className="hover:text-black">About</a>
          <a href="#" className="hover:text-black">Contact</a>
          <a href="#" className="hover:text-black">Account</a>
          <a href="#" className="hover:text-black">Blog</a>
        </nav>

        <div className="flex items-center gap-4 text-gray-600">
          <Moon size={18} className="cursor-pointer" />
          <Search size={18} className="cursor-pointer" />
          <Heart size={18} className="cursor-pointer" />
          <div className="relative">
            <Bell size={18} className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center">
              8
            </span>
          </div>
          <User size={20} className="cursor-pointer" />
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="px-8 py-3 text-sm text-gray-500 border-b border-gray-100">
        <span className="text-blue-500 cursor-pointer">Home</span> /{" "}
        <span className="text-blue-500 cursor-pointer">Shop</span> /{" "}
        <span className="text-gray-700">Page Details</span>
      </div>

      {/* Main content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 py-8 max-w-6xl mx-auto">
        {/* Image gallery */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Product view ${i + 1}`}
              onClick={() => setSelectedImage(i)}
              className={`w-full h-64 object-cover rounded cursor-pointer bg-[#ece5da] ${
                selectedImage === i ? "ring-2 ring-gray-800" : ""
              }`}
            />
          ))}
        </div>

        {/* Product info */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Check Pink Kurta</h2>
          <p className="text-sm text-gray-500 mt-1">
            Women Pink &amp; Off-White Printed Kurta with Palazzos
          </p>

          <div className="flex items-center gap-2 mt-3">
            <span className="flex items-center gap-1 bg-gray-100 text-sm px-2 py-1 rounded">
              <span className="font-medium">4.8</span>
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
            </span>
            <span className="text-sm text-gray-500">162 Ratings</span>
          </div>

          <div className="border-b border-gray-200 mt-4" />

          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-2xl font-bold text-gray-900">$458</span>
            <span className="text-gray-400 line-through">$2089</span>
            <span className="text-red-500 font-medium">(70% off)</span>
          </div>
          <p className="text-sm text-green-600 mt-1">inclusive of all taxes</p>

          <div className="mt-6">
            <p className="text-sm font-medium text-gray-800 mb-2">More Colors</p>
            <div className="flex gap-3">
              {colors.map((c) => (
                <img
                  key={c.id}
                  src={c.img}
                  alt="Color option"
                  onClick={() => setSelectedColor(c.id)}
                  className={`w-14 h-16 object-cover rounded cursor-pointer ${
                    selectedColor === c.id ? "ring-2 ring-gray-800" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-gray-800 mb-2">Select Size</p>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-9 h-9 rounded-full border text-xs font-medium flex items-center justify-center transition ${
                    selectedSize === size
                      ? "bg-gray-900 text-white border-gray-900"
                      : "border-gray-300 text-gray-700 hover:border-gray-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md text-sm font-medium flex-1 hover:bg-gray-800 transition">
              <ShoppingBag size={16} />
              ADD TO BAG
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-900 px-6 py-3 rounded-md text-sm font-medium flex-1 hover:bg-gray-50 transition">
              <Heart size={16} />
              WISHLIST
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}


export default ProductPage;