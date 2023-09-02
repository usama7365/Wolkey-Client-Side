import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  userSignupReducer,
  userLoginReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  verifyEmailReducer,
} from "../store/Reducers/userReducer"; 
import {profileFormReducer , viewProfileReducer , resetProfileReducer} from "../store/Reducers/profileReducer"


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
  profile: resetProfileReducer,

});

const middleware = [thunk];



const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
