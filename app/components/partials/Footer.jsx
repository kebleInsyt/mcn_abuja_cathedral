import React from 'react';
import slide2 from '../../images/slide-2.jpg';
import { BsStar } from 'react-icons/bs';
import { PiCrossBold } from 'react-icons/pi';
import Link from 'next/link';
const Footer = () => {
  const footerLinks = [
    { id: 1, name: 'Who We Are?' },
    { id: 2, name: 'Support And FAQ’s' },
    { id: 3, name: 'Payments' },
    { id: 4, name: 'Donations Terms' },
    { id: 5, name: 'Volunteer' },
  ];
  return (
    <section>
      <div className='bg-donate-pattern bg-cover bg-center text-white py-20'>
        <div className='w-11/12 mx-auto'>
          <div class='grid lg:grid-cols-4 grid-cols-1 gap-4'>
            <div>
              <p className='flex items-center gap-3 text-xl mb-4 font-bold'>
                <PiCrossBold className='text-[#bf0f30]' />
                About Zegen
              </p>
              <p>
                Zegen Church WordPress Theme is professionaly desisgned for
                non-profit church, modern church, prayer group, Christian,
                charity, non-profit organization. Grab it soon!
              </p>
            </div>
            <div>
              <p className='flex items-center gap-3 text-xl mb-4 font-bold'>
                <PiCrossBold className='text-[#bf0f30]' />
                Quick Links
              </p>
              <ul>
                {footerLinks.map((footerLink) => (
                  <li
                    key={footerLink.id}
                    className='py-[9px] flex gap-3 items-center'
                  >
                    <BsStar className='text-[#bf0f30]' />
                    <Link href='#' className='text-white'>
                      {footerLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className='flex items-center gap-3 text-xl mb-4 font-bold'>
                <PiCrossBold className='text-[#bf0f30]' />
                Latest News
              </p>
              <div className='flex gap-5   mb-6'>
                <div className='w-1/3'>
                  <img src={slide2.src} alt='' className='rounded-lg' />
                </div>
                <div className='w-2/3'>
                  <div className=''>
                    <p>Blog Giving Back – Uganda Training Centers</p>
                    <p className='text-[13px] font-OpenSans italic text-[#a5a5a5]'>
                      Oct 21, 2019
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex gap-5 mb-6'>
                <div className='w-1/3'>
                  <img src={slide2.src} alt='' className='rounded-lg' />
                </div>
                <div className='w-2/3'>
                  <div className=''>
                    <p>Blog Giving Back – Uganda Training Centers</p>
                    <p className='text-[13px] font-OpenSans italic text-[#a5a5a5]'>
                      Oct 21, 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className='flex items-center gap-3 text-xl mb-5 font-bold'>
                <PiCrossBold className='text-[#bf0f30]' />
                Newsletter
              </p>
              <p>
                Sign up for our weekly newsletter to stay updated on all news
                and events at Zegen Church. Email updates on new product
                Announcements, Gift Ideas, Special Promotions and More.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#000f21] text-white py-5'>
        <div className='w-11/12 mx-auto'>
          <div className='flex'>
            <p className='text-[13px] font-OpenSans'>
              Copyrights © 2023 Zegen. Designed by Zozothemes ♥
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
