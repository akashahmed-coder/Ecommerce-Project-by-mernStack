import React from 'react';

export default function ProductItem({product}) {
    console.log(product)
  return (
    <div className='product_card'>
        <img src={product.images.url} alt='' />
    </div>
  );
}
