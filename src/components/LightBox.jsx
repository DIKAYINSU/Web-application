import React from 'react';
import LightGallery from 'lightgallery/react';

// CSS styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const LightBox = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Photo Gallery</h2>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a href="./src/assets/Images/img1.jpeg">
          <img src="./src/assets/Images/img1.jpeg" alt="Image 1" className="w-32 m-2 inline-block rounded shadow" />
        </a>
        <a href="/img/full2.jpg">
          <img src="./src/assets/Images/img1.jpeg" alt="Image 2" className="w-32 m-2 inline-block rounded shadow" />
        </a>
        {/* Add more images as needed */}
      </LightGallery>
    </div>
  );
};

export default LightBox;


