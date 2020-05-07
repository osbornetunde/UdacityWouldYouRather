import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  HeaderWrapper,
  StyledLink,
  LinkSpan,
  StyleCurrentUser,
} from "./../styles";

const Header = ({ currentUser, logoutUserRequest }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const logOutHandler = () => {
    logoutUserRequest();
    history.push("/");
  };
  return (
    <HeaderWrapper>
      <LinkSpan>
        <StyledLink to="/questions" isActive={pathname === "/questions"}>
          Home
        </StyledLink>
      </LinkSpan>
      <LinkSpan>
        <StyledLink to="/add" isActive={pathname === "/add"}>
          New Question
        </StyledLink>
      </LinkSpan>
      <LinkSpan>
        <StyledLink to="/leaderboard" isActive={pathname === "/add"}>
          Leader Board
        </StyledLink>
      </LinkSpan>
      {currentUser && (
        <StyleCurrentUser>
          <LinkSpan>{`Hello ${currentUser.name}`}</LinkSpan>
          <img src={currentUser.avatarURL} alt="currentUser" />
          <LinkSpan onClick={logOutHandler}>Logout</LinkSpan>
        </StyleCurrentUser>
      )}
    </HeaderWrapper>
  );
};

export default Header;
