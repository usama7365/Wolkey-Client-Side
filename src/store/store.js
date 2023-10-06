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
<<<<<<< HEAD
import { teacherPhotoReducer, viewteacherPhotoReducer } from "./Reducers/photoReducer";
=======
>>>>>>> e5520372c4c4e90538cb4b47332a70d1dd7e7749


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
<<<<<<< HEAD
  viewAgencyProfile:viewAgencyProfileReducer,
  uploadTeacherPhoto:teacherPhotoReducer,
  viewTeacherPhoto:viewteacherPhotoReducer
=======
  viewAgencyProfile:viewAgencyProfileReducer
>>>>>>> e5520372c4c4e90538cb4b47332a70d1dd7e7749
});

const middleware = [thunk];



const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
