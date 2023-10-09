import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationDot } from "react-icons/fa6";
import { Spinner } from "react-bootstrap";
import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { ImBooks } from "react-icons/im";
import { API_URLS } from "../apiConfig";
import { FcCheckmark } from "react-icons/fc";
import { viewProfileAction } from "../store/Actions/profileAction";
import { useRouter } from "next/router";

const Profile2 = () => {
  const bg = {
    backgroundColor: "rgb(245, 93, 2)",
    border: "none",
    marginBottom: "20px",
  };

  const profileData = useSelector((state) => state.viewProfile?.userInfo);
  const isLoading = profileData === null;

  console.log(profileData, "vieww");
  const [showAllImages, setShowAllImages] = useState(false);
  const toggleImages = () => {
    setShowAllImages(!showAllImages);
  };

  const imagesToDisplay = showAllImages
    ? profileData?.selectedImageFiles || []
    : (profileData?.selectedImageFiles || []).slice(0, 4);

  const dispatch = useDispatch();
  const router = useRouter();
  const { userId } = router.query;
  console.log(userId, "homeId");

  const authUserString =
    typeof window !== "undefined" && localStorage.getItem("auth-user")
      ? JSON.parse(localStorage.getItem("auth-user"))
      : null;
  const _id = authUserString ? authUserString.profileId : null;
  console.log(_id, "localIdd");

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
  }, [dispatch]);

  const authUserProfile =
    typeof window !== "undefined" && localStorage.getItem("profile")
      ? JSON.parse(localStorage.getItem("profile"))
      : null;

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

  const theme = {
    img: {
      position: "relative",
    },

    main: {
      backgroundColor: "#EEF4FA",
      marginBottom: "10px",
    },

    relative: {
      position: "relative",
    },
    btn1: {
      backgroundColor: "white",
      color: "grey",
      border: "1px solid grey",
      fontSize:"14px"
    },
    btn2: {
      backgroundColor: "#31A551",
      color: "white",
      border: "none",
      fontSize:"14px"
    },
    video: {
      width: "100%",

      marginBottom: "10px",
    },
    vid: {
      height: "250px",
      width: "100%",
      outline: "none",
    },

    photo: {
      width: "45%",
      height: "200px",
      display: "flex",
    },
    pic: {
      height: "auto",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      marginBottom: "10px",
    },
    image: {
      width: "100%",
      marginBottom: "10px",
    },
    icn: {
      color: "#31A551",
    },
  };

  const handleEdit = () => {
    router.push("/profileform");
  };

  const storedProfileId = localStorage.getItem("storedProfileId")
    ? JSON.parse(localStorage.getItem("storedProfileId"))
    : null;
  console.log(storedProfileId, "stored");

  return (
    <>
      <div className=" py-2  col-12">
        {profileData && (
          <h6>
            {profileData.name} | <span>Now Available</span>{" "}
          </h6>
        )}
        <div className="d-flex justify-content-end">
          <p
            style={{
              display: userId !== authUserString?._id ? "none" : "block",
            }}
            onClick={handleEdit}
          >
            Edit Your profile
          </p>
        </div>

        <p>
          <FaLocationDot /> <span>Amsterdem</span>{" "}
        </p>

        <div className="d-flex">
          <p>
            <FaLocationDot style={theme.icn} /> <span>{profileData.city}</span>{" "}
          </p>

          <p>
            <ImBooks style={theme.icn} className="m-1" />{" "}
            <span>{profileData.specialityDegree}</span>{" "}
          </p>
        </div>

        <div style={theme.img}>
          <div style={theme.video}>
            {Array.isArray(profileData.selectedVideoFile) &&
              profileData.selectedVideoFile.map((videoPath, index) => (
                <video style={theme.vid} key={index} controls>
                  <source
                    src={`${API_URLS}${videoPath}`}
                    alt={`video ${index}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ))}
          </div>

          <div style={theme.pic}>
            {Array.isArray(imagesToDisplay) &&
              imagesToDisplay.map((imagePath, index) => (
                <div style={theme.photo} key={index}>
                  <img
                    style={theme.image}
                    src={`${API_URLS}${imagePath}`}
                    alt={`Image ${index}`}
                  />
                </div>
              ))}
          </div>
        </div>

        {profileData.selectedImageFiles.length > 4 && (
          <div className="d-flex justify-content-center">
            <Button style={bg} onClick={toggleImages}>
              {showAllImages ? "Show Less Images" : "Show More Images"}
            </Button>
          </div>
        )}

        <div
          className="col-11 bg-white  d-flex justify-content-around text-nowrap"
          style={{ position: "fixed", bottom: 0 }}
        >
          <div className="d-flex  justify-content-around col-12  ">
            {
              userId !== authUserString?._id ? <Button
             style={theme.btn1}
              >
                <span className="px-1">
                  <BsEnvelopeFill />
                </span>
                Send Message
              </Button> : null
            } 

            <Button style={theme.btn2} className=" d-flex align-items-center">
              <span className="px-1">
                <BsFillTelephoneFill className="text-white" />
              </span>
              Show Number
            </Button>
          </div>
        </div>

        <div className="py-2 px-3" style={theme.main}>
          <h4>Characteristic</h4>
          <div>
            <h6 className="d-flex justify-content-between w-100">
              {" "}
              Education <span>{profileData.education}</span>{" "}
            </h6>
            <h6 className="d-flex justify-content-between w-100">
              {" "}
              Age <span>{profileData.age}</span>{" "}
            </h6>
            <h6 className="d-flex justify-content-between w-100">
              {" "}
              Experience <span>{profileData.Experience}</span>{" "}
            </h6>
            <h6 className="d-flex justify-content-between w-100">
              {" "}
              Nationality <span>{profileData.Nationality}</span>{" "}
            </h6>
            <h6 className="d-flex justify-content-between w-100">
              {" "}
              Personality <span>person</span>{" "}
            </h6>
            <h6 className="d-flex justify-content-between w-100">
              {" "}
              Teaching Style <span>{profileData.TeachingStyle}</span>{" "}
            </h6>
            <h6 className="d-flex justify-content-between w-100">
              {" "}
              Availability <span>Busy</span>{" "}
            </h6>
          </div>
        </div>

        <div className="py-2 px-3" style={theme.main}>
          <h4>Prices</h4>
          <div className="d-flex justify-content-between  ">
            {profileData.prices.map((pricesString, index) => {
              try {
                const pricesArray = JSON.parse(pricesString);
                // Filter out the "0" key from pricesArray
                const filteredPrices = Object.entries(pricesArray).filter(
                  ([time]) => time !== "0"
                );

                return (
                  <div key={index} className="w-100 h6">
                    {filteredPrices.map(([time, cost]) => (
                      <div
                        key={time}
                        className="d-flex justify-content-between col-12  mb-3"
                      >
                        <p
                          style={{
                            fontSize: "15px",
                          }}
                        >
                          {time.replace(/_/g, " ")}{" "}
                          {/* Replace underscore with space */}
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

        <div className="py-2 px-3" style={theme.main}>
          <h4>About me</h4>
          <div>
            <p>{profileData.aboutUs}</p>
          </div>
        </div>
        <div className="py-2 px-3 h6" style={theme.main}>
          <h4>Services</h4>
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
                console.log(error, "ser");
                return null;
              }
            })}
          </div>
        </div>

        <div className="py-2 px-3 h6" style={theme.main}>
          <h4>Availability</h4>
          <div>
            {profileData.selectedTimes.map((timesString, index) => {
              try {
                const timesObject = JSON.parse(timesString);
                return (
                  <div key={index} className="mb-2 w-100">
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
      </div>
    </>
  );
};

export default Profile2;
