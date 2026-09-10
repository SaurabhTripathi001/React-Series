import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h1>Saurabh</h1>
        </div>

        <div className="nav-menu">
            <ul>
                <li><Link to='/'>Shop</Link></li>
                <li><Link to='/product'>Product</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar