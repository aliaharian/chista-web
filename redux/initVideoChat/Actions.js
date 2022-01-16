export const UPDATE_FIELD = "initVideoChatUpdateField";
export const INITIABLE_SUCCESS = "videoChatInitiableSuccess";

export const initVideoChatUpdateField = ({ prop, value }) => ({
  type: UPDATE_FIELD,
  payload: { prop, value },
})

export const initiableVideChat = () => async (dispatch) => {
  try {
    dispatch(initVideoChatUpdateField({ prop: "load", value: true }));
  } catch (e) {
    dispatch(initVideoChatUpdateField({ prop: "load", value: false }))
  }
}






