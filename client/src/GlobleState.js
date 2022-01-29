
import  React,{ createContext , useState } from 'react';
import ProductsApi from './api/ProductsApi';

export const GlobleState = createContext()

export const DataProvider = ({children})=>{
   ProductsApi()
   const [token,setToken] = useState(false)
   

   const state = {
     token:[token,setToken],
     productsAPI:ProductsApi()
   }
return(
  <GlobleState.Provider value={state}>
      {children}
  </GlobleState.Provider>
)
}
