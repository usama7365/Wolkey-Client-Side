import {
    UPLOAD_TEACHER_PHOTO_REQUEST,
    UPLOAD_TEACHER_PHOTO_SUCCESS,
    UPLOAD_TEACHER_PHOTO_FAIL,
    VIEW_TEACHER_PHOTO_REQUEST,
    VIEW_TEACHER_PHOTO_FAIL,
    VIEW_TEACHER_PHOTO_SUCCESS,
  } from "../Constants/photoConstants";

export const teacherPhotoReducer = (state = {}, action) => {
    switch (action.type) {
      case UPLOAD_TEACHER_PHOTO_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: false,
        };
      case UPLOAD_TEACHER_PHOTO_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
        };
      case UPLOAD_TEACHER_PHOTO_FAIL :
        return {
          ...state,
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  };

  export const viewteacherPhotoReducer = (state = {}, action) => {
    switch (action.type) {
      case  VIEW_TEACHER_PHOTO_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: false,
        };
      case  VIEW_TEACHER_PHOTO_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          userInfo: action.payload,
        };
      case  VIEW_TEACHER_PHOTO_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  };