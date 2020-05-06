import { takeEvery, fork, call, put } from "redux-saga/effects";
import * as actions from "./../actions/questions";
import * as api from "../api/_DATA";

function* getQuestions() {
  try {
    const response = yield call(api._getQuestions);
    yield put(actions.getQuestionsSuccess(response));
  } catch (error) {
    yield put(actions.questionsError(error));
  }
}

function* watchGetQuestionsRequest() {
  yield takeEvery(actions.Types.GET_QUESTIONS_REQUEST, getQuestions);
}

function* saveAnswer(action) {
  console.log("======>answers", action);
  const { authedUser, qid, answer } = action;
  try {
    const response = yield call(
      api._saveQuestionAnswer(authedUser, qid, answer)
    );
    console.log("=======> result of anwser", response);
    yield put(actions.saveAnswerSuccess(response));
  } catch (err) {
    yield put(actions.questionsError(err));
  }
}

function* watchSaveAnswerRequest() {
  yield takeEvery(actions.Types.SAVE_ANSWER_REQUEST, saveAnswer);
}

const questionsSaga = [
  fork(watchGetQuestionsRequest),
  fork(watchSaveAnswerRequest),
];

export default questionsSaga;
