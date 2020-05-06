import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { saveAnswerRequest } from "./../actions/questions";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          margin: "5px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ borderBottom: "1px solid #ccc", backgroundColor: "#ccc" }}
        >
          <h4>
            {authUser.id === question.author
              ? "You asked"
              : ` ${question.name} asks`}
          </h4>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40%",
            }}
          >
            <img
              src={question.avatarURL}
              alt="author"
              style={{
                height: "80%",
                width: "80%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
              height: "60%",
              borderLeft: "1px solid #ccc",
              padding: "1rem",
            }}
          >
            <h3>Would you rather</h3>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
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
            </span>
            <br />
            <span style={{ display: "flex" }}>
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
            </span>
            <br />
            <button
              style={{
                width: "80%",
                border: "1px solid green",
                borderRadius: "2px",
                marginTop: "1.5rem",
              }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          margin: "5px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ borderBottom: "1px solid #ccc", backgroundColor: "#ccc" }}
        >
          <h4>
            {authUser.id === question.author
              ? "You asked"
              : ` ${question.name} asks`}
          </h4>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40%",
            }}
          >
            <img
              src={question.avatarURL}
              alt="author"
              style={{
                height: "80%",
                width: "80%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
              height: "60%",
              borderLeft: "1px solid #ccc",
              padding: "1rem",
            }}
          >
            <h3>Results:</h3>
            {question.optionOne.votes.includes(authUser.id) ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <div>
                    <p>You Choose</p>
                  </div>
                  <p>Would rather {question.optionOne.text}</p>
                  <div>
                    <div
                      style={{
                        width: `${percentOne}%`,
                        backgroundColor: "lilac",
                      }}
                    ></div>
                  </div>
                  <p>
                    {question.optionOne.votes.length} out of {totalLength} votes
                  </p>
                </div>
                <br />
                <div>
                  <p>Would rather {question.optionTwo.text}</p>
                  <div>
                    <div
                      style={{
                        width: `${percentTwo}%`,
                        backgroundColor: "lilac",
                      }}
                    ></div>
                  </div>
                  <p>
                    {question.optionTwo.votes.length} out of {totalLength} votes
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <p>Would rather {question.optionOne.text}</p>
                  <div>
                    <div
                      style={{
                        width: `${percentOne}%`,
                        backgroundColor: "lilac",
                      }}
                    ></div>
                  </div>
                  <p>
                    {question.optionOne.votes.length} out of {totalLength} votes
                  </p>
                </div>
                <br />
                <div>
                  <div>
                    <p>You Choose</p>
                  </div>
                  <p>Would rather {question.optionTwo.text}</p>
                  <div>
                    <div
                      style={{
                        width: `${percentTwo}%`,
                        backgroundColor: "lilac",
                      }}
                    ></div>
                  </div>
                  <p>
                    {question.optionTwo.votes.length} out of {totalLength} votes
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users: { authUser } }) => ({
  authUser,
});

export default connect(mapStateToProps, { saveAnswerRequest })(Question);
