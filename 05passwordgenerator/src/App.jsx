import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed,setNumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false); 
  const [Password,setPassword] = useState("")

  //use ref hook
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+=`"!@#$%^&*()_+-={}[]|\:;'<>,".?/"`
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])

const copyPasswordToClipboard =  useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,99)
  window.navigator.clipboard.writeText(Password)
},[Password])


  useEffect(()=>{
    passwordGenerator()
  },
  [length,numAllowed,charAllowed,passwordGenerator])
  return (
   <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'> 
    <h1 className="text-white text-centre my-3 ">Password Generator </h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" 
      value={Password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shirnk-0'
      >copy</button>
   </div>
   <div className='flex text-sm gap-x-2'>
    <div className='flex items-centre gap-x-1'>
      <input type="range" 
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
      />
      <label >Lenght:{length}</label>
    </div>
    <div className='flex items-centre gap-x-1'>
      <input
       type="checkbox"
      defaultChecked={numAllowed}
      id='numberInput'
      onChange={()=>{
        setNumAllowed((prev)=>!prev);
      }}
      />
      <label htmlFor="numberInput">Numbers</label>
    </div>
     <div className='flex items-centre gap-x-1'>
      <input
       type="checkbox"
      defaultChecked={charAllowed}
      id='characterInput'
      onChange={()=>{
        setCharAllowed((prev)=>!prev);
      }}
      />
      <label htmlFor="characterInput">Characters</label>
    </div>
   </div>
    </div>
   </>
  )
}

export default App
