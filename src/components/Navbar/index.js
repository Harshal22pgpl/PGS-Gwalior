'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import React from 'react';
import OldNavbar from './OldNavabr';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const router = useRouter()
  const path = usePathname()

  useEffect(() => {
    // Update isSmallScreen state on window resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the threshold as needed
    };


    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  const handleStuffLogin = () => {
    router.push('/loginPage')
  }

  return (
    <>
        
      {/* Bottom section of the navbar */}
      {path.includes('admin') ? <></> :
      <div>
         <nav className="w-full">
          {/* Top section of the navbar */}
          <div className="bg-black text-white">
            <div className="flex items-center justify-between p-4">
              <div className="items-center flex">
                {/* Navigation items */}
                {navData.map((nav) => (
                  <Link key={nav} href="admission-enquiry">
                    <div className="px-4 py-2 text-xs leading-none flex gap-2">
                      <img className="w-3 h-3 font-extrabold" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACUCAMAAAC+99ssAAAAZlBMVEX///8AAAD5+fny8vL8/Py9vb3q6urj4+Pg4OCUlJSysrLu7u6Hh4cdHR0wMDDR0dHX19ednZ01NTU8PDzJyclaWlp6enoJCQmAgIDDw8MSEhIlJSVVVVVjY2NOTk6pqalGRkZsbGzfjv/dAAAEd0lEQVR4nO1b2aKqMAwkgKLIERXEBTf+/ycvuF2UJkWLTB+YDzhnLE0mk6SOM2DAgAEDBjyxCJfLZThB01BiclxtiGiTbMdoKg24U/qPEM3mHRGRvfTOL+Rov0MTqmO3f2VHa4vu3mJF7xihOT0xWzfIUeGiWT1QNMlR7qFZ3bFUkCOyhN1oYzG7RaIkZwc796Qmd7GCnSJcr1iiiVVQRwTRfIFmVmL0rhEPTH00tbJomjPkThbk4nHOkKMZmloZrgVH7oym5vARQZEFly7kyB0sqJ5StYAR/cVoamXV1Czp7rAgD/tsRBwtSCYRRy4J0NQaJqd26SywO+kfx26KpuY4HidgNEdTK8kxJV35XfGZzt1y5PYWtADYiKAtPpnELLkEX5kEXL1JhC+HVbb/DryCuaxGUIE3YWxJRxd8QzZlyVnQc1qwGkERmpsz5iMC7/zdjCU3x1+6KUvOAgUb8RGRwRUsZn0E7eHkArZqog1cwXiTY4OC8RFhgYKxtp9oBfdgKa8RBPdgYz4iLFAwXsAsaOiwJqdUMHhD58z1msiCMWwsRESBJsfb/tJboz2Yz4yZruTQl04wOaWCobvDIW9eaY1WsFgIV/hIIhC4wT2YJ2gEfCThSxEBVzDe9hPl6GQimBz8HCxg+9aEVzDvKJBLwN5asP2lgqVYcmJEwD2YGBHooboYEWTmwcZpdpkn2ejrqzu+CNw2Rgrmhw8DlZ+/02mvkE4uMvquWa2sOH71EQTbT3QxqkxeM8H+i9gXI4KMMl1jSBR9+lsXQr1pqGCT5n1ef3Z8QiOMTLuIqmZM/snv5fdfKpiNJFx1ufhBcAi233iH2GPuzKptjpIjwnCo7vF/uJV/StmlqwoHw1qdZ0eHFlcmkDSC/ky7w57020NdvIkmh/bGHsyVSkbKNMcnmZxOPJjQ3i1xEX8+P+2vMO/A+Mu5VDyAnRgR3QzVmbXpJw6c0+NWmu/oyIPJ36f8Quqym8njD2RdNXTE+uf6n1R1gagRHY4kfNGwVMibgqT5SR16MFd7ejR9O76RHBGdjiTEfuUNx5cQnMgRcey2iyha5RteyiqZXOcjiRanR8dHi0uabVbofiTh6U/voRy6KNp2Tk7TpLnj73rbl3JEdKFg39GjpMgSjbj8qIs4K1rQ0+JnXcRxm9PT4IdD9ZmcKdrgl61raSTdCr/tIgYHI3K/XmzWaJSMjhVMgUCTMATkPWzofH96vQzVNSU5i55GEouvyJ36moPxu9U8enwlIW1FMOhzDsa/1WDQ79McYU1YiZ6Hr7uP8l7vc7DRBx8X8LhUbmvWcUAsS8j9qRoww9ew3d0DrYX5Z3FQckeGIVfR05M7AXdMtS0W8+6wCZaau4cdqmsaVGsoOU2LpY9yWAOhzYleC3OkV4gWPC51HI+hd0LvIt7ANNjxl+4GX9VigS82P6FY6rDgcekTjZdhF/griTrcNyeE3kV8w0to5OidtQZm0bOgKmwJ1xrcOKo+7yqL7Uh07/Bdz/Nc9Lb6gAEDBrTHPzizMma/I76AAAAAAElFTkSuQmCC" />
                      {nav}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Icons section */}
              <div className="flex gap-5 hidden lg:flex">
                {/* <a>{svgIcon}</a>
             <a>{svgIcon}</a> */}
              </div>

              {/* Login button */}
              <div className="flex">
                <Link className="text-xs px-4 py-2 leading-none rounded-full hover:bg-teal-300 hover:text-black border-2" href='\loginPage' onClick={handleStuffLogin}>

                  STAFF LOGIN
                </Link>
              </div>

              {/* Toggle button for small screens */}
              {isSmallScreen && (
                <div className="lg:hidden text-center">
                  <button className="text-white p-2 " onClick={toggleMenu}>
                    {/* You can use any menu icon here */}
                    <button className="relative group">
                      <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                          <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                          <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                          <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
                        </div>
                      </div>
                    </button>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Image section */}
          <div className="w-full h-[20%] bg-white flex justify-center">
            <div className="container flex flex-col md:flex-row justify-between w-full md:w-[90%] p-5 gap-10 items-center">
              <div >
                <Image className='w-auto' alt="image" width={170} height={90} src="/Screenshot 2024-01-15 183512.png"  />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center text-center">
                <h5 className="text-teal-500 text-2xl md:text-3xl font-extrabold">PRATIBHA GLOBAL SCHOOL GWALIOR</h5>
                <h5 className="text-sm md:text-base">MP Board&nbsp; AFFILIATION NO.- 1031066 , MP Board SCHOOL CODE. - 51033</h5>
              </div>
              <div className=" flex flex-col justify-center">
                <Image className='w-auto' alt="image" width={170} height={100} src="/logo1.png" />
              </div>
            </div>
          </div>

          {/* Sidebar (only in small screens) */}
          {isSmallScreen && (
            <Sidebar isOpen={isMenuOpen} onClose={closeMenu} dropdownItems={dropdownItems} />
          )}
        </nav>
        <div className="lg:flex justify-center max-w-full content-center hidden md:flex  w-full ">
          <div
            className={`bg-teal-500 h-12 rounded-b-lg flex justify-around w-[100%]  text-center ${isMenuOpen ? 'flex-col' : ''
          }`}
          >
            <Link className="text-base font-extrabold text-[13px] px-6 py-4 leading-none hover:bg-white" href="/">
              HOME
            </Link >

            {dropdownItems.map(({ name, values }) => (
              <DropdownNavItem name={name} values={values} key={name} />
              ))}
            
            <Link className='text-base font-extrabold text-[13px] px-6 py-4 leading-none hover:bg-white flex" href="/contact-us' href="/contact-us">
            CONTACT
             </Link>
          </div>
</div>
        </div>}
    </>
  );
};


const Sidebar = ({ isOpen, onClose, dropdownItems }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  // Sidebar component
  const handleSidebarItemClick = (path) => {
    // Navigate to the specified path using router.push
    router.push(path);
    // Close the sidebar
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 max-w-full flex ">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <button onClick={onClose} className="bg-black p-3 text-white text-xl font-bold">
                    Close
                  </button>
                  <div className="p-6">
                    {/* Dropdown items and values */}
                   <Link href='/'><div className='font-bold p-5 text-lg'>Home</div></Link> 
                    {dropdownItems.map(({ name, values }, index) => (
                      <div key={name}>
                        <div
                          onClick={() => toggleDropdown(index)}
                          className="flex items-center cursor-pointer justify-between p-5"
                        >
                          <p className="font-bold">{name}</p>
                          {values.length > 0 && (
                            <div className={`w-6 h-6 transition-transform border-2 ${activeDropdown === index ? 'transform rotate-180 border-2' : ''}`}>
                              {/* Insert your SVG icon here */}
                              <svg
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          )}
                        </div>
                        {activeDropdown === index && values.length > 0 && (
                          <ul className="">
                            
                            {values.map((value, index) => (
                              <li key={index} className="py-2">
                                {/* Use handleSidebarItemClick to navigate and close the sidebar */}
                                <div onClick={() => handleSidebarItemClick(value.path)} className='p-3 shadow-md rounded-lg bg-teal-100 text-teal-600'>
                                  {value.displayName}
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                    <Link href='/contact-us'><div className='font-bold p-5 text-lg' >Contact Us</div></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;



function DropdownNavItem({ name, values }) {
  return (
    <div className="relative group">
      <div className="text-base font-extrabold text-[13px] px-6 py-4 leading-none hover:bg-white flex cursor-pointer">
        {name}
        <svg
          className="w-2.5 h-2.5 ms-1 mt-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </div>
      <div className="hidden text-start group-hover:block absolute z-10 bg-gradient-to-r from-teal-400 to-teal-100 p-5 rounded-lg w-64">
        <ul className="flex flex-col  ">
         
          {values.map((value, index) => (
             <Link href={value.path}>
            <li key={index} className='p-5 hover:bg-white rounded-lg font-extrabold text-[13px]'>
             
                <div>{value.displayName}</div>
             
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

let navData = ['Admission Enquiry'];

let imageData = ['https://lnctworldschools.com/wp-content/uploads/2023/07/lnctlogobs.png'];

let dropdownItems = [
  {
    name: 'ABOUT',
    values: [
      { displayName: 'About School', path: '/about' },
      { displayName: 'About our Leaders', path: '/about/about-leaders' },
      { displayName: 'Message From the Founder', path: '/about/founders-message' },
      { displayName: 'Message From the Chairperson', path: '/about/chairmans-message' },
      { displayName: 'Message From the Managing Director', path: '/about/directors-message' },
      { displayName: 'Principle Message', path: '/about/principals-message' },
      { displayName: 'School Staff', path: '/about/school-staff' },
   
    ]
  },
  {
    name: 'ACADEMICS',
    values: [
      { displayName: 'Academic Features', path: '/academics' },
      { displayName: 'Umang Phase', path: '/academics/kindergarten' },
      { displayName: 'Tarang Phase', path: '/academics/primary_school' },
      { displayName: 'Pratibha Phase', path: '/academics/middle-school' },
      { displayName: 'Tejas Phase', path: '/academics/senior-school' },

    ],
  },
  {
    name: 'IMPORTANT LINKS',
    values: [
      // { displayName: 'ERP login', path: '/ERP-login' },
      // { displayName: 'Admission query', path: '/Admission-query' },
      { displayName: 'Admission process', path: '/admissions' },
      { displayName: 'Staff support', path: '/support' },
    ],
  },
  {
    name: 'FEATURES',
    values: [
      { displayName: 'Life at school', path: '/features/life_at_school' },
      { displayName: 'Creative learning', path: '/features/creativelearning' },
      { displayName: 'unique feature', path: '/features/unique_feature' }

    ],
  },
  {
    name: 'NEWS',
    values: [
      { displayName: 'News', path: '/newsCard'},
      { displayName: 'Upcoming Events', path: '/events' },
      { displayName: 'Events', path: '/studentLife' },
      { displayName: 'Careers', path: '/careers' }
    ],
  },
];

let svgIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);


