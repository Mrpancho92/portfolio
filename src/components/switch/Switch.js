
import React from 'react';
import './Switch.scss'

const Switch = ({ isOn, handleToggle }) => {
  console.log('render-switch');
 
    return (
      <>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
            style={{ background: isOn && '#1f1b1b' }}
            className="react-switch-label"
            htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
          <span className={`react-switch-sun`} />
          <div className={`react-switch-moon`}>
              <div className={`circle`}></div>
          </div>
        </label>
      </>
    );
  };

export default Switch;