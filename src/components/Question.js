import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { saveAnswerRequest } from "./../actions/questions";
import {
  PageLayout,
  StyledVoteWrapper,
  RadioButtonWrapper,
  StyledVotecard,
  ProgressBar,
} from "./../styles";

const Question = ({ authUser, saveAnswerRequest }) => {
  const [answer, setAnswer] = useState("");
  const { id } = useParams();
  const { state } = useLocation();
  console.log("========> user", state);

  const { question } = state;

  const totalLength =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const percentOne = (question.optionOne.votes.length / totalLength) * 100;
  const percentTwo = (question.optionTwo.votes.length / totalLength) * 100;

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (answer) {
      saveAnswerRequest(authUser.id, id, answer);
      state.from = true;
    }
  };

  return !state.from ? (
    <PageLayout>
      <StyledVoteWrapper>
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
          <div className="content-wrapper">
            <h3>Would you rather</h3>
            <RadioButtonWrapper>
              <input
                type="radio"
                name="option"
                value="optionOne"
                id="optionOne"
                onChange={handleChange}
              />
              <label className="question-choice" htmlFor="optionOne">
                {" "}
                {question.optionOne.text}{" "}
              </label>
            </RadioButtonWrapper>
            <br />
            <RadioButtonWrapper>
              <input
                type="radio"
                name="option"
                value="optionTwo"
                id="optionTwo"
                onChange={handleChange}
              />
              <label className="question-choice" htmlFor="optionTwo">
                {question.optionTwo.text}
              </label>
            </RadioButtonWrapper>
            <br />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </StyledVoteWrapper>
    </PageLayout>
  ) : (
    <PageLayout>
      <StyledVoteWrapper>
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
          <div className="content-wrapper">
            <h3>Results:</h3>
            {question.optionOne.votes.includes(authUser.id) ? (
              <StyledVotecard>
                <div className="card">
                  <p className="choosen">You Choose</p>
                  <p>Would rather {question.optionOne.text}</p>
                  <ProgressBar width={`${percentOne}%`} />
                  <p>
                    {question.optionOne.votes.length} out of {totalLength} votes
                  </p>
                </div>
                <br />
                <div className="card">
                  <p>Would rather {question.optionTwo.text}</p>
                  <ProgressBar width={`${percentTwo}%`} />
                  <p>
                    {question.optionTwo.votes.length} out of {totalLength} votes
                  </p>
                </div>
              </StyledVotecard>
            ) : (
              <StyledVotecard>
                <div className="card">
                  <p>Would rather {question.optionOne.text}</p>
                  <ProgressBar width={`${percentOne}%`} />
                  <p>
                    {question.optionOne.votes.length} out of {totalLength} votes
                  </p>
                </div>
                <br />
                <div className="card">
                  <p className="choosen">You Choose</p>
                  <p>Would rather {question.optionTwo.text}</p>
                  <ProgressBar width={`${percentTwo}%`} />
                  <p>
                    {question.optionTwo.votes.length} out of {totalLength} votes
                  </p>
                </div>
              </StyledVotecard>
            )}
          </div>
        </div>
      </StyledVoteWrapper>
    </PageLayout>
  );
};

const mapStateToProps = ({ users: { authUser } }) => ({
  authUser,
});

export default connect(mapStateToProps, { saveAnswerRequest })(Question);
