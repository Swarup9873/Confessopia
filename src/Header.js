import React  from 'react';
import './css/Header.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import confessImg from './image/confess image.png'
import { Link } from 'react-router-dom';
import { useStateValue } from './stateProvider';



const Header = () => {

  const [{ isLoggedIn }] = useStateValue();
  
 
  return (
    <header className="top-header">
      <div className="logo">
        <Link to="/home">
          <img src={confessImg} alt="" />
        </Link>

        <span className='confess-about'>Confessopia</span>
      </div>
      <div className="spans">

        {isLoggedIn? 
        <span className="login-button">Logged-in</span> : <Link to="/login">
          <span className="Login-button" style={
            { padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#333',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    }}>Login</span>
        </Link>}
      </div>
      {isLoggedIn? <div className="last-image">
          <AccountBoxIcon style={{ width: '50px',
    height: '50px', color:'white'}}/>
        </div> : <Link to="/login">
        <div className="last-image">
          <AccountBoxIcon style={{ width: '50px',
    height: '50px', color:'white'}}/>
        </div>
      </Link>}
      
      
    </header>
  );
};

export default Header;
