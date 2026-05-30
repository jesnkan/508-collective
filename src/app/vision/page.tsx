import type { Metadata } from 'next';
import VisionClient from './vision-client';

export const metadata: Metadata = {
  title: "The Vision | Five Zero Eight",
  description: "Explore the bold vision of 508. One Ecosystem. Five Pillars. Infinite Growth. Ghana's premier multi-industry holding company.",
  keywords: "508 Vision, Ghana multi-industry, business innovation, African growth, strategic ecosystem"
};

export default function VisionPage() {
  return <VisionClient />;
}
