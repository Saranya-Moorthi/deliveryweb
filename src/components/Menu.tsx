import React, { useState } from 'react';
import { Star, Plus, Minus, Filter } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Product, FilterOptions } from '../types';

export const Menu: React.FC = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'All',
    minPrice: 0,
    maxPrice: 50,
    minRating: 0
  });

  const getProductQuantity = (productId: string) => {
    const cartItem = cartItems.find(item => item.product.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const ratingMatch = product.rating >= filters.minRating;
    
    return categoryMatch && priceMatch && ratingMatch;
  });

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const quantity = getProductQuantity(product.id);

    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-2 right-2">
            {product.isVeg ? (
              <div className="w-6 h-6 border-2 border-green-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
            ) : (
              <div className="w-6 h-6 border-2 border-red-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
              </div>
            )}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
            </div>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-600">{product.category}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-amber-600">${product.price}</span>
            
            {quantity === 0 ? (
              <button
                onClick={() => addToCart(product)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md flex items-center transition-colors duration-200"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add
              </button>
            ) : (
              <div className="flex items-center space-x-3 bg-amber-50 rounded-md p-1">
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="w-8 h-8 bg-amber-600 hover:bg-amber-700 text-white rounded flex items-center justify-center transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-semibold text-amber-800 min-w-[20px] text-center">{quantity}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="w-8 h-8 bg-amber-600 hover:bg-amber-700 text-white rounded flex items-center justify-center transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-amber-800 mb-8">Our Menu</h1>
        
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-amber-600 hover:bg-amber-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-6 py-3 bg-white text-amber-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>

        
        {showFilters && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={(e) => setFilters({...filters, minPrice: Number(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({...filters, maxPrice: Number(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                <select
                  value={filters.minRating}
                  onChange={(e) => setFilters({...filters, minRating: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value={0}>Any Rating</option>
                  <option value={4}>4+ Stars</option>
                  <option value={4.5}>4.5+ Stars</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => setFilters({ category: 'All', minPrice: 0, maxPrice: 50, minRating: 0 })}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};