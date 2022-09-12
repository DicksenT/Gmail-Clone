import React from 'react';
import './Emailrow.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail, selectOpenMail } from './features/counter/mailSlice';
const Emailrow = ({id, title, subject, description, time}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const openMail = () => {dispatch(selectMail({
        id,
        title,
        subject,
        description,
        time
    }))
    navigate('/mail')
}
    return (
        <div onClick={openMail} className='emailRow'>
            <div className="emailRow__options">
                <IconButton>
                    <CheckBoxOutlineBlankIcon/>
                </IconButton>
                <IconButton>
                    <StarBorderIcon/>
                </IconButton>

            </div>
            <div className="emailRow__title">
                {title}
            </div>
            <div className="emailRow__message">
                <h4>{subject}{"  "} <span className="emailRow__description">
                    -{description}</span></h4>
            </div>
            <div className="emailRow__time">
                {time}
            </div>
        </div>
    );
}

export default Emailrow;
