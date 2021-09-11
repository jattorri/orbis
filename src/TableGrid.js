import React from 'react';
const TableGrid = ({ buttonActive }) => {
  if (buttonActive === 'maternoinfantil') {
    return (
      <div className='table-grid'>
        <img
          className='image'
          src='https://obis.com.ar/wp-content/uploads/2021/05/babelito-150x150.png'
          alt='babelito'
        />
      </div>
    );
  }
  if (buttonActive === 'dermocosmetica') {
    return (
      <div className='table-grid'>
        <img
          className='image'
          src='https://obis.com.ar/wp-content/uploads/2021/05/essence-150x150.png'
          alt='esence'
        />
        <img
          className='image'
          src='https://obis.com.ar/wp-content/uploads/2021/05/bio-oil-150x150.png'
          alt='biooil'
        />
      </div>
    );
  }
  if (buttonActive === 'cuidadopersonal') {
    return (
      <div className='table-grid'>
        <img
          className='image'
          src='https://obis.com.ar/wp-content/uploads/2021/05/koleston-150x150.png'
          alt='koleston'
        />
      </div>
    );
  }
  return (
    <div className='table-grid'>
      <img
        className='image'
        src='https://obis.com.ar/wp-content/uploads/2021/07/kosiuko-1024x1024.png'
        alt='kosiuko'
      />
      <img
        className='image'
        src='https://obis.com.ar/wp-content/uploads/2021/07/xl-1024x1024.png'
        alt='xl'
      />
      <img
        className='image'
        src='https://obis.com.ar/wp-content/uploads/2021/07/tascani-1024x1024.png'
        alt='tascani'
      />{' '}
      <img
        className='image'
        src='https://obis.com.ar/wp-content/uploads/2021/07/stone-1024x1024.png'
        alt='stone'
      />
    </div>
  );
};
export default TableGrid;
