import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/shared";
import { useCart } from "../../context/CartContext";
import { ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      {/* Clickable Image Area */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Link to={"/product/" + product.id} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-primary transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
              <Eye size={18} />
            </div>
          </div>
        </Link>

        {/* Status Badges (Non-clickable) */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center pointer-events-none">
            <span className="bg-brand-dark text-white px-3 py-1 text-sm font-medium rounded-full">
              Нет в наличии
            </span>
          </div>
        )}
        {product.isPopular && product.inStock && (
          <div className="absolute top-3 left-3 pointer-events-none">
            <span className="bg-brand-primary text-brand-dark px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
              Хит
            </span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Link to={"/product/" + product.id}>
            <h3 className="text-lg font-display text-brand-dark group-hover:text-brand-primary transition-colors leading-tight">
              {product.name}
            </h3>
          </Link>
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
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className={"px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed " + (
              product.inStock
                ? "bg-brand-dark text-white hover:bg-brand-primary hover:text-brand-dark"
                : "bg-gray-200 text-gray-400"
            )}
          >
            <ShoppingCart size={16} />
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
