import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-top: 3rem;
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 70%;

  header {
    background-color: #ccc;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    height: 10%;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      /* color: ${(props) => (props.showUnanswered ? "green" : "black")}; */
    }
  }

  .main-body {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    height:100%;
    overflow: scroll;
  }
`;
