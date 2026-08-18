import { useState } from "react";
import "./Styles/FilterSelection.css";

function TargetSelection() {
  //UseState To Update Priority
  const [priority, setPriority] = useState([]);
  
  // Three Priority Values
  const priorities = [
    "Low",
    "Medium",
    "High"
  ];
  // What To Perform On Click
  const handlePriorityChange = (item) => {
    setPriority((prev) => {
      if (prev.includes(item)) {
        return prev.filter(
          (value) => value !== item
        );
      }
      return [...prev, item];
    });
  };
  return (
    //UI Part For Priority Handling
    <div className="filter-section">
      <h1>Mini USPM - CRI</h1>
      <h2>Priority</h2>
      {priorities.map((item) => (
        <label className="filter-option" key={item}>
          <input type="checkbox" onChange={() => handlePriorityChange(item)}/>{item}      
        </label>
      ))}
      <div className="selected-values">
        <strong>Selected Priority:</strong>{" "}
        {priority.join(", ") || "None"}
      </div>
      
    </div>
  );
}

export default TargetSelection;