import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import slide1 from '../images/slide-1.jpg';
import slide2 from '../images/slide-2.jpg';
import slide3 from '../images/slide-3.jpg';

const slides = [
  {
    id: 1,
    text: 'We help you get things done',
    bgColor: 'bg-red-500',
    image: slide1,
  },
  {
    id: 2,
    text: 'You can help from them',
    bgColor: 'bg-blue-500',
    image: slide2,
  },
  {
    id: 3,
    text: 'Lets bring them home',
    bgColor: 'bg-green-500',
    image: slide3,
  },
];

export default () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      swiperRef.current.slideNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    swiperRef.current.slideNext();
  };

  const prevSlide = () => {
    swiperRef.current.slidePrev();
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <motion.div
            className={`lg:h-screen h-[70vh] flex justify-center items-center bg-cover bg-center text-white`}
            style={{
              backgroundImage: `linear-gradient(45deg, #000000c9, #000000c9), url(${slide.image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 1, ease: 'easeInOut' }} // Adjust easing for smoother transitions
          >
            <div className='lg:w-2/3 w-11/12 mx-auto'>
              <div className='flex justify-between items-center gap-4'>
                <div
                  className='lg:h-[70px] h-[40px] lg:w-[70px] w-[40px] rounded-full bg-[rgba(0,0,0,0.61)] flex items-center justify-center'
                  role='button'
                  onClick={prevSlide}
                >
                  <FiChevronLeft className='text-3xl' />
                </div>
                <div className='slide-content text-center w-2/3'>
                  <div className='text-[21px]'>
                    <p className='text-[21px] text-red-600 font-semibold uppercase mb-3 '>
                      {slide.text}
                    </p>
                    {/* Add your custom Framer Motion animations here */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }} // Adjust easing for smoother transitions
                      className='lg:text-[54px] text-[21px] uppercase font-bold'
                    >
                      God gives us power
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }} // Adjust easing for smoother transitions
                      className='lg:text-base text-xs font-medium mb-5 '
                    >
                      Jesus is holy, loving and worthy of all our worship and
                      devotion. You will feel heaven in Zegen Church. Join us
                      and praise the Lord Jesus
                    </motion.p>
                    <div className='flex justify-center items-center'>
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }} // Adjust easing for smoother transitions
                        className='lg:px-[35px] px-[25px] py-[10px] lg:py-[15px] text-sm bg-red-700 text-white rounded-md'
                      >
                        Contact Us
                      </motion.button>
                    </div>
                  </div>
                </div>
                <div
                  className='lg:h-[70px] h-[40px] lg:w-[70px] w-[40px] rounded-full bg-[rgba(0,0,0,0.61)] flex items-center justify-center'
                  role='button'
                  onClick={nextSlide}
                >
                  <FiChevronRight className='text-3xl' />
                </div>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
