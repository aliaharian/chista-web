import {
    LOAD_FAVORITE_LIST,
    LOAD_ADVISEMENT_LIST,
    LOAD_COMMENTS_LIST,
    LOAD_OPINIONS_LIST,
    ADD_REPLAY_OPINION,
    LOAD_CATEGORY_LIST,
    LOAD_COURSE_LIST,
    LOAD_CLASSES_LIST,
    LOAD_CLASS_DETAILS,
    SET_CLASSES_LIST_LOADING,
    SET_CLASSES_LIST_LOADING_PAGINATION,
    LOAD_ALL_CLASSES
} from "./Actions";

const defaultState = {
    favorites: null,
    advisement: {},
    comments: {},
    opinions: {},
    categories: "",
    myClass: {},
    classDetails: {},
    classesListLoading: false,
    classesListLoadingPagination: false,
    allClasses: null
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_FAVORITE_LIST:
            return {
                ...state,
                favorites: {
                    max: payload.max,
                    total: payload.total,
                    offset: payload.offset,
                    result: state.favorites?.result
                        ? [...state.favorites.result, ...payload.result]
                        : payload.result,
                },
            };
        case LOAD_ALL_CLASSES:
            let tmp = [];
            if (action.active) {
                payload.map((item) => {
                    if (item.active) {
                        tmp.push(item)
                    }
                    return item;
                });

            } else {
                tmp = [...payload]
            }
            return {
                ...state,
                allClasses: tmp
            }
        case LOAD_ADVISEMENT_LIST:
            return {
                ...state,
                advisement: {
                    max: payload.max,
                    total: payload.total,
                    offset: payload.offset,
                    info: payload.info,
                    filter: payload.filter || false,
                    filterQuery: payload.filterQuery || "",
                    result:
                        state.advisement?.result && !payload.filter
                            ? [...state.advisement.result, ...payload.result]
                            : payload.result,
                },
            };
        case LOAD_COMMENTS_LIST:
            return {
                ...state,
                comments: {
                    max: payload.max,
                    total: payload.total,
                    offset: payload.offset,
                    filter: payload.filter || false,
                    filterQuery: payload.filterQuery || "",
                    result:
                        state.comments?.result && !payload.filter
                            ? [...state.comments.result, ...payload.result]
                            : payload.result,
                },
            };
        case LOAD_OPINIONS_LIST:
            return {
                ...state,
                opinions: {
                    max: payload.max,
                    total: payload.total,
                    offset: payload.offset,
                    filter: payload.filter || false,
                    filterQuery: payload.filterQuery || "",
                    result:
                        state.opinions?.result && !payload.filter
                            ? [...state.opinions.result, ...payload.result]
                            : payload.result,
                },
            };
        case ADD_REPLAY_OPINION:
            const newRes = [...state.opinions.result];
            newRes[payload.index] = {
                ...state.opinions.result[payload.index],
                replied: true,
                sortedReplies: [
                    {
                        id: payload.id,
                        comment: payload.textAreaValue,
                        createdTime: payload.timestamp,
                        userFullName: payload.userFullName,
                    },
                ],
            };
            return {
                ...state,
                opinions: {
                    result: newRes,
                },
            };
        case LOAD_CATEGORY_LIST:
            console.log("LOAD_CATEGORY_LIST");
            return {
                ...state,
                categories: payload,
            };
        case LOAD_COURSE_LIST:
            return {
                ...state,
                courses: payload,
            };
        case SET_CLASSES_LIST_LOADING:
            return {
                ...state,
                classesListLoading: true
            }
        case SET_CLASSES_LIST_LOADING_PAGINATION:
            return {
                ...state,
                classesListLoadingPagination: true
            }
        case LOAD_CLASSES_LIST:
            return {
                ...state,
                classesListLoading: false,
                classesListLoadingPagination: false,
                myClass: {
                    max: payload.max,
                    total: payload.total,
                    offset: payload.offset,
                    filter: payload.filter || false,
                    empty: payload.empty || false,
                    filterQuery: payload.filterQuery || "",
                    result:
                        state.myClass?.result && !payload.filter
                            ? [...state.myClass.result, ...payload.result]
                            : payload.result,
                },
            };
        case LOAD_CLASS_DETAILS:
            return {
                ...state,
                classDetails: payload,
            };
        default:
            return state;
    }
};
