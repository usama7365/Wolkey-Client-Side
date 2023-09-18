import {
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from "../Constants/userContant";


export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

const loggedIn= () => {
  if (typeof window !== 'undefined') {
  const data = localStorage.getItem("auth-user");
  if (data) {
      return JSON.parse(data);
  }
  return undefined;
}
};

const initialState=loggedIn();


export const userLoginReducer = (state = {auth:initialState}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};


export const verifyEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        msg:action.payload,
      };
    case VERIFY_EMAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,

      };
    default:
      return state;
  }
};


export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotPasswordLoading: true,
        forgotPasswordMessage: "",
        forgotPasswordError: "",
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordLoading: false,
        forgotPasswordMessage: action.payload,
      };
    case FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        forgotPasswordLoading: false,
        forgotPasswordError: action.payload,
      };
    default:
      return state;
  }
};


export const resetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        resetPasswordLoading: true,
        resetPasswordMessage: "",
        resetPasswordError: "",
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordLoading: false,
        resetPasswordMessage: action.payload,
      };
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        resetPasswordLoading: false,
        resetPasswordError: action.payload,
      };
    default:
      return state;
  }
};


