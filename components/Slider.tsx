'use client'
// components/Slider.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';
import slide1 from '../public/images/slide-1.jpg';
import slide2 from '../public/images/slide-2.jpg';
import slide3 from '../public/images/slide-3.jpg';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

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

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setKey((prevKey) => prevKey + 1); // Increment the key to trigger animation reset
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setKey((prevKey) => prevKey + 1); // Increment the key to trigger animation reset
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setKey((prevKey) => prevKey + 1); // Increment the key to trigger animation reset
  };

  return (
    <div className='h-screen relative'>
      <AnimatePresence mode='wait'>
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`lg:h-screen h-[70vh] flex justify-center items-center bg-cover bg-center text-white transition-opacity duration-1000 ${
              index === currentSlide ? `opacity-100` : 'opacity-0 hidden'
            }`}
            style={{
              backgroundImage: `linear-gradient(45deg, #000000c9, #000000c9), url(${slide.image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            initial={{ opacity: 0, x: '100%' }} // Initial opacity is 0 and translates from right
            animate={{ opacity: 1, x: '0%' }} // Animate to opacity 1 and translate to 0
            exit={{ opacity: 0, x: '-100%' }} // Exit animation (fade out and translate to left)
            transition={{ duration: 1, delay: 0.5 }} // Adjust the duration as needed
          >
            <div className='lg:w-2/3 w-11/12 mx-auto'>
              <div className='flex justify-between items-center gap-4'>
                <div
                  className='lg:h-[70px] h-[40px] lg:w-[70px] w-[40px] rounded-full bg-[rgba(0,0,0,0.61)] flex items-center justify-center'
                  role='button'
                  onClick={nextSlide}
                >
                  <FiChevronLeft className='text-3xl' />
                </div>
                <div className='slide-content text-center w-2/3'>
                  <div className='text-[21px]'>
                    <AnimatedText
                      key={key}
                      text={slide.text}
                      className='text-[21px] text-red-600 font-semibold uppercase mb-3 '
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 1.2 }} // Initial scale set to 1.2 for zoom-out effect
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 2 }}
                    >
                      <p
                        key={key}
                        className='lg:text-[54px] text-[21px] uppercase font-bold'
                      >
                        God gives us power
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }} // Initial hidden position below
                      whileInView={{ opacity: 1, y: 0 }} // Animate to visible position
                      transition={{ duration: 1, delay: 0.5 }} // Adjust duration and delay as neede
                    >
                      <p className='lg:text-base text-xs font-medium mb-5 '>
                        Jesus is holy, loving and worthy of all our worship and
                        devotion. You will feel heaven in Zegen Church. Join us
                        and praise the Lord Jesus
                      </p>
                    </motion.div>
                    <div className='flex justify-center items-center'>
                      <motion.button
                        initial={{ opacity: 0, y: 20 }} // Initial hidden position below
                        whileInView={{ opacity: 1, y: 0 }} // Animate to visible position
                        transition={{ duration: 1, delay: 1 }} // Adjust duration and delay as needed
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
                  onClick={prevSlide}
                >
                  <FiChevronRight className='text-3xl' />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Slider;
