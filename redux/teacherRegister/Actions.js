import axios from "axios";
import {reset} from "redux-form";
import {enqueueSnackbar, errorSnackbar, loadUser} from "../user";

export const UPDATE_FIELD = "teacherRegisterUpdateField";
export const GET_CITIES = 'getCities';
export const GET_AREAS = 'getAreas'

export const teacherRegistrationUpdateField = ({prop, value}) => ({
    type: UPDATE_FIELD,
    payload: {prop, value},
});

export const getCities = (children) => async (dispatch, getState) => {
    try {
        let url = 'https://testapiadmin-2.chista.ir' + `/areas/children/${children}`
        axios.get(url).then(value => {
            if(children !== 0) {
                dispatch(teacherRegistrationUpdateField({prop: "cities", value: value.data}))
            }
            else {
                dispatch(teacherRegistrationUpdateField({prop: "areas", value: value.data}))
            }
        })
    }
    catch (e) {
        dispatch(errorSnackbar(e));
    }
}

// export const getList = (forceOffset) => async (dispatch, getState) => {
//     try {
//         const {
//             advisers: {offset, list, loadMore, max},
//             filters: {filters},
//         } = getState();

//         const finalOffset = forceOffset === undefined ? offset : forceOffset;

//         if (!loadMore) dispatch({type: START_FETCH, payload: {}});

//         let url = `/advisor/search?max=${max}&offset=${finalOffset}&orders=261&sorts=false&active=true`;
//         for (let [key, value] of Object.entries(filters)) {
//             if (value !== null && value !== "" && value !== 0) {
//                 url += `&${key}=${value}`;
//             }
//         }
//         //do filters after filters done <**backFlag**>
//         const response = await axios.get(url);

//         //handle pagination
//         let tempList =
//             finalOffset > 0
//                 ? [...list, ...response.data.result]
//                 : response.data.result;
//         dispatch({
//             type: LIST_LOAD,
//             payload: {
//                 list: tempList,
//                 total: response.data.total,
//                 offset: response.data.offset,
//             },
//         });
//     } catch (e) {
//         dispatch(errorSnackbar(e));
//     }
// };
// export const getSimilaresList = (slug, categoryId) => async (dispatch) => {
//     try {
//         let url = `/advisor/search?similar=${slug}&orders=260,261&sorts=asc,asc&categoryIds=${categoryId}`;

//         const response = await axios.get(url);
//         dispatch({
//             type: SMILARS_LIST_LOAD,
//             payload: {similars: response.data.result.slice(0, 6)},
//         });
//     } catch (e) {
//         dispatch(errorSnackbar(e));
//     }
// };

// export const getAdviser = (slug) => async (dispatch) => {
//     try {
//         const response = await axios.get(`/advisor/view?id=${slug}`);

//         dispatch({type: LOAD_ADVISER, payload: {adviser: response.data}});
//     } catch (e) {
//         dispatch(errorSnackbar(e));
//     }
// };

// export const addOrRemoveFav = (slug, userInfo = null) => async (dispatch, getState) => {
//     try {
//         const { advisers: {adviser} } = getState();
//         dispatch(advisersUpdateField({prop: "favoriteLoad", value: true}));

//         userInfo !== null && dispatch(getContactDetail({...userInfo, favorite: !userInfo.favorite}))

//         if (adviser !== null) {
//             let advTemp = adviser;
//             advTemp.favorite = !adviser.favorite;
//             dispatch(advisersUpdateField({prop: "adviser", value: advTemp}));
//             dispatch(advisersUpdateField({prop: "favoriteLoad", value: false}));
//         }
//     } catch (e) {
//         dispatch(advisersUpdateField({prop: "favoriteLoad", value: false}));
//         dispatch(errorSnackbar(e));
//     }
// };

// export const share = (slug) => async (dispatch) => {
//     try {
//         dispatch(advisersUpdateField({prop: "shareLoad", value: true}));
//         const response = await axios.get(`/advisor/share?id=${slug}`);
//         copy(response.message);
//         dispatch(
//             dispatch(
//                 enqueueSnackbar({
//                     message: "لینک اشتراک گذاری در کلیپ برد کپی شد",
//                 })
//             )
//         );
//         dispatch(advisersUpdateField({prop: "shareLoad", value: false}));
//     } catch (e) {
//         dispatch(errorSnackbar(e));
//         dispatch(advisersUpdateField({prop: "shareLoad", value: false}));
//     }
// };

// export const registerAdviserVerify = (data) => async (dispatch) => {
//     try {
//         dispatch(advisersUpdateField({prop: "registerLoad", value: true}));
//         const response = await axios.post(`/advisor/verify`, data);

//         dispatch(advisersUpdateField({prop: "registerStep", value: 2}));
//         dispatch(advisersUpdateField({prop: "registerLoad", value: false}));
//     } catch (e) {
//         dispatch(errorSnackbar(e));
//         dispatch(advisersUpdateField({prop: "registerLoad", value: false}));
//     }
// };

// export const registerAdviserStep2 = () => async (dispatch) => {
//     try {
//         dispatch(advisersUpdateField({prop: "registerLoad", value: true}));
//         dispatch(advisersUpdateField({prop: "registerStep", value: 3}));
//         dispatch(advisersUpdateField({prop: "registerLoad", value: false}));
//     } catch (e) {
//         dispatch(errorSnackbar(e));
//         dispatch(advisersUpdateField({prop: "registerLoad", value: false}));
//     }
// };

// export const registerAdviserReset = () => async (dispatch) => {
//     try {
//         dispatch(advisersUpdateField({prop: "registerLoad", value: true}));
//         dispatch(advisersUpdateField({prop: "registerStep", value: 1}));
//         dispatch(reset("registerAdviserForm"));
//         dispatch(advisersUpdateField({prop: "registerLoad", value: false}));
//     } catch (e) {
//         dispatch(errorSnackbar(e));
//         dispatch(advisersUpdateField({prop: "registerLoad", value: false}));
//     }
// };
// export const registerAdviserStep3 = () => async (dispatch) => {
//     try {
//         dispatch(advisersUpdateField({prop: "registerLoad", value: true}));
//         dispatch(advisersUpdateField({prop: "registerStep", value: 4}));
//         dispatch(advisersUpdateField({prop: "registerLoad", value: false}));
//     } catch (e) {
//         dispatch(errorSnackbar(e));
//         dispatch(advisersUpdateField({prop: "registerLoad", value: false}));
//     }
// };
// export const registerAdviserInsert = (data) => async (dispatch) => {
//     try {
//         dispatch(advisersUpdateField({prop: "registerLoad", value: true}));
//         const response = await axios.post(`/advisor/insert`, data);
//         dispatch(reset("registerAdviserForm"));
//         dispatch(advisersUpdateField({prop: "registerStep", value: 1}));
//         dispatch(advisersUpdateField({prop: "registerLoad", value: false}));
//         dispatch(loadUser());
//     } catch (e) {
//         dispatch(errorSnackbar(e));
//         dispatch(advisersUpdateField({prop: "registerLoad", value: false}));
//     }
// };

// export const getMore = () => (dispatch) => {
//     dispatch({type: LOAD_MORE});
//     dispatch(getList());
// };
// export const hasMore = () => (getState) => {
//     const { advisers: {total, offset, max} } = getState();
//     return total / max > offset + 1;
// };
