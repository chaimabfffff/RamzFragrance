import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [ref, inView] = useInView({ triggerOnce: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/7170533/pexels-photo-7170533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-serif text-white mb-6">
            Join Our Newsletter
          </h2>
          <p className="text-lg text-stone-200 mb-8">
            Subscribe to receive updates about new fragrances, exclusive offers, and
            perfume-making insights.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white bg-opacity-20 text-white placeholder-stone-300 border border-white border-opacity-30 focus:outline-none focus:border-opacity-100 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-white text-black hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                <span>Subscribe</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}