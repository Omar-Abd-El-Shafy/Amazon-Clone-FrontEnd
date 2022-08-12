import axios from "axios";

export const LOGIN = "LOGIN";

const login = (emailorphone, password) => (dispatch) => {
  return axios
    .post("http://localhost:4000/Login", { emailorphone, password })
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
