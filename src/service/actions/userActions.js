import {
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./../constants/constants";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    dispatch({ type: GET_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_USER_FAILED, payload: error.message });
  }
};
