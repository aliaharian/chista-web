import axios from "axios"
import { transform } from '../../src/utilities';
import { errorSnackbar, showMessage } from "../user";
import {authUpdateField} from '../auth';

export const LOAD_GROUP = "loadGroup";
export const UPDATE_FIELD = "groupUpdateField";
export const AUTH_SUCCESS = "authSuccess";

export const componentsUpdateField = ({ prop, value }) => ({
    type: UPDATE_FIELD,
    payload: { prop, value },
})

export const getGroupInfo = (slug) => async (dispatch) => {
    try {
        const response = await axios.get(`/group/view?shareKey=${slug}`);
        dispatch({ type: LOAD_GROUP, payload: { error: null, group: response.data } });
    } catch (e) {
        dispatch({ type: LOAD_GROUP, payload: { group: null, error: e.response } });
        dispatch(errorSnackbar(e));
    }
};
export const joinToClass = (slug, type = 'shareKey', target = '_self') => async (dispatch) => {
    try {
        const browserVersionSupport = transform.getBrowserVersionForWebrtc();
        if (!browserVersionSupport) {
            dispatch(showMessage('نسخه مرورگر شما قدیمی است، برای استفاده از چیستا میبایست آن را بروز نمایید.'))
            dispatch(componentsUpdateField({ prop: "openClass", value: false }));
            dispatch(componentsUpdateField({ prop: "load", value: false }))
            dispatch(authUpdateField({prop: "load", value: false}));
        } else if (browserVersionSupport === 'IE' || browserVersionSupport === 'Safari') {
            dispatch(showMessage('چیستا در مرورگر شما قابل اجرا نیست، برای ورود به کلاس از نسخه های بروز شده کروم، اپرا یا فایر فاکس استفاده نمایید.'))
            dispatch(componentsUpdateField({ prop: "openClass", value: false }));
            dispatch(componentsUpdateField({ prop: "load", value: false }));
            dispatch(authUpdateField({prop: "load", value: false}));
        } else {
            let param = `${type}=${slug}&trace=true`;
            const response = await axios.get(`/group/join?${param}`);
            const url = `${process.env.REACT_APP_CHAT_URL}?chat_id=${response.data.chatGroupId}&type=class`;

            dispatch(componentsUpdateField({ prop: "load", value: false }))
            dispatch(componentsUpdateField({ prop: "endClassModal", value: false }))
            dispatch(componentsUpdateField({ prop: "currentClassId", value: null }))

            window.open(url, target)
        }
    } catch (e) {
        if (e.response.data.errorCode == 2047 || e.response.data.errorCode == 2046) {
            dispatch(componentsUpdateField({ prop: "endClassModal", value: true }))
            dispatch(componentsUpdateField({ prop: "currentClassId", value: e?.response?.data?.info }))
        } else {
            dispatch(errorSnackbar(e));
        }
        dispatch(componentsUpdateField({ prop: "openClass", value: false }));
        dispatch(componentsUpdateField({ prop: "load", value: false }))
    }
};