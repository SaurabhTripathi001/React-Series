import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react';
const App = () => {

  const [title,setTitle] = useState()
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault();
    setTitle("")
    setDetails("")
    const copyTask=[...task]
    copyTask.push({title,details})
    setTask(copyTask) 
    console.log(task)  
  }

  const deleteNode=(idx)=>{
    // this variable is used to store all the previous tasks
    const copyTask=[...task]
    // Recieveing Index Value Of That Div Whose Button Is Clicked
    console.log("Deleted Index:",idx)
    // Breaking The Div Whose Index Is Recieved From Idex Value To 1 Element
    copyTask.splice(idx,1)
    // Again I Wannaa Show Only Remaining div
    setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-white '>    
      <form onSubmit={(e)=>{
          submitHandler(e);
      }} className='flex flex-col lg:w-1/2 gap-5 items-start p-10 '>

        <h1 className='text-4xl font-bold'>Add Notes</h1>  

        {/* Pahla Wala Input For Heading */}
          <input 
            type="text" 
            placeholder='Enter Notes Heading'
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
            value={title}
            onChange={
              (e)=>{
                setTitle(e.target.value)
              }
            }
          />

          {/* Detailed Wala Input  */}
          <textarea
            type="text"
            placeholder='Enter Details'
            className='px-5 w-full h-40 py-2 flex items-start flex-row border-2 outline-none rounded'
            value={details}
            onChange={
              (e)=>{
                setDetails(e.target.value);
              }
            }
          />
          <button className='bg-white font-medium text-black px-5 py-2 w-full rounded active:scale-95'>Add Notes</button>              
      </form>

      <div className='p-10 bg-gray-950 lg:w-1/2 lg:border-l-2 '>
        <h1 className='text-4xl font-bold'>Recent Notes:</h1>
        <div className='flex gap-5 flex-wrap items-start justify-start mt-5 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent h-full'>
          {task.map(function(elem,idx){
            return(
              <div
                  key={idx}
                  className='flex flex-col justify-between items-start relative
                  h-60 w-48
                  rounded-2xl
                  bg-cover bg-center
                  bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaX_oeUqgWZqqmIT2HNNT9QZEGyn67Ek53nKNLVvKJw&s=10")]
                 text-black
                  pt-12 pb-4 px-6
                  overflow-hidden'
                > 
                  <div className='w-full min-h-0'>
                    <h3 className='w-full border-b-amber-400 leading-tight text-lg font-bold text-gray-900 break-words line-clamp-2'>{elem.title}</h3>
                    <div className='h-1 w-1/2 bg-red-500 rounded-full mt-2'></div>
                    <p className='w-full mt-2 leading-tight font-medium text-gray-500 break-words max-h-28 overflow-y-auto pr-1 note-scrollbar scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-transparent'>{elem.details}</p>
                  </div>
            
                  <button
                    onClick={() => {
                      deleteNode(idx);
                    }}className='w-full bg-red-600 hover:bg-red-700 cursor-pointer active:scale-95 transition-all text-white py-1 text-xs font-bold rounded'>Delete</button>
              </div>
            )              
          })}
        </div>        
      </div>
    </div>
  )
}

export default App