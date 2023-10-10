'use client';
import Image from 'next/image';
import Slider from './components/Slider';
// import Swiper from './components/Swiper';
import AboutSection from './components/home/AboutSection';
import DonateBanner from './components/home/DonateBanner';
import MinisteriesSection from './components/home/MinisteriesSection';
import CallSection from './components/home/CallSection';

import { type } from 'os';
export default function Home() {
  return (
    <div>
      {/* <AnimationComponent /> */}
      <Slider />
      {/* <Swiper /> */}
      <AboutSection />
      <DonateBanner />
      <MinisteriesSection />
      <CallSection />
    </div>
  );
}
