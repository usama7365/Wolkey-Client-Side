import {
    PROFILE_FORM_REQUEST,
    PROFILE_FORM_SUCCESS,
    PROFILE_FORM_FAIL,
  } from '../Constants/profileConstants'; 

  import axios from 'axios';
  import { API_URLS } from "../../apiConfig";
  import { toast } from "react-toastify";

  export const profileFormAction = (formData, config) => async (dispatch) => {
    console.log(formData , "formm")
    try {
      dispatch({
        type: PROFILE_FORM_REQUEST,
      });
  
      const response = await axios.post(
        `${API_URLS}/create-profile`,
        formData,
        config
      );
  console.log(response , "r from backend")
      dispatch({
        type: PROFILE_FORM_SUCCESS,
        payload: response.data,
      });
      toast.success(response.data.message , {
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
      dispatch({
        type: PROFILE_FORM_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      
      toast.error(response.data.error, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  