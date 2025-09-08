import React, { useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Aigiri Madurai Grey/Black Pure Cotton Saree",
    img: "./craycottonsaree.png",
    price: 3445,
    oldPrice: 4595,
    discount: "25% OFF",
    finalPrice: 2928,
    rating: 4.5,
    reviews: 14,
  },
  {
    id: 2,
    name: "Pure Cotton Saree - Festive Party Wear With Blouse, Plain Pattern, Available In Multiple Colors, Dry Clean Only",
    img: "/Greencotonsaree.png",
    price: 2245,
    oldPrice: 2995,
    discount: "25% OFF",
    finalPrice: 1908,
    rating: 4.5,
    reviews: 157,
  },
  {
    id: 3,
    name: "Printed Daily Wear Pure Cotton Saree - Cotton Fabric,Blue And White Printed Design",
    img: "/Bluecottonsare.png",
    price: 2695,
    oldPrice: null,
    discount: null,
    finalPrice: 2291,
    rating: 4.5,
    reviews: 13,
  },
  {
    id: 4,
    name: "Bootcut Trousers - Grey",
    img: "https://via.placeholder.com/250x300?text=Trousers",
    price: 2395,
    oldPrice: 2995,
    discount: "20% OFF",
    finalPrice: 2036,
    rating: 4.7,
    reviews: 25,
  },
  {
    id: 5,
    name: "Casual Top - Pink",
    img: "https://via.placeholder.com/250x300?text=Casual+Top",
    price: 1295,
    oldPrice: null,
    discount: null,
    finalPrice: 1100,
    rating: 4.2,
    reviews: 30,
  },
  {
    id: 6,
    name: "Evening Dress - Black",
    img: "https://via.placeholder.com/250x300?text=Evening+Dress",
    price: 3995,
    oldPrice: null,
    discount: null,
    finalPrice: 3600,
    rating: 4.8,
    reviews: 60,
  },
  {
    id: 7,
    name: "Denim Jacket - Blue",
    img: "https://via.placeholder.com/250x300?text=Denim+Jacket",
    price: 2995,
    oldPrice: 3495,
    discount: "15% OFF",
    finalPrice: 2546,
    rating: 4.6,
    reviews: 45,
  },
  {
    id: 8,
    name: "Summer Dress - Floral",
    img: "https://via.placeholder.com/250x300?text=Summer+Dress",
    price: 1795,
    oldPrice: 2295,
    discount: "22% OFF",
    finalPrice: 1399,
    rating: 4.3,
    reviews: 28,
  },
  {
    id: 9,
    name: "Formal Shirt - White",
    img: "https://via.placeholder.com/250x300?text=Formal+Shirt",
    price: 1595,
    oldPrice: 1995,
    discount: "20% OFF",
    finalPrice: 1276,
    rating: 4.4,
    reviews: 65,
  },
  {
    id: 10,
    name: "Slim Fit Jeans - Black",
    img: "https://via.placeholder.com/250x300?text=Jeans",
    price: 2695,
    oldPrice: 3195,
    discount: "15% OFF",
    finalPrice: 2290,
    rating: 4.7,
    reviews: 89,
  },
];

export default function ProductCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white p-6 relative">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Shop by Occasion
      </h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100"
      >
        <FaChevronLeft />
      </button>

      {/* Product Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth px-8 custom-scrollbar"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[250px] border rounded-xl shadow-sm hover:shadow-md transition p-2 bg-white"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                ❤️
              </button>
            </div>

            {/* Info */}
            <div className="p-2">
              <p className="font-medium text-gray-800">{product.name}</p>

              {/* Price Section */}
              <div className="mt-1 text-sm text-gray-600">
                <span className="font-semibold">₹{product.price}</span>
                {product.oldPrice && (
                  <span className="ml-2 line-through text-gray-400">
                    ₹{product.oldPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="ml-2 text-red-500">{product.discount}</span>
                )}
              </div>

              {/* Final Price */}
              <p className="text-red-600 text-sm">
                Now at ₹{product.finalPrice} with{" "}
                <span className="font-bold">FLAT15</span>
              </p>

              {/* Rating */}
              <div className="flex items-center mt-2 text-sm">
                <span className="text-yellow-500 flex items-center">
                  <FaStar className="mr-1" /> {product.rating}
                </span>
                <span className="ml-2 text-gray-500">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100"
      >
        <FaChevronRight />
      </button>

      {/* View All Button */}
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 border border-gray-700 text-gray-700 rounded-md hover:bg-gray-100 transition">
          VIEW ALL
        </button>
      </div>
    </div>
  );
}
