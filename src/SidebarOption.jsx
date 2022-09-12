import React from 'react';
import './SidebarOption.css'
const SidebarOption = ({Icon, name, number, selected, error}) => {
    return (
        <div className={`sidebarOption ${selected && "sidebar--active"}`} onClick={error}> 
            <Icon/>
            <h3>{name}</h3>
            <h4>{number}</h4>
        </div>
    );
}

export default SidebarOption;
