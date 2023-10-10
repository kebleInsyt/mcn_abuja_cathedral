import React from 'react';
import church from '../../images/slide-2.jpg';
import { BsHeart } from 'react-icons/bs';
const AboutSection = () => {
  return (
    <div className='w-11/12 mx-auto my-20'>
      <div class='grid grid-cols-2 gap-10'>
        <div>
          <img src={church.src} alt='' />
        </div>
        <div className=' font-OpenSans text-[#8d9297]'>
          <p className='text-[#bf0f30] text-[15px] font-bold'>ABOUT US</p>
          <p className='text-[30px] font-bold text-[#252525] mb-5'>
            We are Taking Small Steps to Make Earth Better Planet
          </p>
          <div className='h-1 w-16 bg-[#bf0f30] mb-4' />
          <p className='text-[15px] text-[#8d9297]'>
            We welcome you with great joy to Zegen Church. We are here to share
            the great news of Jesus Christ to all that will listen.
          </p>
          <p className='text-[25px] font-damion my-5'>
            The name of the Lord is a strong tower; the righteous run into it
            and are safe.
          </p>
          <div class='grid grid-cols-2 gap-4 text-[#8d9297] mb-5'>
            <div>
              <div className='mb-5 h-[45px] w-[45px] rounded-full bg-[#bf0f30] text-white flex justify-center items-center'>
                <BsHeart />
              </div>
              <p className='text-xl font-semibold font-poppins text-[#252525] mb-[15px]'>
                Place Of Heaven
              </p>
              <p className='text-[15px]'>
                Place Of Heaven In Zegen you will feel divinity, piety,
                goodness, faith or right beliefs.
              </p>
            </div>
            <div>
              <div className='mb-5 h-[45px] w-[45px] rounded-full bg-[#bf0f30] text-white flex justify-center items-center'>
                <BsHeart />
              </div>
              <p className='text-xl font-semibold font-poppins text-[#252525] mb-[15px]'>
                Place Of Heaven
              </p>
              <p className='text-[15px]'>
                Place Of Heaven In Zegen you will feel divinity, piety,
                goodness, faith or right beliefs.
              </p>
            </div>
          </div>
          <div>
            <button className='px-[30px] py-[15px] text-white bg-[#bf0f30] rounded-md text-base'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
