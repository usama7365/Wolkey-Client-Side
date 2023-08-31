// profileFormReducer.js
import {
    PROFILE_FORM_REQUEST,
    PROFILE_FORM_SUCCESS,
    PROFILE_FORM_FAIL,
  } from '../Constants/profileConstants'; // Constants file
  
  const initialState = {
    loading: false,
    success: false,
    error: false,
  };
  
  export const profileFormReducer = (state = initialState, action) => {
    switch (action.type) {
      case PROFILE_FORM_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: false,    
        };
      case PROFILE_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
        };
      case PROFILE_FORM_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  };
  

  