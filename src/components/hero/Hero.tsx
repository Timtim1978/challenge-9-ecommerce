'use client';

export default function Hero() {
  return (
    <section className='w-full max-w-[393px] h-[223px] lg:max-w-full lg:h-auto pt-[90px] lg:pt-[120px] pr-4 pb-4 pl-4 lg:pl-8'>
      <div className='relative w-[430px] h-[183px] rounded-[12px] lg:mx-[50px] bg-[#F3D7A4] lg:w-[1200px] lg:h-[340px] lg:rounded-[16px]'>
        {/* Image */}
        <div className='w-1/2 flex items-center justify-center'>
          <div className='absolute top-[17px] lg:top-[5px] lg:left-[48px] w-[185px] lg:w-[376px] h-[185px] lg:h-[376px]'>
            <img src='/images/image-4.svg' alt='img-hero' className='' />
          </div>
        </div>

        {/* Teks */}
        <div className='w-1/2 flex items-center'>
          <div className='absolute top-[47px] lg:top-[93px] left-[200px] lg:left-[514px] w-[169px] lg:w-[468px] h-[112px] lg:h-[184px] flex flex-col gap-3 lg:gap-8 opacity-100'>
            <h1 className='h-[32px] text-base font-bold lg:text-5xl lg:font-bold'>
              NEW COLLECTION
            </h1>
            <p className='w-[169px] lg:w-[468px] h-[40px] lg:h-[36px] font-display font-semibold lg:font-semibold text-[10px] lg:text-[21px] leading-[20px] lg:leading-[36px] tracking-[0%] opacity-100'>
              {`Stylish men's apparel for every occasion`}
            </p>
            <button className='w-[93px] lg:w-[180px] h-[28px] lg:h-[48px] flex items-center justify-center gap-[6px] rounded-[6px] lg:rounded-[8px] px-2 py-2 bg-[#0A0D12] text-white text-sm font-medium'>
              Get Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
