import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import StyledHeader from "./../styles/StyledHeader";

const Header = ({ currentUser, logoutUserRequest }) => {
  const history = useHistory();

  const logOutHandler = () => {
    logoutUserRequest();
    history.push("/");
  };
  return (
    <StyledHeader>
      <span>
        <Link to="/questions">Home</Link>
      </span>
      <span>
        <Link to="/add">New Question</Link>
      </span>
      <span>
        <Link to="/leaderboard">Leader Board</Link>
      </span>
      {currentUser && (
        <div style={{ display: "flex" }}>
          <span>{`Hello ${currentUser.name}`}</span>
          <img
            src={currentUser.avatarURL}
            alt="currentUser"
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span onClick={logOutHandler}>Logout</span>
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
