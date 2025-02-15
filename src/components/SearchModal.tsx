import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white z-50"
        >
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Rechercher sur artisanal-perfumes.com"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full text-xl border-b border-gray-200 py-2 focus:outline-none focus:border-gray-400"
                  autoFocus
                />
              </div>
              <button
                onClick={onClose}
                className="ml-4 p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {searchTerm && (
              <div className="space-y-8">
                <h3 className="text-lg text-gray-500">Vous aimerez aussi</h3>
                <div className="grid grid-cols-1 gap-6">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      to={`/parfums/${product.category}`}
                      onClick={onClose}
                      className="flex gap-6 hover:bg-gray-50 p-4"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-32 object-cover"
                      />
                      <div>
                        <h4 className="text-xl font-serif mb-2">{product.name}</h4>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-gray-500 mt-2">
                          Dès {product.price}€ - Vaporisateur 50 ml
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}