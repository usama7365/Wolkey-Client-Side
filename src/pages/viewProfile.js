import React, { useState, useEffect } from "react";
import Profile from "../components/profile";
import Profile2 from "../components/profile2";
// import ProtectedProfileRoute from "../components/ProtectedProfileRoute";
import Filter from "../components/filter";
import ProtectedRoute from "../components/ProtectedRoute";

// import { useDispatch, useSelector } from "react-redux";
// import {viewProfileAction} from "../store/Actions/profileAction"

const ViewProfile = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ProtectedRoute>

    <div>
      <Filter/>
      
        {windowWidth < 650 ? <Profile2 /> : <Profile />}
     
    </div>
    </ProtectedRoute>
    
  );
};

export default ViewProfile;
