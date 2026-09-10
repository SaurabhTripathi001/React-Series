//Popular is parent of Item That is calling item and 
//popular is recieving data from the assets/data.js and this data will be shown in browser
//so its child is item that has structure and data is passed from here to item
//parent of popular is home page i.e shop
import React from 'react'
import './Popular.css'
import data_product from '../../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h2>Popular Products</h2>
        <hr />
        <div className="popular-item">
            {data_product.map((item,idx)=>{
                return <Item key={idx} image={item.image} name= {item.name} old_price={item.old_price} new_price={item.new_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular