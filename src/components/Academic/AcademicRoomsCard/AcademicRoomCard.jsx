import React from "react";

export default function AcademicRoomCard({ cardDetails }) {
  const { heading, paragraph, link1, link2, link3, link4 } = cardDetails;
  if (!cardDetails) {
    return <div> Error: Details not fetch</div>;
  }
  return (
    <>
      <div className="w-full md:h-96 lg:h-96 sm:h-20 flex flex-col justify-start items-center lg:gap-[10vh] md:gap-[10vh] gap-2 inline-flex lg:my-8 md:my-8 my-2 ">
        <div className="self-stretch lg:h-80 md:h-96   flex-col justify-start items-start flex ">
          <div className=" self-stretch px-[5vw] justify-start items-start gap-[1.5vw] md:inline-flex lg:inline-flex sm:hidden relative top-10 hidden sm:block">
            <img
              className="grow shrink basis-0 w-[16vw] h-[13vw] rounded-xl border-2 border-neutral-800 "
              src={link1}
            />
            <img
              className="grow shrink basis-0 w-[16vw] h-[13vw] rounded-xl border-2 border-neutral-800"
              src={link2}
            />
            <img
              className="grow shrink basis-0 w-[16vw] h-[13vw] rounded-xl border-2 border-neutral-800"
              src={link3}
            />
            <img
              className="grow shrink basis-0 w-[16vw] h-[13vw] rounded-xl border-2 border-neutral-800"
              src={link4}
            />
          </div>
          <div
            className="  md:h-96 sm:h-96  lg:mb-20 md:mb-20 sm:mb-8 mb-4 self-stretch sm:h-[20vw] sm:px-[5vw] sm:pt-14 sm:pb-6 pb-0 bg-white rounded-xl shadow-[5px_5px_2px_2px_black] border-2 border-white flex-col justify-start items-start gap-[1.5vw] flex"
            style={{ background: "url('/tealBg.svg')" }}
          >
            <div className=" flex-col self-stretch justify-start items-start  inline-flex">
              <div className="grow shrink basis-0  text-[4vw] font-bold p-3 lg:p-0 md:p-0 sm:p-0">
                {heading}
              </div>
              <div className="self-stretch text-neutral-700 text-lg p-3">
                {paragraph}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
