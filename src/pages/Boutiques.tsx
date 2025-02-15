import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Footer } from '../components/Footer';

const boutiques = [
  {
    id: 1,
    ville: "Paris",
    adresse: "15 Rue du Faubourg Saint-Honoré",
    telephone: "+33 1 42 65 89 78",
    horaires: "Lun-Sam: 10h-19h",
    image: "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?w=800"
  },
  {
    id: 2,
    ville: "Lyon",
    adresse: "8 Rue de la République",
    telephone: "+33 4 78 42 15 63",
    horaires: "Lun-Sam: 10h-19h",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800"
  }
];

export function Boutiques() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581683705068-ca8f49520f8e?w=1920"
          alt="Nos boutiques"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-6xl text-white font-serif">Nos Boutiques</h1>
        </div>
      </div>

      {/* Boutiques Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {boutiques.map((boutique) => (
            <motion.div
              key={boutique.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={boutique.image}
                alt={`Boutique ${boutique.ville}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-serif mb-4">{boutique.ville}</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-sage-600" size={20} />
                    <span>{boutique.adresse}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-sage-600" size={20} />
                    <span>{boutique.telephone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-sage-600" size={20} />
                    <span>{boutique.horaires}</span>
                  </div>
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