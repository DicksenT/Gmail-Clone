import { style } from '@mui/system';
import React from 'react';
import './Section.css'

const Section = ({Icon, title, selected}) => {
    return (
        <div className={`section ${selected && "section--selected"}`} 
        style={{
            color: `${selected && "#0b57d0"}`
        }}>
            <Icon/>
            <h4>{title}</h4>
        </div>
    );
}

export default Section;
