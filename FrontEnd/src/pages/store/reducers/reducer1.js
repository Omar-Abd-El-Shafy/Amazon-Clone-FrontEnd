import { LOGIN } from "../actions/login";
import { REGISTER } from "../actions/register";

const INITIAL_VALUE = {
  loggedInUser: null,
};

export default function authentication(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        loggedInUser: null,
      };

    default:
      return state;
  }
}
