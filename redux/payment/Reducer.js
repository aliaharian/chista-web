import {
  START_FETCH,
  START_FETCH_CREDIT_PRICE,
  INCREASE_PAY_SUCCESS,
  PAY_UPDATE_FIELD,
  FETCH_SUCCESS_CREDIT_PRICE,
  LOAD_AMOUNT,
  START_FETCH_FACTOR,
  FETCH_SUCCESS_FACTOR,
  INIT_FACTOR,
} from "./Actions";

const defaultState = {
  fetch: false,
  bankType: null,
  loadCreditPrice: false,
  creditPrice: null,
  loadIncreasePay: false,
  increasePay: null,
  openIncreaseCredit: false,
  selectedPrice: { amount: 1000 },
  openFactor: false,
  loadFactor: false,
  factorData: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        fetch: true,
        bankType: action.payload.bankType,
      };
    case FETCH_SUCCESS_CREDIT_PRICE:
      return {
        ...state,
        loadCreditPrice: false,
        creditPrice: action.payload.creditPrice,
      };
    case START_FETCH_CREDIT_PRICE:
      return {
        ...state,
        loadCreditPrice: true,
      };
    case INCREASE_PAY_SUCCESS:
      return {
        ...state,
        loadIncreasePay: true,
        increasePay: action.payload.increasePay,
      };
    case PAY_UPDATE_FIELD:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    case LOAD_AMOUNT:
      return {
        data: { amount: action.data },
      };
    case FETCH_SUCCESS_FACTOR:
      return {
        ...state,
        loadFactor: false,
        factorData: action.payload.factorData,
      };
    case START_FETCH_FACTOR:
      return {
        ...state,
        loadFactor: true,
      };
    case INIT_FACTOR:
      return {
        ...state,
        transactionId: action.payload.transactionId,
      };

    default:
      return state;
  }
};

export default reducer;
