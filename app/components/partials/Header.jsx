import { useState, useEffect } from 'react';
import { TiLocationOutline } from 'react-icons/ti';
import { FaFacebookF } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Function to check whether the navigation should become sticky
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsSticky(scrollY > 0); // You can adjust the scroll threshold as needed
    };

    // Add a scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='absolute top-0 w-full'>
      <div className='topnav border-b border-gray-50 hidden md:block'>
        <div className='w-11/12 mx-auto'>
          <div className='flex items-center justify-between'>
            <div className='header-address flex gap-4 py-4 items-center text-white'>
              <TiLocationOutline className='text-white text-2xl' /> 684 West
              College St. Sun City, USA
            </div>
            <div>
              <ul className='flex items-center'>
                <li className='p-4 border-r border-l'>
                  <Link href='#'>
                    <FaFacebookF className='text-white text-2xl' />
                  </Link>
                </li>
                <li className='p-4 border-r'>
                  <Link href='#'>
                    <FaFacebookF className='text-white text-2xl' />
                  </Link>
                </li>
                <li className='p-4 border-r'>
                  <Link href='#'>
                    <FaFacebookF className='text-white text-2xl' />
                  </Link>
                </li>
                <li className='p-4 border-r'>
                  <Link href='#'>
                    <FaFacebookF className='text-white text-2xl' />
                  </Link>
                </li>
                <li className='p-4 border-r'>
                  <Link href='#'>
                    <FaFacebookF className='text-white text-2xl' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isSticky ? 'fixed w-full top-0 bg-gray-500 z-50' : 'hidden md:block'
        } `}
      >
        <div className='w-11/12 mx-auto'>
          <div className='flex justify-between py-4'>
            <FaBars className='text-3xl md:hidden block' />
            <p className='text-3xl text-white font-poppins font-bold'>ZENGEN</p>
            <div className=''>
              <ul className='md:flex items-center gap-10 hidden'>
                <li className=''>
                  <Link href='#' className='text-white'>
                    Home+
                  </Link>
                </li>
                <li className=''>
                  <Link href='#' className='text-white'>
                    Home+
                  </Link>
                </li>
                <li className=''>
                  <Link href='#' className='text-white'>
                    Home+
                  </Link>
                </li>
                <li className=''>
                  <Link href='#' className='text-white'>
                    Home+
                  </Link>
                </li>
                <li className=''>
                  <button className='px-[30px] py-[10px] text-white bg-[#bf0f30] rounded-md text-base'>
                    Donate
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
