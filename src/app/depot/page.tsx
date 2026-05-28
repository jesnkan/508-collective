import type { Metadata } from 'next';
import DepotClient from './depot-client';

export const metadata: Metadata = {
  title: "Depot Store | Authentic Ghanaian Groceries",
  description: "Shop premium Ghanaian products at the Depot Store. From 508 Roasted Corn & Groundnuts to Organic Gari and Shito Dedeede.",
  keywords: "Depot Store, 508 Roasted Corn, Organic Gari, Shito Dedeede, Ghanaian groceries, authentic West African food, organic snacks"
};

export default function DepotPage() {
  return <DepotClient />;
}
