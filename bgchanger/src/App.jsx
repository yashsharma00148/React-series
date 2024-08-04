import React ,{useState}from 'react'
import "./App.css"
export default function App() {
   const[bgcolor,setbgcolor]=useState("Black")
   const[bgcolor2,setbgcolor2]=useState("Black")
  return (
    <div>
      <div style={{backgroundColor:bgcolor}} className='container '>
         <div className="buttons">
          <button onClick={()=>{setbgcolor("white")}} >White</button>
          <button onClick={()=>{setbgcolor("green")}}>Green</button>
          <button onClick={()=>{setbgcolor("red")}}>Red</button>
          <button onClick={()=>{setbgcolor("blue")}}>Blue</button>
          <input type="text" onChange={(e)=>{setbgcolor2(e.target.value)}}  name="" id="" />
          <button onClick={()=>{setbgcolor(bgcolor2)}} >Change Color</button>
         </div>
      </div>
    </div>
  )
}
