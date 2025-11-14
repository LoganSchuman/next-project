'use client';

import { useState } from 'react';

export default function Counter({ incrementAmount, buttonColor }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    let newCount = count + incrementAmount;
    if (newCount > 10) {
      newCount = 0;
    }
    setCount(newCount);
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: 'black',
    fontSize: '16px',
    margin: '5px'
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>Current Count: {count}</h3>
      <button onClick={handleClick} style={buttonStyle}>
        Add +{incrementAmount}
      </button>
    </div>
  );
}
