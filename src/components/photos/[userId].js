import React, { useState, useEffect, useRef } from "react";
// import styles from "../styles/home.module.css";
import { AiFillEye, AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot, FaUser } from "react-icons/fa";
import SideDiv from "../sideDiv";
import { Modal, Button ,Spinner } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TabDiv from "../Tabs";
import { useRouter } from "next/router";
import {
  teacherPhotoAction,
  viewteacherPhotoAction,
} from "../../store/Actions/photoAction";
import { API_URLS } from "../../apiConfig";

const Photos = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [imagePaths, setImagePaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [existingimages, setExistingimages] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);


  const photos = useSelector((state) => state.viewTeacherPhoto?.userInfo);
  console.log(photos , "pjotos")
  useSelector((state)=>console.log(state))


  const dispatch = useDispatch();
  const router = useRouter();

  const { userId } = router.query;
  console.log(userId, "usss");




  const storedResponse =
    typeof window !== "undefined" && localStorage.getItem("auth-user")
      ? JSON.parse(localStorage.getItem("auth-user"))
      : null;

      console.log(storedResponse._id , "uss2")
  

  const fetchExistingimages = async () => {
    try {
      const response = await dispatch(viewteacherPhotoAction(userId));
      setExistingimages(response); // Assuming the response contains the existing images array
    } catch (error) {
      console.error("Error fetching existing images: ", error);
    }
  };

  useEffect(() => {
    if (typeof userId !== "undefined") {
      fetchExistingimages();
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (photos) {
      photos.forEach((photos, index) => {
        // Replace backslashes with forward slashes in the image path
        // const imagePath = `${API_URLS}${image.imagePath}`;
        // console.log(`image ${index + 1} Path: ${imagePath}`);
      });
    }
  }, [photos]);

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
  const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;

    if (selectedFiles.length > 0) {
      // Check if the selected files are images (jpeg, png, or gif)
      const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];
      const selectedImages = Array.from(selectedFiles).filter((file) =>
        allowedImageTypes.some((type) => file.type.startsWith(type))
      );

      if (selectedImages.length > 0) {
        setImagePaths([...imagePaths, ...selectedImages]);
      } else {
        // Show an error message if no valid images were selected
        toast.error(
          "Please select image files (jpeg, png, or gif)",
          toastConfig
        );
      }
    }
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

    if (imagePaths.length === 0) {
      // Show error message when no images are selected
      toast.error("Please select at least one image to upload", toastConfig);
      return;
    }

    setIsLoading(true);

    try {
      await dispatch(teacherPhotoAction(imagePaths, token)); // Pass the array of selected images
      fetchExistingimages();
      // Show success toast
      toast.success("Photos submitted successfully!", toastConfig);

      // Clear the file input by setting its value to an empty string
      document.getElementById("formFile").value = "";

      // Reset the state to clear the uploaded files
      setImagePaths([]);
    } catch (error) {
      console.error("Error submitting photos: ", error);

      // Show error toast
      toast.error("Failed to submit photos. Please try again.", toastConfig);
    } finally {
      setIsLoading(false); // Set isLoading to false when the API call completes (success or error)
    }
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    const imageUrl = `${API_URLS}${photo.imagePath}`;

    setSelectedImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setSelectedImageUrl(null); 
    setModalOpen(false);
  };

  return (
    <>
      <ToastContainer />

      <div className="mt-2 col-12  overflow-hidden">
        <div className=" row d-flex justify-content-around px-md-5 px-lg-0 mb-3 mt-3">
          <div className=" d-flex align-items-start justify-content-between col-12 ">
            {/* Conditionally render the file input and button */}
            {userId === storedResponse?._id && (
              <Form.Group controlId="formFile" className="mb-3  col-8">
                <Form.Control onChange={handleFileChange} type="file" multiple />
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
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            )}
          </div>
          <div className="row d-flex justify-content-center py-3">
            {photos?.map((photo, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
                key={index}
              >
                <img
                  src={`${API_URLS}${photo.imagePath}`}
                  alt={`Image ${index}`}
                  style={{
                    borderRadius: "8px",
                    height: "250px",
                    cursor: "pointer",
                  }}
                  className="w-100"
                  onClick={() => openModal(photo)}
                  onError={(e) => {
                    console.error("Error loading image:", e);
                    console.log("Image URL:", `${API_URLS}${photo.imagePath}`);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {modalOpen && selectedPhoto && (
        <Modal show={modalOpen} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPhoto.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedImageUrl}
              alt={selectedPhoto.title}
              className="w-100"
            />
            <p>Name: {selectedPhoto.name}</p>
            <p>Views: {selectedPhoto.views}</p>
            <p>Day: {selectedPhoto.day}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Photos;
