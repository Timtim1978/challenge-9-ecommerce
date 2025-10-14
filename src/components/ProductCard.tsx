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
    <div className='flex flex-col items-center'>
      <img
        src={product.image}
        alt={product.name || 'Product Image'}
        className='w-[210px] h-auto rounded-md lg:w-auto lg:h-auto lg:rounded-[12px]'
      />
    </div>
  );
}
