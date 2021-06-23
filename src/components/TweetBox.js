import { Button ,Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import {useStateProviderValue} from '../StateProvider'
import db ,{storage } from '../firebase'
import firebase from "firebase"
import "./TweetBox.css"
function TweetBox() {
    const [{user},dispatch]=useStateProviderValue();
    const [caption , setCaption]=useState("");
    const [progress,setProgress]=useState(0);
    const [image, setImage]=useState("");

    const handleImage=(event)=>{
        if(event.target.files[0])
            {
                setImage(event.target.files[0]);
            }
        else
            {
                setImage(null);
            }

    }

    
    const handleInput =(event)=>{
        setCaption(event.target.value)
      }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const upload=storage.ref(`images/${image.name}`).put(image);
        upload.on("state_changed",
        (snapshot)=>{
            const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
            setProgress(progress);
        },
        (error)=>{
            console.log(error)
        },
        ()=>{
            storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then(url=>{
                    db.collection("posts").add(
                    {
                        displayName:user.displayName,
                        username:user.displayName,
                        text:caption,
                        image:url,
                        avatar:user.photoURL,
                        verified:true,
                        timestamp:firebase.firestore.FieldValue.serverTimestamp()
                    }
                
                )
        setImage(null);
        setProgress(0);
        setCaption("");
         })
        }
        )
    }
      
    return (
        <div className="tweetBox">
            <form className="tweetBox__form">
                <div className="form__first">
                <Avatar src={user.photoURL} alt="P"/>
                <input type="text" placeholder="What's happening" value={caption} name="caption" onChange={handleInput} />
                </div>
                <progress value={progress} max="100"/>
                <input className="tweetBox__file" disableUnderline={true} type="file" placeholder="Enter the url" onChange={handleImage} />
                <Button onClick={handleSubmit} variant="outlined" className="tweetBox__btn" >Tweet</Button>
                
            </form>
            
        </div>
    )
}

export default TweetBox
