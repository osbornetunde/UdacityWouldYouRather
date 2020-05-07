import React from "react";
import { Link as ReactRouterDomLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.nav`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  justify-content: flex-end;
  align-items: center;
  background-color: #c3edea;
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
`;

export const LinkSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 1rem;
  &:hover {
    background-color: "#f8f3eb";
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

export const StyledLink = styled(Link)`
  padding: 4px 0px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  text-decoration: none;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: ${(p) => (p.isActive ? "#00263b" : "#1b1b2f")};
  cursor: pointer;
`;

export const StyleCurrentUser = styled.div`
  display: flex;
  width: 20rem;
  justify-content: space-around;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;
