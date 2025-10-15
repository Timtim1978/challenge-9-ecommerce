'use client';

import { useCart } from '../../context/CartContext';
import { Button } from '../../components/ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = async () => {
    if (items.length === 0) return;

    setLoading(true);

    try {
      const token = localStorage.getItem('token'); // ambil token hasil authorize
      const res = await fetch('/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items }),
      });

      if (!res.ok) throw new Error('Checkout failed');

      const data = await res.json();
      console.log('Checkout success:', data);

      clearCart(); // kosongkan cart setelah checkout berhasil
      router.push('/order-success'); // redirect ke halaman success
    } catch (error) {
      console.error(error);
      alert('Checkout gagal, coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-3xl mx-auto mt-24 px-6'>
      <h1 className='text-2xl font-bold mb-6'>Checkout</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='flex flex-col gap-4'>
          {items.map((item) => (
            <div
              key={item.id}
              className='flex justify-between items-center border p-4 rounded-lg'
            >
              <div>
                <p className='font-medium'>{item.name}</p>
                <p className='text-sm text-gray-500'>Qty: {item.qty}</p>
                <p className='text-sm text-gray-500'>${item.price}</p>
              </div>
              <p className='font-semibold'>${item.price * item.qty}</p>
            </div>
          ))}

          <div className='flex justify-between font-bold text-lg mt-4'>
            <span>Total:</span>
            <span>${total}</span>
          </div>

          <Button onClick={handleCheckout} className='mt-4' disabled={loading}>
            {loading ? 'Processing...' : 'Confirm Checkout'}
          </Button>
        </div>
      )}
    </div>
  );
}
