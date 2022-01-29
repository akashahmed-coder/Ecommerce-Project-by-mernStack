import React,{useContext} from 'react';
import {GlobleState} from '../../../GlobleState'
import ProductItem from '../utiles/productItem/ProductItem'

export default function Products() {
  const state = useContext(GlobleState)
  const [products] = state.productsAPI.products 
  return <div>
     {
       products.map(product=>{
            
           return(
            <ProductItem key={product._id} product={product}/>
           )
       })
     }
  </div>;
}
