import React,{useState,useCallback,useEffect} from 'react'
import "./App.css"
export default function App() {
  const[length,setlength]=useState(8)
  const[password,setpassword]=useState("yashpassword")
  const[numberallowed,setnumberallowed]=useState(false)
  const[charallowed,setcharallowed]=useState(false)
   const generatepassword=useCallback(()=>{
    let pass=""
    let str="ABCDEfghijklMNOpQRstuvwxYZ"
    if(numberallowed){
      str+="1234567890"
    }
    if(charallowed){
      str+="!@#$%&*+"
    }


    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)



      
    }
    setpassword(pass)


   },[length,numberallowed,charallowed])

   useEffect(()=>{
    generatepassword()
   },[length,numberallowed,charallowed])


   const copytext=()=>{
    navigator.clipboard.writeText(password)
    alert("Password copied")
   }
  return (
    <div className='container'>
      <h1>Password Generator</h1>
      <div>
        <input type="text" value={password} name="" id="input" />
        <button onClick={()=>{copytext()}}>Copy</button>
      </div>
      <div className='addons'>
        <input type="range" min={0} max={100} onChange={(e)=>{setlength(e.target.value)}} value={length}  name="" id="range" />
        <label htmlFor="range">length:{length}</label>
        <label htmlFor="charac">NUmbers</label>
        <input onChange={()=>{setnumberallowed(!numberallowed)}} type="checkbox" name="" id="charac" />
        <label htmlFor="number">Characters</label>
        <input onChange={()=>{setcharallowed(!charallowed)}} type="checkbox" name="" id="number" />
      </div>
    </div>
  )
}
