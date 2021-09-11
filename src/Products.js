import React, { useState } from 'react';
import TableGrid from './TableGrid';

const Products = () => {
  const [buttonActive, setButtonActive] = useState('');
  return (
    <div className='products'>
      <div className='table-buttons-container'>
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

      <TableGrid buttonActive={buttonActive} />
    </div>
  );
};
export default Products;
