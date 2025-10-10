'use client';

import Link from 'next/link';

export default function OrderSuccess() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4'>
      <h1 className='text-3xl font-bold text-green-600 mb-4'>
        🎉 Order Successful!
      </h1>
      <p className='text-gray-700 mb-6 text-center'>
        Terima kasih sudah melakukan pembelian. Pesananmu sudah kami terima dan
        sedang diproses.
      </p>
      <Link
        href='/'
        className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
      >
        Kembali ke Home
      </Link>
    </div>
  );
}
