export const Types = {
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
  USERS_ERROR: "users/user_error",
  LOGIN_USER_REQUEST: "users/login_user_request",
  LOGIN_USER: "users/login_user",
  LOGOUT_USER_REQUEST: "users/logout_user_request",
  LOGOUT_USER: "users/logout_user",
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = ({ data }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: data,
});

export const getUsersError = ({ error }) => ({
  type: Types.USERS_ERROR,
  payload: error,
});

export const loginUserRequest = (user) => ({
  type: Types.LOGIN_USER_REQUEST,
  payload: user,
});

export const loginUser = (user) => ({
  type: Types.LOGIN_USER,
  payload: user,
});

export const logoutUserRequest = () => ({
  type: Types.LOGOUT_USER_REQUEST,
});

export const logoutUser = (data) => ({
  type: Types.LOGIN_USER,
  payload: data,
});
