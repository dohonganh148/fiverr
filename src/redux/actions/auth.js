import { login, signup } from "../../services/auth";
import ACTION_TYPE from "../type";
export const loginAction = (data) => async (dispatch) => {
  let res = await login(data);
  dispatch({
    type: ACTION_TYPE.LOG_IN,
    payload: res,
  });
};
export const signUpAction = (data) => async (dispatch) => {
  let res = await signup(data);
  dispatch({
    type: ACTION_TYPE.SIGN_UP,
    payload: res,
  });
};
