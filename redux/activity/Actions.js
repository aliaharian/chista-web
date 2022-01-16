import axios from "axios";
import { errorSnackbar } from "../user";

export const GET_OSTAD_ACTIVITY_LIST = "getOstadActivityList";
export const LOAD_ACTIVITY_PACKETS = "loadActivityPackets";
export const LOAD_ACTIVITY_ACTIVE_PACKET = "loadActivityActivePacket"
export const LOAD_ACTIVITY_PACKET_BILL = "loadActivityPacketBill"
export const BUY_ACTIVITY_PACKET = "buyActivityPacket"
export const LOAD_ACTIVITY_PACKET_CHART = 'loadActivityPacketChart'
export const BEGIN_LOAD_ACTIVITY_PACKET_CHART = 'beginLoadActivityPacketChart'
export const SET_OSTAD_ACTIVITY_LIST_LOADING = 'setOstadActivityListoading'
export const ACTIVE_ACTIVITY = 'activeActivity'
export const GET_ACTIVITY_DESCRIPTIVES = "getActivityDescriptives"
export const GET_ACTIVITY_DETAILS = "getActivityDetails"
export const GET_ACTIVITY_EXAMINEES = "getActivityExaminees"
export const GET_ACTIVITY_ANSWERS_BY_EXAMINEE = "getActivityAnswersByExaminee"
export const GET_USER_ACTIVITY_LIST = "getUserActivityList"
export const SET_USER_ACTIVITY_LIST_LOADING = "setUserActivityListLoading"

export const getOstadActivityList = (isServer, userPhone, payload, filter, resetFirst = false , showLoading = false) => async (dispatch) => {
    try {
        if (isServer) {
            dispatch({
                type: GET_OSTAD_ACTIVITY_LIST,
                payload: {
                    ...payload,
                    isServer,
                    resetFirst
                },
            });
            return;
        }
       
        if ((!payload.pageNumber || payload.pageNumber == 0) || showLoading) {
            dispatch({
                type: SET_OSTAD_ACTIVITY_LIST_LOADING,
            });
        }

        let filterParam = ``
        if (filter.q) 
            filterParam += `&name like ${filter.q}`
        
        if (filter.activityType) 
            filterParam += `&activityType=${filter.activityType}`
        

        if (filter.activityTime) 
            filterParam += `&startTime>${filter.activityTime}`

        const response = await axios.post(
            `${process.env.REACT_APP_ACTIVITY_URL}/activities/ctActivities?userPhone=${userPhone}`,
            {
                b: {
                    userPhone: userPhone
                },
                filter: filterParam,
                pageNumber: payload.pageNumber,
                pageSize: payload.pageSize
            }
        );
        dispatch({
            type: GET_OSTAD_ACTIVITY_LIST,
            payload: {
                ...response.data,
                isServer,
                resetFirst
            },
        });

    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getUserActivityList = (isServer, userPhone, payload, filter, resetFirst = false) => async (dispatch) => {
    try {
        if (isServer) {
            dispatch({
                type: GET_USER_ACTIVITY_LIST,
                payload: {
                    ...payload,
                    isServer,
                    resetFirst

                },
            });
            return;
        }
        if (!payload.pageNumber || payload.pageNumber == 0) {
            dispatch({
                type: SET_USER_ACTIVITY_LIST_LOADING,
            });
        }

        let filterParam = `draft=false&active=true`
        let queryParam = `?userPhone=${userPhone}`

        if (filter.q) 
            filterParam += `&name like ${filter.q}`
        
        if (filter.activityType) 
            filterParam += `&activityType=${filter.activityType}`
        
        if (filter.startTime) 
            filterParam += `&startTime>${filter.startTime}`
        
        if (filter.activityDone) 
            queryParam += `&done=${filter.activityDone}`

        const response = await axios.post(
            `${process.env.REACT_APP_ACTIVITY_URL}/activities/mine${queryParam}`,
            {
                filter: filterParam,
                pageNumber: payload.pageNumber,
                pageSize: payload.pageSize
            }
        );
        dispatch({
            type: GET_USER_ACTIVITY_LIST,
            payload: {
                ...response.data,
                isServer,
                resetFirst
            },
        });

    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getActivityPackets = (userPhone) => async (dispatch) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activityPackets/page`, {
            "b": {
                "userPhone": userPhone
            },
            "filter": "userPhone=" + userPhone
        });
        dispatch({
            type: LOAD_ACTIVITY_PACKETS,
            payload: response.data,
        });

    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getActivityActivePacket = () => async (dispatch) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_ACTIVITY_URL}/activityPackets/active`)
        dispatch({
            type: LOAD_ACTIVITY_ACTIVE_PACKET,
            payload: response.data,
        });

    } catch (e) {
    }
};

export const activeActivity = (id, active) => async (dispatch) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activities/active`, {
            "id": id,
            "active": active
        });
        dispatch({
            type: ACTIVE_ACTIVITY,
            payload: response.data,
        });

    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getActivityDetails = (server, id, payload = {}) => async (dispatch) => {
    if (server) {
        dispatch({
            type: GET_ACTIVITY_DETAILS,
            payload: payload,
        });
    } else {
        try {
            const response = await axios.get(`${process.env.REACT_APP_ACTIVITY_URL}/activities/${id}`);

            const activityQuestions = await axios.get(`${process.env.REACT_APP_ACTIVITY_URL}/activityQuestions/withAnswerInfo/${id}`);

            dispatch({
                type: GET_ACTIVITY_DETAILS,
                payload: { ...response.data, questions: activityQuestions.data }
                ,
            });
        } catch (e) {
            dispatch(errorSnackbar(e));
        }
    }
};

export const getActivityAnswersByExaminee = (server, id, payload = {}) => async (dispatch) => {
    if (server) {
        dispatch({
            type: GET_ACTIVITY_ANSWERS_BY_EXAMINEE,
            payload: payload,
        });
    } else {
        try {
            const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activityAnswers/findAllByExaminee`, {
                "b": { "examineeId": id }
            });
            dispatch({
                type: GET_ACTIVITY_ANSWERS_BY_EXAMINEE,
                payload: response.data,
            });
        } catch (e) {
            dispatch(errorSnackbar(e));
        }
    }
};

