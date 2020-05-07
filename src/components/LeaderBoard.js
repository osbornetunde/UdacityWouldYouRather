import React from "react";
import { connect } from "react-redux";
import { PageLayout, StyledLeaderBoardWrapper } from "../styles";

const LeaderBoard = ({ sortedUser }) => {
  return (
    <PageLayout>
      <StyledLeaderBoardWrapper>
        <h3>Leader Board</h3>
        {sortedUser.map((user) => (
          <div key={user.id} className="leaderboard-card">
            <div className="img-wrapper">
              <img src={user.avatarURL} alt="user" />
            </div>
            <div className="content-wrapper">
              <h3>{user.name}</h3>
              <div className="content">
                <div className="content-text">
                  <div>
                    <p>Answered questions</p>
                    <p>{user.answeredResults}</p>
                  </div>
                  <div>
                    <p>Created questions</p>
                    <p>{user.createdQuestions}</p>
                  </div>
                </div>

                <div className="score-wrapper">
                  <p>Score</p>
                  <div>
                    <p>{user.ranking}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </StyledLeaderBoardWrapper>
    </PageLayout>
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
