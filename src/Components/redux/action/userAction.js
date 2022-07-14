import { USER_SUCESS } from "./actionType";
import { getData } from "../../../api/api";

/**
 * Fetching list of user
 * @returns dispatch fetch success list of Users
 */
export const fetchUserList = () => {
  return async (dispatch) => {
    try {
      let response = await getData("users");
      dispatch(fetchSuccess(response.data));
    } catch (err) {}
  };
};

/**
 * success response
 * @param {array} data -takes response data
 * @param {object} options -shows options
 * @returns type:USER_SUCESS,data
 */
export const fetchSuccess = (data, options = {}) => {
  return { type: USER_SUCESS, payload: data };
};
