import {
  PROFILE_FORM_REQUEST,
  PROFILE_FORM_SUCCESS,
  PROFILE_FORM_FAIL,
  VIEW_PROFILE_REQUEST,
  VIEW_PROFILE_SUCCESS,
  VIEW_PROFILE_FAIL,
  CREATE_AGENCY_PROFILE_FAIL,
  CREATE_AGENCY_PROFILE_REQUEST,
  CREATE_AGENCY_PROFILE_SUCCESS,
  VIEW_ALL_PROFILES_REQUEST,
  VIEW_ALL_PROFILES_SUCCESS,
  VIEW_ALL_PROFILES_FAIL,
  RESET_PROFILE,
} from "../Constants/profileConstants";

import axios from "axios";
import { API_URLS } from "../../apiConfig";
import { toast } from "react-toastify";
export const profileFormAction = (formData, token) => async (dispatch) => {
  console.log(formData, "formm");
  console.log(token, "actionToken");

  const formDataObject = new FormData(); // Rename the variable to avoid conflict

  formDataObject.append("name", formData.name);
  formDataObject.append("title", formData.title);
  formDataObject.append("city", formData.city);
  formDataObject.append("gender", formData.gender);
  formDataObject.append("dateOfBirth", formData.dateOfBirth);
  formDataObject.append("aboutUs", formData.aboutUs);
  formDataObject.append("phoneNumber", formData.phoneNumber);
  formDataObject.append("age", formData.age);
  formDataObject.append("subjectName", JSON.stringify(formData.subjectName));
  formDataObject.append("serviceNames", JSON.stringify(formData.serviceNames));
  formDataObject.append("Nationality", formData.Nationality);
  formDataObject.append("education", formData.education);
  formDataObject.append("specialityDegree", formData.specialityDegree);
  formDataObject.append("Experience", formData.Experience);
  formDataObject.append("TeachingStyle", formData.TeachingStyle);
  formDataObject.append("languages", JSON.stringify(formData.languages));
  formDataObject.append("day", formData.day);
  formDataObject.append(
    "selectedTimes",
    JSON.stringify(formData.selectedTimes)
  );
  formDataObject.append("prices", JSON.stringify(formData.prices));

  for (let i = 0; i < formData.selectedImageFiles.length; i++) {
    console.log(formData.selectedImageFiles[i], "selected file");
    formDataObject.append("selectedImageFiles", formData.selectedImageFiles[i]);
  }
  if (formData && formData.selectedVideoFile) {
    formDataObject.append("selectedVideoFile", formData.selectedVideoFile);
  }
  console.log(formDataObject, "formDataa");

  try {
    dispatch({
      type: PROFILE_FORM_REQUEST,
    });
    const config = {
      headers: {
        "x-auth-token": `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.post(
      `${API_URLS}/create-profile`,
      formDataObject,
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




export const viewProfileAction = ({token ,profileId = null}) => async (dispatch) => {
  try {
    dispatch({
      type: VIEW_PROFILE_REQUEST,
    });
    const config = {
      headers: {
        "x-auth-token": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    let url = `${API_URLS}/view-profile`;
    if (profileId) {
      url += `/${profileId}`;
    }

    const response = await axios.get(url, config);
    console.log(response, "viewProfileResponse");
    
    if (response.status === 200) {
      dispatch({
        type: VIEW_PROFILE_SUCCESS,
        payload: response.data, 
      });
    } else {
      dispatch({
        type: VIEW_PROFILE_FAIL,
        payload: "Failed to fetch profile data.",
      });
    }
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

export const agencyProfileAction = (agencyData, token) => async (dispatch) => {

  try {
    dispatch({
      type: CREATE_AGENCY_PROFILE_REQUEST,
    });

    const config = {
      headers: {
        "x-auth-token": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    

    const response = await axios.post(
      `${API_URLS}/createOrUpdateAgencyProfile`,
      agencyData, 
      config 
    );

    dispatch({
      type: CREATE_AGENCY_PROFILE_SUCCESS,
      payload: response.data, // Use response.data to get the response body
    });

    console.log(response.data, "agencyProfileApi");
  } catch (error) {
    console.log(error, "agencyProfileError");
    dispatch({
      type: CREATE_AGENCY_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const viewAllProfilesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: VIEW_ALL_PROFILES_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(`${API_URLS}/all-profiles`);
    dispatch({
      type: VIEW_ALL_PROFILES_SUCCESS,
      payload: response.data,
    });

    console.log(response.data, "AllprofilesAction");
  } catch (error) {
    console.log(error, "AllProfilesError");
    dispatch({
      type: CREATE_AGENCY_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
