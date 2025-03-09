import React from 'react'
import {useNavigate} from 'react-router-dom'


const OrderSummary = () => {
     const goBack=useNavigate()
  return (
    <div>
      Order confirmed!
      <br></br>
      <button onClick={()=>goBack(-1)}>Go back</button>
    </div>
  )
}

export default OrderSummary
