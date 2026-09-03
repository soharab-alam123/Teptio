import React, { useState } from 'react';
import { ShoppingBag, Star, Check, Sparkles, Filter } from 'lucide-react';
import { LIFESTYLE_PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Button } from '../common/Button';

export const LifestyleDetailView = ({ service }) => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedItem, setAddedItem] = useState(null);

  const categories = ['All', 'Home Fragrance', 'Aromatherapy', 'Tableware', 'Textiles', 'Workspace', 'Wellness'];

  const filteredProducts = selectedCategory === 'All'
    ? LIFESTYLE_PRODUCTS
    : LIFESTYLE_PRODUCTS.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <span className="text-xs font-mono font-bold uppercase text-muted flex items-center gap-1.5 mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>Curations:</span>
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-muted hover:text-primary border border-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid with Reduced Compact Card Height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const isRecentlyAdded = addedItem === product.id;
          return (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E5E1DD] hover:border-[#D92C1C] transition-all duration-300 flex flex-col justify-between shadow-card hover:shadow-elevated"
            >
              <div>
                {/* Compact Product Image Frame (Reduced Height) */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F7F7F3]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute top-3.5 left-3.5 px-3 py-1 bg-white/95 backdrop-blur-md border border-[#E5E1DD] text-[10px] font-mono font-bold uppercase tracking-wider text-[#111111] rounded-full shadow-2xs">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Compact Info */}
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-[#666666]">
                    <span>{product.category}</span>
                    <span className="flex items-center gap-1 text-[#D97706] font-semibold font-mono">
                      <Star className="w-3.5 h-3.5 fill-current text-[#FFD400]" />
                      <span>{product.rating} ({product.reviewsCount})</span>
                    </span>
                  </div>

                  <h4 className="font-extrabold text-base sm:text-[17px] text-[#111111] tracking-tight leading-snug line-clamp-1">
                    {product.name}
                  </h4>

                  <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="p-5 pt-0 border-t border-[#E5E1DD]/70 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#888888] block line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="font-extrabold text-xl text-[#111111] tracking-tight tabular-nums">
                    <span className="text-[#D92C1C]">₹</span>{product.price}
                  </span>
                </div>

                <Button
                  size="sm"
                  variant={isRecentlyAdded ? 'accent' : 'primary'}
                  icon={isRecentlyAdded ? Check : ShoppingBag}
                  onClick={() => handleAddToCart(product)}
                >
                  {isRecentlyAdded ? 'Added' : 'Add to Bag'}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
