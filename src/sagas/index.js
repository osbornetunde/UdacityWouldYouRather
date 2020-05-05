import { all } from "redux-saga/effects";
import usersSagas from "./users";
import questionsSaga from "./questions";

export default function* rootSaga() {
  yield all([...usersSagas, ...questionsSaga]);
}
