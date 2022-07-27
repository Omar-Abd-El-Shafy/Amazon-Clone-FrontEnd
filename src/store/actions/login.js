import axios from "axios";

export const LOGIN = "LOGIN";

const login = (payload) => (dispatch) => {
  console.log(payload);
  return axios
    .post("http://localhost:3333/user/login", payload)
    .then((res) => {
      const payload = res.data;
      if (payload) {
        alert("success !!");

        return payload;
      } else {
        alert("Wrong credential !!");
        return;
      }
    })
    .then((res) =>
      dispatch({
        type: LOGIN,
        payload: res,
      })
    )
    .catch((err) => console.log(err));
};

export default login;
