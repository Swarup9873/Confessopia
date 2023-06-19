import React from 'react';
import './css/App.css';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';


function AppBodyHeader () {

  return (
    <>
      <div className='App_body_head'>
      <div className="icon-wrapper">
          <Link to="/home">
            <HomeIcon style={{ fontSize: 42 }} className="home-icon" />
          </Link>
        </div>
        <div className="icon-wrapper">
            <LocalFireDepartmentIcon style={{ fontSize: 42 }} className='fire-icon'/>
        </div>

        <div className="icon-wrapper">
          <Link to="/add">
            <AddCircleIcon style={{ fontSize: 42 }} className="add-icon" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default AppBodyHeader;
