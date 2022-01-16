import {
    UPDATE_FIELD,
    GET_CITIES,
    GET_AREAS,
} from "./Actions";
  
const defaultState = {
    cities: [],
    areas: [],
}
  
  export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_FIELD:
            return {
            ...state,
            [action.payload.prop]: action.payload.value,
            }
        case GET_CITIES:
            return {
                ...state,
                cities: action.payload
            }
        case GET_AREAS:
            return {
                ...state,
                areas: action.payload
            }
        default:
            return state
    }
  }
  