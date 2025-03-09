import reacr from 'react'

import {useNavigate} from 'react-router-dom'
function Home(){
  const navigate=useNavigate()
    return<>
      <div className='home'>
        <h1 >Home page</h1>
        <p>Wellcome to our website!</p>
        <button onClick={()=>navigate('order-summary')}>Place Order</button>
      </div>
    </>
}
export default Home
