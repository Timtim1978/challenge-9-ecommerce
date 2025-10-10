'use client';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className='border p-2 rounded-lg'>
      <img
        src={product.image}
        alt={product.name}
        className='w-full h-auto rounded-md'
      />
      <h2 className='font-semibold mt-2'>{product.name}</h2>
      <p className='text-gray-500'>${product.price}</p>
    </div>
  );
}
