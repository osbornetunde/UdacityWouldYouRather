import { takeEvery, fork, call, put } from "redux-saga/effects";
import * as actions from "./../actions/questions";
import * as api from "../api/_DATA";

function* getQuestions() {
  try {
    const response = yield call(api._getQuestions);
    console.log("=======> questions", response);
    yield put(
      actions.getQuestionsSuccess({
        response,
      })
    );
  } catch (error) {
    yield put(actions.getQuestionsError(error));
  }
}

function* watchGetQuestionsRequest() {
  yield takeEvery(actions.Types.GET_QUESTIONS_REQUEST, getQuestions);
}

const questionsSaga = [fork(watchGetQuestionsRequest)];

export default questionsSaga;
