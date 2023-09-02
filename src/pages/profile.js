import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector , useDispatch } from "react-redux";
import {viewProfileAction , resetProfileAction} from "../store/Actions/profileAction"

const Profile = () => {

  const response = useSelector((state) => state?.userLogin?.auth?.token);
  const profileData=useSelector((state)=>state.viewProfile.userInfo)
  const isLoading = profileData === null;

  const [formData, setFormData] = useState(null); 
  console.log(profileData ,"vieww")

  console.log(response, "profileetoken");

  const dispatch=useDispatch()
  
useEffect(()=>{
   const token = response
    console.log(token, "tokennn");
  dispatch(
    viewProfileAction(token)
  )

  return () => {
    dispatch(resetProfileAction());
  };
}, [response, dispatch]);

useEffect(() => {
  // Update profileData when formData changes
  if (profileData) {
    setFormData(profileData);
  }
}, [profileData]);
 
if (!profileData) {
  return <p>Loading...</p>;
}
  const theme = {
    img: {
      width: "250px",
      Padding: "10px",
      backgroundColor:"red"
    },
    btn: {
      borderRadius: "10px",
      width: "35%",
      marginTop: "10px",
    },
    main: {
      width: "100%",
      height: "auto",
    },
    left: {
      width: "20%",
      paddingLeft: "30px",
    },
    right: {
      width: "80%",

      padding: "10px",
    },
    lucky: {
      padding: "2%",
      
    },
    price: {
      padding: "4%",
    },
    width: {
      width: "80%",
    },
    pri: {
      width: "70%",
    },
    font: {
      fontSize: "19px",
    },
    img2:{
      width:"180px",
      
    }
  };

  const characteristic = {
    education: "American",
    age: 28,
    experience: "Intermediate",
    nation: "American",
    person: "Analytical",
    style: "Hands-on",
    avalaible: "Part time",
  };

  return (
    <>
      <div style={theme.main} className="py-5 d-flex ">
        <div style={theme.left}>
          <div>
            <h5>Top Cities</h5>
            <ul>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
            </ul>
          </div>
          <div>
            <h5>All Cities</h5>
            <ul>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
              <li>lahore</li>
            </ul>
          </div>
        </div>
      

        <div className="d-flex col-9" style={theme.right}>
        <div className="d-flex flex-column">
        <img style={theme.img2} src="\images\bpolo.webp"></img>
          <img style={theme.img2} src="\images\bpolo.webp"></img>
          <img style={theme.img2} src="\images\bpolo.webp"></img>
          <img style={theme.img2} src="\images\bpolo.webp"></img>
          <img style={theme.img2} src="\images\bpolo.webp"></img>
        </div>
          <div style={theme.width}>
            <div style={theme.lucky} className="d-flex flex-column">
              {formData && (
                <div>
                  <h4>{formData.name}</h4>
                  <p>Now Available</p>
                </div>
              )}
              <Button style={theme.btn}>Show Number</Button>
              <Button style={theme.btn}>Send Message</Button>
            </div>
            <div style={theme.lucky} className="text-nowrap">
              {formData && (
                <>
                  <h3>Characteristic</h3>
                  <div className="d-flex justify-content-between py-3  ">
                    <div className="col-5">
                      <h6 className="d-flex justify-content-between ">
                        Education <span>{formData.education}</span>{" "}
                      </h6>
                      <h6 className="d-flex justify-content-between  ">
                        Age{" "}
                        <div className="d-flex justify-content-start  w-25">
                          <span>{formData.age}</span>
                        </div>{" "}
                      </h6>
                      <h6 className="d-flex justify-content-between">
                        Experience <span>{formData.Experience}</span>{" "}
                      </h6>
                      <h6 className="d-flex justify-content-between">
                        Nationality <span>{formData.Nationality}</span>{" "}
                      </h6>
                    </div>
                    <div className="col-5">
                      <h6 className="d-flex justify-content-between">
                        Personality <span>person</span>{" "}
                      </h6>
                      <h6 className="d-flex justify-content-between">
                        Teaching style <span>{formData.TeachingStyle}</span>{" "}
                      </h6>
                      <h6 className="d-flex justify-content-between">
                        Availability <span>{formData.availabilityStatus}</span>{" "}
                      </h6>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div style={theme.lucky}>
              <h3>Prices</h3>
              <div style={theme.pri} className="d-flex justify-content-between">
                <h6 className="col-4 d-flex justify-content-between">
                  1 hours/day <span>100$</span>{" "}
                </h6>
                <h6 className="col-4 d-flex justify-content-between">
                  2 hours/day <span>150$</span>{" "}
                </h6>
              </div>
            </div>
            <div style={theme.lucky}>
              <h3>About Me</h3>
              <p className="text-center">
                Experienced teacher providing tailored, flexible education to
                children from home to home. Strong focus on creating engaging
                lesson plans to suit each childs learning style and needs.
                Personalized approach to empower children to reach their full
                potential.
              </p>
            </div>
            <div>
             
              <div
              
                className=" m-2"
                style={theme.lucky}
              >
                 <h3>Services</h3>
               <div className="d-flex justify-content-between">
               <div className="mb-2" style={theme.font}>
                  <li className="mb-2">Private tutors</li>
                  <li className="mb-2">Private tutors</li>
                  <li className="mb-2">Private tutors</li>
                  <li className="mb-2">Private tutors</li>
                  <li className="mb-2">Private tutors</li>
                  <li className="mb-2">Private tutors</li>
                  <li className="mb-2">Private tutors</li>
                </div>
                <div style={theme.font}>
                  <li className="mb-2">Private tutors</li>
                  <li className="mb-2">Private tutors</li>
                  <li className="mb-2">Private tutors</li>
                </div>
               </div>
              </div>
            </div>
            <h3>My Availability</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
