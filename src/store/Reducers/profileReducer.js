// profileFormReducer.js
import {
    PROFILE_FORM_REQUEST,
    PROFILE_FORM_SUCCESS,
    PROFILE_FORM_FAIL,
    VIEW_PROFILE_SUCCESS,
    VIEW_PROFILE_FAIL,
    RESET_PROFILE
  } from '../Constants/profileConstants'; // Constants file
  

  
  export const profileFormReducer = (state = {}, action) => {
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
          profileId:_id,
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

  const initialState = {
    userInfo: null,
    // ...other state properties
  };


export const viewProfileReducer = (state =initialState, action) => {
  switch (action.type) {
    case 'VIEW_PROFILE_REQUEST':
      return { ...state, loading: true };
    case 'VIEW_PROFILE_SUCCESS':
      return { ...state, loading: false, userInfo: action.payload, error: null };
    case 'VIEW_PROFILE_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// profileReducer.js


const initialState2 = {
  userInfo: null, // Initial state or you can set it to null
  // other profile-related state properties
};

export const resetProfileReducer = (state = initialState2, action) => {
  switch (action.type) {
    case RESET_PROFILE:
      return {
        ...state,
        userInfo: null, // Reset the profile data
        loading: false, // Reset loading to false
        error: null,   // Reset error to null
        // Reset other profile-related state properties if needed
      };
    // Handle other action types as well
    default:
      return state;
  }
};







  

  