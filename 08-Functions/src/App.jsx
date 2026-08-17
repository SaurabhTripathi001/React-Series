import React from 'react'
import { useState } from 'react'
const App = () => {
  const [first, setfirst] = useState(20);

  // Function to handle button click
  const btnClicked=() => {
    alert('Button clicked!')
  }
  const mouseOver=() =>{
    console.log('Mouse over event triggered')
  }
  return (
    <div>
      <button onClick={btnClicked} onMouseOver={mouseOver}>
        Click me
      </button>

      
      <button onClick={()=>{console.log('Button 2 clicked!')}} onMouseOver={()=>{console.log('Mouse over event triggered On Button2')}}>
        Click me (inline)
      </button>  
    </div>
  )
}

export default App