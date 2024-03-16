"use client";
import { CONTACT_INITIAL } from "@/lib/constants";
import { ERR_MSG } from "@/lib/constants/admission";
import { postContact } from "@/lib/services/contact/contact";
import { validator } from "@/lib/helpers/validator";
import Image from "next/image";
import { useState } from "react";
import Loader from "../Loader/Loader";
import Notification from "../Toast/Notification";
import { SUCCESS_MSG } from "@/lib/constants/contact";
import { scrollToTop } from "@/lib/helpers/scrollToTopOfContainer";

const contactMethods = [
  {
    imageUrl: "/message.svg",
    value: "pratibhaglobalgwl@gmail.com",
  },
  {
    imageUrl: "/phone.svg",
    value: "+91 7880189992",
  },
  {
    imageUrl: "/hours.svg",
    value: "Hours 8.30 AM - 1:30 PM",
  },
  {
    imageUrl: "/location.svg",
    value: " Gram Ratwai, Chitora Road , Morar, Gwalior (MP)",
  },
];
const ContactForm = () => {
  const [contactData, setContactData] = useState(CONTACT_INITIAL);
  const [hasError, setError] = useState({ msg: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = ({ target }) => {
    setError({ msg: "", type: "" });
    const { name, value } = target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };
  const handleForceUpdate = () => setError({ msg: "", type: "" });
  const handleSubmit = async () => {
    const isValid = validator(contactData, ERR_MSG, "email");
    if (isValid === true) {
      try {
        setIsLoading(true);
        const res = await postContact(contactData);
        if (res) {
          setIsLoading(false);
          setError({
            msg: SUCCESS_MSG(contactData.firstName),
            type: "success",
          });
          setContactData(CONTACT_INITIAL);
          scrollToTop();
        }
      } catch (error) {
        setIsLoading(false);
      }
    } else {
      scrollToTop();
      setError({ msg: isValid, type: "error" });
    }
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Notification
            msg={hasError.msg}
            type={hasError.type}
            onClick={handleForceUpdate}
          />

          <div
            className="w-full h-auto bg-white py-10 sm:bg-cover lg:bg-contain "
            style={{ backgroundImage: "url('/Cloudy.svg')" }}
          >
            <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0 mx-auto">
              <div className="flex flex-col justify-start gap-4 text-center">
                <p className="py-2 text-2xl text-[#008080] font-medium">
                  CONTACT US
                </p>
                <h1 className="md:leading-[72px] py-2 md:text-6xl text-4xl font-semibold">
                  Feel Free{" "}
                  <span className="text-[#008080]">
                    <br></br>To{" "}
                  </span>{" "}
                  <span className="text-[#008080]">
                    <br></br>Connect
                  </span>{" "}
                  With Us
                </h1>
                {/* <p className='py-2 text-lg text-center text-gray-600'>We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods.</p> */}
              </div>
              <div className=" relative pr-2 ">
                {/* <img  src={'/events/_DSC1401.JPG'} className="md:order-last order-first rounded-full max-h-full " /> */}
                <div className="text-gray-800 lg:text-lg font-medium max-w-xl mt-6 md:mt-0">
                  <h1>
                    We value open communication and are eager to assist you with
                    any inquiries. Feel free to reach out to us through any of
                    the following contact methods.
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
                    {contactMethods.map((method, index) => (
                      <div
                        key={index}
                        className="p-4 bg-white shadow-md rounded-md"
                      >
                        <div className="flex justify-start gap-3">
                          <div
                            className=" w-10 h-10 rounded-full bg-cover bg-center"
                            style={{
                              backgroundImage: `url(${method.imageUrl})`,
                            }}
                          ></div>
                          <p className="mt-2 w-9/12 text-gray-600 text-sm">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-screen bg-white">
            <div
              className="container mx-auto my-4 px-4 lg:px-20"
              id="msgContainer"
            >
              <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                <div className="flex">
                  <h1 className="font-bold uppercase text-3xl">
                    Send us a <br /> message
                  </h1>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input
                    name="firstName"
                    value={contactData.firstName}
                    onChange={handleChange}
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name*"
                  />
                  <input
                    name="lastName"
                    value={contactData.lastName}
                    onChange={handleChange}
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Last Name*"
                  />
                  <input
                    name="email"
                    value={contactData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                  />
                  <input
                    name="phone"
                    value={contactData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Phone*"
                  />
                </div>
                <div className="my-4">
                  <textarea
                    name="message"
                    value={contactData.message}
                    onChange={handleChange}
                    placeholder="Message*"
                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div className="my-2 w-1/2 lg:w-1/4">
                  <button
                    onClick={handleSubmit}
                    className="uppercase text-sm font-bold tracking-wide hover:bg-teal-700 active:bg-teal-800 bg-teal-400 text-gray-100 p-3 rounded-lg w-full 
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
                  <p className="text-gray-400"></p>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-map-marker-alt pt-2 pr-2" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Main Office</h2>
                      <p className="text-gray-400">
                        Gram Ratwai, Chitora Road , Morar, Gwalior (MP)
                      </p>
                    </div>
                  </div>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-phone-alt pt-2 pr-2" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Call Us</h2>
                      <p className="text-gray-400">Tel:+917880189992</p>
                      <p className="text-gray-400">Fax:+91 758380100</p>
                    </div>
                  </div>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <a
                      href="https://www.google.com/maps/search/pratibha+global+school+GWALIOR/@22.8001571,75.8378225,17z?entry=ttu"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                    >
                      <i className="fab fa-facebook-f text-blue-900" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ContactForm;
