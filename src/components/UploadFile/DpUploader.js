import React, { useEffect, useRef, useState } from "react";

const ProfileUploader = ({ image, setImage }) => {
  const [imgPr, setImgPr] = useState(image);
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImgPr(reader.result);
    };
    reader.readAsDataURL(file);
    event.target.value = null;
    inputRef.current.value = null;
  };

  useEffect(() => {
    setImgPr(image);
  }, [image]);

  return (
    <div className="w-40 text-center">
      <div className="relative w-40 top-2 left-0">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <div
          className="w-40 h-40 mt-2   cursor-pointer relative rounded-full border-2 border-teal-500"
          onClick={handleImageClick}
        >
          <img
            className="w-40 rounded-full"
            src={
              imgPr ||
              "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            }
            alt=""
          />
          <div className="w-40 h-40  top-0 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
            <img
              className="hidden group-hover:block w-12"
              src="https://www.svgrepo.com/show/33565/upload.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUploader;
