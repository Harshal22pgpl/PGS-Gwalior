
import React from 'react';
const ErrorSvg = () => {
  const svgString = `
  <!--?xml version="1.0" standalone="no"?-->
  <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">  <defs> <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(93.762, 93.45, 91.049, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(73.991, 207.601, 96.399, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M21.9,-35.1C27.4,-30.6,30,-22.8,33.9,-15.2C37.8,-7.7,42.9,-0.4,42.7,6.6C42.4,13.6,36.8,20.3,30.4,24.5C24,28.7,16.7,30.4,9.2,33.7C1.7,36.9,-6,41.9,-12.9,41.1C-19.8,40.4,-25.9,34.1,-30.3,27.2C-34.8,20.4,-37.6,13.1,-37.7,6C-37.8,-1.1,-35.1,-7.9,-32.4,-15.2C-29.7,-22.4,-26.9,-30,-21.5,-34.6C-16.1,-39.1,-8.1,-40.5,0.1,-40.6C8.2,-40.7,16.5,-39.6,21.9,-35.1Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style="transition: all 0.3s ease 0s;"></path>              </svg>
  `;

  return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
};

export default ErrorSvg;
