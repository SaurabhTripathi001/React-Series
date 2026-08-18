import React from 'react'
import { useState } from "react";
import "./Styles/FilterSelection.css";

const SensorsSelection = () => {
    const [sensor, setSensor] = useState([]);
    const sensors = [
        "Thuraya",
        "Iridium",
        "ISAT"
        ];
    
    // Handles selecting/unselecting a sensor.
    // If the clicked sensor is already present in the selected sensors,
    // remove it; otherwise, add it to the selected sensors(item) to already existing ...prev.
    const handleSensorChange = (item) => {
        // Use the previous state because the new state depends on
        // which sensors are currently selected.
        setSensor((prev) => {
            // Check whether the clicked sensor is already selected.
            if (prev.includes(item)) {
                // If already selected, remove that sensor from the array.
                // filter() creates a new array containing every sensor
                // except the one that was clicked.
                return prev.filter(
                    (value) => value !== item
                );
            }
            // If the sensor is not selected, keep all existing sensors
            // and add the newly clicked sensor to the array.
            return [...prev, item];
        });
    };
  return (
    <div className="filter-section">
       <h2>Sensors</h2>
       {sensors.map((item) => (
        <label className="filter-option" key={item}>
            <input type="checkbox" checked={sensor.includes(item) } onChange={()=>{handleSensorChange(item)}}/>{item}
        </label>       
        ))} 
        <div className="selected-values">
            <strong>Selected Sensors:</strong>{" "}
            {sensor.join(", ") || "None"}
        </div>
    </div>
  )
}

export default SensorsSelection