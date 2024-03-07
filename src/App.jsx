import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const array = [R,G,B]

  return (
    <div  style={{ 
      height:'100vh',
      width:'100vw',  
      display:'flex',
      backgroundColor:'salmon'
    }} >
      
     <button className="random" style={{margin:'auto'}}> Random Color</button>
    </div>
  )
}

export default App
