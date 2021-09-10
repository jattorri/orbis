import React from 'react';

const Products = () => {
  return (
    <div className='products'>
      <div className='table-buttons-container'>
        <button className='table-button'>Materno-Infantil</button>
        <button className='table-button'>Dermocosmetica</button>
        <button className='table-button'>CuidadoPersonal</button>
        <button className='table-button'>Fragancias</button>
      </div>
      <div className='table-grid'>
        <img
          className='image'
          src='https://obis.com.ar/wp-content/uploads/2021/07/kosiuko-150x150.png'
          alt='foto1'
        />
        <img
          className='image'
          src='https://obis.com.ar/wp-content/uploads/2021/07/xl-150x150.png'
          alt='foto2'
        />
        <img
          className='image'
          src='https://obis.com.ar/wp-content/uploads/2021/07/tascani-150x150.png'
          alt='foto3'
        />
        <img
          className='image'
          src='https://obis.com.ar/wp-content/uploads/2021/07/stone-150x150.png'
          alt='foto4'
        />
      </div>
    </div>
  );
};
export default Products;
