import { Types } from "./../actions/users";

const INITIAL_STATE = {
  users: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
