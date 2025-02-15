import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { ChevronDown, Star } from 'lucide-react';
import { products } from '../data/products';

export function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [storyRef, storyInView] = useInView({ triggerOnce: true });
  const [productsRef, productsInView] = useInView({ triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const bestsellers = products.filter(product => product.isBestseller);
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === selectedCategory);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section
  ref={heroRef}
  initial={{ opacity: 0 }}
  animate={heroInView ? { opacity: 1 } : {}}
  className="relative h-screen flex items-center justify-center text-center pt-16"
>
  <img
    src="https://images.pexels.com/photos/3785784/pexels-photo-3785784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Artisanal Perfumes"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black bg-opacity-40" />
  <div className="relative z-10 max-w-4xl mx-auto px-4">
    <motion.h1
      initial={{ y: 20, opacity: 0 }}
      animate={heroInView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay: 0.2 }}
      className="text-6xl md:text-8xl font-light text-white mb-6 font-serif"
    >
      Artisanal Perfumes
    </motion.h1>
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={heroInView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay: 0.4 }}
      className="text-xl text-white mb-12 font-light"
    >
      Découvrez notre collection de parfums artisanaux, créés avec passion
    </motion.p>
    <motion.button
      initial={{ y: 20, opacity: 0 }}
      animate={heroInView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay: 0.6 }}
      onClick={scrollToProducts}
      className="text-white border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
    >
      Découvrir la Collection
    </motion.button>
  </div>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
  >
    <ChevronDown size={32} />
  </motion.div>
