import {REGISTER_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, REGISTER_USER_FAIL} from "../actions/authAction";

const initialState = {
  user: null,
  error: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: true
      };
    
    case REGISTER_USER_FAIL:
      return {
        ...state,
        error: true
      };
  }

  return state;
}
