import React from 'react';
import Slider from 'react-slick';

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const images = [
    'images/aga1.webp',
    'images/aga3.webp',
    'images/aga4.webp',
    // Add more images as needed
  ];

  return (
    <section id="galeria" className="py-16 bg-gray-900">
      <h2 className="text-4xl text-center text-white mb-8">Nuestra Galería</h2>
      <div className="max-w-4xl mx-auto px-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="outline-none">
              <img 
                src={image} 
                alt={`Evento ${index + 1}`} 
                className="w-full h-[700px] object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
