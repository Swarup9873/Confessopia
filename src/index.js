import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { StateProvider } from './stateProvider';
import reducer, {initialState} from './reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState}
    reducer={reducer}>
      <App /> 
    </StateProvider>
  </React.StrictMode>
);

