import React from 'react';

import {
  FcGlobe,
  FcInTransit,
  FcOrgUnit,
  FcVip,
  FcStatistics,
} from 'react-icons/fc';

const About = () => {
  return (
    <section className='about'>
      <div className='card'>
        <FcGlobe />
        <h6>Depósitos con ubicación estratégica en la región</h6>
      </div>
      <div className='card'>
        <FcInTransit />
        <h6>Implementamos plan de incentivos por Unidad de negocios</h6>
      </div>
      <div className='card'>
        <FcOrgUnit />
        <h6>Llegamos a Mendoza – San Juan – San Luis – Neuquén – Río Negro</h6>
      </div>
      <div className='card'>
        <FcVip />
        <h6>
          Entregas Rápidas (-48hs Mendoza, San Juan y San Luis) (-72hs Neuquén y
          Río Negro)
        </h6>
      </div>
      <div className='card'>
        <FcStatistics />
        <h6>Certificación de calidad ISO 9000 20021</h6>
      </div>
    </section>
  );
};

export default About;
