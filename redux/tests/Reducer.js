import {
    LIST_TESTS_LOAD,
    TEST_FILTER_LIST,
    TEST_ISLOADING
  } from "./Actions";
  
  const defaultState = {
    load: false,
    loadMore: false,
    list: [],
    testFilters: { name: null, courseId: null, answerType: false, qdrIds:null },
    total:0,
    offset:0,
    max: 10
  }
  
  export default (state = defaultState, action) => {
    switch (action.type) {
      case TEST_ISLOADING:
        return {
            ...state,
            load: action.payload.load
      }
      case LIST_TESTS_LOAD:
        return {
            ...state,
            load: action.payload.load,
            loadMore:false,
            list: action.payload.offset > 0 ? [...state.list, ...action.payload.list] : action.payload.list,
            total: action.payload.total,
            offset: action.payload.offset,
            max: action.payload.max
      }
      case TEST_FILTER_LIST:
        return {
            ...state,
            testFilters: action.payload
      }
      default:
        return state
    }
  }
  