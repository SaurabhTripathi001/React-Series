import React from 'react'
import { Bookmark } from 'lucide-react'
//Making A Static Card That Will Show Data Entered By User And For Each Card Call Data Will BE Same As PAssed By User.
const Card = () => {
  return (
    <div className="card">
        <div className="top">
          <img src="https://static.vecteezy.com/system/resources/previews/033/220/936/original/amazon-logo-symbol-ecommerce-website-its-headquarters-are-located-in-seattle-in-washington-state-united-states-of-america-amazon-is-the-largest-online-sales-website-in-the-united-states-free-png.png" alt="" />
          <button>Save <Bookmark size={48} /></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 Days Ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr- $150/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button> 
        </div>
    </div>
  )
}

export default Card