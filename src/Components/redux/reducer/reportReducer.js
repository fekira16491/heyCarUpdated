import {
  PROJECT_SUCESS,
  REPORT_FAIL,
  REPORT_INPUT,
  REPORT_SUCESS,
} from "../action/actionType";
import { getUser } from "../action/userAction";
import api from "../../../api/api";

const initialState = {
  reportList: [],
  reportInput: {},
  isLoading: false,
};

/**
   *const reportReducer = (state = initialState, action) => {
    reducer to perform gateway success
   * @param {array} state - displays state 
   * @param {object} action -action object that has type and payload
   * @returns reportList data
   */
const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPORT_SUCESS:
      let sucess = {
        ...state,
        reportList: action.payload,
      };
      return sucess;
    case REPORT_FAIL:
      let fail = {
        ...state,
        reportList: action?.payload?.error,
      };
      return fail;
    case REPORT_INPUT:
      return { ...state, reportInput: action.payload };

    default:
      return state;
  }
};

export default reportReducer;
