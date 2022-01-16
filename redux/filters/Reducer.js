import {
  UPDATE_FIELD,
  START_FETCH_CATEGORY_LIST,
  LOAD_CATEGORY_LIST,
  START_FETCH_CITY_LIST,
  LOAD_CITY_LIST, FILTER_LIST,
  START_FETCH_PRICE_LIST, LOAD_PRICE_LIST, LOAD_AGE_LIST, START_FETCH_AGE_LIST,START_FETCH_PROVINCE_LIST,LOAD_PROVINCE_LIST,
  START_FETCH_SUB_CATEGORY_LIST,LOAD_SUB_CATEGORY_LIST,START_FETCH_TAGS_LIST,LOAD_TAGS_LIST
} from "./Actions"

const defaultState = {
  categoryList:null,
  categoryListLoad:false,
  subCategoryList:null,
  subCategoryListLoad:false,
  tagsList:null,
  tagsListLoad:false,
  cityList:null,
  cityListLoad:false,
  provinceList:null,
  provinceListLoad:false,
  priceList:null,
  priceListLoad:false,
  ageList:null,
  ageListLoad:false,
  filters:{
    "key":null,
    "cat1Ids":null,
    "cat2Ids":null,
    "cat3Ids":null,
    "courseIds":null,
    "provinceId":null,
    "cityId":null,
    "fromPrice":null,
    "toPrice":null,
    "fromAge":null,
    "toAge":null,
    "male":'',
    "state":0,
   },
  search:"",
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      }
    case START_FETCH_CATEGORY_LIST:
      return {
        ...state,
        categoryListLoad:true
      }
    case LOAD_CATEGORY_LIST:
      return {
        ...state,
        categoryListLoad:false,
        categoryList: action.payload.categoryList
      }
    case START_FETCH_CITY_LIST:
      return {
        ...state,
        cityListLoad:true
      }
    case LOAD_CITY_LIST:
      return {
        ...state,
        cityListLoad:false,
        cityList: action.payload.cityList
      }
    case START_FETCH_PROVINCE_LIST:
      return {
        ...state,
        provinceListLoad:true
      }
    case LOAD_PROVINCE_LIST:
      return {
        ...state,
        provinceListLoad:false,
        provinceList: action.payload.provinceList
      }
    case START_FETCH_PRICE_LIST:
      return {
        ...state,
        cityListLoad:true
      }
    case LOAD_PRICE_LIST:
      return {
        ...state,
        priceListLoad:false,
        priceList: action.payload.priceList
      }
    case START_FETCH_AGE_LIST:
      return {
        ...state,
        ageListLoad:true
      }
    case LOAD_AGE_LIST:
      return {
        ...state,
        ageListLoad:false,
        ageList: action.payload.ageList
      }
    case START_FETCH_TAGS_LIST:
      return {
        ...state,
        tagsListLoad:true
      }
    case LOAD_TAGS_LIST:
      return {
        ...state,
        tagsListLoad:false,
        tagsList: action.payload.tagsList
      }
    case START_FETCH_SUB_CATEGORY_LIST:
      return {
        ...state,
        subCategoryListLoad:true
      }
    case LOAD_SUB_CATEGORY_LIST:
      return {
        ...state,
        subCategoryListLoad:false,
        subCategoryList: action.payload.subCategoryList
      }
    case FILTER_LIST:
      return {
        ...state,
        filters: action.payload.filters
      }

    default:
      return state
  }
}
