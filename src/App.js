import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
function App() {
  return (
    <>
      <section className='shared-background'>
        <Navbar />
        <Hero />
      </section>
      <About />
    </>
  );
}

export default App;
