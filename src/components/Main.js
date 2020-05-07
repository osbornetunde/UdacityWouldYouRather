import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { getQuestionsRequest } from "./../actions/questions";
import UnAnsweredQuestions from "./UnAnsweredQuestion";
import AnsweredQuestions from "./AnsweredQuestion";
import Question from "./Question";
import { PageLayout, MainWrapper } from "./../styles";

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
  return !match ? (
    <PageLayout>
      <MainWrapper>
        <header>
          <button onClick={showUnansweredHandler} showUnanswered>
            UnAnswered Questions
          </button>
          <button
            onClick={showUnansweredHandler}
            showUnanswered={!showUnanswered}
          >
            Answered Questions
          </button>
        </header>
        <div>
          {showUnanswered ? (
            <UnAnsweredQuestions unAnsweredQuestions={unAnsweredQuestions} />
          ) : (
            <AnsweredQuestions answeredQuestions={answeredQuestions} />
          )}
        </div>
      </MainWrapper>
    </PageLayout>
  ) : (
    <Switch>
      <Route exact path="/questions/:id">
        <Question />
      </Route>
    </Switch>
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
