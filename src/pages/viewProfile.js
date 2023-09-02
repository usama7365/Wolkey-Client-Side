import React, { useState, useEffect } from 'react';
import Profile from './profile'
import Profile2 from './profile2'
// import { useDispatch, useSelector } from "react-redux";
// import {viewProfileAction} from "../store/Actions/profileAction"

const ViewProfile = () => {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div>
   
    {  windowWidth < 650 ? <Profile2 /> : <Profile />}
  
      
 
  </div>
  )
}

export default ViewProfile
