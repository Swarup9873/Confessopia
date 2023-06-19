import React from 'react'
import AppBodyHeader from './AppBodyHeader';
import ConfessionForm from './Form';
import Confess from './confess';
import { useState } from 'react';
import Confessss from './Confess2';





function AppBody() {

    const [showForm, setShowForm] = useState(false);

  const handleAddButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className='App-body'>
         <div className='App-body-header'>
          <AppBodyHeader/>
         </div>
         <div className='App-body-body'>
            {showForm ? <ConfessionForm /> : <Confessss />}
         </div>
    </div>
    
  )
}

export default AppBody