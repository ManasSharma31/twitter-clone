import Sidebar from './components/Sidebar';
import './App.css';
import Feed from "./components/Feed"
import Widgets from './components/Widgets';
import {useStateProviderValue} from './StateProvider';
import Login from './components/Login';
import { useEffect, useState } from 'react';
function App() {
  const [{user},dispatch]=useStateProviderValue();
  const [show , setShow]=useState(false);
  useEffect(()=>{ 
    window.addEventListener("scroll",()=>{
    if(window.scrollY > 50) 
    {
        setShow(true);
    }
    else
    {
        setShow(false);
    }
});
return ()=>{
    window.removeEventListener("scroll");
}
},[])

  return (
    <div className="app">
    {
      !user ? <Login/>:( 
        <>
        <Sidebar/>
        <Feed show={show}/>
        <Widgets/>
        </>
        )
    }
     
    </div>
  );
}

export default App;
