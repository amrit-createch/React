import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

const data={
  user1name:'amrit singh',
  user2name:'amrit rajput',
}

function App() {
  return (
    <>
   <h1 className='bg-black-400  p-4 rounded xl'>Animated Cards</h1>
   <Card name ={data.user1name}/>
   <Card name ={data.user2name}/> 
   </>
  );
}

export default App;
