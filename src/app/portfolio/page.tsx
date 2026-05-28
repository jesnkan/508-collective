import type { Metadata } from 'next';
import PortfolioClient from './portfolio-client';

export const metadata: Metadata = {
  title: "Business Portfolio | The 508 Ecosystem",
  description: "Explore the diverse businesses of the 508 ecosystem. From luxury retail and printing to sustainable agriculture and commerce.",
  keywords: "508 portfolio, multi-industry ecosystem, business ventures, luxury retail, sustainable farming, commercial printing",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
