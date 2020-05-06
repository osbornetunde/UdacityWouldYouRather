import { Types } from "./../actions/questions";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case Types.SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };

    default:
      return state;
  }
};
