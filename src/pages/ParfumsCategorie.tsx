import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';
import { products } from '../data/products';

export function ParfumsCategorie() {
  const { categorie } = useParams();
  
  const categoryTitle = 
    categorie === 'homme' ? 'Parfums Homme' :
    categorie === 'femme' ? 'Parfums Femme' :
    'Parfums Unisexe';

  const filteredProducts = products.filter(
    product => product.category.toLowerCase() === (
      categorie === 'homme' ? 'men' :
      categorie === 'femme' ? 'women' :
      'unisex'
    )
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src={
            categorie === 'homme' 
              ? "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1920"
              : categorie === 'femme'
              ? "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=1920"
              : "https://images.unsplash.com/photo-1616604847462-ed3b0ac0e4a6?w=1920"
          }
          alt={categoryTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-6xl text-white font-serif">{categoryTitle}</h1>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto py-24">
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}