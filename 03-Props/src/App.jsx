
import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">

      <Card
        user="Saurabh Tripathi"
        image="https://images.unsplash.com/photo-1785804681198-21c3336cf60b?q=80&w=687&auto=format&fit=crop"
      />

      <Card
        user="Kanak Kohli"
        image="https://miro.medium.com/v2/resize:fit:2000/1*Z0LbdutgT1vFTbTm-3QeiA.jpeg"
      />

      <Card
        user="Bobby"
        image="https://images.pexels.com/photos/4138522/pexels-photo-4138522.jpeg?cs=srgb&dl=pexels-luamorales-4138522.jpg&fm=jpg"
      />

    </div>
  )
}

export default App

