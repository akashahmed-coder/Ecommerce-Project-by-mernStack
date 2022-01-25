
import  React,{ createContext , useState } from 'react';

export const GlobleState = createContext()

export const DataProvider = ({children})=>{
return(
  <GlobleState.Provider value={"value of"}>
      {children}
  </GlobleState.Provider>
)
}
