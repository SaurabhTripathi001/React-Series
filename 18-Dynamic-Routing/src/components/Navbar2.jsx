//Understanding UseNavigate Hook Through FromNavBar2
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate('/')
  return (
    <div className='py-2 px-5 bg-cyan-800'>
        {/* On click of button want to navigate user on home page */}
        <button 
            onClick={()=>{
                navigate("/home")
            }}
            className='bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 '>
            Return To Home Page
        </button>
        {/* On Click Of Button Want To Navigate To Previous Page */}
        <button 
            onClick={()=>{
                navigate(-1)
            }}
            className='bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 '>
            Back To Previous Page
        </button>
    </div>
  )
}

export default Navbar2