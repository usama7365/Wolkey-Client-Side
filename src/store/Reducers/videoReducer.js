import {
  UPLOAD_TEACHER_VIDEO_REQUEST,
  UPLOAD_TEACHER_VIDEO_SUCCESS,
  UPLOAD_TEACHER_VIDEO_FAIL,
  VIEW_TEACHER_VIDEO_REQUEST,
  VIEW_TEACHER_VIDEO_SUCCESS,
  VIEW_TEACHER_VIDEO_FAIL,
} from "../Constants/videoConstants";

export const teacherVideoReducer = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_TEACHER_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case UPLOAD_TEACHER_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case UPLOAD_TEACHER_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const viewteacherVideoReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW_TEACHER_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case VIEW_TEACHER_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        userInfo: action.payload,
      };
    case VIEW_TEACHER_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
