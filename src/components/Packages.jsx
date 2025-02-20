import React from 'react';
import Slider from 'react-slick';

function Packages() {
  const commonFeatures = [
    "Renta del jardín 5 horas",
    "Mesas, sillas, mantel, cubre mantel",
    "Uso de alberca",
    "Mesa principal para decorar",
    "Estructura de herrería para decorar",
    "Área de cocina, cuenta con vitrina, mesas de acero inoxidable, estufa con 2 quemadores, asador de gas, freezer, 2 hieleras grandes",
    "Baños con suministro para su uso",
    "Personal de apoyo durante el evento (No son meseros)",
    "Estacionamiento dentro y fuera del jardín de eventos",
    "Permiso de alcoholes"
  ];

  const packages = [
    {
      people: 50,
      price: 17000,
      bottles: 50
    },
    {
      people: 100,
      price: 23000,
      bottles: 100
    },
    {
      people: 150,
      price: 29000,
      bottles: 150
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Paquetes</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-center">Todos los paquetes incluyen:</h3>
          <ul className="list-disc space-y-2 text-center list-none">
            {commonFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="px-4">
          <Slider {...settings}>
            {packages.map((pkg) => (
              <div key={pkg.people} className="px-2">
                <div className="bg-gray-700 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Paquete {pkg.people} personas</h3>
                  <p className="text-3xl font-bold mb-4">${pkg.price.toLocaleString()}</p>
                  <p>Incluye {pkg.bottles} botellas de agua de 500ml</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Packages; 