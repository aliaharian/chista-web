import React from "react";
import axios from 'axios';
import {errorSnackbar} from "../user";
import _ from 'lodash';

export const LIST_TESTS_LOAD = "list_tests_load";
export const TEST_FILTER_LIST = "test_filter_list";
export const TEST_ISLOADING = "test_isLoading";

export const getTestList = (forceOffset) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TEST_ISLOADING,
            payload: {
                load: true
            },
        });

        let bodyOptions = null, query = '';
        const {
            tests: { offset },
            tests: { testFilters },
            tests: {load}
        } = getState();
        
        for (let [key, value] of Object.entries(testFilters)) {
            if (value !== null && value !== "" && value !== 0) {
                if(key === 'name') {
                    query +=`& ${key} like ${value}`;
                }
                else if(key === 'answerType') {
                    if(value === false) {
                        query +=`& ${key}= null`;
                    }
                    else {
                        query +=`& ${key} != null`;
                    }
                }
                else if(key === 'qdrIds') {
                    query +=`& ${key} in ${value}`;
                }
                else {
                    query +=`& ${key}= ${value}`;
                }
            }
        }
        bodyOptions = { filter: query };

        let url = process.env.REACT_APP_NODE_CONTROLLER_BASE_URL + process.env.REACT_APP_FETCH_TEST_BANKS;

        const finalOffset = forceOffset === undefined ? offset : forceOffset;

        if(finalOffset > 0) 
            bodyOptions = { filter: query, pageNumber: finalOffset };

        //do filters after filters done <**backFlag**>

        const response = await axios.post(url, bodyOptions);

        setTimeout(() => {
            dispatch({
                type: LIST_TESTS_LOAD,
                payload: {
                    load: false,
                    list: response.data.content,
                    total: response.data.totalElements,
                    offset: response.data.pageNumber,
                    max: response.data.pageSize
                },
            });
        }, 1000);
        //handle pagination
    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};
export const testFilterList = (changedFilters) => async (dispatch, getState) => {
    try { 
      dispatch({
        type: TEST_FILTER_LIST,
        payload: changedFilters,
      });
      
      dispatch(getTestList(0));
    } catch (e) {
      dispatch(errorSnackbar(e));
    }
};