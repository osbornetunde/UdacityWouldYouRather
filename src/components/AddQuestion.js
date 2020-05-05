import React from "react";
import StyledForm from "./../styles/index";

const AddQuestion = () => {
  return (
    <section>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "2rem",
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
          }}
        >
          <h1 style={{ fontWeight: "700" }}>Create New Question</h1>
        </div>
        <div>
          <p>Complete the Question</p>
          <h3 style={{ fontWeight: "bolder" }}>Would you rather ...</h3>
          <StyledForm>
            <form>
              <input
                type="text"
                placeholder="Enter Option One Test Here"
                style={{ border: "1px solid #ccc", height: "2rem" }}
              />
              <input
                type="text"
                placeholder="Enter Option Two Test Here"
                style={{ border: "1px solid #ccc", height: "2rem" }}
              />
              <button>Submit</button>
            </form>
          </StyledForm>
        </div>
      </div>
    </section>
  );
};

export default AddQuestion;
