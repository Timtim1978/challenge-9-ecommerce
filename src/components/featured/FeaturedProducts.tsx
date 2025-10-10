// src/components/featured/FeaturedProducts.tsx
'use client';

import ProductCard from '../ProductCard';

const products = [
  { id: '1', image: '/images/product-card1.svg' },
  { id: '2', image: '/images/product-card2.svg' },
  { id: '3', image: '/images/product-card3.svg' },
  { id: '4', image: '/images/product-card4.svg' },
  { id: '5', image: '/images/product-card5.svg' },
  { id: '6', image: '/images/product-card6.svg' },
  { id: '7', image: '/images/product-card7.svg' },
  { id: '8', image: '/images/product-card8.svg' },
];

export default function FeaturedProducts() {
  return (
    <section className='mt-12 px-6 max-w-[1240px] mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Featured Product</h1>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      <div className='w-full pt-2 pb-10 flex justify-center gap-6 items-center'>
        <button className='w-[160px] h-[48px] border border-neutral-300 rounded-[12px] p-2 bg-white text-neutral-950 font-medium lg:w-[220px] lg:h-[48px]'>
          Load More
        </button>
      </div>
    </section>
  );
}
