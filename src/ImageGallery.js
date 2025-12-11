// ImageGallery.js

import React from 'react';
import img1 from '../src/image1.jpg';
import ilocs2 from '../src/ilocs2.jpg';
import img3 from '../src/image3.jpg';
import img4 from '../src/image4.jpg';
const ImageGallery = () => {
  // Array of image file names
  

  return (
    <div className="image-gallery">
      <img src={img1}   />
      <img src={ilocs2}   />
      <img src={img3}   />
      <img src={img4}   />
      
    </div>
  );
};

export default ImageGallery;
