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
          <button
            onClick={showUnansweredHandler}
            style={{ color: showUnanswered ? "#c3edea" : "#222831" }}
          >
            Unanswered Questions
          </button>
          <button
            onClick={showUnansweredHandler}
            style={{ color: showUnanswered ? "#222831" : "#c3edea" }}
          >
            Answered Questions
          </button>
        </header>
        <div className="main-body">
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

const mapStateToProps = ({ questions, users: { authUser } }) => {
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

  return {
    answeredQuestions,
    unAnsweredQuestions,
  };
};

export default connect(mapStateToProps, { getQuestionsRequest })(Main);
