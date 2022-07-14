import { GATEWAY_SUCESS } from "./actionType";
import { getData } from "../../../api/api";

/**
 * fetch Gateway List
 * @returns Gateway
 */
export const fetchGatewayList = () => {
  return async (dispatch) => {
    try {
      let response = await getData("gateways");
      dispatch(fetchSuccess(response.data));
    } catch (err) {}
  };
};

/**
 * call after success return of gateway
 */
export const fetchSuccess = (data, options = {}) => {
  return { type: GATEWAY_SUCESS, payload: data };
};
