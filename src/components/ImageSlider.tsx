import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800",
    name: "La Collection Privée"
  },
  {
    url: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800",
    name: "Miss Dior"
  },
  {
    url: "https://images.unsplash.com/photo-1616604847462-ed3b0ac0e4a6?w=800",
    name: "J'adore"
  },
  {
    url: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=800",
    name: "Poison"
  },
  {
    url: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800",
    name: "Joy"
  },
  {
    url: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=800",
    name: "Dior Addict"
  }
];

export function ImageSlider() {
  return (
    <div className="relative overflow-hidden bg-stone-50 py-12">
      <div className="flex gap-8 animate-scroll">
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex-none w-64 aspect-[3/4]"
          >
            <div className="relative h-full group">
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-serif">{image.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}