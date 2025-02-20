import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    tipoEvento: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hola, me gustaría obtener información sobre:\n
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Fecha del evento: ${formData.fecha}
Tipo de evento: ${formData.tipoEvento}
Mensaje: ${formData.mensaje}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5216623641031?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 pb-32 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-12 border-b border-green-500 pb-4 w-fit mx-auto">
          Solicita tu Cotización
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <form onSubmit={handleSubmit} className="flex-1 space-y-6 backdrop-blur-sm bg-gray-800/50 p-8 rounded-lg shadow-xl">
            <div>
              <label className="block mb-2 text-sm uppercase tracking-wider font-light">Nombre</label>
              <input
                type="text"
                name="nombre"
                required
                className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition duration-300 outline-none text-black"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm uppercase tracking-wider font-light">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition duration-300 outline-none"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm uppercase tracking-wider font-light">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                required
                className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition duration-300 outline-none"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm uppercase tracking-wider font-light">Fecha del Evento</label>
              <input
                type="date"
                name="fecha"
                required
                className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition duration-300 outline-none"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm uppercase tracking-wider font-light">Tipo de Evento</label>
              <select
                name="tipoEvento"
                required
                className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition duration-300 outline-none"
                onChange={handleChange}
              >
                <option value="">Selecciona una opción</option>
                <option value="boda">Boda</option>
                <option value="xv-anos">XV Años</option>
                <option value="corporativo">Evento Corporativo</option>
                <option value="cumpleanos">Cumpleaños</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm uppercase tracking-wider font-light">Mensaje</label>
              <textarea
                name="mensaje"
                rows="4"
                className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition duration-300 outline-none"
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-medium shadow-lg transform transition duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Enviar Cotización
            </button>
          </form>

          <div className="flex-1 md:mt-0 mt-8">
            <div className="text-center space-y-12 backdrop-blur-sm bg-gray-800/50 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-light border-b border-green-500 pb-4 w-fit mx-auto">
                Síguenos en Redes Sociales
              </h3>
              <br />
              <br />
              <br />
              <div className="space-y-6">
                <a
                  href="https://www.instagram.com/agavevictoriajardin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-xl hover:text-pink-400 transition duration-300 p-4 rounded-lg hover:bg-gray-700/50"
                >
                  <FaInstagram size={28} />
                  @agavevictoriajardin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
