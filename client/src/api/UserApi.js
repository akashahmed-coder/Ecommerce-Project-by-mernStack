import axios from 'axios'
import React,{useState,useEffect} from 'react'


export default function UserApi(token) {
    const [isLogged,setIsLogged] = useState(false)
    const [isAdmin,setIsAdmin] = useState(false)
    const [cart,setCart] = useState([])
  
    useEffect(()=>{
     if(token){
         const getUser = async() =>{
             try {

                const res = await axios.get("/user/info",{
                    headers:{Authorization:token}
                })
               setIsLogged(true)
               res.data.role === 1 ? setIsAdmin(true): setIsAdmin(false)

               
             } catch (err) {
                 alert(err.response.data.msg)
             }
         }
         getUser()
     }
    },[token])
const addCart = async(product) => {
    if(!isLogged) return alert('please login to buying product')
    const check = cart.every(item => {
        return item._id !== product._id
    })
    if(check){
       return setCart([...cart,{...product,quantity:1}])
    }else{
        alert('this product is already added to cart')
    }
  
}


  return{
      isLogged: [isLogged,setIsLogged],
      isAdmin:[isAdmin,setIsAdmin],
      cart:[cart,setCart],
      addCart:addCart
  }
}
