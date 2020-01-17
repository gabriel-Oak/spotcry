import { handleActions } from "redux-actions";
import types from "./types";

const INITIAL_STATE = {
  token: null,
  auth: false
};

const auth = handleActions( {
  [types.AUTH]: (state, payload) => (
    { ...state, auth: true}
  )
}, INITIAL_STATE);

export default auth;
