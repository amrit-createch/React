import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';

import App from './App.jsx'

function MyApp(){
  return (
    <div>
    <h1>Custom App</h1>
    </div>
  )
}
// const reactElement = {
//     type:'a',
//     props: {
//         href : 'https://google.com',
//         target:'_blank'
//     }, 
//     children: 'click me to visit google',
// }
const anotherElement = (
  <a href="http://google.com" target="_blank">Visit google</a>
)
// this reactElement 2 is a element that react makes and we dont have to declare 
// parameter by ourselves but there are some rules like
// 1st parameter: the HTML tag (like 'a', 'h1', 'p', etc.)
// 2nd parameter: an object containing all the props/attributes
// 3rd parameter: the content (like text or children)
//variables are injected at last



const anotherUser = 'amrit rajput'
const reactElement2 = React.createElement(
  'a',
  {href:'http://google.com', target:'_blank'},
  'click me to visit google',
  anotherUser
)



createRoot(document.getElementById('root')).render(
  // reactElement //will not run
  //anotherElement //works perfectly
  //  reactElement2 //works perfectly
   
)

// here reactElementis not running because render method is not defined by us and we are using inbuild 
// render method and inbuilt render method may have another parameter and we gave another like type,props
// but anotherElement will run because it Have not any parameter like type props it  have directly a link 
// and a target
