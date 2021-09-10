import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Products from './Products';

function App() {
  return (
    <>
      <section className='shared-background'>
        <Navbar />
        <Hero />
      </section>
      <About />
      <Products />
    </>
  );
}

export default App;
