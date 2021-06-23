import React,{forwardRef} from 'react'
import "./Post.css";
import {Avatar} from "@material-ui/core"
import RepeatIcon from '@material-ui/icons/Repeat';
import PublishIcon from '@material-ui/icons/Publish';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
const Post=forwardRef(({displayName,username,avatar,image,text,verified},ref) =>{
    return (
        <div className="post" ref={ref}>
        <Avatar className="post__avatar" src={avatar} alt="profile"/>
        <div className="post__body">
            <div className="post__header">

                <div className="post__headerText">
                <h3>{displayName}
                <span>
                {verified && <VerifiedUserIcon className="post__headerVerified"/>}
                </span>
                </h3>
                <p className="post_headerSpecial">@{username}</p>
                
                </div>

                <div className="post__description">
                <p>{text}</p>
                </div>

            </div>
            <img src={image} alt="dev"></img>
            <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small"/>
            <FavoriteBorderIcon fontSize="small"/>
            <RepeatIcon fontSize="small"/>
            <PublishIcon fontSize="small"/>
            </div>
        
        </div>
            
        </div>
    )
})

export default Post
