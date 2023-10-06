import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/home.module.css";
import { AiFillEye, AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot, FaUser } from "react-icons/fa";
import SideDiv from "../components/sideDiv";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TabDiv from "../components/Tabs";

import {
  teacherPhotoAction,
  viewteacherPhotoAction,
} from "../store/Actions/photoAction";
import { API_URLS } from "../apiConfig";

const Photos = () => {
  const photos = useSelector((state) => state.viewTeacherPhoto.userInfo);
  console.log(photos, "photoss");
  const fileInputRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [imagePath, setImagePath] = useState([]);
  const [response, setResponse] = useState(null);
  const [existingImages, setExistingImages] = useState([]); // Define existingImages
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state
  const [selectedPhoto, setSelectedPhoto] = useState(null); // Track selected photo
  const [selectedImageUrl, setSelectedImageUrl] = useState(null); // Store the URL of the selected image


  const storedResponse =
    typeof window !== "undefined" && localStorage.getItem("auth-user")
      ? JSON.parse(localStorage.getItem("auth-user"))
      : null;
  console.log(storedResponse, "str");

  const fetchExistingImages = async () => {
    const token = storedResponse ? storedResponse.token : null;
    if (!token) {
      console.error("Token is missing.");
      return;
    }
    try {
      const response = await dispatch(viewteacherPhotoAction(token));
      setExistingImages(response); // Assuming the response contains the existing images array
    } catch (error) {
      console.error("Error fetching existing images: ", error);
    }
  };
  const toastConfig = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1500, // Set the timeout to 1500ms (1.5 seconds)
  };
  useEffect(() => {
    fetchExistingImages();
  }, [dispatch]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log(e.target.files);
    const fileNames = [];

    for (let i = 0; i < files.length; i++) {
      fileNames.push(files[i]);
    }

    console.log(fileNames, "filenamesss");

    setImagePath((prevData) => [...prevData, ...fileNames]);
  };




  const handleSubmit = async () => {
    const token = storedResponse ? storedResponse.token : null;
    console.log(token, "tojjj");
    if (!token) {
      console.error("Token is missing.");
      return;
    }
  
    if (imagePath.length === 0) {

      toast.error('Please upload at least one image', toastConfig);

      return;
    }
  
    setIsLoading(true); // Set isLoading to true when the API call starts
  
    try {
      await dispatch(teacherPhotoAction(imagePath, token));
      fetchExistingImages();
  
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
  
      // Show success toast
      toast.success('Photos submitted successfully!', toastConfig);
   
 
    } catch (error) {
      console.error("Error submitting photos: ", error);
  
      // Show error toast
      toast.error('Failed to submit photos. Please try again.', toastConfig);

    } finally {
      setIsLoading(false); // Set isLoading to false when the API call completes (success or error)
    }
  };
  
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setSelectedImageUrl(`${API_URLS}/${photo.imagePath.replace(/\\/g, '').replace('public/', '')}`); 
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setSelectedImageUrl(null); // Clear the selected image URL
    setModalOpen(false);
  };

  return (
    <>
    <ToastContainer />
    <TabDiv/>

    <div className="d-flex flex-wrap justify-content-lg-around overflow-hidden">
      <SideDiv className="mt-2" />

      <div className="row d-flex justify-content-around px-md-5 px-lg-0 mb-3 mt-3 col-lg-9">
        <div className="col-11 col-md-12 d-flex align-items-start justify-content-between">
          <Form.Group controlId="formFile" className="mb-3 col-md-8 pe-0">
            <Form.Control ref={fileInputRef} onChange={handleFileChange} type="file" multiple />
          </Form.Group>
          <Button style={{ marginRight: "230px", backgroundColor: "#F55D02", outline: "none", border: "none" }} onClick={handleSubmit}>
            {isLoading ? (
              <>
                <AiFillEye size={20} className="loading-icon" />
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
<div className="row d-flex justify-content-around py-3">
  {photos?.map((photo, index) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={index}>
      <img
        src={`${API_URLS}/${photo.imagePath.replace(/\\/g, '').replace('public/', '')}`}
        alt={`Image ${index}`}
        style={{
          border: "2px solid #333",
          borderRadius: "8px",
          maxWidth: "100%",
          height: "200px",
          cursor: "pointer" // Add cursor pointer for clickable images
        }}
        onClick={() => openModal(photo)} // Add onClick to open the modal
        onError={(e) => {
          console.error("Error loading image:", e);
          console.log("Image URL:", `${API_URLS}/${photo.imagePath}`);
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