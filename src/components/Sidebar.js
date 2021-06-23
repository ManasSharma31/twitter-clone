import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import MessageIcon from '@material-ui/icons/Message';
import PersonIcon from '@material-ui/icons/Person';
import ExploreIcon from '@material-ui/icons/Explore';
import SidebarOption from "./SidebarOption";

import Button from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ListAltIcon from '@material-ui/icons/ListAlt';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import "./Sidebar.css"
function Sidebar() {
    return (
        <div className="sidebar">
        <TwitterIcon className="sidebar__logo" />

        <SidebarOption active text="Home" Icon={HomeIcon}/>
        <SidebarOption text="Explore" Icon={ExploreIcon}/>
        <SidebarOption text="Notifications" Icon={NotificationsActiveIcon}/>
        <SidebarOption text="Messages" Icon={MessageIcon}/>
        <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon}/>
        <SidebarOption text="Lists" Icon={ListAltIcon}/>
        <SidebarOption text="Profile" Icon={PersonIcon}/>
        <SidebarOption text="More" Icon={MoreHorizIcon}/>

        <Button className="sidebar__btn" variant="outlined" fullWidth >Tweet</Button>




            
        </div>
    )
}

export default Sidebar
