'use client';

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';

export default function ShoppingCart() {
  const { items, removeFromCart } = useCart();

  return (
    <Popover>
      <PopoverTrigger>
        <img
          src='/images/cart.svg'
          alt='Cart'
          className='w-5 h-5 cursor-pointer'
        />
      </PopoverTrigger>

      <PopoverContent className='w-64 p-4'>
        {items.length === 0 ? (
          <p className='text-gray-500'>Your cart is empty.</p>
        ) : (
          <div className='flex flex-col gap-2'>
            {items.map((item) => (
              <div key={item.id} className='flex justify-between items-center'>
                <div>
                  <p className='font-medium'>{item.name}</p>
                  <p className='text-sm text-gray-500'>Qty: {item.qty}</p>
                  <p className='text-sm text-gray-500'>${item.price}</p>
                </div>
                <Button
                  size='sm'
                  variant='ghost'
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
