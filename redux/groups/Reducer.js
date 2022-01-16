import {
    LOAD_GROUP,
    UPDATE_FIELD,
    AUTH_SUCCESS
} from "./Actions";

const defaultState = {
    load: false,
    group: null,
    openClass: false,
    error: null,
    endClassModal: false,
    currentClassId:null
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_FIELD:
            return {
                ...state,
                [action.payload.prop]: action.payload.value,
            }
        case LOAD_GROUP:
            return {
                ...state,
                load: false,
                endClassModal: false,
                currentClassId:null,
                group: action.payload.group,
                error: action.payload.error
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                load: false,
                openClass: false,
                endClassModal: false,
                currentClassId:null
            }

        default:
            return state
    }
}
