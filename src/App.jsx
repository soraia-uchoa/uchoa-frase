import { useState } from "react"
import "./style.css"

export default function App() {
   const[message, setMessage] = useState('⚽')
   

   function trocar () {
      if(message === '🏐'){
        setMessage('⚽')
      }else{
        setMessage('🏐')
      }
   }

  return (
      <div className="body">

      <div className="header">
        <img src="./logo.jpg" alt="logo" className="logo" />
        <h1>Uchôa frases</h1>
      </div>
   
      <div className="imgs" id="fotos">
        <img src="./1.jpg" alt="rianzin" /><br />
        <img src="./2.jpg" alt="caio" />
        <img src="./3.jpg" alt="murilo" /><br />
        <img src="./4.jpg" alt="rian1" />
        <img src="./5.jpg" alt="lucas" />
        <img src="./6.jpg" alt="rianzinho" />
      </div>

      <div className="imgs" id="fotos">
        
        <img src="./5.jpg" alt="lucas" />
        <img src="./6.jpg" alt="rianzinho" />
        <img src="./7.jpg" alt="paulo" />
        <img src="./8.jpg" alt="caio" />
        <img src="./10.jpg" alt="n" />
        <img src="./11.jpg" alt="e" />
      </div>
      

      <button className="btt" onClick={trocar}>{message}</button>
        
      

      </div>

  )
}

