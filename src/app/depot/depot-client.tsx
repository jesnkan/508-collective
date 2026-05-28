'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    id: 'prod-1',
    name: '508 Roasted Corn & Groundnuts Mix',
    category: 'Groceries',
    description: 'A perfect crunch. Hand-roasted golden corn masterfully blended with premium groundnuts for a savory, satisfying crunch.',
    image: '/product-corn-mix.jpeg',
    tag: 'Originally Homemade'
  },
  {
    id: 'prod-2',
    name: '508 Organic Gari',
    category: 'Groceries',
    description: 'Pure, organically sourced Ghanaian cassava, finely grated and roasted to perfection. The authentic taste of tradition.',
    image: '/product-gari.jpeg',
    tag: '100% Organic'
  },
  {
    id: 'prod-3',
    name: '508 Shito Dedeede',
    category: 'Groceries',
    description: 'Our signature rich, spicy black pepper sauce. Lovingly crafted with premium ingredients for that irresistible heat.',
    image: '/product-shito.jpeg',
    tag: 'Authentic'
  }
];

const categories = ['All Products', 'Groceries'];

export default function DepotClient() {
  const [activeTab, setActiveTab] = useState('All Products');
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = activeTab === 'All Products' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-[#0096FF]/30 pt-24 md:pt-32">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-8 md:mb-12">
        <div className="border-b border-foreground/10 pb-6 md:pb-8 flex justify-between items-end">
          <div>
            <p className="uppercase tracking-[0.2em] font-mono text-[10px] md:text-xs font-semibold mb-2 text-[#0096FF]">508 / Commerce</p>
            <h1 className="text-4xl md:text-7xl font-heading font-bold uppercase tracking-tighter block leading-none">
              Depot <span className="opacity-50">Store</span>
            </h1>
          </div>
          <div className="flex gap-4 md:gap-6 items-center">
             <div className="hidden md:flex gap-6 font-mono text-sm uppercase tracking-wide mr-8">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`pb-2 border-b-2 transition-all ${activeTab === cat ? 'border-[#0096FF] text-foreground' : 'border-transparent text-foreground/40 hover:text-foreground'}`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
             <div className="relative group cursor-pointer" onClick={() => setCartCount(c => c + 1)}>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                </div>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#0096FF] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
             </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-foreground/[0.02] border border-foreground/5 rounded-[32px] overflow-hidden hover:border-[#0096FF]/20 transition-all duration-500 will-change-transform"
              >
                <div className="aspect-square relative overflow-hidden bg-white/5">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest border border-foreground/5 shadow-sm">
                      {product.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-[#0096FF] text-[10px] font-bold uppercase tracking-widest mb-3">{product.category}</p>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 leading-tight group-hover:text-[#0096FF] transition-colors">{product.name}</h3>
                  <p className="text-foreground/50 text-sm md:text-base font-light leading-relaxed mb-8 line-clamp-3">
                    {product.description}
                  </p>
                  <button 
                    onClick={() => setCartCount(c => c + 1)}
                    className="w-full py-4 rounded-full border border-foreground/10 text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Wholesale Banner */}
      <section className="bg-foreground text-background py-20 px-6">
        <div className="max-w-[1600px] mx-auto text-center">
           <h2 className="text-3xl md:text-6xl font-heading font-bold uppercase tracking-tighter mb-8">Wholesale & <span className="text-[#0096FF]">Distribution</span></h2>
           <p className="text-lg md:text-xl font-light opacity-60 max-w-2xl mx-auto mb-12">
             Interested in stocking 508 products in your store or restaurant? We offer competitive wholesale pricing and nationwide delivery.
           </p>
           <a href="/#contact" className="inline-block px-10 py-5 rounded-full bg-background text-foreground font-bold uppercase tracking-widest text-xs hover:bg-[#0096FF] hover:text-white transition-all shadow-xl">
             Inquire About Wholesale
           </a>
        </div>
      </section>
    </div>
  );
}
