import React from "react";
import { connect } from "react-redux";

const LeaderBoard = ({ sortedUser, authUser }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      <div style={{ width: "60%" }}>
        {sortedUser.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              width: "100%",
              height: "20%",
              margin: "2rem",
              border: "1px solid #ccc",
              borderRadius: "2px",
              justifyContent: "space-between",
              padding: "4px",
            }}
          >
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
                src={user.avatarURL}
                alt="user"
                style={{
                  height: "80%",
                  width: "80%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2>{user.name}</h2>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p>Answered questions</p>
                <p>{user.answeredResults}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p>Created questions</p>
                <p>{user.createdQuestions}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "3px",
              }}
            >
              <p>Score</p>
              <div
                style={{
                  height: "30%",
                  width: "30%",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "20px" }}>{user.ranking}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ users: { authUser, users } }) => {
  const sortedUser = Object.keys(users)
    .map((user) => {
      const userData = {
        id: users[user].id,
        avatarURL: users[user].avatarURL,
        name: users[user].name,
        answeredResults: Object.keys(users[user].answers).length,
        createdQuestions: users[user].questions.length,
      };

      const ranking = userData.answeredResults + userData.createdQuestions;

      userData.ranking = ranking;

      return userData;
    })
    .sort((a, b) => b.ranking - a.ranking);

  console.log("=======> user's array", sortedUser);

  return {
    authUser,
    sortedUser,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
