'use client'
import React, { useState, useEffect } from 'react';

const MultiFileUpload = ({name=''}) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles([...selectedFiles]);
  };

  useEffect(() => {

  }, [files]);

  const renderFilePreview = (file) => {
    if (file.type.startsWith('image/')) {
      return <img src={URL.createObjectURL(file)} alt={file.name} className="max-w-full h-auto mb-2" />;
    } else {
      return (
        <div className="bg-gray-200 p-2 rounded-lg mb-2">
          <span className="text-sm text-gray-900 dark:text-white">{file.name}</span>
        </div>
      );
    }
  };

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="multiple_files">
       {name}
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="multiple_files"
        type="file"
        multiple
        onChange={handleFileChange}
      />
      <div className="mt-4">
        {files.map((file) => (
          <div key={file.name}>
            {renderFilePreview(file)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiFileUpload;
