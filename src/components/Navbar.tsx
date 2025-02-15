import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { SearchModal } from "../components/SearchModal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            {/* Icônes menu et panier (plus subtiles) */}
            <div className="flex items-center gap-4">
              <button onClick={() => setIsSearchOpen(true)} className="text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out">
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button onClick={() => window.dispatchEvent(new CustomEvent("toggle-cart"))} className="relative text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out">
                <ShoppingCart size={20} strokeWidth={1.5} />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </button>
            </div>

            {/* Titre centré */}
            <Link to="/" className="font-serif text-xl text-gray-900 absolute left-1/2 transform -translate-x-1/2">
              Ramzparfum
            </Link>

            {/* Bouton menu burger pour mobile */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="rounded-md p-2 text-gray-600 hover:bg-gray-200 transition duration-200 ease-in-out">
                {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center space-x-8 pb-2">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition duration-200 ease-in-out"
              >
                <span>Parfums</span>
                <ChevronDown size={18} strokeWidth={1.5} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 mt-2">
                  <Link to="/parfums/homme" className="block px-4 py-2 hover:bg-gray-100">Parfums Homme</Link>
                  <Link to="/parfums/femme" className="block px-4 py-2 hover:bg-gray-100">Parfums Femme</Link>
                  <Link to="/parfums/unisexe" className="block px-4 py-2 hover:bg-gray-100">Parfums Unisexe</Link>
                </div>
              )}
            </div>
            <Link to="/coffrets" className="text-gray-700 hover:text-gray-900 transition duration-200 ease-in-out">Nos Coffrets</Link>
            <Link to="/histoire" className="text-gray-700 hover:text-gray-900 transition duration-200 ease-in-out">Notre Histoire</Link>
            <Link to="/boutiques" className="text-gray-700 hover:text-gray-900 transition duration-200 ease-in-out">Nos Boutiques</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition duration-200 ease-in-out">Contact</Link>
          </div>

          {/* Menu mobile */}
          {isOpen && (
            <div className="md:hidden py-4 bg-white text-gray-900">
              <div className="flex flex-col space-y-4">
                <div className="space-y-2 pl-4">
                  <div className="font-medium">Parfums</div>
                  <Link to="/parfums/homme" className="block pl-4 py-1">Parfums Homme</Link>
                  <Link to="/parfums/femme" className="block pl-4 py-1">Parfums Femme</Link>
                  <Link to="/parfums/unisexe" className="block pl-4 py-1">Parfums Unisexe</Link>
                </div>
                <Link to="/coffrets" className="block py-2">Nos Coffrets</Link>
                <Link to="/histoire" className="block py-2">Notre Histoire</Link>
                <Link to="/boutiques" className="block py-2">Nos Boutiques</Link>
                <Link to="/contact" className="block py-2">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
