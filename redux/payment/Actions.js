import axios from "axios";
import {generateSubmitForm} from "../../src/utilities";
import {reset} from "redux-form";
import {errorSnackbar} from "../user";

export const FETCH_SUCCESS = "bankLoadSuccess";
export const START_FETCH = "bankStartFetch";
export const START_FETCH_CREDIT_PRICE = "creditPriceStartFetch";
export const FETCH_SUCCESS_CREDIT_PRICE = "creditPriceLoadSuccess";
export const INCREASE_PAY_SUCCESS = "increasePAySuccess";
export const PAY_UPDATE_FIELD = "payUpdateField";
export const LOAD_AMOUNT = "loadAmount";
export const START_FETCH_FACTOR = "factorStartFetch";
export const FETCH_SUCCESS_FACTOR = "factorLoadSuccess";
export const INIT_FACTOR = "initFactor";

export const payUpdateField = ({ prop, value }) => ({
  type: PAY_UPDATE_FIELD,
  payload: { prop, value },

});

export const setInitFactor = (value)  => async (dispatch) => {
  dispatch({
    type: INIT_FACTOR,
    payload: {transactionId: value },
  })
}

export const initializeFromStateForm = data => ({ type: LOAD_AMOUNT, data });

export const sendBankForPay = (slug) => async (dispatch) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_PAY_BASE_URL}/transaction/sendBank`, {'key': slug});

    dispatch({ type:FETCH_SUCCESS, payload:{bankType:response.data} });
    if (response.data.method === 'post') {
      generateSubmitForm(response.data.url, response.data.obj)

    } else {
        window['location'] = response.data.url;
    }
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
}

export const getCreditPrice = () => async (dispatch) => {
  try {
    dispatch({type:START_FETCH_CREDIT_PRICE});
    const response = await axios.get(`${process.env.REACT_APP_PAY_BASE_URL}/creditPrice/summary`);

    dispatch({ type:FETCH_SUCCESS_CREDIT_PRICE, payload:{creditPrice:response.data} });
  } catch (e) {
    dispatch(errorSnackbar(e));
  }
}

export const increaseCredit = (data) => async (dispatch) => {
  try {
   const response = await axios.post(process.env.REACT_APP_PAY_BASE_URL+"/transaction/increasePay",
        {...data, serviceId: process.env.REACT_APP_SERVICE_ID, transactionType: process.env.REACT_APP_TRANSACTION_TYPE, appId: process.env.REACT_APP_APP_ID });

    dispatch(sendBankForPay(response.data.message));
    dispatch(payUpdateField({ prop: "openIncreaseCredit", value: false }));
    dispatch(reset("initialForm"));
  } catch (e) {
    dispatch({
      type: INCREASE_PAY_SUCCESS,
      payload: {increasePayData: e.error },
    });
  }
};

export const getFactor = (transactionId) => async (dispatch) => {
  try {
    dispatch({type:START_FETCH_FACTOR});
    const response = await axios.get(`${process.env.REACT_APP_PAY_BASE_URL}/transaction/getFactor/${transactionId}`);

    dispatch({ type:FETCH_SUCCESS_FACTOR, payload:{factorData:response.data} });

  } catch (e) {
  }
}

