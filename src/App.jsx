import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Packages from './components/Packages';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-grow">
        <Hero />
        <Gallery />
        <Packages />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
