import React from 'react';

const Hero = () => {
  return (
    <div 
      className="hero-section h-screen flex items-center justify-center text-white bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: "url('/public/images/aga2.webp')" }}
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Agave Victoria Jardín</h1>
        <p className="text-xl md:text-2xl mb-8">El lugar perfecto para tu evento especial</p>
        <a 
          href="#contacto" 
          className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 transition duration-300"
        >
          Solicitar Cotización
        </a>
      </div>
    </div>
  );
};

export default Hero;
