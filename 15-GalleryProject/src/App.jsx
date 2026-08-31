import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData= async()=>{
    const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data)
    console.log(response.data)
  }
  useEffect(function(){
    getData();
  },[index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'>loading.....</h3>
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return(
        <div key={idx}>
         <a href={elem.url}>
          <div className='h-40 w-44 overflow-hidden rounded-xl'>
          <img className='h-full w-full object-cover' src={elem.download_url}></img>
        </div>
          <h2 className='font-bold'>{elem.author}</h2>
          </a> 
        </div>
      ) 
    })
  }


  return (
    <div className='bg-black h-screen text-white p-4 overflow-auto'>
      <div className='h-[82%] flex flex-wrap gap-5'>
       {printUserData} 
      </div>

      <div className='flex justify-center items-center gap-4 p-2 '>
        <button
            onClick={()=>{
              setIndex(index+1)
              setUserData([])
            }} 
            className='bg-amber-400 text-sm rounded px-4 py-2 text-black font-semibold cursor-pointer active:scale-95 '
        > 
            Next
        </button>
        <button 
            onClick={()=>{
              if(index>1){
                setIndex(index-1)
                setUserData([])
              }
              console.log(index)
            }}
            className='bg-amber-400 text-sm rounded px-4 py-2 text-black font-semibold cursor-pointer active:scale-95 ' 
        >
            Prev
        </button>
      </div>
    </div>
  )
}

export default App