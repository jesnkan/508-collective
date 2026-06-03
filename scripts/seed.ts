import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Please define the MONGODB_URI environment variable');
  process.exit(1);
}

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  unit: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  tag: { type: String, required: true },
  featured: { type: Boolean, default: false },
}, { timestamps: true });

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['superadmin', 'admin'], default: 'admin' },
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

const products = [
    {
      name: '508 Roasted Corn & Groundnuts Mix',
      category: 'Groceries',
      price: 'GHS 25.00',
      unit: '500g',
      description: 'A perfect crunch. Hand-roasted golden corn masterfully blended with premium groundnuts for a savory, satisfying crunch.',
      image: '/product-corn-mix.jpeg',
      tag: 'ORIGINAL',
      featured: true
    },
    {
      name: '508 Organic Gari',
      category: 'Groceries',
      price: 'GHS 45.00',
      unit: '2kg',
      description: 'Pure, organically sourced Ghanaian cassava, finely grated and roasted to perfection. The authentic taste of tradition.',
      image: '/product-gari.jpeg',
      tag: '100% ORGANIC',
      featured: false
    },
    {
      name: '508 Shito Dedeede',
      category: 'Groceries',
      price: 'GHS 60.00',
      unit: '450g',
      description: 'Our signature rich, spicy black pepper sauce. Lovingly crafted with premium ingredients for that irresistible heat.',
      image: '/product-shito.jpeg',
      tag: 'AUTHENTIC',
      featured: false
    },
    {
      name: 'Fresh Green Bell Peppers',
      category: 'Vegetables',
      price: 'GHS 30.00',
      unit: '1kg',
      description: 'Crisp, organically grown green bell peppers. Harvested at peak ripeness from Success Farmhouse fields.',
      image: '/farmproduce/harvested-peppers.jpeg',
      tag: 'FARM FRESH',
      featured: true
    },
    {
      name: 'Fiery Habanero Peppers',
      category: 'Vegetables',
      price: 'GHS 20.00',
      unit: 'Bowl',
      description: 'Vibrant, incredibly spicy habanero peppers. Hand-picked and perfect for adding serious heat and flavor.',
      image: '/farmproduce/habanero-peppers.jpeg',
      tag: 'SPICY',
      featured: false
    },
    {
      name: 'Vine-Ripened Tomatoes',
      category: 'Vegetables',
      price: 'GHS 40.00',
      unit: 'Box',
      description: 'Juicy, deep red tomatoes grown without harmful pesticides. Perfect for fresh salads or rich sauces.',
      image: '/farmproduce/tomatoes.jpeg',
      tag: 'ORGANIC',
      featured: false
    },
    {
      name: 'Dried Red Chilies (Bulk)',
      category: 'Vegetables',
      price: 'INQUIRE',
      unit: '5kg+',
      description: 'Sun-dried red chilies offering intense heat and long shelf life. Ideal for wholesale spices and culinary use.',
      image: '/farmproduce/red-chilies-basket.jpeg',
      tag: 'WHOLESALE',
      featured: false
    },
    {
      name: 'Farm Fresh Poultry',
      category: 'Livestock',
      price: 'GHS 85.00',
      unit: 'Live Bird',
      description: 'Healthy, well-fed birds raised with the highest standards of animal welfare at Success Farmhouse.',
      image: '/farmproduce/live-birds.jpeg',
      tag: 'PREMIUM',
      featured: true
    },
    {
      name: 'Premium Farm Eggs',
      category: 'Livestock',
      price: 'GHS 75.00',
      unit: 'Crate',
      description: 'Rich, nutritious, and gathered daily. Our farm-fresh eggs guarantee the best quality for your family or bakery.',
      image: '/eggs.jpeg',
      tag: 'DAILY',
      featured: false
    },
    {
      name: 'Natural Rubber Sheets',
      category: 'Commodities',
      price: 'QUOTE',
      unit: 'Ton',
      description: 'High-grade, sustainably tapped natural rubber from our expansive plantations. Available for bulk industrial supply.',
      image: '/farmproduce/rubber-production.jpeg',
      tag: 'INDUSTRIAL',
      featured: false
    }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI!);
    console.log('Connected to MongoDB');

    // 1. Seed Admin
    const existingAdmin = await Admin.findOne({ username: 'admin' });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await Admin.create({
        username: 'admin',
        password: hashedPassword,
        role: 'superadmin'
      });
      console.log('Admin user created (admin/admin123)');
    } else {
      console.log('Admin user already exists');
    }

    // 2. Seed Products
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      await Product.insertMany(products);
      console.log(`${products.length} products seeded`);
    } else {
      console.log('Products already exist in database');
    }

    console.log('Seeding completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seed();
