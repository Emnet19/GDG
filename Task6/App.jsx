import React from 'react'
import { useReducer } from 'react'
import "./pages/styles.css"
const MAX_LENGTH=200;
const reducer=(state,action)=>{
  switch(action.type){
    case "UPDATE":
      return action.payload.length<= MAX_LENGTH ? action.payload:state
    default:
      return state
  }
}
function App(){
  const {text,charCount,handleChange}= useCharacterCount(MAX_LENGTH)
  const [state,dispatch]=useReducer(reducer, "")

  const copyToClipboard=()=>{
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!")
  }

  const isWarning= charCount >MAX_LENGTH *0.9
    return(
      <div className='container'>
       <h2>Real Time character Counter</h2>
       <textarea value={state} onChange={(e)=>{
        handleChange(e)
        dispatch({type:"UPDATE",payload: e.target.value})
       }}
       placeholder='Type here...'/>
       <div className='progress-bar'>
        <div className='progress' 
        style={{ width: `${(charCount/MAX_LENGTH)* 100}%`,background: isWarning?"red":"blue"}}>
        </div>
       </div>
        <p className={isWarning? "Warning":""}>
          {charCount}/{MAX_LENGTH} characters
        </p>
        <button onClick={copyToClipboard}>Copy</button>
      </div>
    )
}
export default App
