import axios from "axios";
import {transform} from "../../src/utilities";
import {errorSnackbar} from "../user";

export const LOAD_FAVORITE_LIST = "loadFavoriteList";
export const LOAD_ADVISEMENT_LIST = "loadAdvisementList";
export const LOAD_COMMENTS_LIST = "loadCommentsList";
export const LOAD_OPINIONS_LIST = "loadOpinionsList";
export const ADD_REPLAY_OPINION = "addReplayOpinion";
export const LOAD_CATEGORY_LIST = "load_category_list";
export const LOAD_COURSE_LIST = "load_course_list";
export const LOAD_CLASSES_LIST = "load_classes_list";
export const LOAD_CLASSES_LIST_FILTERED = "load_classes_list_filtered";
export const LOAD_CLASS_DETAILS = "load_class_details";
export const SET_CLASSES_LIST_LOADING = "set_classes_list_loading";
export const LOAD_ALL_CLASSES = "loadAllClasses"
export const SET_CLASSES_LIST_LOADING_PAGINATION = "set_classes_list_loading_pagination"
export const getFavoriteList = (max, offset = 0) => async (dispatch) => {
    try {
        const response = await axios.get(
            `/favorite/search${max ? `?max=${max}&offset=${offset}` : ""}`
        );
        dispatch({
            type: LOAD_FAVORITE_LIST,
            payload: response.data,
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};


export const getAdvisementList = (isServer, payload, filter = false) => async (dispatch) => {
    try {
        if (isServer) {
            dispatch({
                type: LOAD_ADVISEMENT_LIST,
                payload,
            });
            return;
        }
        const response = await axios.get(
            `/advisement/search?${transform.objectToQeryparams(payload)}`
        );
        dispatch({
            type: LOAD_ADVISEMENT_LIST,
            payload: {
                ...response.data,
                filter,
                filterQuery: payload,
            },
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getCommentsList = (isServer, payload, filter = false) => async (dispatch) => {
    try {
        if (isServer) {
            dispatch({
                type: LOAD_COMMENTS_LIST,
                payload,
            });
            return;
        }
        const response = await axios.get(
            `/comment/search?${transform.objectToQeryparams(payload)}`
        );
        dispatch({
            type: LOAD_COMMENTS_LIST,
            payload: {
                ...response.data,
                filter,
                filterQuery: payload,
            },
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getOpinionsList = (isServer, payload, filter = false) => async (dispatch) => {
    try {
        if (isServer) {
            dispatch({
                type: LOAD_OPINIONS_LIST,
                payload,
            });
            return;
        }
        const response = await axios.get(
            `/comment/search?${transform.objectToQeryparams(payload)}`
        );
        dispatch({
            type: LOAD_OPINIONS_LIST,
            payload: {
                ...response.data,
                filter,
                filterQuery: payload,
            },
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getCategoryList = () => async (dispatch) => {
    try {
        const response = await axios.get(`/category/all`);
        dispatch({
            type: LOAD_CATEGORY_LIST,
            payload: response.data,
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getCourseList = (payload = "") => async (dispatch) => {
    try {
        const response = await axios.get(
            `${
                payload
                    ? `/course/all?loadall=true&categoryIds=${payload}`
                    : `/course/all`
            }`
        );
        dispatch({
            type: LOAD_COURSE_LIST,
            payload: response.data,
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};


export const getClassesList = (isServer, payload, filter = false) => async (dispatch) => {
    try {
        if (isServer) {
            dispatch({
                type: LOAD_CLASSES_LIST,
                payload,
            });
            return;
        }
        if (!payload.offset || payload.offset == 0) {
            dispatch({
                type: SET_CLASSES_LIST_LOADING,
            });
        }else{
            dispatch({
                type: SET_CLASSES_LIST_LOADING_PAGINATION,
            });
        }
        const response = await axios.get(
            `/group/search?${transform.objectToQeryparams(payload)}`
        );
        dispatch({
            type: LOAD_CLASSES_LIST,
            payload: {
                ...response.data,
                filter,
                filterQuery: payload,
            },
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getAllClasses = (memberRole , active=false) => async (dispatch) => {
    try {
        const response = await axios.get(
            memberRole?`group/all?memberRole=${memberRole}`:`/group/all`
        );
        dispatch({
            type: LOAD_ALL_CLASSES,
            payload: response.data,
            active:active,
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const loadClassDetails = (payload) => async (dispatch) => {
    try {
        dispatch({
            type: LOAD_CLASS_DETAILS,
            payload,
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getContactList = () => async (dispatch) => {
    try {
        const response = await axios.get("user/contacts");
        dispatch({
            type: LOAD_CONTACT_LIST,
            payload: response.data.map((item) => {
                return {
                    ...item,
                    username:
                        item.username.slice(0, 2) === "98"
                            ? item.username.replace("98", "0").replace(/\s/g, "")
                            : item.username.replace(/\s/g, ""),
                };
            }),
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};
