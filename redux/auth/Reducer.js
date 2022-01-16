import {
  UPDATE_FIELD,
  INITIABLE_SUCCESS,
  VERIFY_SUCCESS,
  COMPLETE_SUCCESS,
  EDIT_INFO_SUCCESS,
  RESET,
  DECREMENT_TIMER,
  RESET_TIMER,
} from "./Actions"

const defaultState = {
  load: false,
  username: "",
  openInitiable: false,
  openPacketStatus: false,
  openVerify: false,
  openComplete: false,
  openEditInfo: false,
  timer: 60,
  openCreateClassInGiftMode: false,
  startFree: false,
  createClassModalOpen: false

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
    case VERIFY_SUCCESS:
      return { ...state, load: false, openVerify: false }
    case RESET:
      return { ...defaultState, openInitiable: true }
    case COMPLETE_SUCCESS:
      return { ...state, load: false, openComplete: false }
    case EDIT_INFO_SUCCESS:
      return { ...state, load: false, openEditInfo: false }
    case DECREMENT_TIMER:
      return { ...state, timer: --state.timer }
    case RESET_TIMER:
      return { ...state, timer: defaultState.timer }
    default:
      return state
  }
}
