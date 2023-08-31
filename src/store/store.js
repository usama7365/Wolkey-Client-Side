import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  userSignupReducer,
  userLoginReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  verifyEmailReducer,
} from "../store/Reducers/userReducer"; 
import {profileFormReducer} from "../store/Reducers/profileReducer"

const reducer = combineReducers({
  userSignup: userSignupReducer,
  userLogin: userLoginReducer,
  forgetPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  verifyEmail:verifyEmailReducer,
  createProfile:profileFormReducer
});

const middleware = [thunk];
const initialState = {};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
