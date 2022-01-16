import {
    LOAD_CONTACT_LIST,
    DELETE_CONTACT,
    CHECK_USER_EXIST,
    UPLOAD_CONTACT_EXCEL,
    IMPORT_CONTACTS,
    START_SEARCH_USER_EXIST,
    UPDATE_CONTACT,
    CLEAR_CONTACT_INFO,
    GET_INVITE_LINK, CLEAR_EXCEL_CONTACTS,
    GET_CONTACT_DETAILS, SET_CONTACT_LOADING,
    START_CONTACT_SEARCH,
    SET_CONTACT_SEARCH_LOADING
} from "./Actions";

const defaultState = {
    contact: null,
    deleteResponse: '',
    updateResponse: '',
    importResponse: '',
    contactInfo: '',
    loadUserExist: true,
    excelContacts: [],
    contactDetail: '',
    inviteLink: '',
    contactLoading: true,
    contactSearchLoading: false,
    noContact: false,
    searchMode: false
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case START_CONTACT_SEARCH:
            return {
                ...state,
                searchMode: payload
            };
        case LOAD_CONTACT_LIST:
            if (payload.max) {
                if (payload.result.length === 0) {
                    return {
                        ...state,
                        contact: payload,
                        deleteResponse: '',
                        importResponse: '',
                        updateResponse: '',
                        contactLoading: false,
                        contactSearchLoading: false,
                        noContact: true,

                    };
                } else {
                    let contacts = payload.offset == 0 ? [] : state.contact.result
                    let hasNotDeleted = false

                    payload.result.map((con) => {
                        if (con.deleted === false && con.firstName) {
                            hasNotDeleted = true
                            contacts.push(con)
                        }
                    })
                    return {
                        ...state,
                        contact: {
                            result: contacts,
                            offset: payload.offset,
                            max: payload.max,
                            total: payload.total,
                        },
                        deleteResponse: '',
                        importResponse: '',
                        updateResponse: '',
                        contactLoading: !hasNotDeleted ? false : contacts.length === 0,
                        contactSearchLoading: state.contactSearchLoading == false ? false : !hasNotDeleted ? false : contacts.length === 0,
                        noContact: !hasNotDeleted,
                    };
                }
            } else {
                if (payload.length === 0) {
                    return {
                        ...state,
                        contact: [],
                        deleteResponse: '',
                        importResponse: '',
                        updateResponse: '',
                        contactLoading: false,
                        contactSearchLoading: false,
                        noContact: true,

                    };
                } else {
                    let contacts = []
                    let hasNotDeleted = false

                    payload.map((con) => {
                        if (con.deleted === false && con.firstName) {
                            hasNotDeleted = true
                            contacts.push(con)
                        }
                    })
                    return {
                        ...state,
                        contact: contacts,
                        deleteResponse: '',
                        importResponse: '',
                        updateResponse: '',
                        contactLoading: !hasNotDeleted ? false : contacts.length === 0,
                        contactSearchLoading: state.contactSearchLoading == false ? false : !hasNotDeleted ? false : contacts.length === 0,
                        noContact: !hasNotDeleted,

                    };
                }

            }
        case GET_CONTACT_DETAILS:
            if (payload.onlyRole) {
                return {
                    ...state,
                    contactDetail: {
                        ...contactDetail,
                        memberRoleType: payload.memberRoleType,
                        memberRoleStr: payload.memberRoleStr,
                    }
                };
            } else {
                return {
                    ...state,
                    contactDetail: payload
                };
            }
        case SET_CONTACT_LOADING:
            return {
                ...state,
                contactLoading: true
            };
        case SET_CONTACT_SEARCH_LOADING:
            return {
                ...state,
                contactSearchLoading: true
            };

        case DELETE_CONTACT:
            return {
                ...state,
                deleteResponse: payload,
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                updateResponse: payload,
            };
        case START_SEARCH_USER_EXIST: {
            return {
                ...state,
                loadUserExist: false,
            };
        }
        case CHECK_USER_EXIST:
            return {
                ...state,
                contactInfo: payload,
                loadUserExist: true,

            };
        case CLEAR_CONTACT_INFO:
            return {
                ...state,
                contactInfo: '',

            };
        case CLEAR_EXCEL_CONTACTS:
            return {
                ...state,
                excelContacts: [],

            };
        case GET_INVITE_LINK:
            return {
                ...state,
                inviteLink: payload,

            };
        case UPLOAD_CONTACT_EXCEL:
            return {
                ...state,
                excelContacts: payload,
            };
        case IMPORT_CONTACTS:
            return {
                ...state,
                importResponse: payload,
                excelContacts: []
            };
            
        default:
            return state;
    }
};
