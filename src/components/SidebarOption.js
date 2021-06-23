import React from 'react'
import IconButton from '@material-ui/core/IconButton';

import "./SidebarOption.css";

function SidebarOption({active , text,Icon}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption__active'}`}>
        <IconButton>
        <Icon />
        </IconButton>
        
        <h4>{text}</h4>
            
        </div>
    )
} 

export default SidebarOption
