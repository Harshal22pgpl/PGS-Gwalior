import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function page({ cardDetails }) {
  const router = useRouter();

  if (!cardDetails) {
    // Handle the case where clientDetails is not provided
    return <div>Error: Details not provided</div>;
  }

  const { pageName, Description, destination } = cardDetails;

  return (
    <>
      <div className="lg:h-72 md:w-full sm:w-full lg:w-1/3 md: flex flex-col p-9 justify-between items-center  border-2 rounded-md border-teal-500  ">
        <div>
          <h1 className="text-center text-2xl font-bold pb-4 border-dashed border-b-4 border-tteal">
            {pageName}
          </h1>

          <p className="text-xs text-center lg:py-3 py-6">{Description}</p>
        </div>
        <button
          onClick={() => {
            router.push(destination);
          }}
          className="bg-bteal w-full border-2 py-1 border-black rounded-md shadow-[2px_2px_1px_1px_black]"
          style={{ backgroundImage: "url('/tealBg.svg')" }}
        >
          Learn More
          <span className="pl-4">
            <Image
              className="inline"
              src="/right-arrow.svg"
              alt="Hero Image"
              width={15}
              height={15}
            />
          </span>
        </button>
      </div>
    </>
  );
}
