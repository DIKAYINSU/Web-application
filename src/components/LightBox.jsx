import React from 'react';
import LightGallery from 'lightgallery/react';

// Styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Image Array — replace these with your actual images
const images = [
  './src/assets/Images/certificateOne.jpg',

 
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