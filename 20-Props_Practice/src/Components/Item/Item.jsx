//Child Of Popular
//Recieveing Data from its parent i.e popular
import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="Unavailabe" />
        <p className='product-name'>{props.name}</p>
        <div className="old-price">
            ${props.old_price}
        </div>
        <div className="new-price">
            ${props.new_price}
        </div>
        
    </div>
  )
}

export default Item