export const getActivityExaminees = (server, id, payload = {}) => async (dispatch) => {
    if (server) {
        dispatch({
            type: GET_ACTIVITY_EXAMINEES,
            payload: payload,
        });
    } else {
        try {
            const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activityExaminees/page`, {
                "filter": "activityId=" + id,
                "pageSize": 10000
            });
            dispatch({
                type: GET_ACTIVITY_EXAMINEES,
                payload: response.data.content,
            });
        } catch (e) {
            dispatch(errorSnackbar(e));
        }
    }
};

export const getActivityDescriptives = () => async (dispatch) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/descriptives/page`, {
            "b": {
            }
        }
        );
        dispatch({
            type: GET_ACTIVITY_DESCRIPTIVES,
            payload: response.data,
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getActivityPacketChart = (userPhone, timeMS, type) => async (dispatch) => {
    try {
        dispatch({
            type: BEGIN_LOAD_ACTIVITY_PACKET_CHART,
            payload: false
        })
        const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activityPacketCharts/chart?userPhone=${userPhone}&timeMS=${timeMS}&type=${type}`, {
        });
        dispatch({
            type: LOAD_ACTIVITY_PACKET_CHART,
            payload: response.data,
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getActivityPacketBill = (payload) => async (dispatch) => {
    dispatch({
        type: LOAD_ACTIVITY_PACKET_BILL,
        payload: payload,
    });
};

export const buyActivityPacket = (payload) => async (dispatch) => {
    dispatch({
        type: BUY_ACTIVITY_PACKET,
        payload: payload,
    });
};
