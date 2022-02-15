import React from 'react';
import {Link} from 'react-router-dom'
export default function ProductItem({product}) {
  return (
    <div className='product_card'>
        <img src={product.images.url} alt='' />
       <div className='product_box'>
            <h2 title={product.title}>{product.title}</h2>
            <span>${product.price}</span>
            <p>${product.description}</p>
       </div>
       <div className='row_btn'>
         <Link to="#!" id='btn_buy'>Buy</Link>
         <Link to={`/details/${product._id}`} id='btn_view'>View</Link>
       </div>
    </div>
  );
}
