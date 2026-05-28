import type { Metadata } from 'next';
import PrintMediaClient from './print-media-client';

export const metadata: Metadata = {
  title: "Print Media | Professional Printing & Branding Solutions",
  description: "508 Print Media offers commercial printing, large format visuals, and branding solutions with precision and scale. Transform your ideas into physical realities.",
  keywords: "Print Media, commercial printing, large format printing, branding solutions, outdoor advertising, digital printing",
};

export default function PrintMediaPage() {
  return <PrintMediaClient />;
}
