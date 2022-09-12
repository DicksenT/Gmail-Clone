import React from 'react';
import './SendMail.css'
import MinimizeIcon from '@mui/icons-material/Minimize';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/counter/mailSlice';
import { db } from './Firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const SendMail = () => {

const {register, handleSubmit, watch, error} = useForm()
const onSubmit= (formData) =>{
    console.log(formData)
    db.collection('emails').add({
        to:formData.to,
        message:formData.message,
        subject:formData.subject,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
    dispatch(closeSendMessage())
}
const dispatch = useDispatch()
    return (
        <div className='sendMail'>
            <div className="sendMail__header">
                <h4>New Message</h4>
                <div className="header__button">
                <IconButton>
                    <MinimizeIcon/>
                </IconButton>
                <IconButton>
                    <OpenInFullIcon/>
                </IconButton>
                <IconButton onClick={() => dispatch(closeSendMessage())}>
                    <CloseIcon  className='sendMail__close'/>
                </IconButton>
                </div>
            </div>
            <form action="" className='sendMail__form' onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder='To' {...register('to', {required: true})} required/>
                <input type="text" placeholder='Subject' {...register('subject', {required: true})} required/>
                <textarea type="text" className='sendMail__message' {...register('message', {required: true})} required/>
                <div className="sendMail__buttons">
                    <Button 
                    className='sendMail__send'
                    variant='contained'
                    color='primary'
                    type='submit'>
                        Send <span className='sendMail__line'></span> <ArrowDropDownIcon/>
                    </Button>
                </div>
            </form>

        </div>
    );
}

export default SendMail;
