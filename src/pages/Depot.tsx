import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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

export default function Depot() {
  const brandColor = "#0096FF"; // Azure
  const [activeTab, setActiveTab] = useState('All Products');
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = activeTab === 'All Products' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-[#0096FF]/30 pt-32">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-12">
        <div className="border-b border-foreground/10 pb-8 flex justify-between items-end">
          <div>
            <p className="uppercase tracking-[0.2em] font-mono text-xs font-semibold mb-2 text-[#0096FF]">508 / Commerce</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter block">
              Depot <span className="opacity-50">Store</span>
            </h1>
          </div>
          <div className="hidden md:flex gap-6 items-center">
             <div className="flex gap-6 font-mono text-sm uppercase tracking-wide mr-8">
               <button className="text-foreground hover:text-[#0096FF] transition-colors pb-1">Shop All</button>
               <button className="text-foreground/50 hover:text-foreground transition-colors pb-1">New Arrivals</button>
               <button className="text-foreground/50 hover:text-foreground transition-colors pb-1">Support</button>
             </div>
             
             {/* Cart Button */}
             <button className="relative flex items-center justify-center w-12 h-12 rounded-full border border-foreground/20 hover:border-[#0096FF] transition-all group overflow-visible">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:text-[#0096FF] transition-colors">
                 <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                 <line x1="3" y1="6" x2="21" y2="6"></line>
                 <path d="M16 10a4 4 0 0 1-8 0"></path>
               </svg>
               <AnimatePresence>
                 {cartCount > 0 && (
                   <motion.div 
                     initial={{ scale: 0, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     className="absolute -top-1 -right-1 w-5 h-5 bg-[#0096FF] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg"
                   >
                     {cartCount}
                   </motion.div>
                 )}
               </AnimatePresence>
             </button>
          </div>
        </div>
      </section>

      {/* Main Store Layout */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0 font-mono text-xs uppercase tracking-widest hidden lg:block">
          <div className="mb-10 sticky top-32">
            <h3 className="text-foreground/50 mb-4 pb-2 border-b border-foreground/10">Categories</h3>
            <ul className="space-y-4">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveTab(cat)}
                    className={`transition-colors ${activeTab === cat ? 'text-[#0096FF] font-semibold' : 'text-foreground/70 hover:text-foreground'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 font-mono text-xs uppercase tracking-widest border-b border-foreground/10 pb-4 gap-4">
             <div className="flex items-center gap-4 text-foreground/50">
               <span>{filteredProducts.length} Products found</span>
               {activeTab !== 'All Products' && (
                 <span className="px-2 py-1 bg-foreground/5 rounded text-[10px]">
                   {activeTab}
                 </span>
               )}
             </div>
             <button className="flex items-center gap-2 hover:text-[#0096FF] transition-colors">
               Sort By: Latest
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, idx) => (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group"
                >
                  <div className="relative aspect-[4/5] bg-foreground/5 mb-4 overflow-hidden rounded-md cursor-pointer">
                    {/* Tags */}
                    {product.tag && (
                      <div className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase bg-background/80 backdrop-blur-md px-3 py-1 font-semibold tracking-wider border border-foreground/10 rounded-full">
                        {product.tag}
                      </div>
                    )}
                    
                    {/* Image */}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Quick Add Overlay */}
                    <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                       <button 
                         onClick={() => setCartCount(c => c + 1)}
                         className="pointer-events-auto bg-foreground text-background px-6 py-3 rounded-full font-mono text-xs uppercase tracking-widest font-bold translate-y-4 group-hover:translate-y-0 transition-all hover:bg-[#0096FF] hover:scale-105"
                       >
                         Add to Cart
                       </button>
                    </div>
                  </div>

                  <div className="px-1">
                    <p className="font-mono text-[10px] uppercase text-foreground/50 tracking-widest mb-1.5">{product.category}</p>
                    <div className="flex flex-col gap-2 border-t border-foreground/10 pt-4 mt-2">
                       <h3 className="font-heading font-medium text-xl leading-tight group-hover:text-[#0096FF] transition-colors">{product.name}</h3>
                       <p className="font-sans text-sm text-foreground/70 leading-relaxed font-light">{product.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredProducts.length === 0 && (
               <div className="col-span-full min-h-[40vh] flex flex-col items-center justify-center border border-dashed border-foreground/20 rounded-xl bg-foreground/[0.02]">
                  <p className="font-mono text-sm uppercase tracking-widest text-foreground/50">No products found in this category.</p>
               </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 px-6 md:px-12 mt-32 border-t border-foreground/10 bg-foreground/[0.02]">
         <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-tighter mb-4">Stay Perfectly Stocked.</h2>
            <p className="text-foreground/60 mb-8 font-sans">Subscribe to get notified when new products go live in the Depot store.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <input 
                 type="email" 
                 placeholder="Enter your email address..." 
                 className="px-6 py-4 bg-background border border-foreground/20 font-sans focus:outline-none focus:border-[#0096FF] w-full sm:w-96 rounded-full"
               />
               <button className="px-8 py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-[#0096FF] transition-colors whitespace-nowrap rounded-full">
                 Subscribe
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
