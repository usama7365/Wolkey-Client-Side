import axios from "axios"; 
import { API_URLS } from "../../apiConfig";
import { toast } from "react-toastify";

import {
  UPLOAD_TEACHER_PHOTO_REQUEST,
  UPLOAD_TEACHER_PHOTO_SUCCESS,
  UPLOAD_TEACHER_PHOTO_FAIL,
  VIEW_TEACHER_PHOTO_REQUEST,
  VIEW_TEACHER_PHOTO_FAIL,
  VIEW_TEACHER_PHOTO_SUCCESS,
} from "../Constants/photoConstants";

const toastConfig = {
  position: "top-right",
  autoClose: 3000, // Adjust the duration as needed
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  // Add more options as needed
};

export const teacherPhotoAction = (imagePath, token) => async (dispatch) => {
  console.log(imagePath, "formm");
  console.log(token, "actionToken");

  const formDataObject = new FormData();

  if (imagePath && imagePath.length > 0) {
    // Loop through the selected files and append each file to the FormData
    for (let i = 0; i < imagePath.length; i++) {
      const file = imagePath[i];
      // Check if the selected file is an image
      if (file.type.startsWith("image/")) {
        formDataObject.append(`imagePath[${i}]`, file, file.name);
      } else {
        // Show an error message if any of the selected files is not an image
        toast.error("Please select valid image files", toastConfig);
        return;
      }
    }
  } else {
    // Show an error message if no images are selected
    toast.error("Please select at least one image to upload", toastConfig);
    return;
  }

  console.log(formDataObject, "formDataa");

  try {
    dispatch({
      type: UPLOAD_TEACHER_PHOTO_REQUEST,
    });
    const config = {
      headers: {
        "x-auth-token": `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.post(
      `${API_URLS}/post-image`,
      formDataObject,
      config
    );

    console.log(response.data, "response from backend");

    dispatch({
      type: UPLOAD_TEACHER_PHOTO_SUCCESS,
      payload: response.data, // Send the response data as the payload
    });

    // Show success toast if needed

  } catch (error) {
    console.log(error, "apiError");
    dispatch({
      type: UPLOAD_TEACHER_PHOTO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};




export const viewteacherPhotoAction = (userId) => async (dispatch) => {
  console.log(userId , "usrid in action")

  try {
    dispatch({
      type: VIEW_TEACHER_PHOTO_REQUEST,
    });

 
    const response = await axios.get(`${API_URLS}/user-images/${userId}`);

    dispatch({
      type: VIEW_TEACHER_PHOTO_SUCCESS,
      payload: response.data,
    });

    console.log(response.data, "VIEW_TEACHER_PHOTO_SUCCESS");
  } catch (error) {
    console.log(error, "VIEW_TEACHER_PHOTO_FAILr");
    dispatch({
      type: VIEW_TEACHER_PHOTO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};