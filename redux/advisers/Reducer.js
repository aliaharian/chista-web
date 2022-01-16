import {
  UPDATE_FIELD,
  LIST_LOAD,
  SMILARS_LIST_LOAD,
  START_FETCH,
  LOAD_MORE,
  LOAD_ADVISER,
  REGISTER_ADVISER,
    RESET_REGISTER_ADVISER
} from "./Actions";

const defaultState = {
  load: false,
  shareLoad: false,
  favoriteLoad: false,
  loadMore: false,
  list: null,
  similars: null,
  adviser:null,
  offset:0,
  max:process.env.REACT_APP_MAX_RESULT_SEARCH,
  total:0,
  registerLoad:false,
  registerData:null,
  registerStep:1,

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
    case LIST_LOAD:
      return {
        ...state,
        load:false,
        loadMore:false,
        list: action.payload.list,
        total: action.payload.total,
      }
    case SMILARS_LIST_LOAD:
      return {
        ...state,
        similars: action.payload.similars,
      }
    case LOAD_MORE:
      return {
        ...state,
        loadMore:true,
        offset: ++state.offset
      }
    case LOAD_ADVISER:
      return {
        ...state,
        load:false,
        adviser: action.payload.adviser,
      }
    case REGISTER_ADVISER:
      return {
        ...state,
        registerData:action.payload.data,
        registerStep: action.payload.registerStep,
        registerLoad:false,
      }
    case RESET_REGISTER_ADVISER:
      return {
        ...state,
        registerLoad:false,
        registerData:null,
        registerStep:1,
      }
      
    default:
      return state
  }
}
