import axios from 'axios'
import React, { useEffect ,useState} from 'react'

export default function CategoryApi(token) {
    const [categoris,setCategoris] = useState([])

useEffect(()=>{
    const getCategory = async () => {
        try {
            const res = await axios.get("/api/category")
            setCategoris(res.data)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    getCategory()
},[])

  return {
      category: [categoris,setCategoris]
  }
}
