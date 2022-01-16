import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import advisers from "./advisers";
import filters from "./filters";
import payment from "./payment";
import initVideoChat from "./initVideoChat";
import comments from "./comments";
import adviserDashboard from "./adviserDashboard";
import category from "./category";
import tests from "./tests";
import contacts from "./contacts";
import packets from "./packets";
import groups from "./groups";
import userDetails from "./userDetails";
import activity from "./activity";
import teacherRegister from "./teacherRegister";
import { reducer as FormReducer } from "redux-form";
export default combineReducers({
  form: FormReducer,
  auth,
  packets,
  user,
  advisers,
  filters,
  comments,
  payment,
  initVideoChat,
  adviserDashboard,
  groups,
  contacts,
  userDetails,
  activity,
  category,
  tests,
  teacherRegister
});
