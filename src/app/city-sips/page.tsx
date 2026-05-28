import type { Metadata } from 'next';
import CitySipsClient from './city-sips-client';

export const metadata: Metadata = {
  title: "City Sips | Curated Taste. Refined Living.",
  description: "Experience the art of the pour at City Sips. Rare vintages, artisan spirits, and curated tasting experiences for the refined palate.",
  keywords: "City Sips, rare vintages, artisan spirits, boutique wine, craft spirits, luxury drinks, curated tasting experiences"
};

export default function CitySipsPage() {
  return <CitySipsClient />;
}
