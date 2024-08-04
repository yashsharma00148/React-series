import React,{useState} from 'react'
import Compo from './Compo'

export default function App() {
  let color=green
  const[count,setcount]=useState(0)
  const addvalue=()=>{
    setcount(count+1)
    
  }
  const decvalue=()=>{
    setcount(count-1)
    
  }
  return (
    <div>
      <h1 style={backgroundColor="green"} className=' text-red-700'>Hello React</h1>
      <h2>Counter value:{count}</h2>
       <button onClick={()=>{addvalue()}}>Add value</button>
       <button onClick={()=>{decvalue()}}>Decrease value</button>
       <Compo name="yash"/>
      
    </div>
  )
}
