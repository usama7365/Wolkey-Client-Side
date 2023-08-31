import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_URLS } from "../apiConfig";

const Profile = () => {
  const [fetchedFormData, setFetchedFormData] = useState(null);
  const response = useSelector((state) => state.userLogin.userInfo);
  console.log(response, "profilee");

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const token = response;
      const config = {
        headers: {
          "x-auth-token": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      axios.get(`${API_URLS.backend}/view-profile`, config)
      .then((response) => {
        console.log(response , "viewProfile");
      })
      .catch((error) => {
        console.log("Error fetching form:", error);
        console.log("Error details:", error.response); // Log the full error object
      });
    
    } catch (error) {
      console.log("Error fetching form:", error);
    }
  }, [response]);

  const theme = {
    img: {
      width: "250px",
      margin: "10px",
    },
    btn: {
      marginBottom: "10px",
      borderRadius: "10px",
      width: "35%",
    },
    main: {
      width: "100%",
      height: "auto",
      padding: "20px",
    },
    left: {
      width: "20%",
    },
    right: {
      width: "80%",
    },
    lucky: {
      // border: "1px solid red",
      marginBottom: "10px",
      padding: "10px",
    },
    price: {
      padding: "4%",
    },
    width: {
      width: "80%",
      padding: "10px",
    },
    pri: {
      width: "70%",
    },
    font: {
      fontSize: "19px",
    },
  };

  const profile = [
    {
      img1: "/images/blackjacket.webp",
      img2: "/images/blackjacket.webp",
      img3: "/images/blackjacket.webp",
      img4: "/images/blackjacket.webp",
      img5: "/images/blackjacket.webp",
    },
  ];

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
            {profile.map((pro, index) => (
              <div className="d-flex flex-column" key={index}>
                <img src={pro.img1} alt={`Image ${index}`} />
                <img src={pro.img2} alt={`Image ${index}`} />
                <img src={pro.img3} alt={`Image ${index}`} />
                <img src={pro.img4} alt={`Image ${index}`} />
                <img src={pro.img5} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
          <div style={theme.width}>
            <div style={theme.lucky} className="d-flex flex-column">
              <div>
                <h4>Page in progress</h4>
                <p>Now Available</p>
              </div>
              <Button style={theme.btn}>Show Number</Button>
              <Button style={theme.btn}>Send Message</Button>
            </div>
            <div style={theme.lucky} className="text-nowrap">
              <h3>Characteristic</h3>
              <div className="d-flex justify-content-between py-3">
                <div className="col-6 ">
                  <h6 className="d-flex justify-content-between">
                    Education <span>{characteristic.education}</span>{" "}
                  </h6>
                  <h6 className="d-flex justify-content-between">
                    Age <span>{characteristic.age}</span>{" "}
                  </h6>
                  <h6 className="d-flex justify-content-between">
                    Experience <span>{characteristic.experience}</span>{" "}
                  </h6>
                  <h6 className="d-flex justify-content-between">
                    Nationality <span>{characteristic.nation}</span>{" "}
                  </h6>
                </div>
                <div className="col-5">
                  <h6 className="d-flex justify-content-between">
                    Personality <span>{characteristic.person}</span>{" "}
                  </h6>
                  <h6 className="d-flex justify-content-between">
                    Teaching style <span>{characteristic.style}</span>{" "}
                  </h6>
                  <h6 className="d-flex justify-content-between">
                    Availability <span>{characteristic.avalaible}</span>{" "}
                  </h6>
                </div>
              </div>
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
