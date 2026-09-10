import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Components/Pages/Shop'
import Product from './Components/Pages/Product'
import Contact from './Components/Pages/Contact'
import About from './Components/Pages/About'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App