import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mohammed Amjad K | Full Stack Developer & Data Scientist',
  description:
    'Full Stack Developer & Data Scientist with hands-on experience in Node.js, Express, MongoDB, Flutter, and Computer Vision at Zoople Technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body className="min-h-screen text-slate-100 antialiased selection:bg-blue-500/30 selection:text-blue-100">
        {children}
      </body>
    </html>
  );
}
