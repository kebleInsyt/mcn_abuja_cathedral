import React from 'react';
import { BsHeart } from 'react-icons/bs';
import slide2 from '../public/images/slide-2.jpg';
import Link from 'next/link';

const MinisteriesSection = () => {
  const slides = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div className='w-11/12 mx-auto my-20'>
      <p className='text-[#bf0f30] text-[15px] font-bold text-center'>
        MINISTRIES
      </p>
      <p className='text-[30px] font-bold text-[#252525] mb-5 text-center'>
        Our Ministries
      </p>
      <div className='flex justify-center'>
        <div className='h-1 w-16 bg-[#bf0f30] mb-4' />
      </div>
      <div class='grid grid-cols-3 gap-8 text-[#8d9297] my-5'>
        {slides.map((item) => (
          <div
            className='bg-white rounded-xl border-b-4 border-[#bf0f30]'
            key={item.id}
          >
            <div className='bg-gray-400 h-[250px] rounded-xl'></div>
            <div className='p-5'>
              <div class='ministries-excerpt'>
                <p className='font-[15px] mb-3'>
                  A Women’s ministry includes hosting Bible studies, services,
                  support group, and gathering events. The goal of this women’s
                </p>
              </div>
              <div class='post-more'>
                <Link
                  class='text-[#bf0f30] border-b-4 border-[#bf0f30] font-semibold'
                  href='https://elementor.zozothemes.com/zegen/ministries/womens-ministry/'
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinisteriesSection;
