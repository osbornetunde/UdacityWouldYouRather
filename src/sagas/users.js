import { call, put, takeEvery, fork } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/_DATA";

function* getUsers() {
  try {
    const response = yield call(api._getUsers);
    yield put(
      actions.getUsersSuccess({
        data: response,
      })
    );
  } catch (err) {
    yield put(
      actions.getUsersError({
        error: "An error occurred while trying to get users",
      })
    );
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* loginUser(action) {
  console.log("======>loginuser", action);
  try {
    yield put(actions.loginUser(action.payload));
  } catch (err) {
    yield put(
      actions.getUsersError({
        error: err,
      })
    );
  }
}

function* watchLoginUserRequest() {
  yield takeEvery(actions.Types.LOGIN_USER_REQUEST, loginUser);
}

function* logoutUser(action) {
  try {
    yield put(actions.loginUser(action.payload));
  } catch (err) {
    yield put(
      actions.getUsersError({
        error: err,
      })
    );
  }
}

function* watchLogoutUserRequest() {
  yield takeEvery(actions.Types.LOGOUT_USER_REQUEST, logoutUser);
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchLoginUserRequest),
  fork(watchLogoutUserRequest),
];

export default usersSagas;
