'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-background pt-32 pb-12 border-t border-foreground/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity mb-8 relative h-16 md:h-20 w-48">
              <Image
                src="/508 logo.png"
                alt="508 Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 192px, 192px"
              />
            </Link>
            <p className="text-foreground/50 max-w-sm mb-8 text-lg">
              One Vision. Multiple Ventures. Building businesses that shape industries across the globe.
            </p>
            <div className="flex items-center gap-4">
              {/* Dummy Social Icons */}
              {['Ig', 'X', 'In', 'Fb'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-sm font-medium hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-6 uppercase tracking-widest text-xs">Ventures</h4>
            <ul className="space-y-4">
              <li><Link href="/print-media" className="text-foreground/60 hover:text-primary transition-colors text-sm">508 Print Media</Link></li>
              <li><Link href="/dstv-retail" className="text-foreground/60 hover:text-primary transition-colors text-sm">DSTV Retail</Link></li>
              <li><Link href="/city-sips" className="text-foreground/60 hover:text-primary transition-colors text-sm">City Sips</Link></li>
              <li><Link href="/depot" className="text-foreground/60 hover:text-primary transition-colors text-sm">508 Depot</Link></li>
              <li><Link href="/success-farmhouse" className="text-foreground/60 hover:text-primary transition-colors text-sm">Success Farmhouse</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-foreground/50 text-sm mb-4">Subscribe for the latest updates and exclusive insights.</p>
            <form className="relative group">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-foreground/20 text-foreground placeholder:text-foreground/30 py-4 focus:outline-none focus:border-primary transition-colors uppercase text-xs tracking-widest"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground/50 group-hover:text-primary transition-colors">
                →
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-foreground/10 text-foreground/40 text-xs tracking-wider uppercase">
          <p>© {new Date().getFullYear()} 508 (Five Zero Eight) Parent Company. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}