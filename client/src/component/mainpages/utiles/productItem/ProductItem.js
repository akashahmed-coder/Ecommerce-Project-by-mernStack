import React,{useState} from 'react';
import Button from '../row_btn/Button';
import axios from 'axios';
import Loading from '../loading/Loading'
export default function ProductItem({product,isAdmin,deleteProduct,handleChange,loading}) {
 
  return (
    <div className='product_card'>
      { isAdmin && <input type="checkbox" checked={product.cheked} onChange={()=>handleChange(product._id)}/>}
        <img src={product.images.url} alt='' />
       <div className='product_box'>
            <h2 title={product.title}>{product.title}</h2>
            <span>${product.price}</span>
            <p>${product.description}</p>
       </div>
       <Button product={product} deleteProduct={deleteProduct} />
    </div>
  );
}
