import React, { useState } from "react";
import { connect } from "react-redux";
import { saveQuestionRequest } from "./../actions/questions";
import { PageLayout, Button, StyledAddQuestionWrapper } from "../styles";

const AddQuestion = ({ authUser, saveQuestionRequest }) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleOptionChange = (e) => {
    const { value, name } = e.target;
    if (name === "optionOne") {
      setOptionOne(value);
    }
    if (name === "optionTwo") {
      setOptionTwo(value);
    }
  };

  const handleSubmit = (e, optionOne, optionTwo, authUser) => {
    e.preventDefault();
    if (optionOne && optionTwo) {
      saveQuestionRequest(optionOne, optionTwo, authUser);
    } else {
      alert("Please select either options");
    }
  };

  return (
    <PageLayout>
      <StyledAddQuestionWrapper>
        <div className="create-question-header">
          <h3>Create New Question</h3>
        </div>
        <div className="question-form-container">
          <p>Complete the Question</p>
          <h3 style={{ fontWeight: "bolder" }}>Would you rather ...</h3>

          <form
            onSubmit={(e) => handleSubmit(e, optionOne, optionTwo, authUser.id)}
          >
            <input
              type="text"
              name="optionOne"
              placeholder="Enter Option One Test Here"
              value={optionOne}
              onChange={handleOptionChange}
            />
            <span>OR</span>
            <input
              type="text"
              name="optionTwo"
              placeholder="Enter Option Two Test Here"
              value={optionTwo}
              onChange={handleOptionChange}
            />
            <Button position>Submit</Button>
          </form>
        </div>
      </StyledAddQuestionWrapper>
    </PageLayout>
  );
};

const mapStateToProps = ({ users: { authUser } }) => ({
  authUser,
});

export default connect(mapStateToProps, { saveQuestionRequest })(AddQuestion);
