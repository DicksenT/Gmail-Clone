import { Button, IconButton } from '@mui/material';
import React from 'react';
import './Sidebar.css'
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import FeedIcon from '@mui/icons-material/Feed';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/counter/mailSlice';
const Sidebar = () => {
    const error = (() => alert("This function isn't applied yet"))
    const dispatch = useDispatch()
    return (
        <div className='sidebar'>
            <Button className='sidebar__compose' startIcon={<CreateIcon/>} onClick={() => dispatch(openSendMessage())}><span className='capit'>C</span>ompose</Button>
            <SidebarOption selected Icon={InboxIcon} name='Inbox' number="642"/>
            <SidebarOption Icon={StarBorderIcon} name='Starred' number=""  error={error}/>
            <SidebarOption Icon={AccessTimeIcon} name='Snoozed' number="" error={error}/>
            <SidebarOption Icon={SendIcon} name='Sent' number="" error={error}/>
            <SidebarOption Icon={FeedIcon} name='Drafts' number="9" error={error}/>
            <SidebarOption Icon={ExpandMoreIcon} name='Expand' number="" error={error}/>

            <div className="sidebar__footer">
                <h3>Labels </h3> <IconButton onClick={error}><AddIcon/></IconButton>  
            </div>

        </div>
    );
}

export default Sidebar;
