import axios from "axios";

export const UPDATE_FIELD = "userUpdateField";
export const LOAD_SUCCESS = "userLoadSuccess";
export const LOAD_ADVISER_SUCCESS = "adviserLoadSuccess";
export const START_FETCH = "userStartFetch";
export const ENQUEUE_SNACKBAR = "enqueueSnackbar";
export const REMOVE_SNACKBAR = "removeSnackbar";
export const ENQUEUE_TEXT = "enqueueText";

export const userUpdateField = ({prop, value}) => ({
    type: UPDATE_FIELD,
    payload: {prop, value},
});

export const loadUser = (data , gift=true) => async (dispatch) => {
    try {
        dispatch({type: START_FETCH});
        if (data) {
            localStorage.setItem("isAuth", "true");
        } else {
            let url = gift?"/user/profile":"/user/profile?gift=false"
            const response = await axios.get(url);

            dispatch({type: LOAD_SUCCESS, payload: {user: response.data}});

            if (
                response.data.roleTypeId === 2861 &&
                response.data.inCartable === false
            ) {
                const response = await axios.get("/advisor/profile");
                dispatch({
                    type: LOAD_ADVISER_SUCCESS,
                    payload: {adviser: response.data},
                });
            }
            localStorage.setItem("isAuth", "true");
        }
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const updateInfo = (data, callback) => async (dispatch) => {
    try {
        dispatch(userUpdateField({prop: "load", value: true}));
        const response = await axios.post(`/advisor/updateInfo`, data);

        dispatch(userUpdateField({prop: "load", value: false}));
        dispatch({
            type: LOAD_ADVISER_SUCCESS,
            payload: {adviser: response.data},
        });
        callback(response.data);
    } catch (e) {
        dispatch(errorSnackbar(e));
        dispatch(userUpdateField({prop: "load", value: false}));
    }
};

export const deleteFile = (id, callback) => async (dispatch) => {
    try {
        dispatch(userUpdateField({prop: "load", value: true}));
        const response = await axios.delete(`advisor/deleteFile?fileId=${id}`);

        dispatch(userUpdateField({prop: "load", value: false}));
        callback(response);
    } catch (e) {
        dispatch(errorSnackbar(e));
        dispatch(userUpdateField({prop: "load", value: false}));
    }
};

export const showMessage = (message) => async (dispatch) => {
    try {
        dispatch(
            enqueueSnackbar({
                message,
            })
        );
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const enqueueSnackbar = (notification) => ({
    type: ENQUEUE_SNACKBAR,
    notification: {
        key: new Date().getTime() + Math.random(),
        ...notification,
    },
});

export const removeSnackbar = (key) => ({
    type: REMOVE_SNACKBAR,
    key,
});

export const enqueueText = (msg) => ({
    type: ENQUEUE_TEXT,
    message:msg
});

export const errorSnackbar = (e) => (dispatch) => {
    if (e.response) {
        const msg = e.response.data.messages || e.response.data.message;
        const info = e.response.data.info?e.response.data.info.type:'SNACKBAR';
        if (info==='TEXT'){
            dispatch(enqueueText(msg))
        }
        else if (msg) {
            if (Array.isArray(msg)) {
                msg.forEach((element) => {
                    dispatch(
                        enqueueSnackbar(
                            {
                                message: element,
                                options: {
                                    variant: 'dark',
                                    style: {},
                                    anchorOrigin: {
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    },
                                }
                            }
                        )
                    );
                });
            } else {
                dispatch(
                    enqueueSnackbar(
                        {
                            message: msg,
                            options: {
                                variant: 'dark',
                                id: 'errorToast',
                                anchorOrigin: {
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                },
                            }
                        }
                    )
                );
            }
        } else {
            dispatch(
                enqueueSnackbar(
                    {
                        message: "خطا ! یه مشکلی پیش اومده",
                        options: {
                            variant: 'dark',
                            style: {},
                            anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'center',
                            },
                        }
                    }
                )
            );
        }
    }
};

export const infoSnackbar = (message) => (dispatch) => {
    let msg = message===0?`این سرویس در حال راه اندازی است`:message;
    dispatch(
        enqueueSnackbar(
            {
                message: msg,
                options: {
                    variant: 'dark',
                    preventDuplicate: true,

                    id: 'infoToast',
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    },
                }
            }
        )
    );
};

export const changeState = (state, callback) => async (dispatch) => {
    try {
        dispatch(userUpdateField({prop: "load", value: true}));
        const response = await axios.get(`/advisor/updateState/${state}`);
        dispatch(loadUser());
        dispatch(userUpdateField({prop: "load", value: false}));
        callback(response.data);
    } catch (e) {
        if (e.response.data.errorCode === 2023) {
            callback(e.response.data);
        } else {
            dispatch(errorSnackbar(e));
        }
        dispatch(userUpdateField({prop: "load", value: false}));
    }
};
