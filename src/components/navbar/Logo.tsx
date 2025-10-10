'use client';

import Image from 'next/image';

export default function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src='/images/Logo.svg'
        alt='Logo'
        width={40}
        height={40}
        className='inline-block'
      />
      {/* ✅ Sembunyikan teks Shirt di layar kecil */}
      <span className='hidden sm:inline text-2xl font-bold text-gray-900'>
        Shirt
      </span>
    </div>
  );
}
