import React, { useState, useEffect } from "react";
import styles from "../../styles/home.module.css";
import { AiFillEye, AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import TabDiv from "../../components/Tabs";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  teacherVideoAction,
  viewteacherVideoAction,
} from "../../store/Actions/videoAction";
import { useRouter } from "next/router";
import { API_URLS } from "../../apiConfig";

const Videos = () => {
  const [videoPath, setVideoPath] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [existingVideos, setExistingVideos] = useState([]);

  const videos = useSelector((state) => state.viewTeacherVideo?.userInfo);
  console.log(videos, "vidd");

  const dispatch = useDispatch();
  const router = useRouter();

  const { userId } = router.query;
  console.log(userId, "usss");

  const storedResponse =
    typeof window !== "undefined" && localStorage.getItem("auth-user")
      ? JSON.parse(localStorage.getItem("auth-user"))
      : null;
  console.log(storedResponse, "str");

  const fetchExistingVideos = async () => {
    try {
      const response = await dispatch(viewteacherVideoAction(userId));
      setExistingVideos(response); // Assuming the response contains the existing images array
    } catch (error) {
      console.error("Error fetching existing images: ", error);
    }
  };

  useEffect(() => {
    if (typeof userId !== "undefined") {
      fetchExistingVideos();
    }
  }, [dispatch, userId]); 



  const Data = [
    {
      img: "./images/bpolo.webp",
      title: "Stem time with John",
      name: "John",
      views: "16,215 ",
      day: "2 days ago",
    },
    // Add more data objects here as needed
  ];

  const theme = {
    left: {
      backgroundColor: "#EEF4FA",
    },
    vid: {
      backgroundColor: "#31A551",
      color: "white",
      border: "none",
    },
  };

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    setVideoPath((prevData) => ({
      ...prevData,
      videoPath: file,
    }));
  };

  const toastConfig = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1500, // Set the timeout to 1500ms (1.5 seconds)
  };

  const handleSubmit = async () => {
    const token = storedResponse ? storedResponse.token : null;
    console.log(token, "tojjj");
    if (!token) {
      console.error("Token is missing.");
      return;
    }

    if (videoPath.length === 0) {
      toast.error("Please upload at least one image", toastConfig);
      return;
    }

    setIsLoading(true);

    try {
      await dispatch(teacherVideoAction(videoPath, token));
      fetchExistingVideos();
      // Show success toast
      toast.success("Photos submitted successfully!", toastConfig);
    } catch (error) {
      console.error("Error submitting photos: ", error);

      // Show error toast
      toast.error("Failed to submit photos. Please try again.", toastConfig);
    } finally {
      setIsLoading(false); // Set isLoading to false when the API call completes (success or error)
    }
  };

  return (
    <>
      <TabDiv />
      <div className="d-flex overflow-hidden">
        <div className="col-md-4 d-none d-lg-block col-lg-2 px-3 py-4 ">
          <div style={theme.left} className="px-3 py-3 mb-4">
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
          <div style={theme.left} className="px-3 py-3">
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

        <div className="mt-3 px-2">
          <div className="col-11 col-md-12 d-flex align-items-start justify-content-between">
            <Form.Group controlId="formFile" className="mb-3 col-md-8 pe-0">
              <Form.Control
                onChange={handleVideoFileChange}
                type="file"
                multiple
              />
            </Form.Group>
            <Button
              style={{
                marginRight: "230px",
                backgroundColor: "#F55D02",
                outline: "none",
                border: "none",
              }}
              onClick={handleSubmit}
            >
              {isLoading ? (
                <>
                  <AiFillEye size={20} className="loading-icon" />
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
          <div className="mt-2 d-sm-flex  justify-content-between   w-75 bg-sm-info">
            <p>Psychology</p>
            <p>Biology</p>
            <p>Literature</p>
            <p>Philosophy</p>
            <p>Micro</p>
          </div>

          <div style={theme.vid} className="py-3 px-2">
            New Videos
          </div>

          <div className="row d-flex justify-content-around   mb-3 mt-3">
            {videos ? (
              videos.map((video, index) => (
                <div
                  key={index}
                  className={`col-12 col-sm-5 col-md-4 col-lg-3  ${styles.video}`}
                >
                  <video className="w-100" controls>
                    <source
                      src={`${API_URLS}/${video.videoPath}`}
                      type="video/mp4"
                    />
                  </video>
                  <h6>{video.title}</h6>
                  <p>
                    <FaUser /> <span className="px-1">{video.name}</span>{" "}
                  </p>
                  <div className="d-flex">
                    <p>
                      <AiFillEye /> <span>{video.views}</span>{" "}
                    </p>
                    <p className="px-2">
                      <AiFillClockCircle /> <span>{video.day}</span>{" "}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No videos available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
