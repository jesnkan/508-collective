import type { Metadata } from 'next';
import DSTVRetailClient from './dstv-retail-client';

export const metadata: Metadata = {
  title: "DSTV Retail | Premium Entertainment & Electronics",
  description: "Your destination for DSTV subscriptions, installations, and premium electronics. Entertainment delivered with the ultimate retail experience.",
  keywords: "DSTV Retail, DSTV subscription, DSTV installation, premium electronics, smart home integration, digital entertainment",
};

export default function DSTVRetailPage() {
  return <DSTVRetailClient />;
}
