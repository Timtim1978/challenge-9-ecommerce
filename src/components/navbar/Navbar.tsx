'use client';

import Logo from './Logo';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full h-[84px] px-4 sm:px-6 lg:px-16 flex items-center justify-between bg-white/70 shadow-md backdrop-blur-md z-50'>
      <Logo />

      {/* Catalog & Search */}
      <div className='flex items-center flex-1 max-w-2xl mx-0 sm:mx-6 pl-2 sm:pl-0 gap-4'>
        {/* Catalog Button */}
        <Button className='flex items-center px-2.5 py-2.5 sm:px-4 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50'>
          <img
            src='/images/grid.svg'
            alt='Catalog icon'
            className='w-5 h-5 mr-0 sm:mr-2'
          />
          <span className='hidden sm:inline'>Catalog</span>{' '}
          {/* sembunyi di mobile */}
        </Button>

        {/* Search Input */}
        <div className='relative flex-1 pl-1 sm:pl-0'>
          <span className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500'>
            <img
              src='/images/search.svg'
              alt='Search icon'
              className='w-5 h-5'
            />
          </span>
          <Input
            type='search'
            placeholder='Search'
            className='w-[calc(100%-2rem)] sm:w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
          />
        </div>
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <div className='relative flex items-center cursor-pointer'>
            <img
              src='/images/shopping-cart.svg'
              alt='Shopping Cart'
              className='w-5 h-5'
            />
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center'>
              3
            </span>
          </div>
        </PopoverTrigger>

        <PopoverContent className='w-64'>
          {/* Konten keranjang */}
          <p>Item 1</p>
          <p>Item 2</p>
        </PopoverContent>
      </Popover>

      <div className='flex items-center gap-4'>
        <Button className='hidden sm:flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50'>
          <img src='/images/user.svg' alt='' className='w-5 h-5 mr-2' />
          John Doe
        </Button>
      </div>

      <div
        className='flex items-center sm:hidden ml-4 cursor-pointer'
        id='nav-toggle'
        aria-controls='mobile-menu'
        aria-expanded='false'
      >
        <span className='sr-only'>Open menu</span>
        <img src='/images/Menu.svg' alt='Menu' className='h-6 w-6' />
      </div>
    </nav>
  );
}
