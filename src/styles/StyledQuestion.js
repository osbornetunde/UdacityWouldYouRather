import styled, { css } from "styled-components";

export const StyledQuestionWrapper = styled.div`
  width: 90%;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 40%;

  span {
    border-bottom: 1px solid #ccc;
    background-color: #00263b;
    display: inline-block;
    width: 100%;
    padding: 1rem;

    h4 {
      padding: 0;
      margin: 0;
      color: #ffffff;
    }
  }

  .card-body {
    display: flex;
    height: 72%;

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

    div {
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

      button {
        width: 80%;
        border: 1px solid green;
        border-radius: 2px;
        height: 1.5rem;
        background-color: #58b4ae;
        color: #ffffff;
      }
    }
  }
`;

export const StyledVoteWrapper = styled.div`
  width: 70%;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 40%;

  span {
    border-bottom: 1px solid #ccc;
    background-color: #00263b;
    display: inline-block;
    width: 100%;
    padding: 1rem;

    h4 {
      padding: 0;
      margin: 0;
      color: #ffffff;
    }
  }

  .card-body {
    display: flex;
    height: 72%;

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

      button {
        width: 80%;
        border: 1px solid green;
        border-radius: 2px;
        height: 1.5rem;
        background-color: #58b4ae;
        color: #ffffff;
      }
    }
  }
`;

export const StyledVotecard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  .choosen {
    position: absolute;
    right: 15px;
    bottom: 0;
    font-weight: 700;
  }

  .card {
    border: 2px solid #00263b;
    width: 100%;
    height: 50%;
    border-radius: 0.5rem;
    padding: 0.2rem 0.8rem;
    position: relative;
    p {
      padding: 0.3rem 0;
      margin: 0;
      font-size: 0.8rem;
      line-height: 0.9rem;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

export const ProgressBar = styled.div`
  border-radius: 1rem;
  border: 1px solid #00263b;
  margin: 0.2rem 0;
  height: 15%;
  border-radius: 1.5rem;
  ${(props) =>
    props.width && parseInt(props.width) > 0
      ? css`
          background-color: #58b4ae;
          width: ${(props) => props.width};
        `
      : css`
          width: 100%;
        `}
`;

export const StyledAddQuestionWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  height: 50%;

  .create-question-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 1rem;

    h3 {
      font-weight: 600;
      padding: 0;
      margin: 0;
    }
  }

  .question-form-container {
    width: 100%;
    height: 100%;
    padding: 1rem;
    position: relative;
    p,
    h3 {
      padding: 0;
      margin: 0.1rem 0;
    }
  }

  form {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
      border: 1px solid #00263b;
      border-radius: 5px;
      height: 2.2rem;
      margin: 1rem 0;
      padding: 0.3rem;
    }
  }
`;
