import {
  PROFILE_FORM_REQUEST,
  PROFILE_FORM_SUCCESS,
  PROFILE_FORM_FAIL,
  VIEW_PROFILE_REQUEST,
  VIEW_PROFILE_SUCCESS,
  VIEW_PROFILE_FAIL,
  RESET_PROFILE
} from "../Constants/profileConstants";

import axios from "axios";
import { API_URLS } from "../../apiConfig";
import { toast } from "react-toastify";
import store from "../store"
export const profileFormAction = (formData, config) => async (dispatch) => {
  console.log(formData, "formm");
  try {
    dispatch({
      type: PROFILE_FORM_REQUEST,
    });
    console.log("object obj jhdukahkdhakhjd");
    const response = await axios.post(
      `${API_URLS}/create-profile`,
      formData,
      config
    );
    console.log(response, "response from backend");
    dispatch({
      type: PROFILE_FORM_SUCCESS,
      payload: response,
    });
    toast.success(response.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error) {
    console.log(error, "apiError");
    dispatch({
      type: PROFILE_FORM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const viewProfileAction = (token) => async (dispatch) => {
  console.log(token , "tokenInaction")

  const config = {
    headers: {
      "x-auth-token": `Bearer ${token}`, 
      "Content-Type": "application/json",
    },
  };
  

  console.log(config, "viewProfiletoken");
 
  try {

    dispatch({
      type: VIEW_PROFILE_REQUEST,
    });
    const response = await axios.post(
      `${API_URLS}/view-profile`,{userId:store.getState()._id},config)
   
    console.log(response, "viewProfileResponse");
    dispatch({
      type: VIEW_PROFILE_SUCCESS,
      payload: response.data, // Assuming the response contains data
    });
  } catch (error) {
    console.log(error, "viewProfileError");
    dispatch({
      type: VIEW_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// profileActions.js


export const resetProfileAction = () => ({
  type: RESET_PROFILE,
});




