import React from 'react'
import { Link } from 'react-router-dom'


function AppBottom() {

  const redirectToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/swarup-banik-2495a1205/','_blank');
  };

  return (
    <div className='App_bottom'>
        <div className='App-bottom-upper'>
        <Link to="/about">
          <span style={{color:'white'}}>About Us</span>
        </Link>
        <a onClick={redirectToLinkedIn}>Dev Info</a>
        <Link to="/terms">
          <span style={{color:'white'}}>Terms of use</span>
        </Link>
        <a>Privacy Policy</a>
        </div>
        
        <div className='App-bottom-lower'>
            <p>Copyright &copy; 2023- All right reserved</p>
        </div>
    </div>
  )
}

export default AppBottom