import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center text-sm">
        <p>© {currentYear} Agave Victoria Jardín. Todos los derechos reservados.</p>
        <p className="mt-1">
          Sitio Creado por{' '}
          <a 
            href="https://negosys.mx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300"
          >
            Negosys.mx
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer; 