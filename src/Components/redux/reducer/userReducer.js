import { USER_SUCESS, USER_FAIL } from "../action/actionType";
import { getUser } from "../action/userAction";
import api from "../../../api/api";

const initialState = {
  usersList: [],
  isLoading: false,
};

/**
   *const userReducer = (state = initialState, action) => {
    reducer to perform gateway success
   * @param {array} state - displays state 
   * @param {object} action -action object that has type and payload
   * @returns userList data
   */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SUCESS:
      let sucess = {
        ...state,
        usersList: action.payload,
      };
      return sucess;
    case USER_FAIL:
      let fail = {
        ...state,
        usersList: action?.payload?.error,
      };
      return fail;
    default:
      return state;
  }
};

export default userReducer;
