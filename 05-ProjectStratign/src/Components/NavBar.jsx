import React from 'react'

const NavBar = () => {
  return (
    <div className="MainNav">
        <div className="upper">
            <div className="left"><span>ISS World Asia 2026</span>: 1 Sept - 3 Sept 2026 | <span>Latest Product</span> : Optical Drone Detection and Kill</div>
            <div className="right">
                <div className="language">
                    <img src="https://flagcdn.com/w20/gb.png" alt="English"/>    
                    <span>ENG</span>
                </div>
                <div className="language">
                    <img src="https://flagcdn.com/w20/fr.png" alt="French"/>  
                    <span>FR</span>
                </div>
                <div className="language">
                    <img src="https://flagcdn.com/w20/es.png" alt="Spanish"/>    
                    <span>ES</span>
                </div>
            </div>
        </div>
        <div className="lower">
           <div className="logo">
          <img src="https://www.stratign.com/es/img/STN-logo.png" alt="Logo" />
        </div>

        <div className="navLinks">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Products</a>
            <a href="">Events</a>
            <a href="">Articles</a>
            <a href="">Contact Us</a>
        </div> 
        </div>
    </div>
  )
}

export default NavBar