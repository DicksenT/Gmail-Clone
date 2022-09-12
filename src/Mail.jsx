import React from 'react';
import './Mail.css'
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteIcon from '@mui/icons-material/Delete';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LabelIcon from '@mui/icons-material/Label';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Button, IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import PrintIcon from '@mui/icons-material/Print';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import { useSelector } from 'react-redux';
import { selectMail, selectOpenMail } from './features/counter/mailSlice';
const Mail = () => {
    const error = (() => alert("This Function isn't applied yet"))
    const navigate = useNavigate()
    const selectedMail = useSelector(selectOpenMail)
    return (
        <div className='mail'>
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                <IconButton onClick={() => navigate('/')}>
                    <ArrowBackIcon/>
                </IconButton>
                <IconButton onClick={error}>
                    <ArchiveIcon/>
                </IconButton>
                <IconButton onClick={error}>
                    <ReportGmailerrorredIcon/>
                </IconButton>
                <IconButton onClick={error}>
                    <DeleteIcon/>
                </IconButton>
                <span className="vertLine"></span>
                <IconButton onClick={error}>
                    <MailOutlineIcon/>
                </IconButton>
                <IconButton onClick={error}>
                    <AccessTimeFilledIcon/>
                </IconButton>
                <IconButton onClick={error}>
                    <AddTaskIcon/>
                </IconButton>
                <span className="vertLine"></span>
                <IconButton onClick={error}>
                    <DriveFileMoveIcon/>
                </IconButton>
                <IconButton onClick={error}>
                    <LabelIcon/>
                </IconButton>
                <IconButton onClick={error}>
                    <MoreVertIcon/>
                </IconButton>
                </div>
                <div className="mail__toolRight">
                    <IconButton onClick={error}>
                        <KeyboardArrowLeftIcon/>
                    </IconButton>
                    <IconButton onClick={error}>
                        <KeyboardArrowRightIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
            <div className="mail__header">
                <h1>{selectedMail?.subject}</h1>
                <div className="mail__headerLogo">
                    <IconButton onClick={error}>
                        <PrintIcon/>
                    </IconButton>
                    <IconButton onClick={error}>
                        <OpenInNewIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="mail__subheader">
                <div className="mail__subheaderLeft">
                <Avatar/> 
                <p>{selectedMail?.title}</p>
                </div>
                <div className="mail__subheaderRight">
                    {selectedMail?.time}
                    <IconButton onClick={error}>
                    <StarOutlineIcon/>
                    </IconButton>
                    <IconButton onClick={error}>
                    <ReplyIcon/>
                    </IconButton>
                    <IconButton onClick={error}>
                    <MoreVertIcon/>
                    </IconButton>
                </div>
                </div>
                <div className="mail__message">
                    {selectedMail?.description}
                </div>
                <div className="mail__footer">
                    <Button onClick={error}>
                        <ReplyIcon/> <p className='footer__text'><span className='capit'>R</span>eply</p>
                    </Button>
                    <Button onClick={error}>
                        <ShortcutIcon/> <p className='footer__text'><span className='capit'>F</span>orward</p>
                    </Button>
                </div>
                </div>
        </div>
    );
}

export default Mail;
