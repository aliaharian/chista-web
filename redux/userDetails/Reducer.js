import {
    LOAD_COMMON_GROUPS,
    USER_INFO,
    LOAD_MEMBER_TRACK, CHANGE_ROLE, CHANGE_ROLE_LOADING
} from "./Actions"

const defaultState = {
    commonGroups: null,
    userInfo: null,
    memberTrack: null,
    changeRoleResponse: null,
    changeRoleLoading: false,
}

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOAD_COMMON_GROUPS:
            return {
                ...state,
                commonGroups: {
                    max: payload.max,
                    total: payload.total,
                    offset: payload.offset,
                    result: payload.offset === 0 ? [...payload.result] : [...state.commonGroups.result, ...payload.result]
                }
            }
        case USER_INFO:
            return {
                ...state,
                userInfo: payload
            }
        case LOAD_MEMBER_TRACK:
            return {
                ...state,
                memberTrack: {
                    max: payload.max,
                    offset: payload.offset,
                    result: payload.offset==0?payload.result:[...state.memberTrack.result , ...payload.result], 
                    total: payload.total
                }
            }
        case CHANGE_ROLE: {
            return {
                ...state,
                changeRoleLoading: false,
                changeRoleResponse: payload,
            }
        }
        case CHANGE_ROLE_LOADING: {
            return {
                ...state,
                changeRoleLoading: true
            }
        }
        
        default:
            return state
    }
}