</motion.section>

      {/* Bestsellers Section2 */}
      <section className="py-24 bg-stone-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <h4 className="text-2xl font-light">Notre Sélection</h4>
      </motion.div>
      <p className="text-lg text-stone-600 max-w-2xl mx-auto">
        Découvrez nos fragrances les plus appréciées, des parfums d'exception 
        qui ont conquis le cœur de nos clients.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0">
      {bestsellers.map((product) => (
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
</section>

     

{/* 1 parfum*/}
<section className="py-24 bg-stone-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <h4 className="text-2xl font-light">Notre Sélection</h4>
      </motion.div>
      <p className="text-lg text-stone-600 max-w-2xl mx-auto">
        Découvrez nos fragrances les plus appréciées, des parfums d'exception 
        qui ont conquis le cœur de nos clients.
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      {bestsellers.length > 0 && (() => {
        const randomProduct = bestsellers[Math.floor(Math.random() * bestsellers.length)];
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-60 md:w-80"
          >
            <div className="relative aspect-square">
              <img
                src={randomProduct.image}
                alt={randomProduct.name}
                className="w-full h-full object-cover shadow-md"
              />
            </div>
            <h5 className="mt-4 text-lg font-semibold text-stone-800">
              {randomProduct.name}
            </h5>
            <p className="text-stone-600 text-base mt-2">
              {randomProduct.description}
            </p>
          </motion.div>
        );
      })()}
    </div>
  </div>
</section>

{/* rihana1*/}
<section className="py-24 bg-stone-50">
  <div className="max-w-5xl mx-auto px-4">
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <h4 className="text-2xl font-light">Notre Sélection</h4>
      </motion.div>
      <p className="text-lg text-stone-600 max-w-2xl mx-auto">
        Découvrez nos fragrances les plus appréciées, des parfums d'exception 
        qui ont conquis le cœur de nos clients.
      </p>
    </div>

    {/* Affichage de seulement 2 produits (id 1 et id 2) */}
    <div className="grid grid-cols-2 gap-4 md:gap-6 place-items-center">
      {bestsellers
        .filter((product) => product.id === 1 || product.id === 2)
        .map((product, index) => (
          <React.Fragment key={product.id}>
            {/* Image du produit - Carrée */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full text-center"
            >
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover shadow-md"
                />
              </div>
              <h5 className="mt-2 text-lg font-semibold text-stone-800">
                {product.name}
              </h5>
              <p className="text-stone-600 text-base mt-1">
                {product.description}
              </p>
            </motion.div>

            {/* Image personnalisée - Taille originale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full text-center"
            >
              <img
                src={index === 0 
                  ? "https://favim.com/pd/p/orig/2019/01/21/famous-rihanna-black-and-white-Favim.com-6803530.jpg"
                  : "https://www.citizen-k.com/wp-content/uploads/Montblanc-x-Zinedine-Zidane-1-scaled.jpg"}
                alt="Image associée"
                className="w-full h-auto shadow-md" // Taille originale pour l'image personnalisée
              />
            </motion.div>
          </React.Fragment>
        ))}
    </div>
  </div>
</section>



{/* parfum*/}
<section className="py-24 bg-stone-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <h4 className="text-2xl font-light">Parfums </h4>
      </motion.div>
      <p className="text-lg text-stone-600 max-w-2xl mx-auto">
        Découvrez nos fragrances les plus appréciées, des parfums d'exception 
        qui ont conquis le cœur de nos clients.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0">
  {bestsellers.map((product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="aspect-square" // Assure un ratio carré
    >
      <ProductCard product={product} />
    </motion.div>
  ))}
</div>

  </div>
</section>
 {/* 1parfum2 */}
 <section className="py-24 bg-stone-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <h4 className="text-2xl font-light">Notre Sélection</h4>
      </motion.div>
      <p className="text-lg text-stone-600 max-w-2xl mx-auto">
        Découvrez nos fragrances les plus appréciées, des parfums d'exception 
        qui ont conquis le cœur de nos clients.
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      {bestsellers.length > 0 && (() => {
        const randomProduct = bestsellers[Math.floor(Math.random() * bestsellers.length)];
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-60 md:w-80"
          >
            <div className="relative aspect-square">
              <img
                src={randomProduct.image}
                alt={randomProduct.name}
                className="w-full h-full object-cover shadow-md"
              />
            </div>
            <h5 className="mt-4 text-lg font-semibold text-stone-800">
              {randomProduct.name}
            </h5>
            <p className="text-stone-600 text-base mt-2">
              {randomProduct.description}
            </p>
          </motion.div>
        );
      })()}
    </div>
  </div>
</section>


      {/* Story Section */}
      <motion.section
        ref={storyRef}
        initial={{ opacity: 0, y: 50 }}
        animate={storyInView ? { opacity: 1, y: 0 } : {}}
        className="py-24 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-4xl font-serif">Notre Histoire</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Notre voyage a commencé dans un petit atelier en Provence, où la passion 
                pour les ingrédients naturels a rencontré l'art de la parfumerie.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Chaque fragrance raconte une histoire unique, soigneusement élaborée 
                pour créer des souvenirs durables.
              </p>
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={storyInView ? { scale: 1, opacity: 1 } : {}}
              className="relative h-[300px] md:h-[600px] rounded-lg overflow-hidden order-1 md:order-2"
            >
              <img
                src="https://shop-beauty.dior.qa/cdn/shop/files/Y0000085_E000000281_E01_GHC.jpg?v=1738313158&width=833"
                alt="Notre atelier"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Video Section */}
     
      <section className="py-24 bg-stone-50">
  <div className="max-w-5xl mx-auto px-4">
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <h4 className="text-2xl font-light">Notre Sélection</h4>
      </motion.div>
      <p className="text-lg text-stone-600 max-w-3xl mx-auto">
        Découvrez nos fragrances les plus appréciées, des parfums d'exception 
        qui ont conquis le cœur de nos clients.
      </p>
    </div>

    <div className="flex flex-col items-center text-center gap-12">
      {bestsellers.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl"
        >
          {/* Titre au-dessus de l'image */}
          <h5 className="text-lg font-medium text-stone-800 mb-2">
            {product.name}
          </h5>

          {/* Description limitée en largeur en desktop */}
          <p className="text-stone-600 text-base mb-4 max-w-2xl mx-auto leading-relaxed px-6 md:px-8">
            {product.description}
          </p>

          {/* Image avec taille carrée */}
          <div className="w-60 md:w-80 mx-auto relative aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover shadow-md"
            />
          </div>

          {/* Titre et prix en dessous de l'image */}
          <h5 className="mt-4 text-lg font-medium text-stone-800">
            {product.name}
          </h5>
          <p className="text-stone-600 text-base mt-1 font-medium">
            {product.price} €
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* Categories Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {/* Première rangée : Pour Elle et Coffrets (en largeur) */}
            <Link to="/parfums/femme">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=800"
                    alt="Pour Elle"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-serif text-white">Pour Elle</h3>
                  </div>
                </div>
              </motion.div>
            </Link>

            <Link to="/coffrets">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/15737947/pexels-photo-15737947/free-photo-of-noir-et-blanc-luxe-bille-marbre.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt="Coffrets"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-serif text-white">Coffrets</h3>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Deuxième rangée : Pour Lui et Unisexe (en longueur) */}
            <Link to="/parfums/homme">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-w-9 aspect-h-16 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/15275974/pexels-photo-15275974/free-photo-of-mode-luxe-noir-boite.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt="Pour Lui"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-serif text-white">Pour Lui</h3>
                  </div>
                </div>
              </motion.div>
            </Link>

            <Link to="/parfums/unisexe">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-w-9 aspect-h-16 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/7472986/pexels-photo-7472986.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt="Unisexe"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-serif text-white">Unisexe</h3>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        ref={productsRef}
        className="bg-stone-50"
      >
        <div className="max-w-7xl mx-auto py-24">
          <h2 className="text-4xl font-serif text-center mb-16">Notre Collection</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['all', 'men', 'women', 'unisex'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-transparent text-black hover:bg-stone-100'
                }`}
              >
                {category === 'all' ? 'Tous' :
                 category === 'men' ? 'Homme' :
                 category === 'women' ? 'Femme' : 'Unisexe'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[1mm]">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>


      {/* Map Section */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif">Notre Boutique à Marseille</h2>
              <p className="text-lg text-stone-600">
                Visitez notre boutique principale au cœur de Marseille, où vous pourrez 
                découvrir l'ensemble de notre collection et bénéficier des conseils de 
                nos experts en parfumerie.
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Adresse:</p>
                <p>15 Rue Paradis</p>
                <p>13001 Marseille, France</p>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.953141557514!2d5.373893!3d43.296482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0c39a7c5d5f%3A0x7d3f21b7e5d5d0a!2sRue%20Paradis%2C%2013001%20Marseille!5e0!3m2!1sfr!2sfr!4v1710835200000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}