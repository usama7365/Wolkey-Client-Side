import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  userSignupReducer,
  userLoginReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  verifyEmailReducer,
 
} from "../store/Reducers/userReducer"; 
import {profileFormReducer , viewProfileReducer ,  agencyProfileReducer, viewAllProfilesReducer , viewAgencyProfileReducer} from "../store/Reducers/profileReducer"
import { teacherPhotoReducer, viewteacherPhotoReducer } from "./Reducers/photoReducer";
import { teacherVideoReducer, viewteacherVideoReducer } from "./Reducers/videoReducer";


const initialState = {
  
};

const reducer = combineReducers({
  userSignup: userSignupReducer,
  userLogin: userLoginReducer, 
  forgetPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  verifyEmail:verifyEmailReducer,
  createProfile:profileFormReducer,
  viewProfile:viewProfileReducer,
  agencyProfile:agencyProfileReducer,
  allProfiles:viewAllProfilesReducer,
  viewAgencyProfile:viewAgencyProfileReducer,
  uploadTeacherPhoto:teacherPhotoReducer,
  viewTeacherPhoto:viewteacherPhotoReducer,
  uploadTeacherVideo:teacherVideoReducer,
  viewTeacherVideo:viewteacherVideoReducer
});

const middleware = [thunk];



const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
