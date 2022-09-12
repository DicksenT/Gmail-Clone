import React from 'react';
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logout, selectUser } from './features/counter/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const error = (() => alert("This function isn't applied yet"))
    const navigate = useNavigate()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const signOut= () =>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })
    }
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton onClick={error}>
                <MenuIcon/>
                </IconButton>
                <figure  onClick={() => navigate('/')}>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt="" />
                <h2>Gmail</h2>
                </figure>
            </div>
            <div className="header__middle">
                <SearchIcon/>
            <input type="text" placeholder='Search in mail' />
            <IconButton onClick={error}>
            <TuneIcon/>
            </IconButton>
            </div>
            <div className="header__right">
                <IconButton onClick={error}>
                <HelpOutlineIcon/>
                </IconButton>
                <IconButton onClick={error}>
                <SettingsIcon/>
                </IconButton>
                <IconButton onClick={error}>
                <AppsIcon/>
                </IconButton>
                <IconButton>
                <Avatar src={user?.photoUrl} onClick={signOut}/> 
                </IconButton>
            </div>
        </div>
    );
}

export default Header;
