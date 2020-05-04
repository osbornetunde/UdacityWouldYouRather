import React from "react";
import StyledForm from "./../styles";
import SignInForm from "./../components/SignInForm";
import Header from "./../components/Header";

const SigninPage = () => {
  return (
    <>
      <Header />
      <StyledForm>
        <SignInForm />
      </StyledForm>
    </>
  );
};

export default SigninPage;
