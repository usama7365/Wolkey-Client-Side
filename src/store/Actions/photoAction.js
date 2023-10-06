import axios from "axios"; // Make sure to import axios
import { API_URLS } from "../../apiConfig";

import {
  UPLOAD_TEACHER_PHOTO_REQUEST,
  UPLOAD_TEACHER_PHOTO_SUCCESS,
  UPLOAD_TEACHER_PHOTO_FAIL,
  VIEW_TEACHER_PHOTO_REQUEST,
  VIEW_TEACHER_PHOTO_FAIL,
  VIEW_TEACHER_PHOTO_SUCCESS,
} from "../Constants/photoConstants";

export const teacherPhotoAction = (imagePath, token) => async (dispatch) => {
  console.log(imagePath, "formm");
  console.log(token, "actionToken");

  const formDataObject = new FormData();

  for (let i = 0; i < imagePath.length; i++) {
    console.log(imagePath[i], "selected file");
    formDataObject.append("imagePath", imagePath[i]);
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
      payload: response,
    });

    //   toast.success(response.data.message, {
    //     position: "top-right",
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
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

export const viewteacherPhotoAction = (token) => async (dispatch) => {
  console.log(token, "agencytoken");
  try {
    dispatch({
      type: VIEW_TEACHER_PHOTO_REQUEST,
    });

    const config = {
      headers: {
        "x-auth-token": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(`${API_URLS}/user-images`, config);

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
