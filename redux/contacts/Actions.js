import axios from "axios";
import { errorSnackbar } from "../user";

export const LOAD_CONTACT_LIST = "load_contact_list";
export const DELETE_CONTACT = "delete_contact";
export const UPDATE_CONTACT = "update_contact";
export const CHECK_USER_EXIST = "check_user_exist";
export const UPLOAD_CONTACT_EXCEL = "upload_contact_excel";
export const IMPORT_CONTACTS = "import_contacts";
export const START_SEARCH_USER_EXIST = "start_search_user_exist";
export const CLEAR_CONTACT_INFO = "clear_contact_info";
export const GET_INVITE_LINK = "get_invite_link";
export const CLEAR_EXCEL_CONTACTS = "clear_excel_contacts";
export const GET_CONTACT_DETAILS = "get_contact_details";
export const SET_CONTACT_LOADING = "set_contact_loading";
export const START_CONTACT_SEARCH = 'startContactSearch'
export const SET_CONTACT_SEARCH_LOADING = 'setContactSearchLoading'

export const setContactSearchLoading = () => async (dispatch) => {
    dispatch({
        type: SET_CONTACT_SEARCH_LOADING,
    });
}

export const getContactList = () => async (dispatch) => {
    dispatch({
        type: SET_CONTACT_LOADING,
    });
    try {
        const response = await axios.get("contact/all");
        dispatch({
            type: LOAD_CONTACT_LIST,
            payload: response.data.map((item) => {
                return {
                    ...item
                    ,
                    phone:
                        item.phone.slice(0, 2) === "98"
                            ? item.phone.replace("98", "0").replace(/\s/g, "")
                            : item.phone.replace(/\s/g, ""),
                };
            }),
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const startContactSearch = (payload) => async (dispatch) => {
    dispatch({
        type: START_CONTACT_SEARCH,
        payload: payload
    });
};

export const getContactPaginate = (payload) => async (dispatch) => {
    if (payload.offset == 0 && !payload.searchMode) {
        dispatch({
            type: SET_CONTACT_LOADING,
        });
    }
    try {
        const response = await axios.get(`contact/search?offset=${payload.offset}&max=${payload.max}&name=${payload.name}`);
        dispatch({
            type: LOAD_CONTACT_LIST,
            payload: {
                result: response.data.result.map((item) => {
                    return {
                        ...item
                        ,
                        phone:
                            item.phone.slice(0, 2) === "98"
                                ? item.phone.replace("98", "0").replace(/\s/g, "")
                                : item.phone.replace(/\s/g, ""),
                    };

                }),
                max: response.data.max,
                offset: response.data.offset,
                total: response.data.total,
            },
        });
        if (payload.name == '') {
            dispatch({
                type: START_CONTACT_SEARCH,
                payload: false
            });
        }
    } catch (e) {
        dispatch(errorSnackbar(e));
        if (payload.name == '') {
            dispatch({
                type: START_CONTACT_SEARCH,
                payload: false
            });
        }
    }
};

export const getContactDetailError = (payload, onlyRole = false) => async (dispatch) => {
    try {
        dispatch({
            type: GET_CONTACT_DETAILS,
            payload: payload
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
}

export const getContactDetail = (payload, onlyRole = false) => async (dispatch) => {
    try {
        dispatch({
            type: GET_CONTACT_DETAILS,
            payload: {
                ...payload
                ,
                phone: payload.phone ?
                    payload.phone.slice(0, 2) === "98"
                        ? payload.phone.replace("98", "0").replace(/\s/g, "")
                        : payload.phone.replace(/\s/g, "")
                    :
                    payload.username ?
                        payload.username.slice(0, 2) === "98"
                            ? payload.username.replace("98", "0").replace(/\s/g, "")
                            : payload.username.replace(/\s/g, "")
                        :
                        payload.fullName

                ,
                fullName: payload.fullName ?
                    payload.fullName : payload.lastName ?
                        payload.firstName + ' ' + payload.lastName :
                        payload.firstName,
                onlyRole
            }
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getInviteLink = () => async (dispatch) => {
    try {
        const response = await axios.get("config/invite");
        dispatch({
            type: GET_INVITE_LINK,
            payload: response.data,
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const deleteContact = (phone) => async (dispatch) => {
    try {
        const response = await axios.delete(`contact/delete?phone=${phone}`);
        dispatch({
            type: DELETE_CONTACT,
            payload: response.data
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
        dispatch({
            type: DELETE_CONTACT,
            payload: ''
        });
    }
};

export const updateContact = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`contact/update`, data);
        dispatch({
            type: UPDATE_CONTACT,
            payload: response.data
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
        dispatch({
            type: UPDATE_CONTACT,
            payload: ''
        });
    }
};

export const checkUserExist = (phone) => async (dispatch) => {
    dispatch({
        type: START_SEARCH_USER_EXIST,
    });
    try {
        const response = await axios.post("user/exist", {
            username: phone
        });
        dispatch({
            type: CHECK_USER_EXIST,
            payload: response.data
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const clearContactInfo = () => async (dispatch) => {
    dispatch({
        type: CLEAR_CONTACT_INFO,
    });
};

export const uploadContactExcel = (excel) => async (dispatch) => {
    try {
        const response = await axios.post("contact/load", {
            contactsExcel: excel
        });
        dispatch({
            type: UPLOAD_CONTACT_EXCEL,
            payload: response.data
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};
export const clearExcelContacts = () => async (dispatch) => {
    dispatch({
        type: CLEAR_EXCEL_CONTACTS,
    });
};

export const importContacts = (contactsArray) => async (dispatch) => {
    try {
        const response = await axios.post("contact/import", contactsArray);
        dispatch({
            type: IMPORT_CONTACTS,
            payload: response.data
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};


