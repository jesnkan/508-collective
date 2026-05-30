'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, Search, SlidersHorizontal, ChevronDown, Plus, Loader2 } from 'lucide-react';
import { Caveat } from 'next/font/google';
import { INITIAL_PRODUCTS } from '@/lib/data';

const caveat = Caveat({ subsets: ['latin'], weight: '400' });

const categories = [
  { name: 'All Products', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200' },
  { name: 'Groceries', image: '/product-corn-mix.jpeg' },
  { name: 'Farm Produce', image: '/farmproduce/harvested-peppers.jpeg' },
  { name: 'Commodities', image: '/farmproduce/rubber-production.jpeg' }
];

interface Product {
  _id: string;
  name: string;
  category: string;
  price?: string;
  unit: string;
  description: string;
  image: string;
  tag: string;
  featured: boolean;
}

function ProductCard({ product, index, onAddToCart }: { product: Product, index: number, onAddToCart: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col"
    >
      <div className={`relative overflow-hidden bg-white dark:bg-foreground/[0.02] border border-foreground/5 rounded-[40px] transition-all duration-700 h-full flex flex-col ${isHovered ? 'shadow-2xl -translate-y-2 border-primary/20' : ''}`}>
        
        {/* Image Container */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-foreground/5">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-1000 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          
          {/* Top Tags */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
            <span className="px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-xl text-[9px] font-bold tracking-widest border border-foreground/10 uppercase">
              {product.tag}
            </span>
            <div className="flex flex-col items-end gap-2">
              <span className="px-3 py-1 rounded-full bg-background/50 backdrop-blur-md text-[8px] font-bold tracking-widest border border-foreground/5 uppercase">
                {product.unit}
              </span>
            </div>
          </div>

          {/* Bottom Add Button - High End Reveal */}
          <div className="absolute bottom-6 right-6 z-20">
            <button 
              onClick={(e) => { e.preventDefault(); onAddToCart(); }}
              className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-xl active:scale-90 group"
            >
              <Plus size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Info Area */}
        <div className="p-8 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
             <div className="w-1 h-1 rounded-full bg-primary"></div>
             <p className="text-primary text-[9px] font-bold uppercase tracking-[0.3em]">{product.category}</p>
          </div>
          <h3 className="font-heading font-bold text-foreground text-xl md:text-2xl mb-4 leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-foreground/40 text-sm font-light leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function DepotClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('All Products');
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        } else {
          // Use hardcoded data if API returns empty or error
          console.warn('API returned empty or error, using fallback products');
          setProducts(INITIAL_PRODUCTS);
        }
      } catch (error) {
        console.error('Failed to fetch products, using fallback:', error);
        setProducts(INITIAL_PRODUCTS);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesTab = activeTab === 'All Products' || p.category === activeTab;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-[#F8F9FA] dark:bg-background text-foreground min-h-screen font-sans selection:bg-primary/30 pt-32 pb-40 transition-colors duration-500">
      
      {/* Floating Cart Indicator */}
      <div className="fixed top-32 right-6 md:right-12 z-50">
         <motion.div 
           initial={{ scale: 0, x: 20 }}
           animate={{ scale: 1, x: 0 }}
           className="relative bg-foreground text-background px-6 py-4 rounded-[24px] shadow-2xl flex items-center gap-4 border border-background/10 backdrop-blur-xl"
         >
            <div className="relative">
              <ShoppingBag size={20} />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-[8px] font-bold border-2 border-foreground">{cartCount}</div>
            </div>
            <div className="h-4 w-[1px] bg-background/20"></div>
            <span className="font-heading font-bold text-xs tracking-widest uppercase">Cart</span>
         </motion.div>
      </div>

      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20">
        
        {/* Top Search & Filter Bar (Detailed from Inspo) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-20 bg-background/50 backdrop-blur-md p-4 md:p-2 rounded-[32px] border border-foreground/5 shadow-sm">
           <div className="relative w-full md:w-[400px] group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border-none rounded-full py-4 pl-16 pr-6 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
              />
           </div>
           
           <div className="flex items-center gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-background border border-foreground/5 rounded-full text-xs font-bold uppercase tracking-widest hover:border-primary/30 transition-all">
                <SlidersHorizontal size={14} />
                Filter
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-background border border-foreground/5 rounded-full text-xs font-bold uppercase tracking-widest hover:border-primary/30 transition-all">
                Sort By
                <ChevronDown size={14} />
              </button>
           </div>
        </div>

        <div className="text-center mb-16">
           <motion.span 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className={`text-3xl md:text-4xl text-primary ${caveat.className} block mb-4`}
           >
             Our Collections
           </motion.span>
           <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase mb-16 leading-[0.85]">
             The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic font-light">Depot</span>.
           </h1>
           
           {/* Graphical Category Representations (Exactly like Inspo) */}
           <div className="flex flex-wrap justify-center gap-8 md:gap-16">
             {categories.map((cat, i) => (
               <motion.button
                 key={cat.name}
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                 onClick={() => setActiveTab(cat.name)}
                 className="group flex flex-col items-center gap-6"
               >
                 <div className={`relative w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden transition-all duration-700 border-2 ${activeTab === cat.name ? 'border-primary p-2 scale-110 shadow-[0_20px_60px_rgba(0,150,255,0.3)]' : 'border-foreground/10 group-hover:border-primary/50'}`}>
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image 
                        src={cat.image} 
                        alt={cat.name} 
                        fill 
                        className={`object-cover transition-transform duration-1000 ${activeTab === cat.name ? 'scale-110' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'}`} 
                      />
                    </div>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                   <span className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] transition-colors ${activeTab === cat.name ? 'text-primary' : 'text-foreground/40 group-hover:text-foreground'}`}>
                     {cat.name}
                   </span>
                   {activeTab === cat.name && (
                     <motion.div layoutId="underline" className="w-8 h-[2px] bg-primary rounded-full"></motion.div>
                   )}
                 </div>
               </motion.button>
             ))}
           </div>
        </div>
      </section>

      {/* Product Grid - More dynamic and clean */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product._id} 
                product={product} 
                index={index} 
                onAddToCart={() => setCartCount(c => c + 1)}
              />
            ))}
          </AnimatePresence>
        </div>
      </section>


      {/* Wholesale & Distribution Section - High Impact */}
      <section className="mx-6 md:mx-12 max-w-[1600px] md:mx-auto">
        <div className="relative rounded-[40px] md:rounded-[80px] overflow-hidden bg-foreground text-background p-12 md:p-32 text-center group">
          {/* Animated Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-125 transition-transform duration-1000 delay-200"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-primary mb-8 inline-block">Global Logistics</span>
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tighter mb-10 leading-none uppercase">
               Bulk Wholesale & <br /> <span className="italic font-light opacity-50">Distribution.</span>
            </h2>
            <p className="text-lg md:text-2xl font-light opacity-60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Scale your business with the 508 supply chain. We offer premium wholesale pricing, industrial spec sheets, and worldwide distribution for our entire catalog.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Link href="/connect" className="px-12 py-6 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-2xl">
                 Inquire Now
               </Link>
               <button className="px-12 py-6 border border-white/20 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">
                 Download Catalog
               </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
