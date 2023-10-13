'use client';
import Image from 'next/image';
import Slider from './components/Slider';
// import Swiper from './components/Swiper';
import EventsSlider from './components/home/EventsSlider';
import AboutSection from './components/home/AboutSection';
import DonateBanner from './components/home/DonateBanner';
import MinisteriesSection from './components/home/MinisteriesSection';
import CallSection from './components/home/CallSection';
import FancyPattern from './components/home/FancyPattern';
import BlogSection from './components/home/BlogSection';
import Footer from './components/partials/Footer';

import { type } from 'os';
export default function Home() {
  return (
    <div className='bg-[#e5e5e5]'>
      {/* <AnimationComponent /> */}
      <Slider />
      <EventsSlider />
      {/* <Swiper /> */}
      <AboutSection />
      <DonateBanner />
      <MinisteriesSection />
      <CallSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
