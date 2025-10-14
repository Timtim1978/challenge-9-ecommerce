'use client';

import type { AppProps } from 'next/app';
import { CartProvider } from '../context/CartContext';
import '../styles/globals.css'; // sesuaikan kalau path berbeda

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
