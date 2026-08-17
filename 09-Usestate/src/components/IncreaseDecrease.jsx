import React, { useState } from 'react'

const IncreaseDecrease = () => {
  const [initial, setInitial] = useState(1);

  return (
    <div className="container">
      <div className="board">{initial}</div>
      <div className="btn">
        <button onClick={() => setInitial(initial + 1)} className="inc">+</button>
        <button onClick={() => setInitial(initial - 1)} className="dec">-</button>       
      </div>
    </div>
  );
};

export default IncreaseDecrease;