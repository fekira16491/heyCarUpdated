import { PROJECT_SUCESS } from "./actionType";
import { getData } from "../../../api/api";

/**
 * fetch Project List
 * @returns Project
 */
export const fetchProjectList = () => {
  return async (dispatch) => {
    try {
      let response = await getData("projects");
      dispatch(fetchSuccess(response.data));
    } catch (err) {}
  };
};

/**
 * call after success return of Project
 */
export const fetchSuccess = (data, options = {}) => {
  return { type: PROJECT_SUCESS, payload: data };
};
