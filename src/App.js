import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Products from './Products';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom',
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <section
        className='shared-background'
        data-aos='fade-in'
        data-aos-duration='2000'
        data-aos-delay='50'
      >
        <Navbar />
        <Hero />
      </section>
      <About />
      <Products />
    </>
  );
}

export default App;
