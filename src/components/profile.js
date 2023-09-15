import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaLocationDot } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import Button from "react-bootstrap/Button";
import {
  viewProfileAction,
  resetProfileAction,
} from "../store/Actions/profileAction";
import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import styles from "../styles/profile.module.css";
import { token } from "morgan";
import { FcCheckmark } from "react-icons/fc";
import { API_URLS } from "../apiConfig";
const Profile = () => {
  const bg = {
    backgroundColor: "rgb(245, 93, 2)",
    border: "none",
  };

  const [showAllImages, setShowAllImages] = useState(false);

  const toggleImages = () => {
    setShowAllImages(!showAllImages);
  };

  const profileData = useSelector((state) => state.viewProfile.userInfo);
  const isLoading = profileData === null;

  console.log(profileData, "vieww");

  // Rest of the code for mapping and rendering images

  const dispatch = useDispatch();
  // const token = response ? response : null;

  useEffect(() => {
    const authUserString = localStorage.getItem("auth-user");
    // console.log(authUserString, "tokennn");
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
  }, [dispatch, token]);

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status"></Spinner>
      </div>
    );
  }

  const imagesToDisplay = showAllImages
    ? profileData.selectedImageFiles || []
    : (profileData.selectedImageFiles  || []).slice(0, 4);

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.city}>
          <div className={styles.top}>
            <h5>Top Cities</h5>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
          </div>
          <div className={styles.top}>
            <h4>All Cities</h4>

            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
            <p>lahore</p>
          </div>
        </div>

        <div className={styles.images}>
          <div className="d-flex flex-wrap">
            <div>
              {Array.isArray(profileData.selectedVideoFile) &&
                profileData.selectedVideoFile.map((videoPath, index) => (
                  <div key={index}>
                    <video controls>
                      <source
                        src={`${API_URLS}${videoPath}`}
                        alt={`Video ${index}`}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                ))}

              {Array.isArray(profileData.selectedImageFiles) &&
                profileData.selectedImageFiles.map((imagePath, index) => (
                  <div className="mb-2" key={index}>
                    <img
                      src={`${API_URLS}${imagePath}`}
                      alt={`Image ${index}`}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>

          {profileData.selectedImageFiles &&
            profileData.selectedImageFiles.length > 4 && (
              <div className="d-flex justify-content-center">
                <Button style={bg} onClick={toggleImages}>
                  {showAllImages ? "Show Less Images" : "Show More Images"}
                </Button>
              </div>
            )}
        </div>

        <div className={styles.right}>
          <div className={styles.first}>
            <div>
              <h4>
                {profileData.name}
                <span className="px-3 px-lg-5">Now Available</span>
              </h4>
            </div>

            <div className={styles.icn}>
              <p>
                <FaLocationDot /> <span>{profileData.city}</span>{" "}
              </p>

              <p>
                <ImBooks /> <span>{profileData.specialityDegree}</span>{" "}
              </p>
            </div>

            <div className="d-flex flex-column">
              <button className={styles.btn1}>
                {" "}
                <span>
                  {" "}
                  <BsFillTelephoneFill />{" "}
                </span>
                Show Number{" "}
              </button>
              <button>
                {" "}
                <span>
                  {" "}
                  <BsEnvelopeFill />{" "}
                </span>
                Send Message{" "}
              </button>
            </div>
          </div>
          <div className={styles.second}>
            <>
              <h3>Characteristic</h3>
              <div className="d-lg-flex">
                <div className=" w-100 mt-2">
                  <h6>
                    Education <span>{profileData.education}</span>{" "}
                  </h6>
                  <h6>
                    Age{" "}
                    <div>
                      <span>{profileData.age}</span>
                    </div>{" "}
                  </h6>
                  <h6>
                    Experience <span>{profileData.Experience}</span>{" "}
                  </h6>
                  <h6>
                    Nationality <span>hhh</span>{" "}
                  </h6>
                </div>
                <div className=" w-100 mt-2">
                  <h6>
                    Personality <span>person</span>{" "}
                  </h6>
                  <h6>
                    Teaching style <span>{profileData.TeachingStyle}</span>{" "}
                  </h6>
                  <h6>
                    Availability <span>{profileData.availabilityStatus}</span>{" "}
                  </h6>
                </div>
              </div>
            </>
          </div>
          <div className={styles.third}>
            <h3>Prices</h3>
            <div className="d-flex flex-wrap">
              {profileData.prices.map((pricesString, index) => {
                try {
                  const pricesArray = JSON.parse(pricesString);
                  return (
                    <div key={index} className="col-md-6">
                      {Object.entries(pricesArray).map(([time, cost]) => (
                        <div
                          key={time}
                          className="d-flex justify-content-between mb-3"
                        >
                          <p
                            style={{
                              fontWeight: 700,
                              fontSize: "13px",
                              color: "#4E4C4C",
                            }}
                          >
                            {time}
                          </p>
                          <p>{cost}$</p>
                        </div>
                      ))}
                    </div>
                  );
                } catch (error) {
                  // Handle parsing error if needed
                  return null;
                }
              })}
            </div>
          </div>

          <div className={styles.forth}>
            <h3>About Me</h3>
            <p>{profileData.aboutUs}</p>
          </div>
          <div>
            <div className={styles.fifth}>
              <h3>Services</h3>
              <div className="d-flex flex-wrap">
                {profileData.serviceNames.map((serviceString, index) => {
                  try {
                    const serviceArray = JSON.parse(serviceString);
                    return (
                      <React.Fragment key={index}>
                        {serviceArray.map((serviceName, innerIndex) => (
                          <div
                            className="mb-2"
                            key={innerIndex}
                            style={{ flexBasis: "50%" }}
                          >
                            <p
                              className="mb-2"
                              style={{
                                fontWeight: 700,
                                fontSize: "13px",
                                color: "#4E4C4C",
                              }}
                            >
                              <span style={{ color: "#B80909" }}>
                                <FcCheckmark style={{ color: "#B80909" }} />
                              </span>{" "}
                              {serviceName}
                            </p>
                          </div>
                        ))}
                      </React.Fragment>
                    );
                  } catch (error) {
                    // Handle parsing error if needed
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
          <div className={styles.fifth}>
            <h3>My Availability</h3>
            <div>
              {profileData.selectedTimes.map((timesString, index) => {
                try {
                  const timesObject = JSON.parse(timesString);
                  return (
                    <div key={index} className="mb-2">
                      {Object.entries(timesObject).map(([day, time]) => (
                        <div
                          key={day}
                          className="mb-2 d-flex justify-content-between"
                        >
                          <p className="mb-2">{day}</p>
                          <p>{time}</p>
                        </div>
                      ))}
                    </div>
                  );
                } catch (error) {
                  // Handle parsing error if needed
                  return null;
                }
              })}
            </div>
          </div>

          <div className={styles.last}>
            <button className={styles.btn1}>
              {" "}
              <span>
                {" "}
                <BsFillTelephoneFill />{" "}
              </span>
              Send Number{" "}
            </button>
            <button>
              {" "}
              <span>
                {" "}
                <BsEnvelopeFill />{" "}
              </span>
              Send Message{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
