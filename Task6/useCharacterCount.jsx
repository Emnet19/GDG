import {useState,useEffect,useMemo,useCallback} from 'react'
import useCharacterCount from './pages/useCharacterCount'

function useCharacterCount(maxLength){
    const [text,setText]=useState("");
  
    const charCount=useMemo(()=>text.length,[text]);
    const handleChange=useCallback((e)=>{
        if(e.target.value.length<= maxLength){
            setText(e.target.value);
        }
    },[maxLength])
  
    return {text,charCount,handleChange}
}
 export default useCharacterCount
