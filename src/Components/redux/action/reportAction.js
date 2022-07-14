import { REPORT_INPUT, REPORT_SUCESS } from "./actionType";
import { postData } from "../../../api/api";

/**
 * Post queries,Project id , Gateway Id, From and to date
 * @returns Report list
 */
export const postReportList = (fields) => {
  return async (dispatch) => {
    try {
      let response = await postData("report", fields);
      dispatch(fetchSuccess(response.data));
    } catch (err) {}
  };
};

/**
 * call after success return of report
 */
export const fetchSuccess = (data, options = {}) => {
  return { type: REPORT_SUCESS, payload: data };
};

export const reportInput = (data) => {
  return { type: REPORT_INPUT, payload: data };
};
