import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart as CartIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCartStore } from '../store/cartStore';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QrOUvJ8z4n3oLnG5Ur6MQyKvj3uSS8knTnZ3Og5NvWpiOQ1S1GZcCGPIT4yXncxeZgPy55wp6R8W9uQYcsfZbGg00DAAeKFSp');

// Définir l'URL de l'API en fonction de l'environnement
const API_URL = import.meta.env.PROD 
  ? 'https://votre-api-onrender.onrender.com' // Remplacez par votre URL Onrender
  : 'http://localhost:3000';

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { items, removeItem, updateQuantity, total } = useCartStore();

  useEffect(() => {
    const toggleCart = () => setIsOpen(prev => !prev);
    window.addEventListener('toggle-cart', toggleCart);
    return () => window.removeEventListener('toggle-cart', toggleCart);
  }, []);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      const lineItems = items.map(item => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.product.name,
            description: item.product.description,
            images: [item.product.image],
          },
          unit_amount: Math.round(item.product.price * 100),
        },
        quantity: item.quantity,
      }));

      const response = await fetch(`${API_URL}/api/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lineItems }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { sessionId } = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Échec du paiement. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Votre Panier</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="text-center text-gray-500 mt-10">
                Votre panier est vide
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 border-b py-4"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.product.name}</h3>
                        <p className="text-gray-500">
                          {item.product.price}€
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <select
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.product.id,
                                parseInt(e.target.value)
                              )
                            }
                            className="border rounded p-1"
                          >
                            {[...Array(10)].map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </select>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between text-xl font-semibold mb-4">
                    <span>Total:</span>
                    <span>{total().toFixed(2)}€</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    disabled={isLoading}
                    className="w-full bg-sage-600 text-white py-3 rounded-lg hover:bg-sage-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                        Traitement en cours...
                      </>
                    ) : (
                      'Procéder au paiement'
                    )}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}