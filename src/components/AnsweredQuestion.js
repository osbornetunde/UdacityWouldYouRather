import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const AnsweredQuestion = ({ modifiedAnwsered, authUser }) => {
  const { url } = useRouteMatch();
  const history = useHistory();
  console.log("=============>modified", modifiedAnwsered);

  return (
    <>
      {modifiedAnwsered.map((question) => (
        <div
          key={question.id}
          style={{
            width: "90%",
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
              <p></p>
              <button
                style={{
                  width: "80%",
                  border: "1px solid green",
                  borderRadius: "2px",
                  marginTop: "1.5rem",
                }}
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
        </div>
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
