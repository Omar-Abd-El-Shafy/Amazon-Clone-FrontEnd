import axios from "axios";

export const REGISTER = "REGISTER";

export const register = (payload) => (dispatch) => {
  console.log(payload);
  return axios
    .post("https://amazon-clone-deploy.herokuapp.com/user/register", payload)

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
