import React from 'react'
import { useState } from 'react';
//Two Way Binding Is A way where we permit react to manipulate our form in place of directly manipulating it.
//This Is Basically done to use the data of form
const App = () => {
  const [title,setTitle] = useState('')
  const submitHandle=(e)=>{
    e.preventDefault();
    console.log("Form Submitted By:--",title);
    //Behaviour is preventdefault so after submission we will see same data on input 
    //so we will set settitle empty again on submit
    setTitle("")
  }
  return (
    <div>
      <form onSubmit={(e)=>{submitHandle(e)}}>
        <input 
        type="text" 
        placeholder='Enter Your Name'
        /*Initially Title Is Empty SO Passed Value Of Title to value*/
        value={title}
        onChange={
          (e)=>{
            //Now With The Help Of React I am writing Value Of Input And Grabbing each value in title.
            setTitle(e.target.value);
          }
        } />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App