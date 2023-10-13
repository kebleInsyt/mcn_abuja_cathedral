import React from 'react';
import {
  Autoplay,
  // Navigation,
  Pagination,
  A11y,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const slides = [
  {
    id: 1,
    text: 'We help you get things done',
    bgColor: 'bg-red-500',
    // image: slide1,
  },
  {
    id: 2,
    text: 'You can help from them',
    bgColor: 'bg-blue-500',
    // image: slide2,
  },
  {
    id: 3,
    text: 'Lets bring them home',
    bgColor: 'bg-green-500',
    // image: slide3,
  },
];

const EventsSlider = () => {
  const slides = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <div className='w-10/12 mx-auto -mt-14 z-30'>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        loop={true}
        spaceBetween={50}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className='pb-14 w-full'>
            <div className='relative'>
              <div className='flex gap-8'>
                <div className='lg:w-1/2 w-full'>
                  <div className='event-card bg-white rounded-lg lg:py-[35px] lg:px-[30px] p-4'>
                    <div className='flex lg:gap-5 gap-3'>
                      <div className='lg:w-1/4 w-1/3'>
                        <div>
                          <div className='flex justify-center items-center bg-[#ffeef1] h-[80px] rounded-t-md'>
                            <p className='text-[#bf0f30]'>Jan 3</p>
                          </div>
                          <div className='h-[31px] bg-[#bf0f30] text-white flex justify-center items-center rounded-b-md'>
                            <p className='text-sm font-semibold font-poppins'>
                              8:00 am
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='lg:w-3/4 w-2/3 flex flex-col justify-between'>
                        <h5 className='post-title-head text-xl font-poppins mb-5'>
                          <a href='#' className='post-title font-bold'>
                            Our Sponsorship Meetup Will Be Held Again
                          </a>
                        </h5>
                        <a
                          href='#'
                          className='text-[#bf0f30] underline text-[15px] font-OpenSans font-semibold'
                        >
                          Event detail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventsSlider;
