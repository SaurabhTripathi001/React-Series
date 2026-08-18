import React from 'react'
import IncreaseDecrease from './components/IncreaseDecrease.jsx'
import SessionMonitor from './components/SessionMonitor.jsx'
import TargetSelection from './components/TargetSelection.jsx'
import SensorsSelection from './components/SensorsSelection.jsx'


const App = () => {
  return (
    <div>
      <IncreaseDecrease /> 
      <SessionMonitor />
      <TargetSelection />
      <SensorsSelection />
    </div>
  )
}

export default App