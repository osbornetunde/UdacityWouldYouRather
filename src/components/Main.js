import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getQuestionsRequest } from "./../actions/questions";

const Main = ({ questions, getQuestionsRequest }) => {
  useEffect(() => {
    getQuestionsRequest();
  }, []);

  console.log("=======>add questions", questions);
  return <main>Hello world</main>;
};

const mapStateToProps = ({ questions }) => ({
  questions,
});

export default connect(mapStateToProps, { getQuestionsRequest })(Main);
