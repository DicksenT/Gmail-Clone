import React, { useEffect, useState } from 'react';
import './EmailList.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { IconButton } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Section from './Section';
import Emailrow from './Emailrow';
import { db } from './Firebase';

const EmailList = () => {
    const [email, setEmail] = useState([])

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot
        (snapshot => setEmail(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        }))))
       
    }, []);

    return (
        <div className='emailList'>
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                <IconButton>
                    <CheckBoxOutlineBlankIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon/>
                </IconButton>
                <IconButton>
                    <RefreshIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                </div>
                <div className="emailList__settingsRigt">
                    <IconButton>
                        <KeyboardArrowLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardArrowRightIcon/>                        
                    </IconButton>
                    <IconButton>
                        <KeyboardIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardArrowDownIcon/>
                    </IconButton>
                </div>
                
            </div>
            <div className="emailList__section">
                <Section Icon={InboxIcon} title='Primary' selected/>
                <Section Icon={LocalOfferIcon} title='Promotions'/>
                <Section Icon={PeopleAltIcon} title='Primary'/>
            </div>
            <div className="emailList__list">
                {email.map(({id, data}) => (
                    <Emailrow
                    key={id}
                    title={data.to}
                    subject={data.subject}
                    description={data.message}
                    time={new Date(data.timestamp?.seconds * 1000).toUTCString()} />
                ))}
                
            </div>
        </div>
    );
}

export default EmailList;
