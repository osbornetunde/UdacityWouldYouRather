export const Types = {
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
  GET_USERS_ERROR: "users/get_user_error",
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = (data) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: data,
});

export const getUsersError = ({ error }) => ({
  type: Types.GET_USERS_ERROR,
  payload: error,
});
