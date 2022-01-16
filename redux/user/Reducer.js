import {
    UPDATE_FIELD,
    LOAD_SUCCESS,
    START_FETCH, ENQUEUE_SNACKBAR, REMOVE_SNACKBAR, LOAD_ADVISER_SUCCESS, ENQUEUE_TEXT
} from "./Actions"

const defaultState = {
    load: false,
    notifications: [],
    user: null,
    adviser: null,
    errorText: '',
    userDetail:null
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_FIELD:
            return {
                ...state,
                [action.payload.prop]: action.payload.value,
            }
        case START_FETCH:
            return {
                ...state,
                load: true
            }
        case LOAD_SUCCESS:
            return {
                ...state,
                load: false,
                user: action.payload.user,
                userDetail: action.payload.userDetail
            }
        case LOAD_ADVISER_SUCCESS:
            return {
                ...state,
                load: false,
                adviser: action.payload.adviser
            }
        case ENQUEUE_SNACKBAR:
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    {
                        ...action.notification,
                    },
                ],
            }
        case ENQUEUE_TEXT:
            return {
                ...state,
                errorText: action.message
            }
        case REMOVE_SNACKBAR:
            return {
                ...state,
                notifications: state.notifications.filter(
                    (notification) => notification.key !== action.key
                ),
            }
            
        default:
            return state
    }
}
