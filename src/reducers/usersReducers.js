import { Types } from "./../actions/users";

const INITIAL_STATE = {
  authUser: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      const availableUsers = Object.keys(action.payload).map(
        (key) => action.payload[key]
      );
      return {
        ...state,
        users: availableUsers,
      };

    case Types.LOGIN_USER:
      return {
        ...state,
        authUser: action.payload,
      };
    case Types.LOGOUT_USER:
      return {
        ...state,
        authUser: action.payload,
      };
    default:
      return state;
  }
};
