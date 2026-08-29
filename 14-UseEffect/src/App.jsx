import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(10)
  //Whenever num2 will change onlythen this useeffect will run on sidetrack
  //we can pass multiple dependencies in array
  //if array is empty it will run only one time
  //We can make multiple useeffects
  useEffect(function(){
    console.log("UseEffect Is Running")
  },[num2])
  return (
    <div>
      <h1>Value Of Num1:{num1}</h1>
      <h2>Value Of Num2:{num2}</h2>
      {/* On Single Click Only Value of num1 will change but no change in useeffect because it is not involved in 
      dependency */}
      <button onClick={()=>{
        setNum1(num1+2)      
      }}
      //When we will doubleclick we will see change in value of num2 and useeffect is running
      onDoubleClick={()=>{
        setNum2(num2+10)
      }}
      >Change Value</button>
    </div>
  )
}

export default App