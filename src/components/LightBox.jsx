import React from 'react';
import LightGallery from 'lightgallery/react';

// Styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Image
import img1 from '../assets/Images/img1.jpeg';

const LightBox = () => {
  const onInit = () => {
    console.log('lightGallery initialized');
  };

  return (
    <section className="px-4 py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>

        <LightGallery
          onInit={onInit}
          speed={500}
          download={false}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <a
              href={img1}
              key={index}
              className="block overflow-hidden rounded shadow hover:shadow-lg transition"
            >
              <img
                src={img1}
                alt={`Image ${index + 1}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </section>
  );
};

export default LightBox;