import React, { useState, useEffect } from "react";
import Profile from "../components/profile";
import Profile2 from "../components/profile2";
import { useAuthentication } from "../components/ProtectedRoute";


const ViewProfile = () => {
  const isAuthenticated = useAuthentication();
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
    <div>
      {isAuthenticated ? (
        <>
          {windowWidth < 650 ? <Profile2 /> : <Profile />}
        </>
      ) : null}
    </div>
   
    
  );
};

export default ViewProfile;
