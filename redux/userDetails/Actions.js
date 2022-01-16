import axios from "axios";
import { getContactDetail, getContactDetailError } from "../contacts";
import { enqueueText, errorSnackbar } from "../user";

export const LOAD_COMMON_GROUPS = "loadCommonGroups";
export const USER_INFO = "userInfo";
export const LOAD_MEMBER_TRACK = "loadMemberTrack";
export const CHANGE_ROLE = "changeRole";
export const CHANGE_ROLE_LOADING = "changeRoleLoading";

export const commonGroups = (id, offset = 0, max = 10 , chatUserId=false) => async (dispatch) => {
    try {
        const response = await axios.get(`group/common?${chatUserId?"chatUserId":"userId"}=${id}&offset=${offset}&max=${max}`);
        dispatch({
            type: LOAD_COMMON_GROUPS,
            payload: response.data
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const memberTrack = (id, max = 5, offset = 0) => async (dispatch) => {
    try {
        const response = await axios.get("member/track?id=" + id + "&max=" + max + "&offset=" + offset);
        dispatch({
            type: LOAD_MEMBER_TRACK,
            payload: response.data
        });
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const changeRole = (members, role, groupId) => async (dispatch) => {
    dispatch({
        type: CHANGE_ROLE_LOADING,
    });
    dispatch(enqueueText(''))
    try {
        const response = await axios.post(`/member/updateRoles/${role}`, {
            id: groupId,
            members: members
        });
        dispatch({
            type: CHANGE_ROLE,
            payload: response.data
        });
        dispatch(userInfo(id, true, groupId));
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};

export const userInfo = (id = 0, member = false, groupId = 0) => async (dispatch) => {
    let url;
    if(member)
        url =  `member/view?id=${id}&groupId=${groupId}`
    else
        url = `user/view?chatUserId=${id}&teacher=true`
    
    try {
        const response = await axios.get(url);
        dispatch(getContactDetail(response.data));
    } catch (e) {
        dispatch(errorSnackbar(e));
        dispatch(getContactDetailError(e));
    }
};

