import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationDot } from "react-icons/fa6";
import { Spinner } from "react-bootstrap";
import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  viewProfileAction,
  resetProfileAction,
} from "../store/Actions/profileAction";

const Profile2 = () => {
  // const response = useSelector((state) => state?.userLogin?.auth?.token);

  const profileData = useSelector((state) => state.viewProfile.userInfo);
  const isLoading = profileData === null;

  // const [formData, setFormData] = useState(null);
  console.log(profileData, "vieww");

  const dispatch = useDispatch();

  useEffect(() => {
    const authUserString = localStorage.getItem("auth-user");
    console.log(authUserString, "tokennn");
    if (authUserString) {
      // You can parse the data if it's JSON
      const authUser = JSON.parse(authUserString);
      const token = authUser ? authUser.token : null;
      console.log(token, "tok");
      const fetchData = async () => {
        if (token) {
          // Dispatch the action to fetch profile data
          await dispatch(viewProfileAction(token));
        }
      };

      fetchData();
    }
  }, [dispatch]);

  if (isLoading) {
    // Display the loading spinner in the center of the screen
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status"></Spinner>
      </div>
    );
  }

  const theme = {
    img: {
     
      position: "relative",
      backgroundColor:"red",
      
    },

    main: {
      backgroundColor: "#EEF4FA",
      marginBottom: "10px",
    },

    relative: {
      position: "relative",
    },
    btn1: {
      borderRadius: "10px",
    },
    btn2: {
      backgroundColor: "#31A551",
      borderRadius: "10px",
      color: "white",
    },
    video:{
      width:"200px",
      height:"100px"
      
    },
    pic:{
      width:"60%",
      objectFit:"contain !important",
      display:"flex",
      justifyContent:"center",
      border:"1px solid "
    },
    photo:{
      border:"1px solid ",
      width:"100%",
      display:"flex",
      justifyContent:"Space-between",
        //  flexWrap:"wrap",
      height:"auto"
    }
  };

  return (
    <div className="px-2 py-2">
      {profileData && (
        <h6>
          {profileData.name} | <span>Now Available</span>{" "}
        </h6>
      )}

      <p>
        <FaLocationDot /> <span>Amsterdem</span>{" "}
      </p>

    
          <div style={theme.img}>
            <div>
              {profileData.selectedVideoFile && (
                <video width="100%" height='240' controls >
                  <source
                  
                    src={`data:video/mp4;base64,${Buffer.from(
                      profileData.selectedVideoFile.data
                    ).toString("base64")}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}

              <div style={theme.photo}>
              {Array.isArray(profileData.selectedFileNames) &&
                profileData.selectedFileNames.map((image, index) => (
                  <div
                    className="mb-2"
                    key={index}
                    style={{display:"flex", justifyContent:"center"}}
                   
                  >
                    <img
                      src={`data:image/jpeg;base64,${Buffer.from(
                        image.data
                      ).toString("base64")}`}
                      alt={`Image ${index}`}
                      style={theme.pic}
                      
                      
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
       

      

      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <div className="bg-white w-100">
          <div className="d-flex justify-content-around align-items-center text-nowrap">
            <button
              style={theme.btn1}
              className="py-2 px-2 d-flex align-items-center bg-white"
            >
              <span className="px-2">
                <BsEnvelopeFill />
              </span>
              Send Message
            </button>
            <button
              style={theme.btn2}
              className="px-2 py-2 d-flex align-items-center"
            >
              <span className="px-2">
                <BsFillTelephoneFill className="text-white" />
              </span>
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div className="py-2 px-3" style={theme.main}>
        <h4>Characteristic</h4>
        <div>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
        </div>
      </div>

      <div className="py-2 px-3" style={theme.main}>
        <h4>Prices</h4>
        <div>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            1 hours/day <span>100$</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            2 hours/day <span>150$</span>{" "}
          </h6>
        </div>
      </div>

      <div className="py-2 px-3" style={theme.main}>
        <h4>About me</h4>
        <div>
          <p className="">
            Experienced teacher providing tailored, flexible education to
            children from home to home. Strong focus on creating engaging lesson
            plans to suit each childs learning style and needs. Personalized
            approach to empower children to reach their full potential.
          </p>
        </div>
      </div>
      <div className="py-2 px-3" style={theme.main}>
        <h4>Characteristic</h4>
        <div>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6> Education </h6>
          <h6> Education </h6>
          <h6> Education </h6>
          <h6> Education </h6>
          <h6> Education </h6>
          <h6> Education </h6>
        </div>
      </div>

      <div className="py-2 px-3" style={theme.main}>
        <h4>Characteristic</h4>
        <div>
          <h6 className="d-flex justify-content-between w-75">
            Monday <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            Tuesday <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            Wednesday <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            Thursday <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            Friday <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            Saturday <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            Sunday <span>American</span>{" "}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Profile2;
