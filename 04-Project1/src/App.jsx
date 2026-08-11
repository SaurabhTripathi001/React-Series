import React from 'react'
import Card from './components/Card'
import Card1 from './components/Card1'
import Jobs from './data/Jobs'

const App = () => {

  
  return (
    <div className="parent">
      {Jobs.map(function(elem){
        return <Card1 logo={elem.logo} company={elem.company} posted={elem.posted} title={elem.title} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
      })}
    </div>
  )
}

export default App