import { GATEWAY_FAIL, GATEWAY_SUCESS } from "../action/actionType";

const initialState = {
  isLoading: false,
  gatewayList: [],
};

/**
   *const gatewayreducer = (state = initialState, action) => {
    reducer to perform gateway success
   * @param {array} state - displays state 
   * @param {object} action -action object that has type and payload
   * @returns cartList data
   */
const gatewayReducer = (state = initialState, action) => {
  switch (action.type) {
    case GATEWAY_SUCESS:
      let sucess = {
        ...state,
        gatewayList: action.payload,
      };
      return sucess;
    case GATEWAY_FAIL:
      let fail = {
        ...state,
        gatewayList: action?.payload?.error,
      };
      return fail;

    default:
      return state;
  }
};

export default gatewayReducer;
