import React from 'react'
import { Button } from '@material-ui/core'
import "./css/Login.css"
import {auth} from "./firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useStateValue } from './stateProvider';
import { actionTypes } from './reducer';
import { Link,useNavigate} from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import db from './firebase';



function Login() {
    
    const [{},dispatch] = useStateValue();
    const navigate = useNavigate();

  const signIn = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
     auth
     .signInWithPopup(provider)
     .then((result) => {

        const { user } = result;
        const { email, displayName } = user;

        // Store the user's email in the Firebase database
        db.collection("users").doc(user.uid).set({
          email: email,
          name: displayName,
          
        });

        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        });
        navigate('/home');
    })
    .catch((error) => alert(error.message));
  }; 


  return (
    <div className='login'>
        
        <div className='login__container'>
        <div className='login-back'>
        <Link to="/home">
           <KeyboardBackspaceIcon/>
        </Link>
        </div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_3G8obTxrP6578fuJNu3WBdcF4tMd7eDAbySyt1Ymg&s' alt='' />
            <div className='login__text'>
                <h1>Sign in</h1>
            </div>

            <Button onClick={signIn}>
                Sign in with Google
            </Button>
        </div>
    </div>
  )
}

export default Login;