import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Footer } from '../components/Footer';

export function Histoire() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505253304499-671c55fb57fe?w=1920"
          alt="Notre histoire"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-6xl text-white font-serif">Notre Histoire</h1>
        </div>
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="max-w-4xl mx-auto px-4 py-24"
      >
        <div className="prose prose-lg mx-auto">
          <h2 className="text-4xl font-serif mb-8">Les Débuts</h2>
          <p className="mb-8">
            Notre histoire commence en 2020 dans un petit atelier en Provence. 
            Passionnés par les fragrances naturelles et l'art de la parfumerie, 
            nous avons décidé de créer des parfums qui racontent des histoires.
          </p>

          <div className="my-12">
            <img
              src="https://images.unsplash.com/photo-1583445095369-9c651e7e5d34?w=800"
              alt="Notre atelier"
              className="w-full rounded-lg shadow-lg mb-4"
            />
          </div>

          <h2 className="text-4xl font-serif mb-8">Notre Philosophie</h2>
          <p className="mb-8">
            Chaque parfum est une création unique, élaborée avec des ingrédients 
            naturels soigneusement sélectionnés. Nous croyons en la puissance des 
            fragrances pour évoquer des émotions et créer des souvenirs durables.
          </p>

          <div className="my-12">
            <img
              src="https://images.unsplash.com/photo-1616604847462-ed3b0ac0e4a6?w=800"
              alt="Nos ingrédients"
              className="w-full rounded-lg shadow-lg mb-4"
            />
          </div>

          <h2 className="text-4xl font-serif mb-8">Notre Engagement</h2>
          <p>
            La durabilité et l'éthique sont au cœur de notre démarche. Nous nous 
            engageons à utiliser des pratiques responsables et à minimiser notre 
            impact sur l'environnement.
          </p>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}