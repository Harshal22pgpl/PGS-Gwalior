'use-client'

import { useEffect } from "react";


const PreviewImg = ({ show = false, imgSrc = '', onCancle, title='' }) => {
  useEffect(() => {
    const handleOutsideClick = () => {
      if (show) {
        onCancle();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [show, onCancle]);
  return (
    <div
      id="default-modal"
      data-modal-show="true"
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/50 z-50 ${!show && 'hidden'}`}
    >
      <div className="absolute w-full max-w-2xl px-2 md:w-full md:max-w-xl">
        <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">

          <div className="flex justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-gray-900 text-xl text-center lg:text-2xl font-semibold dark:text-white">
              {title && title}
            </h3>
            <button onClick={onCancle} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <img className='w-full' src={imgSrc} />
          </div>

          <div className="flex space-x-2 items-center justify-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600 w-full">

            <button onClick={onCancle} data-modal-toggle="default-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewImg
