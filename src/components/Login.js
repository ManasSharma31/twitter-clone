import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth , provider} from '../firebase.js';
import { useStateProviderValue } from '../StateProvider';

export default function Login() {
    const [{user},dispatch]=useStateProviderValue();
    const signIn=()=>
    {
        auth
        .signInWithPopup(provider)
        .then(result=>{
            
            dispatch({
                type:"SET_USER",
                user:result.user
            })
        })
        .catch(err=>alert(err.message));
    }
    console.log(user);
    return (
        <div className="login">
         <div className="login_container">
          <img src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" alt="whatsapplogo">
           </img>
            
              <h2>Sign in to Twitter</h2>
    
            <Button onClick={signIn}>Sign in with Google</Button>
        </div>
        </div>
    )
}
