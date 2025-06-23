

import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Paulah | Software Developer Portfolio',
  description: 'Personal portfolio showcasing Paulah’s projects and skills.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-dark text-light">
        <Navbar />
                <div className="max-w-4xl mx-auto p-4">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
