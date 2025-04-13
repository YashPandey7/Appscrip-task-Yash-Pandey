import React, { useState } from 'react';
import './Recommendation.css';

const Recommendation = ({show, setShow}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState('RECOMMENDED');

  const options = [
    'RECOMMENDED',
    'NEWEST FIRST',
    'POPULAR',
    'PRICE : HIGH TO LOW',
    'PRICE : LOW TO HIGH'
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setShowDropdown(false);
  };

  return (
    <div className="recommendation-bar">
      <div className="left-section">
        <strong>3425 ITEMS</strong>
        <span className="hide-filter" onClick={() => setShow(!show)}>
          {show ? '< HIDE FILTER' : '> SHOW FILTER'}
        </span>
      </div>

      <div 
        className="dropdown-wrapper"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="selected-option">
          <strong>{selected}</strong>
          <span className="arrow">&#9662;</span>
        </div>

        {showDropdown && (
          <ul className="dropdown-menu">
            {options.map((option) => (
              <li 
                key={option} 
                className={selected === option ? 'active' : ''}
                onClick={() => handleSelect(option)}
              >
                {selected === option && <span className="tick">&#10003;</span>}
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Recommendation;
