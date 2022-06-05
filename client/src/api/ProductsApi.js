import React,{useState,useEffect} from 'react';
import axios from 'axios'


function ProductsApi() {
  
  const [products,setProducts] = useState([])
  const [callback,setCallback] = useState(false)
  const getProducts = async () => {
      const res = await axios.get("/api/product")
      setProducts(res.data.product)
  }

useEffect(()=>{
  getProducts()
},[callback,products])
  return {
    products:[products,setProducts],
    callback:[callback,setCallback]
  }
  
     
  
}

export default ProductsApi;

