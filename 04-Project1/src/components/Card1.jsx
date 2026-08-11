import React from 'react'
import { Bookmark } from 'lucide-react'
// Card1 is basically showing Dynamic data from Jobs.js file. So we are passing props to Card1 component and then using those props to show the data in the card.
const Card1 = (props) => {
  return (
    <div className="card">
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={48} /></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.posted}</span></h3>
          <h2>{props.title}</h2>
          <div>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button> 
        </div>
    </div>
  )
}

export default Card1