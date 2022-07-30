import axios from "axios";

export const REGISTER = "REGISTER";

export const register = (payload) => (dispatch) => {
  console.log(payload);
  return axios
    .post("http://localhost:3333/user/register", payload)

    .then((res) => {
      return dispatch({
        type: REGISTER,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
