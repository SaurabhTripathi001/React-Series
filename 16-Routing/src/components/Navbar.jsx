import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h3>Saurabh</h3>

      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/moments">Moments</Link>
      </div>
    </div>
  )
}

export default Navbar