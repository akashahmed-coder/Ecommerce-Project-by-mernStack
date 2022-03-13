import React, { useContext,useState } from 'react';
import { GlobleState } from '../../../GlobleState';
import { Link } from 'react-router-dom';
export default function Cart() {
  const state = useContext(GlobleState)
  const [cart] = state.userApi.cart
  const [total,settotal] = useState(0)
 if(cart.length === 0){
   return <h1 style={{textAlign:"center",fontSize:"5rem"}}>Cart Empty</h1>
 }
  return <div>
      {
        cart.map(product =>{
          return(
            
          <div className='detail cart' key={product._id}>
          <img src={product.images.url} alt="" className='img_container'/>
          <div className='box-detail'>
              <h2>{product.title}</h2>
            <span>{product.price * product.quantity}</span>
            <p>{product.content}</p>
            <p>{product.description}</p>
           
           <div className='amount'>
             <button>-</button>
             <span>{product.quantity}</span>
             <button>+</button>
           </div>
           <div className='delete'>✖</div>

         
   
          </div>
       </div>
          )
        })
        
      }
      <div className='total'>
          <h3>total: {total}</h3>
          <Link to='#!'>Payment</Link>
          </div>
  </div>
}
