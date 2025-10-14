'use client';

import ProductCard from '../ProductCard';

const products = [
  {
    id: '1',
    image: '/images/product-card1.svg',
    name: 'Product 1',
    price: 100,
  },
  {
    id: '2',
    image: '/images/product-card2.svg',
    name: 'Product 2',
    price: 150,
  },
  {
    id: '3',
    image: '/images/product-card3.svg',
    name: 'Product 3',
    price: 200,
  },
  {
    id: '4',
    image: '/images/product-card4.svg',
    name: 'Product 4',
    price: 250,
  },
  {
    id: '5',
    image: '/images/product-card5.svg',
    name: 'Product 5',
    price: 300,
  },
  {
    id: '6',
    image: '/images/product-card6.svg',
    name: 'Product 6',
    price: 350,
  },
  {
    id: '7',
    image: '/images/product-card7.svg',
    name: 'Product 7',
    price: 400,
  },
  {
    id: '8',
    image: '/images/product-card8.svg',
    name: 'Product 8',
    price: 450,
  },
  {
    id: '9',
    image: '/images/product-card9.svg',
    name: 'Product 9',
    price: 450,
  },
  {
    id: '10',
    image: '/images/product-card10.svg',
    name: 'Product 10',
    price: 450,
  },
  {
    id: '11',
    image: '/images/product-card11.svg',
    name: 'Product 11',
    price: 450,
  },
  {
    id: '12',
    image: '/images/product-card12.svg',
    name: 'Product 12',
    price: 450,
  },
  {
    id: '13',
    image: '/images/product-card13.svg',
    name: 'Product 13',
    price: 450,
  },
  {
    id: '14',
    image: '/images/product-card14.svg',
    name: 'Product 14',
    price: 450,
  },
  {
    id: '15',
    image: '/images/product-card15.svg',
    name: 'Product 15',
    price: 450,
  },
  {
    id: '16',
    image: '/images/product-card16.svg',
    name: 'Product 16',
    price: 450,
  },
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
