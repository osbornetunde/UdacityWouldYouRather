import { call, put, takeEvery, fork } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/_DATA";

function* getUsers() {
  console.log("calling get users");

  try {
    const response = yield call(api._getUsers);
    console.log("======> user result", response);
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

const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
