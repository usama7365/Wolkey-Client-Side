import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
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

import axios from "axios";
import { API_URLS } from "../../apiConfig";
import { toast } from "react-toastify";

export const userSignupAction =
  ({ displayName, email, password , role }) =>
  async (dispatch) => {
    console.log(role , "roleee")
    try {
      dispatch({
        type: USER_SIGNUP_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${API_URLS}/signUp`,
        { displayName, email, password, role },
        config
      );

      // localStorage.setItem("auth-user", JSON.stringify(res.data));

      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: data, 
      });

      toast.success(data.message , {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
    } catch (error) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload: error,
      });

      toast.error(error.response.data.error, {
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

export const userLoginAction =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${API_URLS}/login`,
        { email, password },
        config
      );
      console.log("API Response Data:", res);
      localStorage.setItem("auth-user",JSON.stringify(res.data))
      
      const token = res.data.token;
      Cookies.set('auth-token', token);
       
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload:res.data
      });
      if(res.data.token && res.data.isActive === true){
        toast.success("You have Login Successfully", {
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
    
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      toast.error( error.response && error.response.data?.error, {
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

export const verifyEmailAction = (token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: VERIFY_EMAIL_REQUEST,
      });
      const response = await axios.get(`${API_URLS}/verify/${token}`);
      console.log(response.data.message, "actionResponse");

      if (response.status === 200) {
        dispatch({
          type: VERIFY_EMAIL_SUCCESS,
          payload: response.data.message,
        });
      } else {
        dispatch({
          type: VERIFY_EMAIL_FAIL,
          payload: "Invalid verification link.",
        });
      }
    } catch (error) {
      console.log(error.response?.data.error, "actionError");
      dispatch({
        type: VERIFY_EMAIL_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message, //'An error occurred while verifying your account.',
      });
    }
  };
};

export const forgetPasswordAction = (email) => async (dispatch) => {
  try {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      `${API_URLS}/auth/forgot-password`,
      { email },
      config
    );

    console.log(response , "resetResponse")

    if (response.data.message) {
      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: response.data.message,
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
    }
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    toast.error(error.response.data.error, {
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

export const resetPasswordAction =
  ({ token, newPassword }) =>
  async (dispatch) => {
    console.log(token, newPassword, "resetAction");
    try {
      dispatch({
        type: RESET_PASSWORD_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(
        `${API_URLS}/reset/reset-password/${token}`,
        { newPassword },
        config
      );

      console.log(res.data.message, "reset Response");
      if (res.data.message) {
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
          payload: res.data.message,
        });
        toast.success(res.data.message, {
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
    } catch (error) {
      console.log(error, "resetArror");
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      toast.error(error.response && error.response.data?.error, {
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
