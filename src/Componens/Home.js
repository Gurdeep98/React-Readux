import React from 'react';

export default function Home() {
  return (
    <div>
      <div className='add-to-cart'>
        <img src='../' alt='cart design' />
      </div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img
            src='https://images-na.ssl-images-amazon.com/images/I/71x3e0x%2BM2L._AC_SL1382_.jpg'
            alt='Iphoneimage'
          />
        </div>
        <div className='text-wrapper item'>
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className='btn-wrapper item'>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
