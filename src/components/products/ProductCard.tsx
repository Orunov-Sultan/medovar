import React from 'react';
import type { Product } from '../../types/shared';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.dataset.tried) {
              target.dataset.tried = "true";
              target.src = "https://placehold.co/400x400/f6f2ef/1d150a?text=" + encodeURIComponent(product.name);
            }
          }}
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="bg-brand-dark text-white px-3 py-1 text-sm font-medium rounded-full">
              Нет в наличии
            </span>
          </div>
        )}
        {product.isPopular && product.inStock && (
          <div className="absolute top-3 left-3">
            <span className="bg-brand-primary text-brand-dark px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
              Хит
            </span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-display text-brand-dark group-hover:text-brand-primary transition-colors leading-tight">
            {product.name}
          </h3>
          <span className="text-sm text-gray-400 whitespace-nowrap ml-2">
            {product.weight}
          </span>
        </div>
        
        <p className="text-sm text-brand-text mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="text-xl font-bold text-brand-dark">
            {product.price} ₽
          </span>
          <button
            disabled={!product.inStock}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              product.inStock
                ? 'bg-brand-dark text-white hover:bg-brand-primary hover:text-brand-dark'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
