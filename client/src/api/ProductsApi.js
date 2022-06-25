import React,{useState,useEffect} from 'react';
import axios from 'axios'


function ProductsApi() {
  const [products,setProducts] = useState([])
  const [callback,setCallback] = useState(false)


useEffect(()=>{

  const getProducts = async () => {
     try {
      const res = await axios.get("/api/product")
      setProducts(res.data.product)
     } catch (err) {
       console.log(err)
     }
  }
  getProducts()
},[callback])
console.log(products)
  return {
    products:[products,setProducts],
    callback:[callback,setCallback]
  }
  
     
  
}

export default ProductsApi;

