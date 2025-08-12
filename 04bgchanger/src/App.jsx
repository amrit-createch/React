import { useState } from 'react'


function App() {
  const [color, setColor] = useState("aqua")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
     
      
      <button
      onClick={()=> setColor("red")}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"red"}}>red</button>

       <button
        onClick={()=> setColor("green")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"green"}}>green</button>

       <button
        onClick={()=> setColor("pink")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"pink"}}>pink</button>

       <button
        onClick={()=> setColor("purple")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"purple"}}>purple</button>


    <button
        onClick={()=> setColor("orange")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"orange"}}>orange</button>

       <button
        onClick={()=> setColor("Fuchsia ")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"Fuchsia "}}>Fuchsia </button>

       <button
        onClick={()=> setColor("Chartreuse ")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"Chartreuse "}}>Chartreuse </button>

       <button
        onClick={()=> setColor("Cyan ")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"Cyan "}}>Cyan </button>

       <button
        onClick={()=> setColor("Orchid ")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"Orchid "}}>Orchid </button>

       <button
        onClick={()=> setColor("HotPink ")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"HotPink "}}>HotPink </button>

    </div> 
    </div>
    </div>
  )
}

export default App
