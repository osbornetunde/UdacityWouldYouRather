export const Types = {
  GET_QUESTIONS_REQUEST: "get_questions_request",
  GET_QUESTIONS_SUCCESS: "get_questions_success",
  SAVE_ANSWER_REQUEST: "save_answer_request",
  SAVE_ANSWER_SUCCESS: "save_answer_success",
  QUESTIONS_ERROR: "questions_error",
  SAVE_QUESTION_ANSWER: "save_answer_question",
  SAVE_QUESTION_REQUEST: "save_question_request",
  SAVE_QUESTION_SUCCESS: "save_question_success",
  SAVE_QUESTION: "save_question",
};

export const getQuestionsRequest = () => ({
  type: Types.GET_QUESTIONS_REQUEST,
});

export const getQuestionsSuccess = (questions) => ({
  type: Types.GET_QUESTIONS_SUCCESS,
  payload: questions,
});

export const questionsError = (error) => ({
  type: Types.QUESTIONS_ERROR,
  payload: error,
});

export const saveAnswerRequest = (authedUser, qid, answer) => ({
  type: Types.SAVE_ANSWER_REQUEST,
  authedUser,
  qid,
  answer,
});

export const saveAnswerQuestion = (authedUser, qid, answer) => ({
  type: Types.SAVE_QUESTION_ANSWER,
  authedUser,
  qid,
  answer,
});

export const saveAnswerSuccess = (authUser, questionId, answer) => ({
  type: Types.SAVE_ANSWER_REQUEST,
  payload: {
    authUser,
    questionId,
    answer,
  },
});

export const saveQuestionRequest = (optionOneText, optionTwoText, author) => ({
  type: Types.SAVE_QUESTION_REQUEST,
  optionOneText,
  optionTwoText,
  author,
});

// export const saveQuestion = (optionOneText, optionTwoText, author) => ({
//   type: Types.SAVE_QUESTION,
//   optionOneText,
//   optionTwoText,
//   author
// })

export const saveQUestionSuccess = (question) => ({
  type: Types.SAVE_QUESTION_SUCCESS,
  question,
});
