import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { StyledQuestionWrapper } from "./../styles";

const AnsweredQuestion = ({ modifiedAnwsered, authUser }) => {
  const { url } = useRouteMatch();
  const history = useHistory();

  return (
    <>
      {modifiedAnwsered.map((question) => (
        <StyledQuestionWrapper key={question.id}>
          <span>
            <h4>
              {authUser.id === question.author
                ? "You asked"
                : ` ${question.name} asks`}
            </h4>
          </span>
          <div className="card-body">
            <div className="img-wrapper">
              <img src={question.avatarURL} alt="author" />
            </div>
            <div>
              <h3>Would you rather</h3>

              <p>{question.optionOne.text.slice(0, 6)}...</p>

              <button
                onClick={() =>
                  history.push({
                    pathname: `${url}/${question.id}`,
                    state: { question, from: "answeredQuestion" },
                  })
                }
              >
                View Full
              </button>
            </div>
          </div>
        </StyledQuestionWrapper>
      ))}
    </>
  );
};

const mapStateToProps = (
  { users: { authUser, users } },
  { answeredQuestions }
) => {
  const modifiedAnwsered = answeredQuestions.map((question) => {
    return users
      .map((user) => {
        if (question.author === user.id) {
          return {
            ...user,
            ...question,
          };
        }
      })
      .filter((item) => item && item.author === question.author)[0];
  });

  return {
    modifiedAnwsered,
    authUser,
  };
};

export default connect(mapStateToProps)(AnsweredQuestion);
