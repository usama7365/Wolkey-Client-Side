import React, { useState, useEffect } from "react";
import styles from "../../styles/home.module.css";
import { AiFillEye, AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import TabDiv from "../Tabs";
import Form from "react-bootstrap/Form";
import { Button, Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  // console.log(videos, "vidd");

  const dispatch = useDispatch();
  const router = useRouter();

  const { userId } = router.query;
  // console.log(userId, "usss");

  const storedResponse =
    typeof window !== "undefined" && localStorage.getItem("auth-user")
      ? JSON.parse(localStorage.getItem("auth-user"))
      : null;
  // console.log(storedResponse, "str");

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

  useEffect(() => {
    if (videos) {
      videos.forEach((video, index) => {
        // Replace backslashes with forward slashes in the video path
        const videoPath = `${API_URLS}${video.videoPath}`;
        // console.log(`Video ${index + 1} Path: ${videoPath}`);
      });
    }
  }, [videos]);

  const theme = {
    left: {
      backgroundColor: "#EEF4FA",
    },
    vid: {
      backgroundColor: "#F55D02",
      color: "white",
      border: "none",
      width: "100%",
      border: "1px solid green",
    },
  };

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Check if the selected file is a video
      if (file.type.startsWith("video/")) {
        setVideoPath((prevData) => ({
          ...prevData,
          videoPath: file,
        }));
      } else {
        // Show an error message if the selected file is not a video
        toast.error("Please select a video file", toastConfig);
        // Clear the file input
        e.target.value = null;
      }
    }
  };

  const toastConfig = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1500, // Set the timeout to 1500ms (1.5 seconds)
  };

  const handleSubmit = async () => {
    const token = storedResponse ? storedResponse.token : null;
    // console.log(token, "tojjj");
    if (!token) {
      console.error("Token is missing.");
      return;
    }

    if (videoPath.length === 0) {
      // Show error message when videoPath is empty
      toast.error("Please select a video to upload", toastConfig);
      return;
    }

    setIsLoading(true);

    try {
      await dispatch(teacherVideoAction(videoPath, token));
      fetchExistingVideos();
      // Show success toast
      toast.success("Video submitted successfully!", toastConfig);

      // Clear the file input by setting its value to an empty string
      document.getElementById("formFile").value = "";

      // Reset the state to clear the uploaded file
      setVideoPath([]);
    } catch (error) {
      console.error("Error submitting photos: ", error);

      // Show error toast
      toast.error("Failed to submit Video. Please try again.", toastConfig);
    } finally {
      setIsLoading(false); // Set isLoading to false when the API call completes (success or error)
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="mt-2 overflow-hidden">
        <div className="mt-3  w-100">
          <div className="col-12    d-flex align-items-start justify-content-between">
            {/* Conditionally render the file input and button */}
            {userId === storedResponse?._id && (
              <Form.Group controlId="formFile" className="mb-3 col-8">
                <Form.Control
                  onChange={handleVideoFileChange}
                  type="file"
                  multiple
                />
              </Form.Group>
            )}
            {userId === storedResponse?._id && (
              <Button
                style={{
                  backgroundColor: "#F55D02",
                  outline: "none",
                  border: "none",
                }}
                onClick={handleSubmit}
              >
                {isLoading ? (
                  <>
                    <Spinner animation="border" size="sm" />{" "}
                    {/* Display a loading spinner */}
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            )}
          </div>
          <div className="mt-2 d-sm-flex  justify-content-between   w-75 bg-sm-info">
            <p>Psychology</p>
            <p>Biology</p>
            <p>Literature</p>
            <p>Philosophy</p>
            <p>Micro</p>
          </div>

          <div style={theme.vid} className="py-3 px-2">
            Videos
          </div>

          <div className="row d-flex justify-content-around   mb-3 mt-3">
            {videos ? (
              videos.map((video, index) => {
                const videoSrc = `${API_URLS}/${video.videoPath}`;
                // console.log(`videosrc:`, videoSrc);
                return (
                  <div
                    key={index}
                    className={`col-12 col-sm-5 col-md-4 col-lg-3 ${styles.video} `}
                  >
                    <video className="w-100"  style=
                      {{
                        borderRadius: "8px",
                        height: "250px",
                      }} controls>
                     
                      <source
                        src={videoSrc}
                        alt={`Video ${index}`}
                        type="video/mp4"
                      />
                    </video>
                   
                    
                    </div>
                 
                );
              })
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
