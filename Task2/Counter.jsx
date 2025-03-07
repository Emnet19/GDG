import react ,{useState} from 'react'
import './Counter.css'
function Counter(){
    const [count,setCount]= useState(0);
    return(
        <div className='counter-container'>
            <h1>Counter:{count}</h1>
        <div className='button-group'>
            <button onClick={()=> setCount(count + 1)}>Increament</button>
            <button onClick={()=> setCount(0)}>Reset</button>
            <button onClick={()=> setCount(count - 1)} disabled={count==0}>Decreament</button>
        </div>
        </div>
    )
}
export default Counter
