import axios from "axios";

export const REGISTER = "REGISTER";

export const register = (payload) => (dispatch) => {
  return axios
    .post("http://localhost:4000/Register", payload)

    .then((res) => {
      return dispatch({
        type: REGISTER,
        payload: res.data,
      });
    });
};
