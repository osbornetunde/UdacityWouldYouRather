import styled, { css } from "styled-components";

const Button = styled.button`
  color: white;
  background: #58b4ae;
  font-weight: bold;
  ${(p) =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}
  padding: 8px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 1em;
  border: none;
  width: 90%;
  display: block;
  white-space: none;
  position: ${(props) => (props.position ? "absolute" : "initial")};
  bottom: ${(props) => (props.position ? "1rem" : "")};
  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
