import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';
import { auth, provider } from './Firebase';
import './Login.css'

const Login = () => {
    const dispatch = useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user}) =>{
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch(error => alert('There is something wrong'))
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"alt="" />
            <Button variant="contained" onClick={signIn}>Login</Button>
            </div>
            
        </div>
    );
}

export default Login;
