import React from 'react';
import { BsHeart } from 'react-icons/bs';
const DonateBanner = () => {
  return (
    <section className='bg-donate-pattern min-h-[70vh] flex items-center font-OpenSans py-10'>
      <div className='w-3/4 mx-auto text-center text-white'>
        <div className='flex justify-center mb-10'>
          <div className='mb-5 h-[45px] w-[45px] rounded-full bg-[#bf0f30] text-white flex justify-center items-center'>
            <BsHeart />
          </div>
        </div>
        <p className='text-[42px] font-poppins font-bold'>
          “Pray! And listen to God! You can do this alone, but find somebody to
          do it with you”
        </p>
        <p className=' font-damion text-[25px] mt-5 mb-10'>
          Real Story Cross Journey from Anna Hampton
        </p>
        <div className='flex justify-center'>
          <button className='px-[30px] py-[15px] text-white border-2 border-[#bf0f30] rounded-md text-base'>
            Donate Online
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonateBanner;
