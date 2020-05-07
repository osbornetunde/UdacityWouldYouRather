import styled from "styled-components";

const StyledForm = styled.form`
  width: 50%;
  border: 1px solid #00263b;
  height: 70%;
  padding: 2rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  div {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;

    input {
      width: 100%;
      border: 1px solid #00263b;
      border-radius: 2px;
      height: 2rem;
    }
  }

  ul {
    background-color: #dddddd;
    border-radius: 5px;
    width: 100%;
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;

    li {
      padding: 1rem 1rem 0 1rem;
      list-style-type: none;

      &:hover {
        background-color: #00263b;
        color: #ddd;
      }

      div {
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          object-fit: cover;
        }

        p {
          font-weight: 500;
        }
      }
    }
  }
`;

export { StyledForm };
