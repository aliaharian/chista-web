import {
    LOAD_USAGE_LIST,
    UPDATE_FIELD,
    LOAD_PUP_LIST,
    LOAD_PID_LIST,
    PRE_FACTOR,
    INCREASE_CREDIT,
    GET_PACKET_FACTOR,
    BUY_PACKET,
    SET_CURRENT_PACKET,
    BEGIN_LOAD_USAGE_LIST, LOAD_PACKET_LIST,
    LOAD_ACTIVITY_PUP_LIST

} from "./Actions";

const defaultState = {
    packets: null,
    usage: null,
    openSelectUsers: false,
    step: 'selectUsers',
    pup: null,
    activityPup:null,
    pid: null,
    factor: null,
    bank_url: null,
    buy: null,
    upgrade: false,
    extend: false,
    currentPacket: null,
    usageLoaded: false,
    packetType: 'classPacket'
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_FIELD:
            return {
                ...state,
                [action.payload.prop]: action.payload.value,
                upgrade: action.payload.upgrade,
                extend: action.payload.extend,
                packetType: action.payload.type
            }
        case SET_CURRENT_PACKET:
            return {
                ...state,
                currentPacket: payload,
            }

        case LOAD_PUP_LIST:
            return {
                ...state,
                pup: {
                    result: payload,
                },
            };
        case LOAD_ACTIVITY_PUP_LIST:
            return {
                ...state,
                activityPup: {
                    result: payload,
                },
            };
        case PRE_FACTOR:
            return {
                ...state,
                factor: {
                    result: payload,
                },
            };
        case INCREASE_CREDIT:
            return {
                ...state,
                bank_url: {
                    result: payload.message,
                },
            };
        case GET_PACKET_FACTOR:
            return {
                ...state,
                buy: {
                    result: payload,
                },
            };
        case BUY_PACKET:
            return {
                ...state,
                buy: {
                    result: payload,
                },
            };
        case LOAD_PID_LIST:
            return {
                ...state,
                pid: {
                    result: payload,
                },
            };
        case LOAD_USAGE_LIST:
            return {
                ...state,
                usageLoaded: true,
                usage: {
                    result: payload,
                },
            };
        case LOAD_PACKET_LIST:
            return {
                ...state,
                packets: payload,
                currentPacket: payload[0],

            };
        case BEGIN_LOAD_USAGE_LIST:
            return {
                ...state,
                usageLoaded: false
            };

        default:
            return state;
    }
};
