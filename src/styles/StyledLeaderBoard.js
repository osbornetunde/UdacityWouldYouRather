import styled from "styled-components";

export const StyledLeaderBoardWrapper = styled.div`
  width: 60%;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 75%;
  padding: 0.5rem;

  h3 {
    padding: 0;
    margin: 0;
  }

  .leaderboard-card {
    display: flex;
    width: 100%;
    height: 30%;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 2px;
    justify-content: space-between;
    padding: 4px;

    .img-wrapper {
      width: 35%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      border: none;
      img {
        height: 50%;
        width: 50%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .content-wrapper {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      height: 60%;
      border-left: 1px solid #ccc;
      padding: 0.7rem;
      height: 100%;

      h3 {
        padding: 0;
        margin: 0;
      }

      p {
        padding: 0.5rem 0;
        margin: 0;
        font-size: 0.8rem;
        line-height: 0.9rem;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .content {
        display: flex;
        flex-direction: row;
        height: 100%;
        flex-direction: space-between;
        width: 100%;
        padding: 0.2rem;

        .content-text {
          display: flex;
          height: 100%;
          width: 80%;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-around;
          margin-right: 0.3rem;

          div {
            display: flex;
            justify-content: space-around;
            margin-right: 0.3rem;
          }
        }

        .score-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 3px;
          width: 25%;
          padding: 0.4rem;
          div {
            height: 80%;
            width: 80%;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #c3edea;
            p {
              font-size: 20px;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
`;
