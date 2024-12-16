import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';

import styles from './layout.module.css';

import './base.css';

const euclidCircularB = localFont({
  src: [
    {
      path: '../assets/fonts/Euclid-Circular-B-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Euclid-Circular-B-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Euclid-Circular-B-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Euclid-Circular-B-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Euclid-Circular-B-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-euclid-circular',
});

export const metadata: Metadata = {
  title: 'Storyteller',
  description:
    "Storyteller's end-to-end platform gives you a best-in-class Stories experience in days with native SDKs, publishing tools, analytics, and ad support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={euclidCircularB.className}>
        <Header />

        <main className={styles.main}>
          <Menu />

          {children}
        </main>
      </body>
    </html>
  );
}
