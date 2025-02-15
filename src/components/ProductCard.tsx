import { motion } from 'framer-motion';
import { Pen, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-stone-50 p-2 flex flex-col"
    >
      <div className="relative aspect-[3/4] mb-4 group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        <button
          onClick={() => addItem(product)}
          disabled={product.stock === 0}
          className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ShoppingCart size={20} />
        </button>
        <button
          className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Pen size={16} />
        </button>
      </div>

      <div className="space-y-1 text-center px-2">
        <h3 className="text-xl font-serif">{product.name}</h3>
        <p className="text-stone-600 text-sm">
          {product.description}
        </p>
        <div className="pt-1">
          <p className="text-base">
            Dès {product.price}€ - Vaporisateur 50 ml
          </p>
        </div>
      </div>
    </motion.div>
  );
}