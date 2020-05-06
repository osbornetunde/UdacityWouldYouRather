import React, { useState } from "react";
import { connect } from "react-redux";
import StyledForm from "./../styles/index";
import { saveQuestionRequest } from "./../actions/questions";

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
    <section>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "2rem",
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
          }}
        >
          <h1 style={{ fontWeight: "700" }}>Create New Question</h1>
        </div>
        <div>
          <p>Complete the Question</p>
          <h3 style={{ fontWeight: "bolder" }}>Would you rather ...</h3>
          <StyledForm>
            <form
              onSubmit={(e) =>
                handleSubmit(e, optionOne, optionTwo, authUser.id)
              }
            >
              <input
                type="text"
                name="optionOne"
                placeholder="Enter Option One Test Here"
                style={{ border: "1px solid #ccc", height: "2rem" }}
                value={optionOne}
                onChange={handleOptionChange}
              />
              <input
                type="text"
                name="optionTwo"
                placeholder="Enter Option Two Test Here"
                style={{ border: "1px solid #ccc", height: "2rem" }}
                value={optionTwo}
                onChange={handleOptionChange}
              />
              <button>Submit</button>
            </form>
          </StyledForm>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ users: { authUser } }) => ({
  authUser,
});

export default connect(mapStateToProps, { saveQuestionRequest })(AddQuestion);
