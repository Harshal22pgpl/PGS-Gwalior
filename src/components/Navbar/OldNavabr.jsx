'use client'

// Import necessary libraries and components
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import useIsMobile from '@/hooks/useIsMobile';
import Dropdown from '../Dropdown/Dropdown';
import Image from 'next/image';

const OldNavbar = () => {
  const [showDepartment, setShowDepartment] = useState(false);


  const isMobile = useIsMobile();
  const [showMenu, setShowMenu] = useState(false);

  const handleDepartment = () => {
    setShowDepartment(!showDepartment);
  };

  const handleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setShowMenu(isMobile);
  }, [isMobile]);

  const academicChildren = [
    { label: 'Computer Science', route: '/academics/computer-science' },
    { label: 'Mathematics', route: '/academics/mathematics' },
    { label: 'History', route: '/academics/history' },
    // Add more specific academic children as needed
  ];

  const contactChildren = [
    { label: 'Careers', route: '/ContactUs/careers' },
    { label: 'Visit Us', route: '/ContactUs/VisitUs' },
    // Add more specific contact children as needed
  ];

  const headerData = [
    'Home',
    'About Us',
    'Student Life',
    'Academics',
    // {
    //   name: 'Academics',
    //   dropdownItems: academicChildren,
    // },
    'Admissions',
    // 'NAAC',
    // 'Campus Life',
    'News',
    'Contact Us',
    // 'Admin login',
  ];

  const getRoute = (item) => {
    if (typeof item === 'string') {
      // For regular menu items (strings)
      switch (item) {
        case 'Home':
          return '/';
        case 'About Us':
          return '/about';
        case 'Student Life':
          return '/studentLife';
        case 'Academics':
          return '/academics';
        case 'Admissions':
          return '/admissions';
        case 'News':
          return '/news';
        case 'Contact Us':
          return '/contact-us';
        case 'Admin login':
          return '/admin/login';
        case 'Careers':
          return '/careers';
        case 'VisitUs':
          return '/VisitUs'; // Route for Career under Contact Us
        default:
          return `/${item.toLowerCase()}`;
      }
    } else if (item.name === 'Academics') {
      // For Academics dropdown items
      return '/academics'; // Default route for Academics dropdown
    } else if (item.name === 'Contact Us') {
      // For Contact Us dropdown items
      return '/Contact Us'; // Default route for Contact Us dropdown
    } else {
      return '/';
    }
  };


  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
      <div className="flex flex-wrap flex-row justify-between items-center mx-auto max-w-screen p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/Screenshot 2024-01-15 183512.png"
            width={170}
            height={100}
            alt="Flowbite Logo"
          />
        </a>
        <button className="lg:hidden md:hidden sm:relative group" onClick={handleMobileMenu}>
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
            <div className="bg-black h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
            <div className="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
          </div>
        </div>
      </button>
        <div
          id="mega-menu-full"
          className={`${showMenu ? 'hidden' : 'flex'} items-center justify-between font-medium w-full md:flex md:w-auto md:order-1`}
        >
          <ul className={`flex flex-col w-full p-2 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
            {headerData.map((menuItem) => (
              <li key={menuItem.name || menuItem}>
                {menuItem.dropdownItems ? (
                  <Dropdown name={menuItem.name} items={menuItem.dropdownItems}>
                    <div className="flex items-center">
                      <a
                        className="block py-1 px-1 text-xs text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                        aria-current="page"
                      >
                        {menuItem.name} <DropdownIcon />
                      </a>
                    </div>
                  </Dropdown>
                ) : (
                  <Link
                    legacyBehavior
                    href={getRoute(menuItem)}
                    key={menuItem}
                  >
                    <a
                      className="block py-1 px-1 text-xs text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                      onClick={() => handleMobileMenu()}
                    >
                      {menuItem}
                    </a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {showDepartment && (
        <div
          id="mega-menu-full-dropdown"
          className="mt-1 border-gray-200 text-xs shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
        >
          {/* Dropdown content here... */}
        </div>
      )}
    </nav>
  );
};

export default OldNavbar;

export const DropdownIcon = () => (
  <img src='/images/dropdown-svgrepo-com.svg'></img>
);