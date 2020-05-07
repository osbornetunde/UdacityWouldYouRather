import React from "react";
import styled from "styled-components";

const Content = styled.main`
  max-width: 800px;
  margin: 40px auto 0 auto;
  padding: 0 16px;
  height: calc(100% - 76px);
  max-height: 90%;
  display: flex;
  justify-content: center;
`;

export function PageLayout({ children }) {
  return <Content>{children}</Content>;
}
