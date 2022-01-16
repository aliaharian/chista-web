import axios from "axios"
import {reset} from "redux-form"
import Cookies from 'js-cookie';

export const UPDATE_FIELD = "authUpdateField"
export const INITIABLE_SUCCESS = "authInitiableSuccess"
export const VERIFY_SUCCESS = "authVerifySuccess"
export const COMPLETE_SUCCESS = "authCompleteSuccess"
export const EDIT_INFO_SUCCESS = "authEditInfoSuccess"
export const RESET = "authResetSuccess"
export const DECREMENT_TIMER = "authDecrementTimer"
export const RESET_TIMER = "authResetTimer"
export const SET_PROFILE = "userSetProfile"
import {loadUser} from '../user'
import {errorSnackbar} from "../user"
import {componentsUpdateField} from "../groups";

const ssoUxId = 2801;
const ssoRoleId = 2891;
export const ssoBaseUrl = process.env.REACT_APP_SSO_BASE_URL;
export const appBaseUrl = process.env.REACT_APP_BASE_URL;
export const uclaimToken = typeof window !== 'undefined' ? localStorage.getItem('uclaim') : null
export const authUpdateField = ({prop, value}) => (
    {
        type: UPDATE_FIELD,
        payload: {prop, value},
    }
);

axios.defaults.baseURL = appBaseUrl;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

export const userLogin = (token) => (dispatch) => {
    dispatch(loadUser());
};

export const userLogout = (reload=false) => async (dispatch) => {
    try {
        dispatch(authUpdateField({prop: "load", value: true}))
        await axios.post("/user/logout");
        localStorage.removeItem('isAuth');

        dispatch(authUpdateField({prop: "load", value: false}))
        dispatch(authUpdateField({prop: "startFree", value: false}))
        reload?window.location.reload() : window.location.href = '/';
    } catch (e) {
        dispatch(authUpdateField({prop: "load", value: false}))
        dispatch(authUpdateField({prop: "user", value: null}))
        dispatch(authUpdateField({prop: "adviser", value: null}))
        localStorage.removeItem('isAuth')
        dispatch(errorSnackbar(e));
    }
};

export const initiable = (data) => async (dispatch) => {
    try {
        dispatch(authUpdateField({prop: "load", value: true}));
        await axios.post(process.env.REACT_APP_SSO_BASE_URL + "/user/codeSend?check=true", {
            ...data,
            uxId: ssoUxId,
            roleId: ssoRoleId,
        });
        dispatch({
            type: INITIABLE_SUCCESS,
            payload: {username: data.username},
        });
        dispatch(authUpdateField({prop: "openVerify", value: true}));
        dispatch(reset("initiableForm"));
    } catch (e) {
        dispatch(authUpdateField({prop: "load", value: false}));
        dispatch(errorSnackbar(e));
    }
};

export const callWithMe = () => async (dispatch, getState) => {
    try {
        const {
            auth: {username},
        } = getState();
        dispatch(authUpdateField({prop: "load", value: true}));
        await axios.post(ssoBaseUrl + "/user/codeCall?check=true", {
            username,
            uxId: ssoUxId,
            roleId: ssoRoleId,
        });
        dispatch(authUpdateField({prop: "load", value: false}));
    } catch (e) {
        dispatch(authUpdateField({prop: "load", value: false}));
        dispatch(errorSnackbar(e));
    }
};

export const resendCode = () => async (dispatch, getState) => {
    try {
        const {
            auth: {username},
        } = getState();
        dispatch(authUpdateField({prop: "load", value: true}));
        await axios.post(process.env.REACT_APP_SSO_BASE_URL + "/user/codeSend?check=true", {
            username,
            uxId: ssoUxId,
            roleId: ssoRoleId,
        });
        dispatch(authUpdateField({prop: "load", value: false}));
    } catch (e) {
        dispatch(authUpdateField({prop: "load", value: false}));
        dispatch(errorSnackbar(e));
    }
};
export const resetAuth = () => async (dispatch, getState) => {
    try {
        dispatch({type: RESET});
        dispatch(reset("initiableForm"));
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const verify = (data) => async (dispatch, getState) => {
    try {
        const {
            auth: {username},
        } = getState();
        dispatch(authUpdateField({prop: "load", value: true}));
        const result = await axios.post(
            ssoBaseUrl + "/user/codeVerifyLogin?login=true",
            {...data, username, uxId: ssoUxId, roleId: ssoRoleId}
        );
        dispatch({type: VERIFY_SUCCESS});
        dispatch(reset("verifyForm"));
        if (result.data.message == "true") {
            dispatch(loadUser());
            localStorage.setItem("isAuth", "true");
            localStorage.setItem("uclaim", Cookies.get('uclaim'));
            
        } else {
            dispatch(authUpdateField({prop: "openComplete", value: true}));
        }
    } catch (e) {
        dispatch(authUpdateField({prop: "load", value: false}));
        dispatch(reset("verifyForm"));
        dispatch(errorSnackbar(e));
    }
};

export const complete = (data , gift= true) => async (dispatch, getState) => {
    try {
        const {
            auth: {username, startFree},
        } = getState();
        dispatch(authUpdateField({prop: "load", value: true}));
        const response = await axios.post(ssoBaseUrl + "/user/registerLogin", {
            ...data,
            username,
            uxId: ssoUxId,
            roleId: ssoRoleId,
        });
        dispatch({type: COMPLETE_SUCCESS});
        localStorage.setItem("isAuth", "true");
        dispatch(loadUser(null , gift));
        dispatch(reset("completeForm"));
        if(startFree) {
            dispatch(authUpdateField({prop: "openCreateClassInGiftMode", value: true}))
        }
        dispatch({p})
    } catch (e) {
        dispatch(authUpdateField({prop: "load", value: false}));
        dispatch(errorSnackbar(e));
    }
};

export const editInfo = (data) => async (dispatch, getState) => {
    try {
        const {
            auth: {username},
        } = getState();

        dispatch(authUpdateField({prop: "load", value: true}));
        const response = await axios.post(process.env.REACT_APP_BASE_URL + "/user/updateInfo", {
            ...data,
        });
        dispatch({type: EDIT_INFO_SUCCESS});
        dispatch(reset("editInfoForm"));
        dispatch(loadUser());
    } catch (e) {
        dispatch(authUpdateField({prop: "load", value: false}));
        dispatch(errorSnackbar(e));
    }
};


export const isAuth = () => async () => {
    return localStorage.getItem("isAuth");
};

export const decrementResendCodeTimer = () => async (dispatch, getState) => {
    const {
        auth: {timer},
    } = getState();
    if (timer > 0) dispatch({type: DECREMENT_TIMER});
};

export const resetResendCodeTimer = () => async (dispatch, getState) => {
    const {
        auth: {timer},
    } = getState();

    dispatch({type: RESET_TIMER});
};
export const initiableUserGuest = (data, chatgroupid) => async (dispatch) => {
    try {
        dispatch(authUpdateField({prop: "load", value: true}));
        await axios.post(appBaseUrl + "/user/guest?chatgroupid=" + chatgroupid, {
            ...data,
            uxId: process.env.REACT_APP_USER_GUEST_UX_ID,
        });
        dispatch(componentsUpdateField({prop: "openClass", value: true}));
        dispatch(reset("authClassForm"));
    } catch (e) {
        dispatch(authUpdateField({prop: "load", value: false}));
        dispatch(errorSnackbar(e));
    }
};
