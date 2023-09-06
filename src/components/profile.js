import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaLocationDot } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
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
  // const [showSixthImage, setShowSixthImage] = useState(false);

  const toggleSixthImage = () => {
    setShowSixthImage(!showSixthImage);
  };

  // const buttonText = showSixthImage ? "Show less images" : "Show more images";

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
              {profileData.selectedVideoFile && (
                <video controls>
                  <source
                    src={`data:video/mp4;base64,${Buffer.from(
                      profileData.selectedVideoFile.data
                    ).toString("base64")}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}

              {Array.isArray(profileData.selectedFileNames) &&
                profileData.selectedFileNames.map((image, index) => (
                  <div className="mb-2" key={index}>
                    <img
                      src={`data:image/jpeg;base64,${Buffer.from(
                        image.data
                      ).toString("base64")}`}
                      alt={`Image ${index}`}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
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
            <div className="d-lg-flex justify-content-between">
              <h6 className="col-12 col-lg-5 d-flex justify-content-between">
                {profileData.time} <span>{profileData.cost}$</span>{" "}
              </h6>
              <h6 className="col-12 col-lg-5  d-flex justify-content-between">
                2 hours/day <span>150$</span>{" "}
              </h6>
            </div>
          </div>
          <div className={styles.forth}>
            <h3>About Me</h3>
            <p>{profileData.aboutUs}</p>
          </div>
          <div>
            <div className={styles.fifth}>
              <h3>Services</h3>
              <div className="d-flex flex-column">
                {profileData.serviceNames
                  .filter((serviceName) => serviceName.trim() !== "") // Filter out empty service names
                  .map((serviceName, index) => (
                    <div className="mb-2" key={index}>
                      <p className="mb-2">
                        <FcCheckmark /> {serviceName}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className={styles.fifth}>
            <h3>My Availability</h3>
            <div>
              <p className="mb-2">Private tutors</p>
              <p className="mb-2">Private tutors</p>
              <p className="mb-2">Private tutors</p>
              <p className="mb-2">Private tutors</p>
              <p className="mb-2">Private tutors</p>
              <p className="mb-2">Private tutors</p>
              <p className="mb-2">Private tutors</p>
            </div>
          </div>
          <div className={styles.last}>
            <button>
              {" "}
              <span>
                {" "}
                <BsFillTelephoneFill />{" "}
              </span>
              Send Message{" "}
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

// {showSixthImage && <img src="\images\bpolo.webp" alt="Image 6" />}
//           <div className="d-flex justify-content-center">
//             <Button onClick={toggleSixthImage}>{buttonText}</Button>
//           </div>
