import {
    GET_OSTAD_ACTIVITY_LIST,
    LOAD_ACTIVITY_PACKETS,
    LOAD_ACTIVITY_ACTIVE_PACKET,
    LOAD_ACTIVITY_PACKET_BILL,
    BUY_ACTIVITY_PACKET,
    LOAD_ACTIVITY_PACKET_CHART,
    BEGIN_LOAD_ACTIVITY_PACKET_CHART,
    SET_OSTAD_ACTIVITY_LIST_LOADING,
    ACTIVE_ACTIVITY,
    GET_ACTIVITY_DESCRIPTIVES,
    GET_ACTIVITY_DETAILS,
    GET_ACTIVITY_EXAMINEES,
    GET_ACTIVITY_ANSWERS_BY_EXAMINEE,
    SET_USER_ACTIVITY_LIST_LOADING,
    GET_USER_ACTIVITY_LIST
} from "./Actions";

const defaultState = {
    ostadActivities: null,
    userActivities: null,
    activityPackets: null,
    activityPacketBill: null,
    currentActivityPacket: null,
    activityPacketBuyResponse: null,
    activityPacketChart: null,
    activityUsageLoaded: false,
    ostadActivityListLoading: false,
    activeActivityResponse: null,
    activityDescriptives: null,
    activityDetails: null,
    activityExaminees: null,
    activityAnswers: null,
    userActivityListLoading: false,
    activityActivePacket: null,
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTIVE_ACTIVITY:
            let tmp = state.ostadActivities.content
            let index = tmp.findIndex(x=>x.id == payload.id);
            tmp[index].active = payload.active

            return {
                ...state,
                ostadActivities: {
                    ...state.ostadActivities,
                    content: [
                        ...tmp
                    ]
                },
                activeActivityResponse: null
            }
        case GET_ACTIVITY_DETAILS:
            return {
                ...state,
                activityDetails: payload
            }
        case GET_ACTIVITY_EXAMINEES:
            return {
                ...state,
                activityExaminees: payload
            }
        case GET_ACTIVITY_ANSWERS_BY_EXAMINEE:
            return {
                ...state,
                activityAnswers: payload
            }
        case SET_OSTAD_ACTIVITY_LIST_LOADING:
            return {
                ...state,
                ostadActivityListLoading: true,
                activeActivityResponse: null
            }
        case SET_USER_ACTIVITY_LIST_LOADING:
            return {
                ...state,
                userActivityListLoading: true,
                activeActivityResponse: null
            }
        case GET_ACTIVITY_DESCRIPTIVES:
            return {
                ...state,
                activityDescriptives: payload.content,
            }
        case GET_OSTAD_ACTIVITY_LIST:
            return {
                ...state,
                ostadActivities: (payload.isServer || payload.resetFirst) ? payload : {
                    content: [
                        ...state.ostadActivities.content,
                        ...payload.content
                    ],
                    pageNumber: payload.pageNumber,
                    pageSize: payload.pageSize,
                    totalElements: payload.totalElements,
                    totalPages: payload.totalPages
                },
                ostadActivityListLoading: false,
                activeActivityResponse: null
            };
        case GET_USER_ACTIVITY_LIST:
            return {
                ...state,
                userActivities: (payload.isServer || payload.resetFirst) ? payload : {
                    content: [
                        ...state.userActivities.content,
                        ...payload.content
                    ],
                    pageNumber: payload.pageNumber,
                    pageSize: payload.pageSize,
                    totalElements: payload.totalElements,
                    totalPages: payload.totalPages
                },
                userActivityListLoading: false,
                activeActivityResponse: null
            };
        case BEGIN_LOAD_ACTIVITY_PACKET_CHART:
            return {
                ...state,
                activityUsageLoaded: false
            }
        case LOAD_ACTIVITY_PACKET_CHART:
            return {
                ...state,
                activityPacketChart: payload,
                activityUsageLoaded: true
            }
        case LOAD_ACTIVITY_PACKETS:
            return {
                ...state,
                activityPackets: payload,
                currentActivityPacket: payload.content[0]
            }
        case LOAD_ACTIVITY_ACTIVE_PACKET:
            return {
                ...state,
                activityActivePacket: payload
            }
        case LOAD_ACTIVITY_PACKET_BILL:
            return {
                ...state,
                activityPacketBill: payload
            }
        case BUY_ACTIVITY_PACKET:
            return {
                ...state,
                activityPacketBuyResponse: payload,
            }
        default:
            return state;
    }
};