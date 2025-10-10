// src/components/featured/ProductCard.tsx
'use client';

interface Product {
  id: string;
  image: string;
  name?: string;
  price?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className='flex flex-col items-center p-2 border rounded-lg'>
      <img
        src={product.image}
        alt={product.name || 'Product Image'}
        className='w-[210px] h-auto rounded-md lg:w-auto lg:h-auto lg:rounded-[12px]'
      />
      {product.name && (
        <p className='mt-2 font-medium text-center'>{product.name}</p>
      )}
      {product.price !== undefined && (
        <p className='text-sm text-gray-500'>${product.price}</p>
      )}
    </div>
  );
}
