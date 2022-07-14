import axios from "axios";

/**
 * to fetch list of data
 * @param {*} url
 * @param {*} options
 * @returns fetch response axios
 */

const baseUrl = "http://178.63.13.157:8090/mock-api/api/";

export const getData = (url, options = {}) => {
  const response = axios.get(`${baseUrl}${url}`, options);
  return response;
};

/**
 * to post data
 * @param {*} url
 * @param {*} postData
 * @param {*} options
 * @returns post object
 */
export const postData = (url, postData, options = {}) => {
  return axios.post(baseUrl + url, postData, options);
};
