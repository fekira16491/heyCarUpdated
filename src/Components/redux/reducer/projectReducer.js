import { PROJECT_FAIL, PROJECT_SUCESS } from "../action/actionType";
import { getUser } from "../action/userAction";
import api from "../../../api/api";

const initialState = {
  projectList: [],
  isLoading: false,
};

/**
   *const projectReducer = (state = initialState, action) => {
    reducer to perform gateway success
   * @param {array} state - displays state 
   * @param {object} action -action object that has type and payload
   * @returns ProjectList data
   */
const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_SUCESS:
      let sucess = {
        ...state,
        projectList: action.payload,
      };
      return sucess;
    case PROJECT_FAIL:
      let fail = {
        ...state,
        projectList: action?.payload?.error,
      };
      return fail;

    default:
      return state;
  }
};

export default projectReducer;
