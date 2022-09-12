import { IconButton } from '@mui/material';
import React from 'react';
import './Widget.css'
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Widget = () => {
    const error = (() => alert("This function isn't applied yet"))
    return (
        <div className='widget'>
            <div className="widget__logo">
                <IconButton onClick={error}>
                <img src="https://img.icons8.com/color/344/google-calendar--v2.png" alt="" className='widget__img'/>
                </IconButton>
                <IconButton onClick={error}>
                <img src="https://img.icons8.com/color/344/google-keep.png" alt="" className='widget__img'/>
                </IconButton>
                <IconButton onClick={error}>
                <img src="https://img.icons8.com/material-rounded/344/in-progress.png" alt="" className='widget__img'/>
                </IconButton>
                <IconButton onClick={error}>
                <img src="https://img.icons8.com/color/344/google-contacts.png" alt="" className='widget__img'/>
                </IconButton>
                <div className="widget__bottom">
                <hr/>
                <IconButton onClick={error}>
                <AddIcon className='widget__icon'/>
                </IconButton>
            </div>
            </div>
            <div className="widget__func">
                <IconButton onClick={error}>
                <KeyboardArrowRightIcon/>
                </IconButton>
            </div>
        </div>
    );
}

export default Widget;
