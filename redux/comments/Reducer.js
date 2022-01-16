import {
  UPDATE_FIELD,
  LIST_LOAD,
  START_FETCH,
  LOAD_MORE,
  LOAD_COMMENT, REASON_LIST_LOAD, START_FETCH_REASON,POST_COMMENT,RESET
} from "./Actions"

const defaultState = {
  load: false,
  loadMore: false,
  loadReason: false,
  list: [],
  scoreBord:null,
  scoreBordLoad:false,
  comment:null,
  reasonSatisfaction:null,
  reasonDissatisfaction:null,
  offset:0,
  max:6,
  total:0
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
        load:true,
        list:null,
        offset: 0,
      }
    case START_FETCH_REASON:
      return {
        ...state,
        loadReason:true,
        reasonSatisfaction:null,
        reasonDissatisfaction:null,
      }
    case REASON_LIST_LOAD:
      return {
        ...state,
        loadReason:false,
        reasonSatisfaction:action.payload.reasonSatisfaction,
        reasonDissatisfaction:action.payload.reasonDissatisfaction,
      }
    case LIST_LOAD:
      return {
        ...state,
        load:false,
        loadMore:false,
        list: action.payload.list,
        total: action.payload.total,
      }
    case LOAD_MORE:
      return {
        ...state,
        loadMore:true,
        offset: ++state.offset
      }
    case LOAD_COMMENT:
      return {
        ...state,
        load:false,
        comment: action.payload.comment,
      }
    case POST_COMMENT:
      return {
        ...state,
        load:false,
        list: [action.payload.comment,...state.list],
      }
    case RESET:
      return defaultState
   
    default:
      return state
  }
}
