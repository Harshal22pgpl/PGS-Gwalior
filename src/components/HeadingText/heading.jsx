import React from "react";

const CenteredContent = ({ title, subtitle, content }) => {
  return (
    <div className="flex justify-center items-center my-5">
      <div className="flex flex-col justify-center items-center gap-[10px]">
        {title && (
          <div className="px-3 py-2.5 bg-white rounded-lg border-2 border-black justify-start items-start gap-2.5 inline-flex sm:px-5 sm:py-3 md:py-4 md:px-6">
            <div className="text-center text-zinc-800 text-lg font-medium">
              {title}
            </div>
          </div>
        )}
        {subtitle && (
          <div className="self-stretch text-center text-zinc-900 text-[28px] sm:text-[32px] md:text-[38px] font-bold">
            {subtitle}
          </div>
        )}
        {content && (
          <div className="self-stretch text-center text-zinc-800 text-base sm:text-lg md:text-md font-md max-w-[90vw] md:max-w-3xl">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default CenteredContent;
