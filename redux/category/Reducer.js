import {
    LOAD_CATEGORY_LIST,
    LOAD_CATEGORY_CHILDREN,
    COURSE_LIST,
    PUBLISHER_LIST,
    UPDATE_FIELD
} from "./Actions";

const defaultState = {
    categories: "",
    courses: [],
    publishers: []
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_FIELD:
            return {
                ...state,
                [action.payload.prop]: action.payload.value,
            }
        case LOAD_CATEGORY_LIST:
            return { 
                ...state, 
                categories: payload,
            };
        case LOAD_CATEGORY_CHILDREN:
            return { 
                ...state,
                categoryChildren: payload,
            }; 
        case COURSE_LIST:
            return {
                ...state,
                courses: payload,
        };   
        case PUBLISHER_LIST:
            return {
                ...state,
                publishers: payload,
        };   
        default:
            return state;
    }
}