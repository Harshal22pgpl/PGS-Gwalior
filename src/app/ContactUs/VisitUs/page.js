// pages/ContactUs.js

import Head from "next/head";
import Image from "next/image";

const ContactUs = () => {
  const contactMethods = [
    {
      imageUrl: "/message.svg",
      value: "hello@littlelearners.com",
    },
    {
      imageUrl: "/phone.svg",
      value: "+91 91813 23 2309",
    },
    {
      imageUrl: "/hours.svg",
      value: "custom@example.com",
    },
    {
      imageUrl: "/location.svg",
      value: "+123 456 7890",
    },
  ];
  return (
    <>
      <div
        className="w-full bg-white py-10 bg-cover "
        style={{ backgroundImage: "url('/Cloudy.svg')" }}
      >
        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0 mx-auto">
          <div className="flex flex-col justify-start gap-4 text-center">
            <p className="py-2 text-2xl text-[#008080] font-medium">
              START TO SUCCESS
            </p>
            <h1 className="md:leading-[72px] py-2 md:text-6xl text-4xl font-semibold">
              Welcome to <span className="text-[#008080]">PGS</span>{" "}
              <span className="text-[#008080]">Learners</span> Academy
            </h1>
            <p className="py-2 text-lg text-center text-gray-600">
              At Pratibha Global School dedicated to providing a nurturing and
              stimulating environment for young learners. With a commitment to
              excellence in early education, we believe in shaping curious minds
              and building a strong foundation for a lifelong love of learning.
              Our holistic approach fosters intellectual, social, emotional, and
              physical development, ensuring that each child reaches their full
              potential.
            </p>
          </div>
          <div className=" relative pr-2 ">
            <img
              src={"/events/_DSC1401.JPG"}
              className="md:order-last order-first rounded-full max-h-full "
            />
          </div>
        </div>
      </div>
      <section className="">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-20 bg-white rounded-xl shadow flex flex-col md:flex-row justify-evenly md:justify-evenly items-center md:items-center gap-6 md:gap-12 relative ">
          <div
            className="items-center md:items-start text-center md:text-left"
            style={{ backgroundImage: "url('/Rect Light.svg')" }}
          >
            <div className="w-64">
              <div className="text-zinc-800 px-4 py-2 bg-white rounded-lg border-2 text-center border-neutral-800 text-lg max-w-7 font-medium">
                Contact Us
              </div>
            </div>

            <div className="text-4xl lg:text-5xl font-bold mt-4 md:mt-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text">
              Feel Free To Connect With Us
            </div>
          </div>

          <div className="text-gray-800 lg:text-lg font-medium max-w-xl mt-6 md:mt-0">
            <h1>
              We value open communication and are eager to assist you with any
              inquiries. Feel free to reach out to us through any of the
              following contact methods.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="p-4 bg-white shadow-md rounded-md">
                  <div className="flex justify-start gap-5">
                    <div
                      className=" w-10 h-10 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${method.imageUrl})` }}
                    ></div>
                    <p className="mt-2 text-gray-600 text-sm">{method.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center w-screen bg-white">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-3xl">
                Send us a <br /> message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-teal-400 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-teal-100 rounded-2xl">
            <div className="flex flex-col text-black">
              <h1 className="font-bold uppercase text-4xl my-4">
                Drop in our office
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur
                vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Main Office</h2>
                  <p className="text-gray-400">
                    5555 Tailwind RD, Pleasant Grove, UT 73533
                  </p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                  <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <a
                  href="https://www.facebook.com/ENLIGHTENEERING/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  <i className="fab fa-facebook-f text-blue-900" />
                </a>
                <a
                  href="https://www.linkedin.com/company/enlighteneering-inc-"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  <i className="fab fa-linkedin-in text-blue-900" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
