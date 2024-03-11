import React from "react";

const EventView = ({ eventDetails }) => {
  const {
    date,
    month,
    year,
    location,
    startTime,
    endTime,
    heading,
    description,
  } = eventDetails;
  return (
    <>
      <div
        className="w-full h-80 p-20 border flex justify-start items-center"
        style={{ backgroundImage: "url('/tealBg.svg')" }}
      >
        <h1 className="text-6xl font-extrabold">{heading} </h1>
      </div>
      <div className="w-full flex flex-col p-15 justify-center items-center">
        <div className="w-11/12 flex justify-center items-center p-5">
          <p className="text-lg w-9/12 pr-10 m-auto">{description}</p>
          <div className="w-3/5 container mx-auto mt-8 border-2 border-gray-200 rounded-lg p-3">
            <table className="min-w-full bg-white ">
              <tbody>
                <tr>
                  <td className="py-2  px-4 border-b border-gray-200 text-left font-semibold">
                    Event Date :
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-right">
                    {date} {month}, {year}
                  </td>
                </tr>
                <tr>
                  <td className="py-2  px-4 border-b border-gray-200 text-left font-semibold">
                    Start Time :
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-right">
                    {startTime}
                  </td>
                </tr>
                <tr>
                  <td className="py-2  px-4 border-b border-gray-200 text-left font-semibold">
                    End Time :
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-right">
                    {endTime}
                  </td>
                </tr>
                <tr>
                  <td className="py-2  px-4 border-b border-gray-200 text-left font-semibold">
                    location :
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-right">
                    {location}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventView;
