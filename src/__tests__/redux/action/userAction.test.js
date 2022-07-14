import { USER_SUCESS } from "../../../Components/redux/action/actionType";

import {
  fetchSuccess,
  fetchUserList,
} from "../../../Components/redux/action/userAction";

describe("user actions", () => {
  describe("fetchSuccess", () => {
    it("should return fetchSuccess action obj", () => {
      const userItem = {
        userId: "rahej",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@email.com",
      };
      let result = fetchSuccess(userItem);
      expect(result).toStrictEqual({ type: USER_SUCESS, payload: userItem });
    });
  });
});
