import types from "./types";

export const auth = payload => ({
  type: types.AUTH,
  payload
});
