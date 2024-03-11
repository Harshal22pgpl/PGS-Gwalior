"use client";
import React, { useState } from "react";
const FaqAccordion = ({ description, head, background }) => {
  return (
    <>
      <section className="mt-4 lg:w-11/12 md:w-full sm:w-full  relative z-2 overflow-hidden   pb-3  dark:bg-dark lg:pb-2 lg:pt-10">
        <div className="w-full container mx-auto">
          <div className="w-full flex flex-wrap  ">
            <div className="w-full px-2 py-2 lg:w-1/2 ">
              <AccordionItem
                header=" What is the admission process for the school?"
                text="Visit the Admissions page for a step-by-step guide."
              />
              <AccordionItem
                header="Are there any specialized programs, extracurricular activities, or enrichment options available for students?"
                text="Yes, we offer various extracurricular activities and enrichment programs; details are on the Programs page."
              />
              <AccordionItem
                header="What are the tuition fees for the current academic year?"
                text="Tuition fees for [year] are available on the Tuition & Fees page."
              />
            </div>
            <div className="w-full px-2 py-2 lg:w-1/2">
              <AccordionItem
                header="What facilities and resources are available for students?"
                text="Our campus provides state-of-the-art facilities, including [list]; learn more on the Facilities page."
              />
              <AccordionItem
                header=" How does the school handle emergencies or unexpected closures?"
                text="Emergency procedures and closure information are outlined on the Health & Safety page. "
              />
              <AccordionItem
                header=" How does the school communicate with parents about events and important information?"
                text="We use newsletters, emails, and our website to keep parents informed; details on the Communication page."
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3056D3" stop-opacity="0.36" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default FaqAccordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);

    if (backgroundColor == "white") {
      setBackgroundColor("#D3FCD2");
    } else {
      setBackgroundColor("white");
    }
  };
  return (
    <div
      className="mb-8 w-full  rounded-lg border-2 border-black  dark:bg-dark-2  sm:p-8 lg:px-6 md:px-8"
      style={{ backgroundColor: backgroundColor }}
      onClick={() => handleToggle()}
    >
      <button className={`faq-btn flex w-full text-left `}>
        <div className="md:mr-5 lg:mr-5 sm:mr-0 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full md:h-16 lg:h-24 sm:h-20">
          <h4 className=" mt-1 md:text-lg lg:text-lg sm:text-md font-semibold  text-dark dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-10  duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="border-t-2 border-black md:py-3 lg:py-3 sm:py-0 lg:h-20 md:h-20 sm:h-24 text-base  leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};
