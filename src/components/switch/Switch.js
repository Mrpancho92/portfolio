
import React from 'react';
import './Switch.scss'

const Switch = ({ isOn, handleToggle }) => {
  console.log('render-switch');
  // const switchBox = Array.from(document.getElementsByClassName('react-switch-label'));
  // const colorTextHeader = Array.from(document.getElementsByClassName('navLi'));
    // if (isOn) {
        // document.body.style.backgroundColor = '#3e3d3d'; 
        // switchBox.forEach(item => item.style.boxShadow = '3px 3px 10px 0px rgba(255, 255, 255, 0.5)');
        // colorTextHeader.forEach(item => {
        //   item.style.color = '#ffffff';
        //   item.style.boxShadow = '3px 3px 10px 0px rgba(255, 255, 255, 0.5)';
        //   item.style.borderRadius = '50px'
        // });
    // } else {
        // document.body.style.backgroundColor = '';
        // switchBox.forEach(item =>item.style.boxShadow = '');
        // colorTextHeader.forEach(item => item.style.color = '' );
    // }
        
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