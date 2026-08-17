import React, { useState } from 'react'
import "./Styles/SessionMonitor.css"

const SessionMonitor = () => {
    // State 1: Number of active sessions
    const [activeSessions,setActiveSessions] = useState(0)
    // Currently Selected Targets
    const [selectedTargets,setSelectedTargets] = useState("")
    // Start a new session
    const startSession = () =>{
        setActiveSessions(prev => prev+1)
    };
    // End A Session
    const endSession = () =>{
        setActiveSessions(prev => Math.max(prev-1,0))
    };
    // Reset Everything
    const resetSessions = () => {
        setActiveSessions(0);
    }
  return (
    <div className="session-monitor">
        <h1>Session Monitor</h1>
        <hr />

        {/* Active Sessions */}
        <h2>Active Sessions: {activeSessions}</h2>
        {/* Session buttons */}
        <button onClick={startSession}> + Start Session </button>
        <button onClick={endSession}> - End Session </button>
        <button onClick={resetSessions}> Reset </button>
        <hr />

        {/* Status */}
        <h3>Status:{" "}
            {activeSessions === 0 && "No Active Sessions"}
            {activeSessions >= 1 && activeSessions <= 5 && "Low Activity"}
            {activeSessions >= 6 && activeSessions <= 20 && "Normal Activity"}
            {activeSessions >= 21 && "High Activity"}
        </h3>

        <hr />
         {/* Target selection */}
        <h2> Current Target:{selectedTargets || "None"}   
        </h2>
        <button onClick={() => setSelectedTargets("Thuraya")}>Thuraya </button>
        <button onClick={() => setSelectedTargets("Iridium")}>Iridium </button>
        <button onClick={() => setSelectedTargets("ISAT")}> ISAT </button> 
    </div>
  )
}

export default SessionMonitor