import axios from "axios";
import { numberFormat, transform } from "../../src/utilities";
import { getTestList } from "../tests";
import {errorSnackbar} from "../user";

export const UPDATE_FIELD = "filtersUpdateField";
export const LOAD_CATEGORY_LIST = "filtersLoadCategoryList";
export const START_FETCH_CATEGORY_LIST = "filtersStartFetchCategoryList";
export const START_FETCH_CITY_LIST = "filtersStartFetchCityList";
export const LOAD_CITY_LIST = "filtersLoadCityList";
export const START_FETCH_PROVINCE_LIST = "filtersStartFetchProvinceList";
export const LOAD_PROVINCE_LIST = "filtersLoadProvinceList";
export const FILTER_LIST = "filtersListFilter";
export const START_FETCH_PRICE_LIST = "filtersStartFetchPriceList";
export const LOAD_PRICE_LIST = "filtersLoadPriceList";
export const START_FETCH_AGE_LIST = "filtersStartFetchAgeList";
export const LOAD_AGE_LIST = "filtersLoadAgeList";
export const START_FETCH_SUB_CATEGORY_LIST = "filtersStartFetchSubCategoryList";
export const LOAD_SUB_CATEGORY_LIST = "filtersLoadSubCategoryList";
export const START_FETCH_TAGS_LIST = "filtersStartFetchTagsList";
export const LOAD_TAGS_LIST = "filtersLoadTagsList";

export const filtersUpdateField = ({ prop, value }) => ({
  type: UPDATE_FIELD,
  payload: { prop, value },
});

export const getProvinceList = () => async (dispatch) => {
  try {
    dispatch({ type: START_FETCH_PROVINCE_LIST });

    const response = await axios.get(`/area/summary`);

    dispatch({
      type: LOAD_PROVINCE_LIST,
      payload: { provinceList: response.data },
    });
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};

export const getCityList = (parentId = null) => async (dispatch) => {
  try {
    dispatch({ type: START_FETCH_CITY_LIST });

    let data;
    if (parentId) {
      const response = await axios.get(`/area/summary?parentId=${parentId}`);
      data = response.data;
    }

    dispatch({ type: LOAD_CITY_LIST, payload: { cityList: data } });
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};

export const getPriceList = () => async (dispatch) => {
  try {
    dispatch({ type: START_FETCH_PRICE_LIST });

    const response = await axios.get(`/price/summary`);

    dispatch({ type: LOAD_PRICE_LIST, payload: { priceList: response.data } });
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};

export const getCategoryList = () => async (dispatch) => {
  try {
    dispatch({ type: START_FETCH_CATEGORY_LIST });

    const response = await axios.get(`/category/summary?loadChild=true`);

    dispatch({
      type: LOAD_CATEGORY_LIST,
      payload: { categoryList: response.data },
    });
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};

export const getSubCategoryList = (parentId) => async (dispatch) => {
  try {
    dispatch({ type: START_FETCH_SUB_CATEGORY_LIST });
    const response = await axios.get(
      `/category/summary?loadChild=true&parentId=${parentId}`
    );
    dispatch({
      type: LOAD_SUB_CATEGORY_LIST,
      payload: { subCategoryList: response.data },
    });
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};

export const getTagsList = (parentId, selectedTags = null) => async (dispatch) => {
  try {
    dispatch({ type: START_FETCH_TAGS_LIST });

    if (!selectedTags) {
      const response = await axios.get(
        `/category/summary?parentId=${parentId}`
      );
      dispatch({ type: LOAD_TAGS_LIST, payload: { tagsList: response.data } });
    } else if ((selectedTags, parentId)) {
      const response = await axios.get(
        `/category/summary?parentId=${parentId}`
      );

      dispatch({ type: LOAD_TAGS_LIST, payload: { tagsList: [selectedTags] } });
    } else {
      dispatch({
        type: LOAD_TAGS_LIST,
        payload: { tagsList: transform.objectToArray(selectedTags) },
      });
    }
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};

export const getAgeList = () => async (dispatch) => {
  try {
    dispatch({ type: START_FETCH_AGE_LIST });

    const response = await axios.get(`/advisor/age `);

    dispatch({
      type: LOAD_AGE_LIST,
      payload: {
        ageList: response.data.map((item) => ({
          value: numberFormat.toPersianDigits(item.value) + " سال",
          key: item.key,
        })),
      },
    });
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};

export const filterList = (changedFilters) => async (dispatch, getState) => {
  try {
    const { filters: { filters } } = getState();

    dispatch({
      type: FILTER_LIST,
      payload: { filters: { ...filters, ...changedFilters } },
    });
    dispatch(getTestList(0, ''));
    //dispatch(getList(0));
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};
