import axios from "axios"; 
import { API_URLS } from "../../apiConfig";
import {
    UPLOAD_TEACHER_VIDEO_REQUEST,
    UPLOAD_TEACHER_VIDEO_SUCCESS,
    UPLOAD_TEACHER_VIDEO_FAIL,
    VIEW_TEACHER_VIDEO_REQUEST,
    VIEW_TEACHER_VIDEO_SUCCESS,
    VIEW_TEACHER_VIDEO_FAIL,
  } from "../Constants/videoConstants";


  export const teacherVideoAction = (videoPath, token) => async (dispatch) => {
    console.log(videoPath, "formm");
    console.log(token, "actionToken");
  
    const formDataObject = new FormData();
  
    if (videoPath && videoPath.videoPath ) {
        formDataObject.append("videoPath",videoPath.videoPath);
      }
  
    console.log(formDataObject, "formDataa");
  
    try {
      dispatch({
        type: UPLOAD_TEACHER_VIDEO_REQUEST,
      });
      const config = {
        headers: {
          "x-auth-token": `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await axios.post(
        `${API_URLS}/post-video`,
        formDataObject,
        config
      );
  
      console.log(response.data, "response from backend");
  
      dispatch({
        type: UPLOAD_TEACHER_VIDEO_SUCCESS,
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
        type: UPLOAD_TEACHER_VIDEO_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const viewteacherVideoAction = (userId) => async (dispatch) => {
    console.log(userId, "agencytoken");
    try {
      dispatch({
        type: VIEW_TEACHER_VIDEO_REQUEST ,
      });
  
      const response = await axios.get(`${API_URLS}/user-video-gallery/${userId}`);
  
      dispatch({
        type: VIEW_TEACHER_VIDEO_SUCCESS,
        payload: response.data,
      });
  
      console.log(response.data, "VIEW_TEACHER_VIDEO_SUCCESS");
    } catch (error) {
      console.log(error, "VIEW_TEACHER_VIDEO_FAIL");
      dispatch({
        type: VIEW_TEACHER_VIDEO_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };