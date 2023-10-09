import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaLocationDot } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import Button from "react-bootstrap/Button";
import { viewProfileAction } from "../store/Actions/profileAction";
import {
  BsCurrencyEuro,
  BsEnvelopeFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import styles from "../styles/profile.module.css";
import { token } from "morgan";
import { FcCheckmark } from "react-icons/fc";
import { API_URLS } from "../apiConfig";
import { useRouter } from "next/router";
import TabDiv from "./Tabs";
import City from "./city";

const Profile = () => {
  const bg = {
    backgroundColor: "rgb(245, 93, 2)",
    border: "none",
  };

  const [showAllImages, setShowAllImages] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const { userId} = router.query;
  console.log(router.query, "param");

  const toggleImages = () => {
    setShowAllImages(!showAllImages);
  };

  const profileData = useSelector((state) => state.viewProfile?.userInfo);
  console.log(profileData, "dat");


  const isLoading = profileData === null;

  const dispatch = useDispatch();

  const authUserString =
    typeof window !== "undefined" && localStorage.getItem("auth-user")
      ? JSON.parse(localStorage.getItem("auth-user"))
      : null;

      console.log(authUserString._id , "authid")

     
      console.log(userId)

      console.log(authUserString , "authh")

  const _id = authUserString ? authUserString.profileId : null;
  console.log(_id, "profileId");

  const storedProfileId = localStorage.getItem("storedProfileId")
    ? JSON.parse(localStorage.getItem("storedProfileId"))
    : null;
  console.log(storedProfileId, "stored");


  useEffect(() => {
    if (authUserString) {
      const token = authUserString ? authUserString.token : null;
      console.log(token, "tok");
      const fetchData = async () => {
        if (token || userId) {
          await dispatch(viewProfileAction({ token, userId }));
        }
      };
      fetchData();
    }
  }, [dispatch, token]);

  if(userId === authUserString?._id){
localStorage.setItem("profile" , JSON.stringify(profileData))
  }

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

  const handleEdit = () => {
    router.push("/profileform");
    setIsEditing(true);
  };

  const imagesToDisplay = showAllImages
    ? profileData.selectedImageFiles || []
    : (profileData.selectedImageFiles || []).slice(0, 4);

  return (
    <div >
      <Container className="d-flex justify-content-end mt-2">
        <p
          style={{
            display:
            userId  !== authUserString?._id
                ? "none"
                : "block",
          }}
          onClick={handleEdit}
        >
          Edit Your profile
        </p>
      </Container>
    
      <div className={styles.parent}>
      

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

              {Array.isArray(imagesToDisplay) &&
                imagesToDisplay.map((imagePath, index) => (
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
              <button
                style={{
                  display:
                  userId  === authUserString?._id
                      ? "none"
                      : "block",
                }}

              >
                <span className="px-1">
                  <BsEnvelopeFill />
                </span>
                Send Message
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
                    Nationality <span>{profileData.Nationality}</span>{" "}
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
                    Availability <span>Busy</span>{" "}
                  </h6>
                </div>
              </div>
            </>
          </div>

          <div className={`${styles.third} h6`}>
            <h3>Prices</h3>
            <div className="d-flex flex-wrap">
              {profileData.prices.map((pricesString, index) => {
                try {
                  const pricesArray = JSON.parse(pricesString);
                  // Filter out the "0" key from pricesArray
                  const filteredPrices = Object.entries(pricesArray).filter(
                    ([time]) => time !== "0"
                  );

                  return (
                    <div key={index} className="col-12">
                      {filteredPrices.map(([time, cost]) => (
                        <div
                          key={time}
                          className="d-flex  justify-content-between mb-3"
                        >
                          <p
                            style={{
                              fontWeight: 500,
                              fontSize: "15px",
                            }}
                          >
                            {time.replace(/_/g, " ")}{" "}
                            {/* Replace underscore with space */}
                          </p>
                          <p className="d-flex align-items-center">
                            {cost} <BsCurrencyEuro />{" "}
                          </p>
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
            <div className={`${styles.fifth} h6`}>
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
                                fontWeight: 500,
                                fontSize: "15px",
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
          <div className={`${styles.fifth} h6`}>
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

          {/* <div className={styles.last}>
            <Button className={styles.btn1}>
              {" "}
              <span>
                {" "}
                <BsFillTelephoneFill />{" "}
              </span>
              Show Number{" "}
            </Button>
            <Button
           
              style={{
                display: profileId !== _id ? "block" : "none",
                marginLeft:"10px"
              }}
            >
              <span  className="px-2">
                <BsEnvelopeFill />
              </span>
              Send Message
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;