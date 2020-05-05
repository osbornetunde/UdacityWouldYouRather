import { Types } from "./../actions/questions";

const INITIAL_STATE = {
  questions: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
      };

    default:
      return state;
  }
};
