import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Footer } from '../components/Footer';
import { Gift } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const coffrets = [
  {
    id: 'coffret-1',
    name: "Coffret Découverte",
    description: "Une sélection de nos parfums les plus populaires en format voyage",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1596542519315-6f0f2e6a4bdf?w=800",
    includes: ["3 parfums 10ml", "Guide olfactif", "Pochette en velours"],
    stock: 10,
    category: "coffret"
  },
  {
    id: 'coffret-2',
    name: "Coffret Prestige",
    description: "Notre collection exclusive dans un écrin luxueux",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1588680388356-313b8bec4c1e?w=800",
    includes: ["5 parfums 15ml", "Livre d'art", "Coffret en bois"],
    stock: 5,
    category: "coffret"
  },
  {
    id: 'coffret-3',
    name: "Coffret Personnalisé",
    description: "Créez votre propre collection de parfums",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1601295437592-6ccf6e5ea1c6?w=800",
    includes: ["4 parfums au choix", "Carte personnalisée", "Emballage cadeau"],
    stock: 8,
    category: "coffret"
  }
];

export function Coffrets() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1596542519315-6f0f2e6a4bdf?w=1920"
          alt="Nos Coffrets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-6xl text-white font-serif">Nos Coffrets</h1>
        </div>
      </div>

      {/* Coffrets Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffrets.map((coffret) => (
            <motion.div
              key={coffret.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={coffret.image}
                  alt={coffret.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-serif mb-2">{coffret.name}</h2>
                <p className="text-gray-600 mb-4">{coffret.description}</p>
                <div className="space-y-2 mb-6">
                  {coffret.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Gift size={16} className="text-sage-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-semibold text-sage-700">{coffret.price}€</span>
                  <button
                    onClick={() => addItem(coffret)}
                    className="bg-sage-600 text-white px-6 py-2 rounded-full hover:bg-sage-700 transition-colors duration-300 flex items-center gap-2"
                  >
                    <Gift size={20} />
                    <span>Ajouter au panier</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}