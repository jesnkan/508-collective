import type { Metadata } from 'next';
import AboutClient from './about-client';

export const metadata: Metadata = {
  title: "About Us | The 508 Vision",
  description: "Learn more about 508 (Five Zero Eight), a multi-industry conglomerate building the future of retail, media, agriculture, and lifestyle in Ghana and beyond.",
  keywords: "about 508, five zero eight company, 508 ecosystem, business philosophy, innovation ghana, sustainable agriculture, premium retail"
};

export default function AboutPage() {
  return <AboutClient />;
}
