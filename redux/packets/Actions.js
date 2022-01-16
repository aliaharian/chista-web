import axios from "axios";
import { errorSnackbar } from "../user";

export const LOAD_USAGE_LIST = "loadUsageList";
export const LOAD_PUP_LIST = "getPup";
export const LOAD_ACTIVITY_PUP_LIST = "getActivityPup"
export const LOAD_PID_LIST = "getPid";
export const UPDATE_FIELD = "packetUpdateField";
export const PRE_FACTOR = "preFactor";
export const INCREASE_CREDIT = "increaseCredit";
export const GET_PACKET_FACTOR = "getPacketFactor";
export const BUY_PACKET = "buyPacket";
export const SET_CURRENT_PACKET = "setCurrentPacket";
export const BEGIN_LOAD_USAGE_LIST = "beginLoadUsageList";
export const LOAD_PACKET_LIST = "loadPacketList";

export const packetUpdateField = ({ prop, value, upgrade = false, extend = false, type = 'classPacket' }) => (
    {
        type: UPDATE_FIELD,
        payload: { prop, value, upgrade, extend, type },
    }
);

export const setCurrentPacket = (packet) => (
    {
        type: SET_CURRENT_PACKET,
        payload: packet,
    }
);

export const getPup = (server = false, payload = null) => async (dispatch) => {
    if (server) {
        dispatch({
            type: LOAD_PUP_LIST,
            payload: payload,
        });
    }
    else {
        let url = `/pup/all`
        try {
            const response = await axios.get(url);
            dispatch({
                type: LOAD_PUP_LIST,
                payload: response.data,
            });
        } catch (e) {
            dispatch(errorSnackbar(e));
        }
    }
};

export const getActivityPup = (server = false, payload = null) => async (dispatch) => {
    if (server) {
        dispatch({
            type: LOAD_ACTIVITY_PUP_LIST,
            payload: payload,
        });
    }
    else {
        let url = `${process.env.REACT_APP_ACTIVITY_URL}/activityPacketUserPrices/page`
        try {
            const response = await axios.post(
                url,
                {
                    "pageSize": 1000
                }
            );
            dispatch({
                type: LOAD_ACTIVITY_PUP_LIST,
                payload: response.data.content,
            });
        } catch (e) {
            dispatch(errorSnackbar(e));
        }
    }
};

export const preFactor = (payload) => async (dispatch) => {
    dispatch({
        type: PRE_FACTOR,
        payload: payload,
    });
};

export const increaseCredit = (wallet, price, pup, pid, prevId = 0, type = 'buy', packetType) => async (dispatch) => {
    let url = `${process.env.REACT_APP_PAY_BASE_URL}/transaction/increasePay`
    try {
        const response = await axios.post(
            url, {
            amount: price,
            serviceId: process.env.REACT_APP_SERVICE_ID,
            wallet: wallet,
            callback: `${process.env.REACT_APP_CALLBACK_BANK}/profile/dashboard/packets?pup=${pup}&pid=${pid}&prevId=${prevId}&type=${type}&packetType=${packetType}`,
            transactionType: process.env.REACT_APP_TRANSACTION_TYPE,
            appId: process.env.REACT_APP_APP_ID,
            bankId: process.env.REACT_APP_BANK_ID
        }
        );
        dispatch({
            type: INCREASE_CREDIT,
            payload: response.data,
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getPacketFactor = (id) => async (dispatch) => {
    let url = `${process.env.REACT_APP_PAY_BASE_URL}/transaction/getFactor/${id}`
    try {
        const response = await axios.get(url);
        dispatch({
            type: GET_PACKET_FACTOR,
            payload: response.data,
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const buyPacket = (pup, pid, act = 'buy', id = 0, server = false, payload = null) => async (dispatch) => {
    if (server) {
        dispatch({
            type: BUY_PACKET,
            payload: payload,
        });
    } else {
        let url = `/userPacket/${act}`
        try {
            const response = await axios.post(
                url,
                {
                    id: id,
                    pup: { id: pup },
                    pid: { id: pid },
                }
            );
            dispatch({
                type: BUY_PACKET,
                payload: response.data,
            });
        } catch (e) {
            dispatch(errorSnackbar(e));
        }
    }
};

export const getPid = (server = false, payload = null) => async (dispatch) => {
    if (server) {
        dispatch({
            type: LOAD_PID_LIST,
            payload: payload,
        });
    }
    else {
        let url = `/pid/all`
        try {
            const response = await axios.get(url);
            dispatch({
                type: LOAD_PID_LIST,
                payload: response.data,
            });
        } catch (e) {
            dispatch(errorSnackbar(e));
        }
    }
};

export const getUsageList = (day = true, time) => async (dispatch) => {
    dispatch({
        type: BEGIN_LOAD_USAGE_LIST,
    });
    let url = `/creatorUsage/all?day=${day}&time=${time}`
    try {
        const response = await axios.get(url);
        dispatch({
            type: LOAD_USAGE_LIST,
            payload: response.data,
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const getActivePacket = () => async (dispatch) => {
    let url = `/userPacket/all`
    try {
        const response = await axios.get(
            url
        );
        dispatch({
            type: LOAD_PACKET_LIST,
            payload: response.data,
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

