// profileFormReducer.js
import {
    PROFILE_FORM_REQUEST,
    PROFILE_FORM_SUCCESS,
    PROFILE_FORM_FAIL,
    VIEW_PROFILE_SUCCESS,
    VIEW_PROFILE_FAIL,
    CREATE_AGENCY_PROFILE_FAIL,
    CREATE_AGENCY_PROFILE_REQUEST,
    CREATE_AGENCY_PROFILE_SUCCESS,
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
          profileId:action.payload
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

export const agencyProfileReducer = (state={}, action) => {
  switch (action.type) {
    case ' CREATE_AGENCY_PROFILE_FAIL':
      return { ...state, loading: true };
    case ' CREATE_AGENCY_PROFILE_REQUEST':
      return { ...state, loading: false, userInfo: action.payload, error: null };
    case ' CREATE_AGENCY_PROFILE_SUCCESS':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};












  

  