import type { Metadata } from 'next';
import FarmhouseClient from './farmhouse-client';

export const metadata: Metadata = {
  title: "Success Farmhouse | Sustainable Agribusiness & Innovation",
  description: "Cultivating the future at Success Farmhouse. Modern approach to agribusiness, sustainable farming practices, and high-quality organic produce.",
  keywords: "Success Farmhouse, sustainable agriculture, organic farming, agribusiness, agricultural innovation, farming technology, organic produce",
};

export default function FarmhousePage() {
  return <FarmhouseClient />;
}
