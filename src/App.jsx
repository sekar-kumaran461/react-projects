import { useState } from 'react'
import './App.css'

function App() {
  const [length,setlength]=useState(8);
  const [uppercase,setuppercase]=useState(true);
  const [numbers,setnumbers]=useState(true);
  const [symbols,setsymbols]=useState(true);
  const [lowercase,setlowercase]=useState(true);
  const [password,setpassword]=useState('');

  const generatepassword =()=>{
    let charset="";
    if(uppercase) charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(lowercase) charset+="abcdefghijklmnopqrstuvwxyz";
    if(numbers) charset+="0123456789";
    if(symbols) charset+="!@#$%^&*()_+{}|~";
    let Cpassword="";
    for(let i=0;i<length;i++){
      const randomindex=Math.floor(Math.random()*charset.length);
     Cpassword+= charset[randomindex];
  }
  setpassword(Cpassword);
}

const copytoclipboard=()=>{
  navigator.clipboard.writeText(password);
  alert("password Copied");
}

  return (
    <>
    <div className="password-generator">
      <h2>Strong Password Generator</h2>
      <div className="input-group">
        <label>Passwod Length:</label>
        <input type="number" value={length} id="num" onChange={(e) => setlength(parseInt(e.target.value))}/>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" checked={uppercase} id="upper" onChange={(e)=>setuppercase(e.target.checked)}/>
        <label htmlFor="upper">Include Upper Case</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" checked={lowercase}id="lower" onChange={(e)=>setlowercase(e.target.checked)}/>
        <label htmlFor="lower">Include Lower Case</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" checked={numbers} onChange={(e)=>setnumbers(e.target.checked)} id="numbers"/>
        <label htmlFor="numbers">Include Numbers</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" checked={symbols} id="symbols" onChange={(e)=>setsymbols(e.target.checked)} />
        <label htmlFor="symbols">Include Symbols</label>
      </div>
      <div>
        <button className="generate" onClick={generatepassword}>Generate password</button>
        <div className="generatedpass">
          <input type="text" readOnly value={password} />
          <button className='Cbutton' onClick={copytoclipboard}>Copy</button>
        </div>
      </div>

    </div> 
             
    </>
  )
}

export default App
