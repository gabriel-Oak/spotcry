import { handleActions, combineActions } from "redux-actions";
import types from "./types";

const INITIAL_STATE = {
  tokens: null,
  relogin: false,
  loading: false,
  user: null,
};

const loading = combineActions(
  types.GET_USER_SENT,
  types.RELOGIN
);

const unloading = combineActions(
  types.UNLOADING,
  types.GET_USER_FINISHED
);

const auth = handleActions({
  [types.AUTH]: (state, tokens) => ({
    ...state,
    relogin: false,
    tokens,
  }),
  [loading]: state => ({
    ...state,
    loading: true
  }),
  [types.SET_USER]: (state, user) => ({
    ...state,
    user
  }),
  [types.RELOGIN]: state => ({
    ...state,
    relogin: true,
  }),
  [unloading]: state => ({...state, loading: false})
}, INITIAL_STATE);

export default auth;
