import {
  UPDATE_FIELD,
  INITIABLE_SUCCESS,
} from "./Actions"

const defaultState = {
  load: false,
  openVideoChat: false,
  openIncreaseCredit: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      }
    case INITIABLE_SUCCESS:
      return {
        ...state,
        load: false,
        openInitiable: false,
        username: action.payload.username,
      }

    default:
      return state
  }
}
