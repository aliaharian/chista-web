import axios from 'axios';
import { fetch } from '../../src/utilities/request';

export const UPDATE_FIELD = "categoryUpdateField";
export const LOAD_CATEGORY_LIST = "load_category_list";
export const LOAD_CATEGORY_CHILDREN = "load_category_children";
export const COURSE_LIST = "course_list";
export const PUBLISHER_LIST = "publisher_list";

export const categoryUpdateField = ({ prop, value }) => ({
    type: UPDATE_FIELD,
    payload: { prop, value },
});

export const getCategoryList = (parentId = -1, item = null) => async (dispatch) => {
    
    let url = process.env.REACT_APP_NODE_CONTROLLER_BASE_URL + process.env.REACT_APP_FETCH_NODES_CHILDREN_WITH_PARENTID.replace('PARENTID', parentId);
    
    const { data } = await fetch(url,'GET', dispatch);

    if(item !== null) {
        if(item.type === process.env.REACT_APP_CATEGORY_TYPE) {
            if(item.qdrs?.length > 0) {
                dispatch({
                    type: PUBLISHER_LIST,
                    payload: item.qdrs
                });
            }
        }
    }
    if(data[0].type === process.env.REACT_APP_COURSE_TYPE) {
        dispatch({
            type: COURSE_LIST,
            payload: data
        });
    }
    else {
        if(parentId === -1) {
            dispatch({
                type: LOAD_CATEGORY_LIST,
                payload: data
            });
        }
        else {
            dispatch({
                type: LOAD_CATEGORY_CHILDREN,
                payload: data
            }); 
        }
    }
};

export const getAllCategory = (filter, pageSize, pageNumber, onSuccess) => async (dispatch, getState) => {
    try {
        const {
            category: {courses},
        } = getState();
        let url = process.env.REACT_APP_NODE_CONTROLLER_BASE_URL + process.env.REACT_APP_ALL_GET_NODES;
        let data = {
            "filter": filter,
            "pageNumber": pageNumber,
            "pageSize": pageSize
        }
        const response = await axios.post(url, data)
        dispatch({
            type: COURSE_LIST,
            payload: [...courses, ...response.data.content]
        });
        onSuccess && onSuccess([...courses, ...response.data.content])
    }
    catch(e) {
        console.log(e)
    }
}

export const getCategoryNoFilter = (pageSize, pageNumber) => async (dispatch) => {
    try {
        let url = process.env.REACT_APP_NODE_CONTROLLER_BASE_URL + process.env.REACT_APP_ALL_GET_NODES;
        let data = {
            "filter": "type=COURSE",
            "pageNumber": pageNumber,
            "pageSize": pageSize
        }
        const response = await axios.post(url, data)
        dispatch({
            type: COURSE_LIST,
            payload: [...response.data.content]
        });
    }
    catch(e) {
        console.log(e)
    }
}

export const getCategoriesWithParentId = (parentId, pageSize, pageNumber, wantedType) => async (dispatch) => {
    try {
        let url = process.env.REACT_APP_NODE_CONTROLLER_BASE_URL + process.env.REACT_APP_GET_NODES_WITH_PARENT_ID + `${parentId}/${wantedType}`;
        let data = {
            "pageNumber": pageNumber,
            "pageSize": pageSize
        }
        const response = await axios.post(url, data)
        dispatch({
            type: COURSE_LIST,
            payload: [...response.data.content]
        });
    }
    catch(e) {
        console.log(e)
    }
}

export const getCategoriesWithParentIdConcat = (parentId, pageSize, pageNumber, wantedType, onSuccess) => async (dispatch, getState) => {
    try {
        const {
            category: {courses},
        } = getState();
        let url = process.env.REACT_APP_NODE_CONTROLLER_BASE_URL + process.env.REACT_APP_GET_NODES_WITH_PARENT_ID + `${parentId}/${wantedType}`;
        let data = {
            "pageNumber": pageNumber,
            "pageSize": pageSize
        }
        const response = await axios.post(url, data)
        console.log('sam', response)
        dispatch({
            type: COURSE_LIST,
            payload: [...courses, ...response.data.content]
        });
        onSuccess && onSuccess([...courses, ...response.data.content])
    }
    catch(e) {
        console.log(e)
    }
}