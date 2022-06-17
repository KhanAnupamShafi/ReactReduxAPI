import {
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../constants/constants";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_SUCCESS:
      return {
        users: action.payload,
        isLoading: false,
        error: null,
      };
    case GET_USER_FAILED:
      return {
        users: [],
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
