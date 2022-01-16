import axios from "axios";
import { reset } from "redux-form";
import { errorSnackbar } from "../user";
import { advisersUpdateField } from "../advisers";

export const UPDATE_FIELD = "commentsUpdateField";
export const LIST_LOAD = "commentsListLoad";
export const START_FETCH = "commentsStartFetch";
export const LOAD_MORE = "commentsMoreFetch";
export const LOAD_COMMENT = "loadComment";
export const POST_COMMENT = "postComment";
export const RESET = "resetComment";
export const START_FETCH_REASON = "reasonStartFetch";
export const REASON_LIST_LOAD = "reasonListLoad";

export const componentsUpdateField = ({ prop, value }) => ({
  type: UPDATE_FIELD,
  payload: { prop, value },
});

export const getList = (advisorID, forceOffset) => async (dispatch,getState) => {
  try {
    const {
      comments: { total, offset, list, loadMore, max },
    } = getState();

    const finalOffset = forceOffset === undefined ? offset : forceOffset;

    if (!loadMore) dispatch({ type: START_FETCH, payload: {} });
    //add advisor id after fix api <**backFlag**>
    let url = `/comment/search?advisorID=${advisorID}&max=${max}&offset=${finalOffset}`;

    const response = await axios.get(url);

    //handle pagination
    let tempList =
      finalOffset > 0
        ? [...list, ...response.data.result]
        : response.data.result;
    dispatch({
      type: LIST_LOAD,
      payload: {
        list: tempList,
        total: response.data.total,
        offset: response.data.offset,
      },
    });
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};

export const checkWriteComment = (data) => async (dispatch, getState) => {
  try {
    dispatch(reset("writeCommentForm"));
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};

export const clearComments = () => async (dispatch, getState) => {
  try {
    dispatch({ type: RESET });
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};

export const postComment = (slug, data, callback) => async (dispatch) => {
  try {
    dispatch(getList(slug));
    dispatch(reset("writeCommentForm"));
    callback();
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};

export const getReasons = () => async (dispatch) => {
  try {
    dispatch({ type: "START_FETCH_REASON" });
    const response = await axios.get(`/reason/all`);

    dispatch({
      type: REASON_LIST_LOAD,
      payload: {
        reasonSatisfaction: response.data
          .filter((item) => item.satisfy === true)
          .map((item) => ({ label: item.value, value: item.id })),
        reasonDissatisfaction: response.data
          .filter((item) => item.satisfy === false)
          .map((item) => ({ label: item.value, value: item.id })),
      },
    });
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
};

export const likeDislike = (id) => async (dispatch, getState) => {
  try {
    const {
      comments: { list },
    } = getState();
    dispatch(componentsUpdateField({ prop: "likeLoad", value: true }));
    const response = await axios.get(`/comment/like?commentid=${id}`);
    let tempList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          likeCnt: item.liked ? item.likeCnt - 1 : item.likeCnt + 1,
          liked: !item.liked,
        };
      }
      return item;
    });

    dispatch(componentsUpdateField({ prop: "list", value: tempList }));
    dispatch(componentsUpdateField({ prop: "likeLoad", value: false }));
  } catch (e) {
    dispatch(advisersUpdateField({ prop: "likeLoad", value: false }));
    dispatch(errorSnackbar(e));
  }
};

export const getMore = () => (dispatch) => {
  dispatch({ type: LOAD_MORE });
  dispatch(getList());
};
export const hasMore = () => (getState) => {
  const { advisers: { total, offset, max } } = getState();
  return total / max > offset + 1;
};
