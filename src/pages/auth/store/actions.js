import AsyncStorage from '@react-native-community/async-storage';
import types from './types';

const storage_key = 'spotcry';

export const setTokens = tokens => async dispatch => {
  try {
    await AsyncStorage.setItem(`${storage_key}_tokens`, JSON.stringify(tokens));
    dispatch({
      type: types.AUTH,
      tokens
    });

  } catch (e) {
    console.log(e);
  } 
};

export const getTokens = () => async dispatch => {
  try {
    const tokens = JSON.parse(await AsyncStorage.getItem(`${storage_key}_tokens`));

    if (tokens) {
      return dispatch({
        type: types.AUTH,
        tokens
      });
    }

    return dispatch({ type: types.RELOGIN });
    
  } catch (e) {
    console.log(e);
  }
};

export const unloading = () => ({
  type: types.UNLOADING
});

export const setUser = user => ({
  type: types.SET_USER,
  user
});
