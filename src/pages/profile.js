import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_URLS } from "../apiConfig";

const Profile = () => {
  const [formData, setFormData] = useState(null);
  const response = useSelector((state) => state.userLogin.userInfo);
  console.log(response, "profilee");

  

  useEffect(() => {
    if (response) {
      const token = response;
      const config = {
        headers: {
          "x-auth-token": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      axios
        .get(`${API_URLS}/view-profile`, config)
        .then((response) => {
          console.log(response, "viewProfile");
          setFormData(response.data);
        })
        .catch((error) => {
          console.log("Error fetching form:", error);
          console.log("Error details:", error.response); // Log the full error object
        });
    }
  }, [response]);

  const theme = {
    img: {
      width: "25%",
      Padding: "10px",
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
      paddingLeft:"30px"
    },
    right: {
      width: "80%",
     
      paddingRight:"20px"
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
      width:"100%",
      marginBottom:"10px"
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
        <div style={theme.img}>
  {/* {formData &&
    formData.selectedFileNames.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
        alt={`Image ${index}`}
        style={{ marginBottom: '10px' }} // Adding some space between images
      />
    ))} */}
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
              {
                formData &&(
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
                )
              }
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
                lesson plans to suit each of child learning style and needs.
                Personalized approach to empower children to reach their full
                potential.
              </p>
            </div>
            <div>
              <h3>Services</h3>
              <div
                className="d-flex justify-content-between m-2"
                style={theme.lucky}
              >
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
            <h3>My Availability</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
