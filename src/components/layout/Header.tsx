import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'О нас', path: '/about' },
    { name: 'Магазин', path: '/shop' },
    { name: 'Контакты', path: '/contact' },
  ];

  return (
    <header className="border-b border-brand-dark/10 bg-brand-cream sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-brand-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Медовар" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={link.path} className="flex items-center">
                <Link 
                  to={link.path}
                  className="text-sm uppercase tracking-widest text-brand-dark hover:text-brand-primary transition-colors font-medium"
                >
                  {link.name}
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="mx-4 text-brand-dark/20 text-xs">/</span>
                )}
              </div>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-5 text-brand-dark">
            <button className="hover:text-brand-primary transition-colors">
              <User size={20} />
            </button>
            <button className="hover:text-brand-primary transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="flex items-center hover:text-brand-primary transition-colors">
              <ShoppingCart size={20} />
              <span className="ml-1 text-xs font-semibold">(0)</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-4 border-t border-brand-dark/5 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm uppercase tracking-widest text-brand-dark hover:text-brand-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
