import React from "react";
import ImageSlider from "@/components/ImgSlider/page";

const UserPage = ({ clientDetails }) => {
  if (!clientDetails) {
    // Handle the case where clientDetails is not provided
    return <div>Error: Details not provided</div>;
  }

  const {
    images = [],
    sectionTitle,
    sectionDescription,
    videoUrl,
    backgroundImage,
    headTitle,
    headDescription,
  } = clientDetails;

  return (
    <div>
      <section className="relative py-20">
        <div
          className="absolute inset-0 object-contain bg-contain bg-center z-[-1]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4">{headTitle}</h2>
            <p className="text-lg mb-6">{headDescription}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              View Artwork
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl text-center font-bold mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg">{sectionDescription}</p>
        </div>
      </section>

      <section className="py-20 ">
        <div className="max-w-4xl mx-auto px-6 ">
          <div
            className="relative rounded-lg"
            style={{ paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              title="Art Video"
              src={videoUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-200">
        <ImageSlider images={images} />
      </section>
    </div>
  );
};

export default UserPage;
