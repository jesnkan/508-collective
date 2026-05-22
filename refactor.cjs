const fs = require('fs');

const files = [
  './src/pages/SuccessFarmhouse.tsx',
  './src/pages/PrintMedia.tsx',
  './src/pages/DSTVRetail.tsx',
  './src/pages/CitySips.tsx',
  './src/pages/Depot.tsx',
  './src/components/home/Testimonials.tsx',
  './src/components/home/Contact.tsx',
  './src/components/home/Hero.tsx',
  './src/components/home/About.tsx',
  './src/components/home/BusinessPortfolio.tsx',
  './src/components/Footer.tsx',
  './src/components/Loader.tsx',
  './src/components/Navigation.tsx'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf-8');
  
  if (file !== './src/components/Navigation.tsx') {
    // Replace backgrounds
    content = content.replace(/bg-\[#050505\]/g, 'bg-background');
    content = content.replace(/bg-\[#11050A\]/g, 'bg-background');
    content = content.replace(/bg-black/g, 'bg-background');
    content = content.replace(/bg-\[#E4E3E0\]/g, 'bg-background text-foreground');
    content = content.replace(/bg-\[#f8f9fa\]/g, 'bg-background text-foreground');
    content = content.replace(/text-\[#141414\]/g, 'text-foreground');
    content = content.replace(/bg-\[#141414\]/g, 'bg-secondary');
    
    // In Depot, hover:bg-[#141414] hover:text-[#E4E3E0]
    content = content.replace(/hover:bg-\[#141414\]/g, 'hover:bg-foreground');
    content = content.replace(/hover:text-\[#E4E3E0\]/g, 'hover:text-background');

    // Replace text colors
    // Make sure we do NOT replace text-white inside buttons with solid colors, if possible.
    // Instead of doing it blind, let's just globally replace if it's text-white 
    content = content.replace(/text-white(?!(\/|[A-Za-z0-9_-]))/g, 'text-foreground');
    
    // Text opacities - replace them carefully
    content = content.replace(/text-white\/([0-9]+)/g, 'text-foreground/$1');
    
    // Border opacities
    content = content.replace(/border-white\/([0-9]+)/g, 'border-foreground/$1');
    content = content.replace(/border-white(?!(\/|[A-Za-z0-9_-]))/g, 'border-foreground');
    
    // Background opacities
    content = content.replace(/bg-white\/([0-9]+)/g, 'bg-foreground/$1');
  } else {
    // Navigation specific
    // Keep text-white for mix-blend-difference, but let's fix the theme button
    content = content.replace(/text-white hover:text-white\/70 transition-colors flex items-center/, 'text-white dark:hover:text-white/70 hover:text-white/70 transition-colors flex items-center');
    // But since it has mix-blend-difference on the header, the actual theme toggle gets differences!
    // This is fine. The user can see it! We just need it not to be inverted wrong.
    // Actually, Navigation shouldn't be touched much. Let's just repair the theme button if needed.
    // I'll manually edit Navigation.
  }

  // Restore button text for specific cases if broken
  if (file === './src/pages/SuccessFarmhouse.tsx') {
    content = content.replace(/bg-\[#10B981\] text-foreground/, 'bg-[#10B981] text-white');
  }

  fs.writeFileSync(file, content);
}
console.log('Done refactoring');
