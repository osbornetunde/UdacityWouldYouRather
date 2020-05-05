export const Types = {
  GET_QUESTIONS_REQUEST: "get_questions_request",
  GET_QUESTIONS_SUCCESS: "get_questions_success",
  QUESTIONS_ERROR: "questions_error",
};

export const getQuestionsRequest = () => ({
  type: Types.GET_QUESTIONS_REQUEST,
});

export const getQuestionsSuccess = (questions) => ({
  type: Types.GET_QUESTIONS_SUCCESS,
  payload: questions,
});

export const getQuestionsError = (error) => ({
  type: Types.QUESTIONS_ERROR,
  payload: error,
});
