import React from 'react'
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from "./Post"
import { useState } from 'react';
import db from "../firebase";
import { useEffect } from 'react';
import FlipMove from "react-flip-move";

function Feed({show}) {
    const [posts , setPosts]=useState([]);
    
   
    useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>({
                doc_id:doc.id,
                post:doc.data()
            })))
        })
    },[])
    return (
        <div className="feed">
        <div className={`feed__header ${show && 'nav_blue'}`} >
        <h2>Home</h2>
        </div>
        <TweetBox/>
        <FlipMove>
        
        {
            posts.map(({doc_id,post}) =>(
                <Post key={doc_id} 
                displayName={post.displayName} 
                username={post.username}
                verified={post.verified}
                text={post.text}
                image={post.image}
                avatar={post.avatar}/>

            ))
        }
        </FlipMove>
        
        

            
        </div>
    )
}

export default Feed
