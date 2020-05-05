import React from "react";
import { Link } from "react-router-dom";
import StyledHeader from "./../styles/StyledHeader";

const Header = ({ currentUser }) => {
  return (
    <StyledHeader>
      <span>
        <Link to="/">Home</Link>
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
          <span>Logout</span>
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
