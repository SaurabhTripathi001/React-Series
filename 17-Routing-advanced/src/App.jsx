import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home'
import About from './pages/About'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import Error404 from './pages/Error404'
import Women from './pages/Women'
import Men from './pages/Men'
import Kids from './pages/Kids'





const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>

        {/* Nested Routing For Product */}
        <Route path='/product' element={<Product />}>
          <Route path='women' element={<Women />}/>
          <Route path='men' element={<Men />} />
          <Route path='kids' element={<Kids />} />
        </Route>
        
         
        {/* When We Are Trying To Search Any Page That Does Not Exists */}
        <Route path='*' element={<Error404 />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App