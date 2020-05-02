import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsersRequest } from "./../actions/users";

const SignInForm = ({ users, getUsersRequest }) => {
  useEffect(() => {
    getUsersRequest();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("<======users in signin form", users);

  return (
    <form>
      <input type="text" placeholder="Full name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <button>Sign In</button>
    </form>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps, { getUsersRequest })(SignInForm);
