import React, { useContext } from 'react'
import { GlobleState } from '../../../GlobleState'
export default function Category() {
const state = useContext(GlobleState)
const [categoris,setCategoris] = state.categoryApi.category
console.log(categoris)
  return (
    <div>
      <form>
        
      </form>
    </div>
  )
}
