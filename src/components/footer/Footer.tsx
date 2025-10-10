'use client';

export default function Footer() {
  return (
    <footer className='w-full lg:w-[1440px] border-t border-neutral-300'>
      <div className='w-full max-w-[1200px] mx-auto h-[756px] py-10 px-4 flex flex-col gap-4 lg:flex-row lg:justify-between lg:gap-0 lg:h-[450px] lg:py-20 lg:ml-16 lg:pl-[40px] lg:pr-[80px]'>
        {/* Content Container */}
        <div className='w-[361px] h-[280px] lg:w-[380px] lg:h-[344px] lg:gap-10 space-y-4'>
          {/* Logo */}
          <div className='w-40 h-[42px] gap-2'>
            <img src='/images/Logo-footer.svg' alt='Logo-footer' />
          </div>

          {/* Teks */}
          <div className='w-[361px] lg:w-[380px] lg:h-[150px]'>
            <p className='text-sm lg:text-base text-neutral-950 tracking-[-0.02em] pr-8 leading-loose'>
              Explore a realm of style with our fashion e-commerce platform,
              where shopping is effortless. Experience a smooth journey with an
              extensive selection of trendy apparel, all delivered directly to
              your home.
            </p>
          </div>

          {/* Social Media */}
          <div className='w-[196px] h-[88px] space-y-4 gap-5 lg:h-[90px]'>
            <p className='text-sm lg:text-base w-[154px] h-[28px] font-bold tracking-[-0.02em] lg:w-[196px] lg:h[30px] lg:gap-2'>
              Follow on Social Media
            </p>
            <img
              src='/images/social-media-icon.svg'
              alt='social-media'
              className='w-[196px] h-[40px] gap-x-3'
            />
          </div>
        </div>

        {/* E-Commerce Menu */}
        <div className='w-[200px] gap-4 lg:w-auto lg:h-[230px] lg:gap-5 space-y-3'>
          <h3 className='text-sm lg:text-base font-semibold mb-4'>
            E-Commerce
          </h3>
          <ul className='space-y-3 text-sm lg:text-base text-neutral-950'>
            <li>About Us</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Help Menu */}
        <div className='w-[200px] h-[160px] gap-4 lg:w-auto lg:h-[180px] lg:gap-5'>
          <h3 className='text-sm lg:text-base font-semibold mb-4'>Help</h3>
          <ul className='space-y-3 text-sm lg:text-base text-neutral-950'>
            <li>How To Transact</li>
            <li>Payment Method</li>
            <li>How To Register</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
