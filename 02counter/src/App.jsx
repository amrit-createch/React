import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(1)
  
  const increaseValue = () => {
    if(count<=19){
    setCount(count + 1)
  }
}

  const decreaseValue = () => {
    if(count>0){
    setCount(count - 1)
    }
  }
  return (
    <>
     <h1>amrit rajput</h1>
     <h2>counter value: {count}</h2>
     <button onClick={increaseValue}>Increase Value{count}</button>
     <br />
     <button onClick={decreaseValue}>Decrease Value{count}</button>
    </>
  )
}

export default App
