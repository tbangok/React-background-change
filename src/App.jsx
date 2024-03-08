import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colorR, setColorR] = useState(0);
  const [colorG, setColorG] = useState(0);
  const [colorB, setColorB] = useState(0);


  function calculate(prev) {
    return (prev + 50) % 256
  }

  const buttons = [
    { id: 'colorR', label: 'R', handleOnClick: () => setColorR(calculate) },
    { id: 'colorG', label: 'G', handleOnClick: () => setColorG(calculate) },
    { id: 'colorB', label: 'B', handleOnClick: () => setColorB(calculate) }
  ];


  return (
    <div style={{
      height: '100',
      width: '100',
      display: 'flex',
      flexFlow: 'column',
      backgroundColor: `rgb(${colorR},${colorG},${colorB})`,
      padding: '400px 500px',
      margin: 'none',
      gap: '5px'
    }} >
      {buttons.map(({
        id,
        label,
        handleOnClick
      }) => (

        <button key={id} style={{ margin: 'auto' }} onClick={() => {
          { handleOnClick() }

        }}>
          {label}
        </button>
      ))}

      <button className="random" style={{ margin: 'auto' }} onClick={() => {
        setColorR(() => Math.round(Math.random() * 255))
        setColorG(() => Math.round(Math.random() * 255))
        setColorB(() => Math.round(Math.random() * 255))
      }}> Random {`${colorR} ${colorG} ${colorB}`}</button>
    </div>
  )
}

export default App
