import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouteMatch, Route } from "react-router-dom";
import { getQuestionsRequest } from "./../actions/questions";
import UnAnsweredQuestions from "./UnAnsweredQuestion";
import AnsweredQuestions from "./AnsweredQuestion";
import Question from "./Question";

const Main = ({
  getQuestionsRequest,
  answeredQuestions,
  unAnsweredQuestions,
}) => {
  const match = useRouteMatch("/questions/:id");

  useEffect(() => {
    getQuestionsRequest();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [showUnanswered, setShowUnanswered] = useState(true);

  const showUnansweredHandler = () => {
    setShowUnanswered(!showUnanswered);
  };
  return match ? (
    <Route
      path="/questions/:id"
      //   currentUser={currentUser}
      component={Question}
    />
  ) : (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "3rem auto",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3rem",
          width: "50%",
          border: "1px solid #ccc",
          borderRadius: "5px",
          height: "70%",
        }}
      >
        <div
          style={{
            backgroundColor: "#ccc",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "50%",
          }}
        >
          <button
            onClick={showUnansweredHandler}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              color: showUnanswered ? "green" : "black",
            }}
          >
            UnAnswered Questions
          </button>
          <button
            onClick={showUnansweredHandler}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              color: showUnanswered ? "black" : "green",
            }}
          >
            Answered Questions
          </button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {showUnanswered ? (
            <UnAnsweredQuestions unAnsweredQuestions={unAnsweredQuestions} />
          ) : (
            <AnsweredQuestions answeredQuestions={answeredQuestions} />
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (
  { questions, users: { authUser } },
  { questionId }
) => {
  // const question = questions[questionId]
  // const answeredQuestions = question.optionOne.votes.includes(authUser.id) || question.optionTwo.votes.includes(authUser.id)
  const answeredQuestions = Object.values(questions).filter(
    (question) =>
      question.optionOne.votes.includes(authUser.id) ||
      question.optionTwo.votes.includes(authUser.id)
  );
  const unAnsweredQuestions = Object.values(questions).filter(
    (question) =>
      !question.optionOne.votes.includes(authUser.id) &&
      !question.optionTwo.votes.includes(authUser.id)
  );

  // console.log("=======>answered questions", answeredQuestions);
  return {
    answeredQuestions,
    unAnsweredQuestions,
  };
};

export default connect(mapStateToProps, { getQuestionsRequest })(Main);
