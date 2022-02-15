import React,{useContext} from 'react';
import {GlobleState} from '../../../GlobleState'
import ProductItem from '../utiles/productItem/ProductItem'

export default function Products() {
  const state = useContext(GlobleState)
  const [products] = state.productsAPI.products 
  // console.log(products)
  return <div className='products'>
     {
       products.map((product)=>{
            console.log(product)
          
         return(
           <ProductItem key={product._id} product={product}/>
         )     
       })
     }
  </div>;
}   
