import React from 'react';
import { MdHeadsetMic } from 'react-icons/md';
import FancyPattern from './FancyPattern';
const CallSection = () => {
  return (
    <div className='relative'>
      <section className='bg-donate-pattern bg-center bg-cover flex justify-center relative min-h-[400px]'>
        <div className='w-11/12 mx-auto'>
          <div className='flex lg:flex-row flex-col py-14'>
            <div className='lg:w-1/3 w-full'>
              <div className='w-5/6 bg-[#bf0f30] h-[300px] p-8 text-white rounded-xl mx-auto -m-10 animate-bounce duration-3000 text-center'>
                <div className='flex justify-center'>
                  <MdHeadsetMic className='text-3xl' />
                </div>
                <p className='text-[28px] font-bold'>Call Us</p>
                <div className='flex justify-center'>
                  <div className='h-1 w-16 bg-white mb-4' />
                </div>
                <p>684 West College St. Sun City, USA.</p>
                <p>+8 (123) 985 789</p>
                <p>zegenchurch@mail.com</p>
              </div>
            </div>
            <div className='lg:w-2/3 w-full text-white'>
              <p className='text-[#bf0f30] text-[15px] font-bold'>
                GET IN TOUCH
              </p>
              <p className='text-[30px] font-bold mb-5'>
                Don't hesitate Contact Us
              </p>
              <div className='h-1 w-16 bg-[#bf0f30] mb-4' />
              <p className='text-[15px]'>
                Feel free to Contact Us. Zegen Church WP Theme comes with
                sermons, ministries, events, testimonies, staff members, church
                locations shortcodes to enhance your website.
              </p>
              <div>
                <button className='px-[30px] py-[15px] text-white bg-[#bf0f30] rounded-md text-base'>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <FancyPattern />
      </section>
    </div>
  );
};

export default CallSection;
