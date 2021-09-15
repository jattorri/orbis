import React, { useState } from 'react';
import TableGrid from './TableGrid';

const Products = () => {
  const [buttonActive, setButtonActive] = useState('');
  return (
    <div
      className='products'
      data-aos='fade-in'
      data-aos-delay='50'
      data-aos-duration='2000'
    >
      <div
        className='table-buttons-container'
        data-aos='fade-right'
        data-aos-delay='50'
        data-aos-duration='2000'
      >
        <button
          className='table-button'
          onClick={() => setButtonActive('maternoinfantil')}
        >
          Materno-Infantil
        </button>
        <button
          className='table-button'
          onClick={() => setButtonActive('dermocosmetica')}
        >
          Dermocosmetica
        </button>
        <button
          className='table-button'
          onClick={() => setButtonActive('cuidadopersonal')}
        >
          CuidadoPersonal
        </button>
        <button
          className='table-button'
          onClick={() => setButtonActive('fragancias')}
        >
          Fragancias
        </button>
      </div>

      <TableGrid buttonActive={buttonActive} className='products' />
    </div>
  );
};
export default Products;
