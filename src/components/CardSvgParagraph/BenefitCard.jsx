import React from "react";
import Image from "next/image";
const BenefitCard = ({ cardDetails }) => {
  if (!cardDetails) {
    // Handle the case where clientDetails is not provided
    return <div>Error: Details not provided</div>;
  }
  const { heading, headingDescription, svgLink } = cardDetails;
  return (
    <>
      <div className="w-full  flex-col justify-start items-start inline-flex relative mt-10 ">
        <div className=" bg-tteal rounded-md w-12   h-12    absolute left-4 -top-5 border-2 border-black">
          <Image
            className="inline p-3"
            src={svgLink}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="self-stretch md:h-56 lg:h-56 sm:h-64 px-3 pl-4 pt-14 rounded-lg pb-10 bg-bteal  border-2 border-black flex-col justify-start items-start gap-4 flex shadow-[5px_5px_2px_2px_#006666]"
          style={{ backgroundImage: "url('/tealBg.svg')" }}
        >
          <h1 className="font-bold text-xl text-black">{heading}</h1>
          <div className="self-stretch text-neutral-600 text-sm font-medium ">
            {headingDescription}
          </div>
        </div>
      </div>
    </>
  );
};
export default BenefitCard;
