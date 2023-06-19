import './css/App.css';
import Header from './Header';
import AppBodyHeader from './AppBodyHeader';
import ConfessionForm from './Form';
import AppBottom from './AppBottom';



function Add() {

  return (
    <div className="App">
      <div className="App-header">
        <Header/>
      </div>
      <div className='App-body'>
         <div className='App-body-header'>
          <AppBodyHeader/>
         </div>
         <div className='Add-body-body'>
            <ConfessionForm />
         </div>
      </div>
      <AppBottom/>
    </div>
  );
}

export default Add;
