import type { Metadata } from 'next';
import ConnectClient from './connect-client';

export const metadata: Metadata = {
  title: "Connect With Us | 508",
  description: "Get in touch with 508 (Five Zero Eight). We're always open to new partnerships, inquiries, and visionary collaborations.",
  keywords: "contact 508, connect with five zero eight, business inquiries ghana, 508 partnerships, contact success farmhouse, contact city sips"
};

export default function ConnectPage() {
  return <ConnectClient />;
}
