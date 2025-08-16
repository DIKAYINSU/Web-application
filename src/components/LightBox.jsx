import React from 'react';
import LightGallery from 'lightgallery/react';
import Gallary_Img_1 from   '../assets/PGallery/product-1.jpg'
import Gallary_Img_2 from   '../assets/PGallery/product-2.jpg'
import Gallary_Img_3 from   '../assets/PGallery/product-3.jpg'
import Gallary_Img_4 from   '../assets/PGallery/product-4.jpg'
import Gallary_Img_5 from   '../assets/PGallery/product-5.jpg'
import Gallary_Img_6 from   '../assets/PGallery/product-6.jpg'
import Gallary_Img_7 from   '../assets/PGallery/product-7.jpg'
import Gallary_Img_8 from   '../assets/PGallery/product-8.jpg'
import Gallary_Img_9 from   '../assets/PGallery/product-9.jpg'
import Gallary_Img_10 from  '../assets/PGallery/product-10.jpg'
import Gallary_Img_11 from  '../assets/PGallery/product-11.jpg'
import Gallary_Img_12 from  '../assets/PGallery/product-12.jpg'
import Gallary_Img_13 from  '../assets/PGallery/product-13.jpg'
import Gallary_Img_14 from  '../assets/PGallery/product-14.jpg'
import Gallary_Img_15 from  '../assets/PGallery/product-15.jpg'   
import Gallary_Img_16 from  '../assets/PGallery/product-16.jpg'   
import Gallary_Img_17 from  '../assets/PGallery/product-17.jpg'   

// Styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Image Array — replace these with your actual images
const images = [
  `${Gallary_Img_2}`,
  `${Gallary_Img_3}`,
  `${Gallary_Img_4}`,
  `${Gallary_Img_5}`,
  `${Gallary_Img_6}`,
  `${Gallary_Img_7}`,
  `${Gallary_Img_8}`,
  `${Gallary_Img_9}`,
  `${Gallary_Img_11}`, 
  `${Gallary_Img_10}`,
  `${Gallary_Img_12}`,
  `${Gallary_Img_13}`,
  `${Gallary_Img_14}`,
  `${Gallary_Img_15}`,
  `${Gallary_Img_16}`,
  `${Gallary_Img_1}`,
  `${Gallary_Img_17}`,

 
];

const LightBox = () => {
  const onInit = () => {
    console.log('lightGallery initialized');
  };

  return (
    <section className="px-4 py-10 bg-gray-100 w-full">
      <div className="max-w-[1600px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>

        <LightGallery
          onInit={onInit}
          speed={500}
          download={false}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4"
        >
          {images.map((src, index) => (
            <a
              key={index}
              href={src}
              className="block mb-4 overflow-hidden rounded shadow hover:shadow-lg transition break-inside-avoid"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full max-w-full min-h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </LightGallery>

        {images.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            Gallery coming soon. Images will be added shortly.
          </p>
        )}
      </div>
    </section>
  );
};

export default LightBox;